const canvas = document.querySelector("#viewer-canvas");
const faultList = document.querySelector("#fault-list");
const faultCount = document.querySelector("#fault-count");
const searchInput = document.querySelector("#fault-search");
const showMatchingFaultsButton = document.querySelector("#show-matching-faults");
const hideMatchingFaultsButton = document.querySelector("#hide-matching-faults");
const showTerrainInput = document.querySelector("#show-terrain");
const showGridInput = document.querySelector("#show-grid");
const showGridLabelsInput = document.querySelector("#show-grid-labels");
const showPoliticalBoundariesInput = document.querySelector("#show-political-boundaries");
const showPlaceBoundariesInput = document.querySelector("#show-place-boundaries");
const countyColorInput = document.querySelector("#county-color");
const showCountyLabelsInput = document.querySelector("#show-county-labels");
const placeColorInput = document.querySelector("#place-color");
const showPlaceLabelsInput = document.querySelector("#show-place-labels");
const showLakesInput = document.querySelector("#show-lakes");
const showLakeFillInput = document.querySelector("#show-lake-fill");
const lakeColorInput = document.querySelector("#lake-color");
const showRiversInput = document.querySelector("#show-rivers");
const riverColorInput = document.querySelector("#river-color");
const showRoadsInput = document.querySelector("#show-roads");
const roadColorInput = document.querySelector("#road-color");
const showAllFaultsInput = document.querySelector("#show-all-faults");
const showAltInput = document.querySelector("#show-alt");
const opacityInput = document.querySelector("#opacity");
const terrainExaggerationInput = document.querySelector("#terrain-exaggeration");
const terrainOpacityInput = document.querySelector("#terrain-opacity");
const statusBanner = document.querySelector("#status-banner");
const sceneStats = document.querySelector("#scene-stats");
const selectedName = document.querySelector("#selected-name");
const faultDetails = document.querySelector("#fault-details");
const gridLabelsLayer = document.querySelector("#grid-labels");
const faultLabelsLayer = document.querySelector("#fault-labels");
const countyLabelsLayer = document.querySelector("#county-labels");
const placeLabelsLayer = document.querySelector("#place-labels");
const focusMarker = document.querySelector("#focus-marker");
const compassButton = document.querySelector("#compass");
const compassRose = document.querySelector("#compass-rose");
const bottomBar = document.querySelector(".bottom-bar");

const state = {
  gl: undefined,
  programs: undefined,
  manifest: undefined,
  faultMetas: [],
  faults: new Map(),
  faultSettings: new Map(),
  faultLabelElements: new Map(),
  visibleIds: new Set(),
  selectedId: undefined,
  query: "",
  showTerrain: false,
  showGrid: true,
  showGridLabels: false,
  showPoliticalBoundaries: false,
  showPlaceBoundaries: false,
  showLakes: false,
  showLakeFill: false,
  showRivers: false,
  showRoads: false,
  showCountyLabels: false,
  showPlaceLabels: false,
  showAlt: true,
  opacity: 0.88,
  terrainExaggeration: 12,
  terrainOpacity: 1,
  countyColor: "#edde94",
  placeColor: "#75c2f5",
  lakeColor: "#2f9bd3",
  riverColor: "#5bbff7",
  roadColor: "#f3d16b",
  renderMode: "surface",
  grid: undefined,
  terrain: undefined,
  politicalBoundaries: undefined,
  placeBoundaries: undefined,
  lakes: undefined,
  lakeFill: undefined,
  rivers: undefined,
  roads: undefined,
  countyLabels: [],
  placeLabels: [],
  scene: {
    center: [0, 0, 0],
    radius: 1,
    scale: 1,
    geoCenter: { lat: 35, lon: -118.5 }
  },
  camera: {
    eyeWorld: [0, 0, 1],
    targetWorld: [0, 0, 0],
    pivotWorld: [0, 0, 0],
    focusGeo: { lat: 35, lon: -118.5 },
    upWorld: [0, 1, 0]
  },
  pointer: {
    active: false,
    x: 0,
    y: 0,
    moved: 0,
    mode: "orbit"
  },
  lastViewProjection: identityMatrix()
};

const defaultColorSwatches = [
  "#ffffff", "#d8d2c4", "#a9a69b", "#70756a", "#30342c", "#111310",
  "#f2c14e", "#f59f00", "#d66b00", "#d4573b", "#a63a2b", "#7b241c",
  "#ff6b6b", "#f06595", "#cc5de8", "#ba55d3", "#845ef7", "#5f3dc4",
  "#4c6ef5", "#4da3ff", "#15aabf", "#22b8cf", "#21a179", "#12b886",
  "#51cf66", "#94d82d", "#c0eb75", "#ffd43b", "#ff922b", "#ff8787",
  "#e03131", "#c2255c", "#9c36b5", "#6741d9", "#364fc7", "#1864ab",
  "#0b7285", "#087f5b", "#2b8a3e", "#5c940d", "#e67700", "#b35000",
  "#f8f0fc", "#e7f5ff", "#e6fcf5", "#fff9db", "#fff4e6", "#ffe3e3"
];

function showStatus(message, persistent = false) {
  statusBanner.textContent = message;
  statusBanner.classList.remove("hidden");
  if (!persistent) {
    window.clearTimeout(showStatus.timer);
    showStatus.timer = window.setTimeout(() => statusBanner.classList.add("hidden"), 1800);
  }
}

function hideStatus() {
  statusBanner.classList.add("hidden");
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  const value = Number.parseInt(normalized, 16);
  return [
    ((value >> 16) & 255) / 255,
    ((value >> 8) & 255) / 255,
    (value & 255) / 255
  ];
}

function normalizeHexColor(value, fallback = "#c8c8c8") {
  if (typeof value !== "string") {
    return fallback;
  }
  const candidate = value.trim();
  if (/^#[0-9a-f]{6}$/i.test(candidate)) {
    return candidate.toLowerCase();
  }
  return fallback;
}

function faultMetaById(id) {
  return state.faultMetas.find((fault) => fault.id === id);
}

function getFaultSettings(id) {
  let settings = state.faultSettings.get(id);
  if (!settings) {
    const meta = faultMetaById(id);
    settings = {
      color: normalizeHexColor(meta?.color),
      showLabel: false,
      customLabel: ""
    };
    state.faultSettings.set(id, settings);
  }
  return settings;
}

function getFaultColor(id) {
  const meta = faultMetaById(id);
  return normalizeHexColor(getFaultSettings(id).color, meta?.color || "#c8c8c8");
}

function getFaultLabel(meta) {
  const settings = getFaultSettings(meta.id);
  return settings.customLabel.trim() || meta.name;
}

function updateFaultSettings(id, patch, options = {}) {
  const current = getFaultSettings(id);
  state.faultSettings.set(id, { ...current, ...patch });
  renderFaultList();
  if (patch.color && id === state.selectedId) {
    const colorRow = faultDetails.querySelector('[data-detail-key="color"] dd');
    if (colorRow) {
      colorRow.textContent = getFaultColor(id);
    }
  }
  if (options.renderDetails) {
    renderDetails();
  }
}

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) || "Unable to compile shader");
  }
  return shader;
}

function createProgram(gl, vertexSource, fragmentSource) {
  const program = gl.createProgram();
  gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vertexSource));
  gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fragmentSource));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program) || "Unable to link shader program");
  }
  return {
    program,
    attributes: {
      position: gl.getAttribLocation(program, "aPosition")
    },
    uniforms: {
      projection: gl.getUniformLocation(program, "uProjection"),
      view: gl.getUniformLocation(program, "uView"),
      sceneCenter: gl.getUniformLocation(program, "uSceneCenter"),
      scale: gl.getUniformLocation(program, "uScale"),
      color: gl.getUniformLocation(program, "uColor")
    }
  };
}

function createTerrainProgram(gl) {
  const vertexSource = `#version 300 es
    in vec3 aPosition;
    in vec3 aNormal;
    in float aElevation;
    uniform mat4 uProjection;
    uniform mat4 uView;
    uniform vec3 uSceneCenter;
    uniform float uScale;
    uniform float uTerrainExaggeration;
    out vec3 vNormal;
    out float vElevation;

    void main() {
      vec3 radialUp = normalize(aPosition);
      float extraHeightKm = (uTerrainExaggeration - 1.0) * aElevation / 1000.0;
      vec3 displacedPosition = aPosition + radialUp * extraHeightKm;
      vec3 tangentNormal = aNormal - radialUp * dot(aNormal, radialUp);
      vec3 exaggeratedNormal = normalize(radialUp * max(dot(aNormal, radialUp), 0.2) + tangentNormal * uTerrainExaggeration);
      vec3 localPosition = (displacedPosition - uSceneCenter) * uScale;
      vNormal = exaggeratedNormal;
      vElevation = aElevation;
      gl_Position = uProjection * uView * vec4(localPosition, 1.0);
    }
  `;

  const fragmentSource = `#version 300 es
    precision highp float;
    in vec3 vNormal;
    in float vElevation;
    uniform vec3 uLightDirection;
    uniform float uMinElevation;
    uniform float uMaxElevation;
    uniform float uTerrainOpacity;
    out vec4 outColor;

    vec3 ramp(float elevation) {
      if (elevation < 0.0) {
        return mix(vec3(0.10, 0.23, 0.32), vec3(0.18, 0.38, 0.48), clamp((elevation + 100.0) / 100.0, 0.0, 1.0));
      }
      if (elevation < 350.0) {
        return mix(vec3(0.23, 0.40, 0.29), vec3(0.54, 0.58, 0.35), elevation / 350.0);
      }
      if (elevation < 1600.0) {
        return mix(vec3(0.54, 0.58, 0.35), vec3(0.50, 0.38, 0.26), (elevation - 350.0) / 1250.0);
      }
      if (elevation < 3000.0) {
        return mix(vec3(0.50, 0.38, 0.26), vec3(0.70, 0.68, 0.58), (elevation - 1600.0) / 1400.0);
      }
      return mix(vec3(0.70, 0.68, 0.58), vec3(0.94, 0.93, 0.88), clamp((elevation - 3000.0) / 1400.0, 0.0, 1.0));
    }

    void main() {
      vec3 normal = normalize(vNormal);
      float light = max(dot(normal, normalize(uLightDirection)), 0.0);
      float shade = 0.42 + 0.58 * light;
      float relative = clamp((vElevation - uMinElevation) / max(uMaxElevation - uMinElevation, 1.0), 0.0, 1.0);
      vec3 color = ramp(vElevation) * shade;
      color += vec3(0.05, 0.055, 0.06) * pow(relative, 1.8);
      outColor = vec4(color, uTerrainOpacity);
    }
  `;

  const program = createProgram(gl, vertexSource, fragmentSource);
  program.attributes.normal = gl.getAttribLocation(program.program, "aNormal");
  program.attributes.elevation = gl.getAttribLocation(program.program, "aElevation");
  program.uniforms.lightDirection = gl.getUniformLocation(program.program, "uLightDirection");
  program.uniforms.minElevation = gl.getUniformLocation(program.program, "uMinElevation");
  program.uniforms.maxElevation = gl.getUniformLocation(program.program, "uMaxElevation");
  program.uniforms.terrainExaggeration = gl.getUniformLocation(program.program, "uTerrainExaggeration");
  program.uniforms.terrainOpacity = gl.getUniformLocation(program.program, "uTerrainOpacity");
  return program;
}

function createPrograms(gl) {
  const vertexSource = `#version 300 es
    in vec3 aPosition;
    uniform mat4 uProjection;
    uniform mat4 uView;
    uniform vec3 uSceneCenter;
    uniform float uScale;

    void main() {
      vec3 localPosition = (aPosition - uSceneCenter) * uScale;
      gl_Position = uProjection * uView * vec4(localPosition, 1.0);
    }
  `;

  const fragmentSource = `#version 300 es
    precision highp float;
    uniform vec4 uColor;
    out vec4 outColor;

    void main() {
      outColor = uColor;
    }
  `;

  return {
    mesh: createProgram(gl, vertexSource, fragmentSource),
    line: createProgram(gl, vertexSource, fragmentSource),
    terrain: createTerrainProgram(gl)
  };
}

function createBuffer(gl, target, data) {
  const buffer = gl.createBuffer();
  gl.bindBuffer(target, buffer);
  gl.bufferData(target, data, gl.STATIC_DRAW);
  return buffer;
}

function publicDataUrl(path) {
  const normalized = path.replace(/^web\/public-data\//, "").replace(/^public-data\//, "");
  return `/public-data/${normalized}`;
}

async function fetchJson(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Unable to load ${path}`);
  }
  return response.json();
}

async function fetchArrayBuffer(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Unable to load ${path}`);
  }
  return response.arrayBuffer();
}

function createFaultRenderData(mesh) {
  const gl = state.gl;
  const vertices = new Float32Array(mesh.vertices);
  const triangles = new Uint32Array(mesh.triangles);
  const lines = new Uint32Array(triangles.length * 2);
  for (let i = 0, j = 0; i < triangles.length; i += 3) {
    const a = triangles[i];
    const b = triangles[i + 1];
    const c = triangles[i + 2];
    lines[j++] = a;
    lines[j++] = b;
    lines[j++] = b;
    lines[j++] = c;
    lines[j++] = c;
    lines[j++] = a;
  }

  const centroid = [0, 0, 0];
  for (let i = 0; i < vertices.length; i += 3) {
    centroid[0] += vertices[i];
    centroid[1] += vertices[i + 1];
    centroid[2] += vertices[i + 2];
  }
  const vertexCount = vertices.length / 3;
  centroid[0] /= vertexCount;
  centroid[1] /= vertexCount;
  centroid[2] /= vertexCount;

  return {
    ...mesh,
    centroid,
    vertexBuffer: createBuffer(gl, gl.ARRAY_BUFFER, vertices),
    triangleBuffer: createBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, triangles),
    lineBuffer: createBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, lines),
    triangleIndexCount: triangles.length,
    lineIndexCount: lines.length
  };
}

async function loadManifest() {
  showStatus("Loading CFM manifest", true);
  const response = await fetch("/public-data/faults/manifest.json");
  if (!response.ok) {
    throw new Error("Fault manifest not found. Run npm run convert:faults from web/.");
  }
  state.manifest = await response.json();
  state.faultMetas = state.manifest.faults || [];
  state.visibleIds = new Set(state.manifest.defaultFaultIds || []);
  renderFaultList();
  createGridFromManifest();
  await Promise.all([...state.visibleIds].map((id) => loadFault(id)));
  fitSceneToVisible(true);
  renderFaultList();
  renderDetails();
  updateStats();
  hideStatus();
}

async function loadFault(id, options = {}) {
  const { announce = true } = options;
  if (state.faults.has(id)) {
    return state.faults.get(id);
  }

  const meta = state.faultMetas.find((fault) => fault.id === id);
  if (!meta) {
    return undefined;
  }

  if (announce) {
    showStatus(`Loading ${meta.name}`, true);
  }
  const response = await fetch(`/public-data/${meta.meshPath}`);
  if (!response.ok) {
    throw new Error(`Unable to load mesh for ${meta.name}`);
  }
  const mesh = await response.json();
  const renderData = createFaultRenderData(mesh);
  state.faults.set(id, renderData);
  return renderData;
}

async function loadFaults(ids) {
  const unloadedIds = ids.filter((id) => !state.faults.has(id));
  const batchSize = 18;
  for (let index = 0; index < unloadedIds.length; index += batchSize) {
    const batch = unloadedIds.slice(index, index + batchSize);
    showStatus(
      `Loading faults ${Math.min(index + batch.length, unloadedIds.length).toLocaleString()} of ${unloadedIds.length.toLocaleString()}`,
      true
    );
    await Promise.all(batch.map((id) => loadFault(id, { announce: false })));
  }
}

async function loadTerrain() {
  if (state.terrain) {
    return state.terrain;
  }

  showStatus("Loading terrain", true);
  const metadataPath = "/public-data/elevation-models/combined/terrain-2000m.json";
  const metadata = await fetchJson(metadataPath);
  const [positionBuffer, normalBuffer, elevationBuffer, triangleBuffer] = await Promise.all([
    fetchArrayBuffer(publicDataUrl(metadata.positionPath)),
    fetchArrayBuffer(publicDataUrl(metadata.normalPath)),
    fetchArrayBuffer(publicDataUrl(metadata.elevationPath)),
    fetchArrayBuffer(publicDataUrl(metadata.trianglePath))
  ]);

  const gl = state.gl;
  const terrain = {
    ...metadata,
    vertexBuffer: createBuffer(gl, gl.ARRAY_BUFFER, new Float32Array(positionBuffer)),
    normalBuffer: createBuffer(gl, gl.ARRAY_BUFFER, new Float32Array(normalBuffer)),
    elevationBuffer: createBuffer(gl, gl.ARRAY_BUFFER, new Float32Array(elevationBuffer)),
    triangleBuffer: createBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(triangleBuffer)),
    triangleIndexCount: metadata.triangleCount * 3,
    minElevationMeters: metadata.bounds.elevationMeters[0],
    maxElevationMeters: metadata.bounds.elevationMeters[1]
  };
  state.terrain = terrain;
  showStatus("Terrain loaded");
  return terrain;
}

async function createLineLayerRenderData(payload) {
  let vertices;
  if (Array.isArray(payload.lineVertices)) {
    vertices = new Float32Array(payload.lineVertices);
  } else if (payload.linePath) {
    vertices = new Float32Array(await fetchArrayBuffer(publicDataUrl(payload.linePath)));
  } else {
    throw new Error(`${payload.name || "Line layer"} is missing line geometry`);
  }

  return {
    ...payload,
    vertexBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, vertices),
    vertexCount: vertices.length / 3
  };
}

async function createFillLayerRenderData(payload) {
  const [positionBuffer, triangleBuffer] = await Promise.all([
    fetchArrayBuffer(publicDataUrl(payload.positionPath)),
    fetchArrayBuffer(publicDataUrl(payload.trianglePath))
  ]);
  return {
    ...payload,
    vertexBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, new Float32Array(positionBuffer)),
    triangleBuffer: createBuffer(state.gl, state.gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(triangleBuffer)),
    triangleIndexCount: payload.triangleCount * 3
  };
}

async function loadLineLayer(stateKey, path, label, missingHint = "") {
  if (state[stateKey]) {
    return state[stateKey];
  }

  showStatus(`Loading ${label}`, true);
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`${label} mesh not found.${missingHint ? ` ${missingHint}` : ""}`);
  }
  const renderData = await createLineLayerRenderData(await response.json());
  state[stateKey] = renderData;
  showStatus(`${label} loaded`);
  return renderData;
}

async function loadFillLayer(stateKey, path, label, missingHint = "") {
  if (state[stateKey]) {
    return state[stateKey];
  }

  showStatus(`Loading ${label}`, true);
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`${label} mesh not found.${missingHint ? ` ${missingHint}` : ""}`);
  }
  const renderData = await createFillLayerRenderData(await response.json());
  state[stateKey] = renderData;
  showStatus(`${label} loaded`);
  return renderData;
}

async function loadBoundaryLayer(stateKey, path, label) {
  return loadLineLayer(stateKey, path, label, "Run npm run convert:political-boundaries from web/.");
}

async function loadPoliticalBoundaries() {
  const layer = await loadBoundaryLayer(
    "politicalBoundaries",
    "/public-data/political-boundaries/ca_counties/counties-boundaries.json",
    "county boundaries"
  );
  createCountyLabels(layer);
  return layer;
}

async function loadPlaceBoundaries() {
  const layer = await loadBoundaryLayer(
    "placeBoundaries",
    "/public-data/political-boundaries/ca_places/places-boundaries.json",
    "place boundaries"
  );
  createPlaceLabels(layer);
  return layer;
}

async function loadLakes() {
  return loadLineLayer(
    "lakes",
    "/public-data/water-bodies/converted/california-lakes.json",
    "lakes",
    "Run npm run convert:water-bodies from web/."
  );
}

async function loadLakeFill() {
  return loadFillLayer(
    "lakeFill",
    "/public-data/water-bodies/converted/california-lakes-fill.json",
    "lake fill",
    "Run npm run convert:water-bodies from web/."
  );
}

async function loadRivers() {
  return loadLineLayer(
    "rivers",
    "/public-data/water-bodies/converted/nhd-major-rivers.json",
    "rivers",
    "Run npm run convert:water-bodies from web/."
  );
}

async function loadRoads() {
  return loadLineLayer(
    "roads",
    "/public-data/roads/converted/shn-lines.json",
    "roads",
    "Run npm run convert:roads from web/."
  );
}

function createGridFromManifest() {
  const gl = state.gl;
  const bounds = state.faultMetas.reduce(
    (acc, fault) => {
      acc.lat[0] = Math.min(acc.lat[0], fault.bounds.lat[0]);
      acc.lat[1] = Math.max(acc.lat[1], fault.bounds.lat[1]);
      acc.lon[0] = Math.min(acc.lon[0], fault.bounds.lon[0]);
      acc.lon[1] = Math.max(acc.lon[1], fault.bounds.lon[1]);
      return acc;
    },
    {
      lat: [90, -90],
      lon: [180, -180]
    }
  );

  const minLat = Math.floor(bounds.lat[0]) - 1;
  const maxLat = Math.ceil(bounds.lat[1]) + 1;
  const minLon = Math.floor(bounds.lon[0]) - 1;
  const maxLon = Math.ceil(bounds.lon[1]) + 1;
  const vertices = [];
  const labels = [];
  const heightKm = 6;

  for (let lat = minLat; lat <= maxLat; lat += 1) {
    for (let lon = minLon; lon < maxLon; lon += 0.25) {
      vertices.push(...latLonHeightToXyz(lat, lon, heightKm));
      vertices.push(...latLonHeightToXyz(lat, Math.min(lon + 0.25, maxLon), heightKm));
    }
    labels.push(createGridLabel(formatLatitude(lat), latLonHeightToXyz(lat, minLon, heightKm)));
    labels.push(createGridLabel(formatLatitude(lat), latLonHeightToXyz(lat, maxLon, heightKm)));
  }

  for (let lon = minLon; lon <= maxLon; lon += 1) {
    for (let lat = minLat; lat < maxLat; lat += 0.25) {
      vertices.push(...latLonHeightToXyz(lat, lon, heightKm));
      vertices.push(...latLonHeightToXyz(Math.min(lat + 0.25, maxLat), lon, heightKm));
    }
    labels.push(createGridLabel(formatLongitude(lon), latLonHeightToXyz(minLat, lon, heightKm)));
    labels.push(createGridLabel(formatLongitude(lon), latLonHeightToXyz(maxLat, lon, heightKm)));
  }

  gridLabelsLayer.replaceChildren(...labels.map((label) => label.element));

  state.grid = {
    vertexBuffer: createBuffer(gl, gl.ARRAY_BUFFER, new Float32Array(vertices)),
    vertexCount: vertices.length / 3,
    labels
  };
}

function createCountyLabels(layer) {
  if (state.countyLabels.length > 0) {
    return;
  }

  state.countyLabels = createBoundaryLabels(layer, countyLabelsLayer, "county-label", 0.7);
}

function createPlaceLabels(layer) {
  if (state.placeLabels.length > 0) {
    return;
  }

  state.placeLabels = createBoundaryLabels(layer, placeLabelsLayer, "place-label", 0.85);
}

function createBoundaryLabels(layer, labelsLayer, className, heightOffsetKm) {
  const labelHeightKm = (layer.heightKm || 6.1) + heightOffsetKm;
  const labels = (layer.features || [])
    .filter((feature) => feature.bounds?.lat?.length === 2 && feature.bounds?.lon?.length === 2)
    .map((feature) => {
      const lat = (feature.bounds.lat[0] + feature.bounds.lat[1]) / 2;
      const lon = (feature.bounds.lon[0] + feature.bounds.lon[1]) / 2;
      const element = document.createElement("span");
      element.className = className;
      element.textContent = feature.name;
      return {
        name: feature.name,
        position: latLonHeightToXyz(lat, lon, labelHeightKm),
        element
      };
    });

  labelsLayer.replaceChildren(...labels.map((label) => label.element));
  return labels;
}

function createGridLabel(text, position) {
  const element = document.createElement("span");
  element.className = "grid-label";
  element.textContent = text;
  return { text, position, element };
}

function formatLatitude(lat) {
  if (lat === 0) {
    return "0 deg";
  }
  return `${Math.abs(lat)} deg ${lat > 0 ? "N" : "S"}`;
}

function formatLongitude(lon) {
  if (lon === 0) {
    return "0 deg";
  }
  return `${Math.abs(lon)} deg ${lon > 0 ? "E" : "W"}`;
}

function latLonHeightToXyz(lat, lon, heightKm) {
  const re = 6378.14;
  const rp = 6356.755;
  const sinLat = Math.sin((lat * Math.PI) / 180);
  const radius = re * (1 + ((re * re - rp * rp) / (rp * rp)) * sinLat * sinLat) ** -0.5 + heightKm;
  const cosLat = Math.cos((lat * Math.PI) / 180);
  return [
    -cosLat * Math.sin((lon * Math.PI) / 180) * radius,
    cosLat * Math.cos((lon * Math.PI) / 180) * radius,
    sinLat * radius
  ];
}

function visibleMetas() {
  return displayableMetas().filter((fault) => {
    const query = state.query.trim().toLowerCase();
    if (!query) {
      return true;
    }
    return `${fault.name} ${fault.source} ${fault.tokens.join(" ")}`.toLowerCase().includes(query);
  });
}

function displayableMetas() {
  return state.faultMetas.filter((fault) => state.showAlt || fault.group !== "cfm5-alt");
}

function groupNameForId(groupId) {
  const group = state.manifest?.groups?.find((entry) => entry.id === groupId);
  return group?.name || groupId || "Unknown";
}

function shortGroupNameForId(groupId) {
  if (groupId === "cfm7-preferred") {
    return "CFM7 Preferred";
  }
  if (groupId === "cfm5-primary") {
    return "CFM5 Primary";
  }
  if (groupId === "cfm5-alt") {
    return "CFM5 Alternative";
  }
  return groupNameForId(groupId);
}

function renderFaultList() {
  const metas = visibleMetas();
  faultCount.textContent = String(metas.length);
  faultList.replaceChildren();

  if (metas.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No matching faults";
    faultList.append(empty);
    syncAllFaultsInput();
    return;
  }

  const fragment = document.createDocumentFragment();
  for (const meta of metas) {
    const row = document.createElement("button");
    row.className = `fault-row${state.selectedId === meta.id ? " selected" : ""}`;
    row.type = "button";
    row.title = meta.name;
    row.dataset.faultId = meta.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = state.visibleIds.has(meta.id);
    checkbox.setAttribute("aria-label", `Toggle ${meta.name}`);
    checkbox.addEventListener("click", async (event) => {
      event.stopPropagation();
      await setFaultVisible(meta.id, checkbox.checked);
    });

    const swatch = document.createElement("span");
    swatch.className = "swatch";
    swatch.style.background = getFaultColor(meta.id);

    const label = document.createElement("span");
    const title = document.createElement("span");
    title.className = "fault-title";
    title.textContent = meta.name;
    const subtitle = document.createElement("span");
    subtitle.className = "fault-meta";
    subtitle.textContent = [
      shortGroupNameForId(meta.group),
      meta.region,
      meta.system,
      meta.cfmVersion || "CFM"
    ].filter(Boolean).join(" / ");
    label.append(title, subtitle);

    row.append(checkbox, swatch, label);
    row.addEventListener("click", async () => {
      state.selectedId = meta.id;
      if (!state.visibleIds.has(meta.id)) {
        state.visibleIds.add(meta.id);
      }
      await loadFault(meta.id);
      fitSceneToVisible(false);
      renderFaultList();
      renderDetails();
      updateStats();
    });

    fragment.append(row);
  }

  faultList.append(fragment);
  syncAllFaultsInput();
}

async function setFaultVisible(id, visible) {
  if (visible) {
    state.visibleIds.add(id);
    await loadFault(id);
  } else {
    state.visibleIds.delete(id);
    if (state.selectedId === id) {
      state.selectedId = undefined;
    }
  }
  fitSceneToVisible(false);
  renderFaultList();
  renderDetails();
  updateStats();
}

async function setAllFaultsVisible(visible, options = {}) {
  const { resetCamera = true } = options;
  if (!visible) {
    state.visibleIds.clear();
    state.selectedId = undefined;
    renderFaultList();
    renderDetails();
    updateStats();
    showStatus("All faults hidden");
    return;
  }

  const ids = displayableMetas().map((fault) => fault.id);
  ids.forEach((id) => state.visibleIds.add(id));
  renderFaultList();
  renderDetails();
  updateStats();
  await loadFaults(ids);
  fitSceneToVisible(resetCamera);
  renderFaultList();
  renderDetails();
  updateStats();
  showStatus("All faults visible");
}

async function setMatchingFaultsVisible(visible) {
  const query = state.query.trim();
  if (!query) {
    showStatus("Enter a search term first");
    searchInput.focus();
    return;
  }

  const metas = visibleMetas();
  if (metas.length === 0) {
    showStatus("No matching faults");
    return;
  }

  const ids = metas.map((fault) => fault.id);
  if (!visible) {
    ids.forEach((id) => state.visibleIds.delete(id));
    if (ids.includes(state.selectedId)) {
      state.selectedId = undefined;
    }
    fitSceneToVisible(false);
    renderFaultList();
    renderDetails();
    updateStats();
    showStatus(`${ids.length.toLocaleString()} matching faults hidden`);
    return;
  }

  ids.forEach((id) => state.visibleIds.add(id));
  if (ids.length === 1) {
    state.selectedId = ids[0];
  }
  renderFaultList();
  renderDetails();
  updateStats();
  await loadFaults(ids);
  fitSceneToVisible(false);
  renderFaultList();
  renderDetails();
  updateStats();
  showStatus(`${ids.length.toLocaleString()} matching faults visible`);
}

function syncAllFaultsInput() {
  const ids = displayableMetas().map((fault) => fault.id);
  const visibleCount = ids.filter((id) => state.visibleIds.has(id)).length;
  showAllFaultsInput.disabled = ids.length === 0;
  showAllFaultsInput.checked = ids.length > 0 && visibleCount === ids.length;
  showAllFaultsInput.indeterminate = visibleCount > 0 && visibleCount < ids.length;
}

function renderDetails() {
  const meta = state.faultMetas.find((fault) => fault.id === state.selectedId);
  if (!meta) {
    selectedName.textContent = "None";
    faultDetails.replaceChildren(detailRow("Status", "Pick a fault surface or row"));
    return;
  }

  selectedName.textContent = meta.name;
  const rows = [
    detailRow("Group", groupNameForId(meta.group)),
    detailRow("Source", meta.source),
    detailRow("Code", [meta.region, meta.system, meta.section].filter(Boolean).join(" / ")),
    detailRow("Version", meta.cfmVersion || "Unknown"),
    detailRow("Vertices", meta.vertexCount.toLocaleString()),
    detailRow("Triangles", meta.triangleCount.toLocaleString()),
    detailRow("Latitude", `${meta.bounds.lat[0].toFixed(3)} to ${meta.bounds.lat[1].toFixed(3)}`),
    detailRow("Longitude", `${meta.bounds.lon[0].toFixed(3)} to ${meta.bounds.lon[1].toFixed(3)}`),
    detailRow("Depth", `${meta.bounds.depthKm[0].toFixed(2)} to ${meta.bounds.depthKm[1].toFixed(2)} km`),
    detailRow("Color", getFaultColor(meta.id), "color"),
    faultStyleControls(meta)
  ];
  if (meta.resolution) {
    rows.splice(5, 0, detailRow("Resolution", meta.resolution));
  }
  faultDetails.replaceChildren(...rows);
}

function detailRow(label, value, key = "") {
  const row = document.createElement("div");
  if (key) {
    row.dataset.detailKey = key;
  }
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  dt.textContent = label;
  dd.textContent = value;
  row.append(dt, dd);
  return row;
}

function faultStyleControls(meta) {
  const settings = getFaultSettings(meta.id);
  const row = document.createElement("div");
  row.className = "control-detail";

  const dt = document.createElement("dt");
  dt.textContent = "Display";

  const dd = document.createElement("dd");

  const colorControl = document.createElement("div");
  colorControl.className = "color-control";

  const currentColor = getFaultColor(meta.id);
  const colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.value = currentColor;
  colorInput.setAttribute("aria-label", `Color for ${meta.name}`);

  const hexInput = document.createElement("input");
  hexInput.type = "text";
  hexInput.value = currentColor;
  hexInput.inputMode = "text";
  hexInput.spellcheck = false;
  hexInput.maxLength = 7;
  hexInput.setAttribute("aria-label", `Hex color for ${meta.name}`);

  colorInput.addEventListener("input", () => {
    const color = normalizeHexColor(colorInput.value, meta.color);
    hexInput.value = color;
    updateFaultSettings(meta.id, { color });
  });
  colorInput.addEventListener("change", () => {
    updateFaultSettings(meta.id, { color: normalizeHexColor(colorInput.value, meta.color) }, { renderDetails: true });
  });
  hexInput.addEventListener("input", () => {
    const normalized = normalizeHexColor(hexInput.value, "");
    if (!normalized) {
      return;
    }
    colorInput.value = normalized;
    updateFaultSettings(meta.id, { color: normalized });
  });
  hexInput.addEventListener("change", () => {
    const normalized = normalizeHexColor(hexInput.value, getFaultColor(meta.id));
    updateFaultSettings(meta.id, { color: normalized }, { renderDetails: true });
  });

  const customColor = document.createElement("div");
  customColor.className = "custom-color";
  customColor.append(colorInput, hexInput);

  const swatches = document.createElement("div");
  swatches.className = "color-swatches";
  for (const color of defaultColorSwatches) {
    const button = document.createElement("button");
    button.className = "color-swatch-button";
    button.type = "button";
    button.title = color;
    button.setAttribute("aria-label", `Set color ${color}`);
    button.style.background = color;
    button.addEventListener("click", () => {
      updateFaultSettings(meta.id, { color }, { renderDetails: true });
    });
    swatches.append(button);
  }
  colorControl.append(customColor, swatches);

  const labelControl = document.createElement("div");
  labelControl.className = "label-control";

  const showLabel = document.createElement("label");
  showLabel.className = "label-toggle";
  const showLabelInput = document.createElement("input");
  showLabelInput.type = "checkbox";
  showLabelInput.checked = settings.showLabel;
  showLabelInput.setAttribute("aria-label", `Show label for ${meta.name}`);
  const showLabelText = document.createElement("span");
  showLabelText.textContent = "Show label";
  showLabel.append(showLabelInput, showLabelText);

  const customLabelInput = document.createElement("input");
  customLabelInput.type = "text";
  customLabelInput.value = settings.customLabel;
  customLabelInput.placeholder = meta.name;
  customLabelInput.disabled = !settings.showLabel;
  customLabelInput.setAttribute("aria-label", `Custom label for ${meta.name}`);

  showLabelInput.addEventListener("change", () => {
    customLabelInput.disabled = !showLabelInput.checked;
    updateFaultSettings(meta.id, { showLabel: showLabelInput.checked });
  });
  customLabelInput.addEventListener("input", () => {
    updateFaultSettings(meta.id, { customLabel: customLabelInput.value });
  });

  labelControl.append(showLabel, customLabelInput);
  dd.append(colorControl, labelControl);
  row.append(dt, dd);
  return row;
}

function fitSceneToVisible(resetCamera) {
  const visibleFaults = [...state.visibleIds]
    .map((id) => state.faults.get(id))
    .filter(Boolean)
    .filter((fault) => state.showAlt || fault.group !== "cfm5-alt");

  if (visibleFaults.length === 0) {
    return;
  }

  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  const minGeo = { lat: Infinity, lon: Infinity };
  const maxGeo = { lat: -Infinity, lon: -Infinity };

  for (const fault of visibleFaults) {
    const vertices = fault.vertices;
    for (let i = 0; i < vertices.length; i += 3) {
      min[0] = Math.min(min[0], vertices[i]);
      min[1] = Math.min(min[1], vertices[i + 1]);
      min[2] = Math.min(min[2], vertices[i + 2]);
      max[0] = Math.max(max[0], vertices[i]);
      max[1] = Math.max(max[1], vertices[i + 1]);
      max[2] = Math.max(max[2], vertices[i + 2]);
    }
    const latLonDepth = fault.latLonDepth || [];
    for (let i = 0; i < latLonDepth.length; i += 3) {
      minGeo.lat = Math.min(minGeo.lat, latLonDepth[i]);
      maxGeo.lat = Math.max(maxGeo.lat, latLonDepth[i]);
      minGeo.lon = Math.min(minGeo.lon, latLonDepth[i + 1]);
      maxGeo.lon = Math.max(maxGeo.lon, latLonDepth[i + 1]);
    }
  }

  const center = [
    (min[0] + max[0]) / 2,
    (min[1] + max[1]) / 2,
    (min[2] + max[2]) / 2
  ];
  let radius = 1;
  for (const fault of visibleFaults) {
    const vertices = fault.vertices;
    for (let i = 0; i < vertices.length; i += 3) {
      radius = Math.max(
        radius,
        distance(center, [vertices[i], vertices[i + 1], vertices[i + 2]])
      );
    }
  }

  state.scene.center = center;
  state.scene.radius = Math.max(radius, 35);
  state.scene.scale = 1 / state.scene.radius;
  if (Number.isFinite(minGeo.lat) && Number.isFinite(minGeo.lon)) {
    state.scene.geoCenter = {
      lat: (minGeo.lat + maxGeo.lat) / 2,
      lon: (minGeo.lon + maxGeo.lon) / 2
    };
  }
  if (resetCamera) {
    setNorthUpCenteredView();
  }
}

function setNorthUpCenteredView() {
  const basis = basisForLatLon(state.scene.geoCenter.lat, state.scene.geoCenter.lon);
  const targetWorld = [...state.scene.center];
  state.camera.targetWorld = targetWorld;
  state.camera.pivotWorld = targetWorld;
  state.camera.focusGeo = { ...state.scene.geoCenter };
  state.camera.upWorld = basis.north;
  state.camera.eyeWorld = [
    targetWorld[0] + basis.up[0] * state.scene.radius * 2.35,
    targetWorld[1] + basis.up[1] * state.scene.radius * 2.35,
    targetWorld[2] + basis.up[2] * state.scene.radius * 2.35
  ];
  showStatus("North-up centered view");
}

function updateStats() {
  const visibleFaults = [...state.visibleIds]
    .map((id) => state.faults.get(id))
    .filter(Boolean)
    .filter((fault) => state.showAlt || fault.group !== "cfm5-alt");

  const vertices = visibleFaults.reduce((sum, fault) => sum + fault.vertexCount, 0);
  const triangles = visibleFaults.reduce((sum, fault) => sum + fault.triangleCount, 0);
  sceneStats.textContent = `${visibleFaults.length} visible faults / ${vertices.toLocaleString()} vertices / ${triangles.toLocaleString()} triangles`;
}

function resizeCanvas() {
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, Math.floor(canvas.clientWidth * pixelRatio));
  const height = Math.max(1, Math.floor(canvas.clientHeight * pixelRatio));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
}

function drawScene() {
  const gl = state.gl;
  resizeCanvas();
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.062, 0.066, 0.058, 1);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.DEPTH_TEST);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  const projection = currentProjectionMatrix();
  const view = cameraViewMatrix();
  state.lastViewProjection = multiplyMatrices(projection, view);
  updateOverlays();

  if (state.showTerrain && state.terrain) {
    gl.depthMask(true);
    if (state.terrainOpacity >= 0.999) {
      gl.disable(gl.BLEND);
    }
    drawTerrain(state.terrain);
    gl.enable(gl.BLEND);
    gl.clear(gl.DEPTH_BUFFER_BIT);
  }

  if (state.showGrid && state.grid) {
    gl.depthMask(true);
    drawArrays(state.programs.line, state.grid.vertexBuffer, state.grid.vertexCount, [0.61, 0.62, 0.55, 0.36]);
  }

  const faults = [...state.visibleIds]
    .map((id) => state.faults.get(id))
    .filter(Boolean)
    .filter((fault) => state.showAlt || fault.group !== "cfm5-alt");

  for (const fault of faults) {
    const faultColor = getFaultColor(fault.id);
    if (state.renderMode === "surface") {
      gl.depthMask(false);
      drawElements(
        state.programs.mesh,
        fault.vertexBuffer,
        fault.triangleBuffer,
        fault.triangleIndexCount,
        [...hexToRgb(faultColor), state.opacity],
        gl.TRIANGLES
      );
    }

    if (state.renderMode === "wire" || fault.id === state.selectedId) {
      gl.depthMask(true);
      const color = fault.id === state.selectedId ? [0.95, 0.79, 0.29, 1] : [...hexToRgb(faultColor), 0.9];
      drawElements(
        state.programs.line,
        fault.vertexBuffer,
        fault.lineBuffer,
        fault.lineIndexCount,
        color,
        gl.LINES
      );
    }
  }

  if (
    (state.showPoliticalBoundaries && state.politicalBoundaries) ||
    (state.showPlaceBoundaries && state.placeBoundaries) ||
    (state.showLakeFill && state.lakeFill) ||
    (state.showLakes && state.lakes) ||
    (state.showRivers && state.rivers) ||
    (state.showRoads && state.roads)
  ) {
    gl.disable(gl.DEPTH_TEST);
    gl.depthMask(false);
    if (state.showLakeFill && state.lakeFill) {
      drawFillLayer(state.lakeFill, [...hexToRgb(state.lakeColor), 0.46]);
    }
    if (state.showLakes && state.lakes) {
      drawBoundaryLayer(state.lakes, [...hexToRgb(state.lakeColor), 0.82]);
    }
    if (state.showRivers && state.rivers) {
      drawBoundaryLayer(state.rivers, [...hexToRgb(state.riverColor), 0.88]);
    }
    if (state.showRoads && state.roads) {
      drawBoundaryLayer(state.roads, [...hexToRgb(state.roadColor), 0.86]);
    }
    if (state.showPoliticalBoundaries && state.politicalBoundaries) {
      drawBoundaryLayer(state.politicalBoundaries, [...hexToRgb(state.countyColor), 0.76]);
    }
    if (state.showPlaceBoundaries && state.placeBoundaries) {
      drawBoundaryLayer(state.placeBoundaries, [...hexToRgb(state.placeColor), 0.64]);
    }
    gl.enable(gl.DEPTH_TEST);
  }

  gl.depthMask(true);
  window.requestAnimationFrame(drawScene);
}

function drawBoundaryLayer(boundaryLayer, color) {
  drawArrays(state.programs.line, boundaryLayer.vertexBuffer, boundaryLayer.vertexCount, color);
}

function drawFillLayer(fillLayer, color) {
  drawElements(
    state.programs.mesh,
    fillLayer.vertexBuffer,
    fillLayer.triangleBuffer,
    fillLayer.triangleIndexCount,
    color,
    state.gl.TRIANGLES
  );
}

function drawTerrain(terrain) {
  const gl = state.gl;
  const programInfo = state.programs.terrain;
  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(programInfo.uniforms.projection, false, currentProjectionMatrix());
  gl.uniformMatrix4fv(programInfo.uniforms.view, false, cameraViewMatrix());
  gl.uniform3fv(programInfo.uniforms.sceneCenter, new Float32Array(state.scene.center));
  gl.uniform1f(programInfo.uniforms.scale, state.scene.scale);
  gl.uniform3fv(programInfo.uniforms.lightDirection, new Float32Array(normalize([-0.45, 0.26, 0.85])));
  gl.uniform1f(programInfo.uniforms.minElevation, terrain.minElevationMeters);
  gl.uniform1f(programInfo.uniforms.maxElevation, terrain.maxElevationMeters);
  gl.uniform1f(programInfo.uniforms.terrainExaggeration, state.terrainExaggeration);
  gl.uniform1f(programInfo.uniforms.terrainOpacity, state.terrainOpacity);

  gl.bindBuffer(gl.ARRAY_BUFFER, terrain.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, terrain.normalBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.normal);
  gl.vertexAttribPointer(programInfo.attributes.normal, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, terrain.elevationBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.elevation);
  gl.vertexAttribPointer(programInfo.attributes.elevation, 1, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, terrain.triangleBuffer);
  gl.drawElements(gl.TRIANGLES, terrain.triangleIndexCount, gl.UNSIGNED_INT, 0);
}

function drawArrays(programInfo, vertexBuffer, vertexCount, color) {
  const gl = state.gl;
  bindProgram(programInfo, color);
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);
  gl.drawArrays(gl.LINES, 0, vertexCount);
}

function drawElements(programInfo, vertexBuffer, indexBuffer, indexCount, color, mode) {
  const gl = state.gl;
  bindProgram(programInfo, color);
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.drawElements(mode, indexCount, gl.UNSIGNED_INT, 0);
}

function bindProgram(programInfo, color) {
  const gl = state.gl;
  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(programInfo.uniforms.projection, false, currentProjectionMatrix());
  gl.uniformMatrix4fv(programInfo.uniforms.view, false, cameraViewMatrix());
  gl.uniform3fv(programInfo.uniforms.sceneCenter, new Float32Array(state.scene.center));
  gl.uniform1f(programInfo.uniforms.scale, state.scene.scale);
  gl.uniform4fv(programInfo.uniforms.color, new Float32Array(color));
}

function currentProjectionMatrix() {
  const aspect = canvas.width / Math.max(canvas.height, 1);
  return perspectiveMatrix((48 * Math.PI) / 180, aspect, 0.000001, 100);
}

function cameraViewMatrix() {
  const eye = worldToLocal(state.camera.eyeWorld);
  const target = worldToLocal(state.camera.targetWorld);
  return lookAtMatrix(eye, target, state.camera.upWorld);
}

function basisForLatLon(lat, lon) {
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180;
  const sinLat = Math.sin(latRad);
  const cosLat = Math.cos(latRad);
  const sinLon = Math.sin(lonRad);
  const cosLon = Math.cos(lonRad);

  return {
    up: normalize([-cosLat * sinLon, cosLat * cosLon, sinLat]),
    north: normalize([sinLat * sinLon, -sinLat * cosLon, cosLat]),
    east: normalize([-cosLon, -sinLon, 0])
  };
}

function selectNearestFault(clientX, clientY) {
  const nearestVertex = nearestVisibleVertex(clientX, clientY, 80);
  if (nearestVertex) {
    state.selectedId = nearestVertex.id;
    renderFaultList();
    renderDetails();
    return;
  }

  const rect = canvas.getBoundingClientRect();
  const point = [clientX - rect.left, clientY - rect.top];
  let best;
  let bestDistance = Infinity;

  for (const id of state.visibleIds) {
    const fault = state.faults.get(id);
    if (!fault || (!state.showAlt && fault.group === "cfm5-alt")) {
      continue;
    }
    const screen = projectPoint(fault.centroid);
    if (!screen) {
      continue;
    }
    const candidateDistance = Math.hypot(screen[0] - point[0], screen[1] - point[1]);
    if (candidateDistance < bestDistance) {
      best = id;
      bestDistance = candidateDistance;
    }
  }

  if (best && bestDistance < 96) {
    state.selectedId = best;
    renderFaultList();
    renderDetails();
  }
}

function setFocusFromClick(clientX, clientY) {
  const nearest = nearestVisibleVertex(clientX, clientY, 90);
  if (!nearest) {
    showStatus("No fault near focus click");
    return;
  }

  state.camera.pivotWorld = nearest.pointWorld;
  state.camera.focusGeo = nearest.geo;
  state.selectedId = nearest.id;
  renderFaultList();
  renderDetails();
  showStatus("Orbit focus moved");
}

function nearestVisibleVertex(clientX, clientY, maxDistance) {
  const rect = canvas.getBoundingClientRect();
  const point = [clientX - rect.left, clientY - rect.top];
  let best;
  let bestDistance = maxDistance;

  for (const id of state.visibleIds) {
    const fault = state.faults.get(id);
    if (!fault || (!state.showAlt && fault.group === "cfm5-alt")) {
      continue;
    }

    const vertices = fault.vertices;
    const latLonDepth = fault.latLonDepth || [];
    for (let i = 0; i < vertices.length; i += 3) {
      const pointWorld = [vertices[i], vertices[i + 1], vertices[i + 2]];
      const screen = projectPoint(pointWorld);
      if (!screen) {
        continue;
      }
      const candidateDistance = Math.hypot(screen[0] - point[0], screen[1] - point[1]);
      if (candidateDistance < bestDistance) {
        const geoIndex = i;
        bestDistance = candidateDistance;
        best = {
          id,
          pointWorld,
          geo: {
            lat: latLonDepth[geoIndex] ?? state.camera.focusGeo.lat,
            lon: latLonDepth[geoIndex + 1] ?? state.camera.focusGeo.lon
          }
        };
      }
    }
  }

  return best;
}

function projectPoint(point) {
  const localPoint = worldToLocal(point);
  const local = [localPoint[0], localPoint[1], localPoint[2], 1];
  const clip = multiplyMatrixVector(state.lastViewProjection, local);
  if (clip[3] <= 0) {
    return undefined;
  }
  const ndc = [clip[0] / clip[3], clip[1] / clip[3]];
  return [
    (ndc[0] * 0.5 + 0.5) * canvas.clientWidth,
    (-ndc[1] * 0.5 + 0.5) * canvas.clientHeight
  ];
}

function worldToLocal(point) {
  return [
    (point[0] - state.scene.center[0]) * state.scene.scale,
    (point[1] - state.scene.center[1]) * state.scene.scale,
    (point[2] - state.scene.center[2]) * state.scene.scale
  ];
}

function updateOverlays() {
  updateFocusMarker();
  updateCompass();
  updateGridLabels();
  updateCountyLabels();
  updatePlaceLabels();
  updateFaultLabels();
}

function updateFocusMarker() {
  const screen = projectPoint(state.camera.pivotWorld);
  if (!screen || !withinCanvas(screen, 24)) {
    focusMarker.classList.add("hidden");
    return;
  }
  focusMarker.classList.remove("hidden");
  focusMarker.style.left = `${screen[0]}px`;
  focusMarker.style.top = `${screen[1]}px`;
}

function updateCompass() {
  const focus = projectPoint(state.camera.pivotWorld);
  if (!focus) {
    compassRose.style.transform = "rotate(0rad)";
    return;
  }

  const basis = basisForLatLon(state.camera.focusGeo.lat, state.camera.focusGeo.lon);
  const northPoint = [
    state.camera.pivotWorld[0] + basis.north[0] * state.scene.radius * 0.25,
    state.camera.pivotWorld[1] + basis.north[1] * state.scene.radius * 0.25,
    state.camera.pivotWorld[2] + basis.north[2] * state.scene.radius * 0.25
  ];
  const northScreen = projectPoint(northPoint);
  if (!northScreen) {
    compassRose.style.transform = "rotate(0rad)";
    return;
  }

  const dx = northScreen[0] - focus[0];
  const dy = northScreen[1] - focus[1];
  const angle = Math.atan2(dx, -dy);
  compassRose.style.transform = `rotate(${angle}rad)`;
}

function updateGridLabels() {
  if (!state.grid?.labels) {
    return;
  }

  gridLabelsLayer.style.display = state.showGrid && state.showGridLabels ? "block" : "none";
  if (!state.showGrid || !state.showGridLabels) {
    return;
  }

  for (const label of state.grid.labels) {
    const screen = projectPoint(label.position);
    if (!screen) {
      label.element.style.display = "none";
      continue;
    }

    const bottomInset = bottomBar?.offsetHeight || 0;
    const labelX = Math.max(54, Math.min(canvas.clientWidth - 54, screen[0]));
    const labelY = Math.max(22, Math.min(canvas.clientHeight - bottomInset - 22, screen[1]));
    label.element.style.display = "block";
    label.element.style.left = `${labelX}px`;
    label.element.style.top = `${labelY}px`;
  }
}

function updateFaultLabels() {
  const activeLabelIds = new Set();
  for (const id of state.visibleIds) {
    const fault = state.faults.get(id);
    const meta = faultMetaById(id);
    const settings = getFaultSettings(id);
    if (!fault || !meta || !settings.showLabel || (!state.showAlt && fault.group === "cfm5-alt")) {
      continue;
    }

    let element = state.faultLabelElements.get(id);
    if (!element) {
      element = document.createElement("span");
      element.className = "fault-label";
      state.faultLabelElements.set(id, element);
      faultLabelsLayer.append(element);
    }

    const screen = projectPoint(fault.centroid);
    if (!screen || !withinCanvas(screen, 80)) {
      element.style.display = "none";
      continue;
    }

    activeLabelIds.add(id);
    const color = getFaultColor(id);
    element.textContent = getFaultLabel(meta);
    element.style.color = color;
    element.style.borderColor = color;
    element.style.display = "block";
    element.style.left = `${Math.max(70, Math.min(canvas.clientWidth - 70, screen[0]))}px`;
    element.style.top = `${Math.max(34, Math.min(canvas.clientHeight - 84, screen[1]))}px`;
  }

  for (const [id, element] of state.faultLabelElements) {
    if (!activeLabelIds.has(id)) {
      element.style.display = "none";
    }
  }
}

function updateCountyLabels() {
  updateBoundaryLabels(
    countyLabelsLayer,
    state.countyLabels,
    state.showPoliticalBoundaries && state.showCountyLabels,
    state.countyColor
  );
}

function updatePlaceLabels() {
  updateBoundaryLabels(
    placeLabelsLayer,
    state.placeLabels,
    state.showPlaceBoundaries && state.showPlaceLabels,
    state.placeColor
  );
}

function updateBoundaryLabels(labelsLayer, labels, visible, color) {
  labelsLayer.style.display = visible && labels.length > 0 ? "block" : "none";
  if (!visible || labels.length === 0) {
    return;
  }

  for (const label of labels) {
    const screen = projectPoint(label.position);
    if (!screen || !withinCanvas(screen, 80)) {
      label.element.style.display = "none";
      continue;
    }

    const bottomInset = bottomBar?.offsetHeight || 0;
    const labelX = Math.max(64, Math.min(canvas.clientWidth - 64, screen[0]));
    const labelY = Math.max(30, Math.min(canvas.clientHeight - bottomInset - 30, screen[1]));
    label.element.style.color = color;
    label.element.style.borderColor = color;
    label.element.style.display = "block";
    label.element.style.left = `${labelX}px`;
    label.element.style.top = `${labelY}px`;
  }
}

function withinCanvas(point, margin = 0) {
  return (
    point[0] >= -margin &&
    point[0] <= canvas.clientWidth + margin &&
    point[1] >= -margin &&
    point[1] <= canvas.clientHeight + margin
  );
}

function orbitCamera(dx, dy) {
  const pivot = state.camera.pivotWorld;
  const pivotBasis = basisForLatLon(state.camera.focusGeo.lat, state.camera.focusGeo.lon);
  const yawAngle = -dx * 0.006;
  const pitchAngle = -dy * 0.006;

  rotateCameraAroundPivot(pivotBasis.up, yawAngle);

  const viewDirection = normalize(subtractVectors(state.camera.targetWorld, state.camera.eyeWorld));
  const rightAxis = normalize(cross(viewDirection, state.camera.upWorld));
  const candidateEye = rotatePointAroundAxis(state.camera.eyeWorld, pivot, rightAxis, pitchAngle);
  const candidateTarget = rotatePointAroundAxis(state.camera.targetWorld, pivot, rightAxis, pitchAngle);
  const candidateUp = normalize(rotateVectorAroundAxis(state.camera.upWorld, rightAxis, pitchAngle));
  const cameraAbovePivot = dot(normalize(subtractVectors(candidateEye, pivot)), pivotBasis.up);

  if (cameraAbovePivot > 0.08 && dot(candidateUp, pivotBasis.up) > 0.05) {
    state.camera.eyeWorld = candidateEye;
    state.camera.targetWorld = candidateTarget;
    state.camera.upWorld = candidateUp;
  }
}

function panCamera(dx, dy) {
  const viewVector = subtractVectors(state.camera.targetWorld, state.camera.eyeWorld);
  const distanceToTarget = Math.max(vectorLength(viewVector), state.scene.radius * 0.0001);
  const viewDirection = normalize(viewVector);
  const rightAxis = normalize(cross(viewDirection, state.camera.upWorld));
  const upAxis = normalize(state.camera.upWorld);
  const fov = (48 * Math.PI) / 180;
  const worldUnitsPerPixel = (2 * Math.tan(fov / 2) * distanceToTarget) / Math.max(canvas.clientHeight, 1);
  const delta = addVectors(
    scaleVector(rightAxis, -dx * worldUnitsPerPixel * 1.1),
    scaleVector(upAxis, dy * worldUnitsPerPixel * 1.1)
  );

  state.camera.eyeWorld = addVectors(state.camera.eyeWorld, delta);
  state.camera.targetWorld = addVectors(state.camera.targetWorld, delta);
  state.camera.pivotWorld = addVectors(state.camera.pivotWorld, delta);
  state.camera.focusGeo = latLonFromXyz(state.camera.pivotWorld);
}

function rotateCameraAroundPivot(axis, angle) {
  const pivot = state.camera.pivotWorld;
  state.camera.eyeWorld = rotatePointAroundAxis(state.camera.eyeWorld, pivot, axis, angle);
  state.camera.targetWorld = rotatePointAroundAxis(state.camera.targetWorld, pivot, axis, angle);
  state.camera.upWorld = normalize(rotateVectorAroundAxis(state.camera.upWorld, axis, angle));
}

function zoomCamera(zoom) {
  const viewVector = subtractVectors(state.camera.eyeWorld, state.camera.targetWorld);
  const currentDistance = vectorLength(viewVector);
  const minDistance = Math.max(state.scene.radius * 1e-7, 1e-6);
  const nextDistance = Math.max(minDistance, currentDistance * zoom);
  const direction = normalize(viewVector);
  state.camera.eyeWorld = [
    state.camera.targetWorld[0] + direction[0] * nextDistance,
    state.camera.targetWorld[1] + direction[1] * nextDistance,
    state.camera.targetWorld[2] + direction[2] * nextDistance
  ];
}

function bindEvents() {
  searchInput.addEventListener("input", () => {
    state.query = searchInput.value;
    renderFaultList();
  });

  showMatchingFaultsButton.addEventListener("click", async () => {
    await setMatchingFaultsVisible(true);
  });

  hideMatchingFaultsButton.addEventListener("click", async () => {
    await setMatchingFaultsVisible(false);
  });

  showTerrainInput.addEventListener("change", async () => {
    state.showTerrain = showTerrainInput.checked;
    if (!state.showTerrain) {
      return;
    }
    try {
      await loadTerrain();
    } catch (error) {
      state.showTerrain = false;
      showTerrainInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  showGridInput.addEventListener("change", () => {
    state.showGrid = showGridInput.checked;
  });

  showGridLabelsInput.addEventListener("change", () => {
    state.showGridLabels = showGridLabelsInput.checked;
  });

  showPoliticalBoundariesInput.addEventListener("change", async () => {
    state.showPoliticalBoundaries = showPoliticalBoundariesInput.checked;
    if (!state.showPoliticalBoundaries) {
      state.showCountyLabels = false;
      showCountyLabelsInput.checked = false;
      return;
    }
    try {
      await loadPoliticalBoundaries();
    } catch (error) {
      state.showPoliticalBoundaries = false;
      showPoliticalBoundariesInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  countyColorInput.addEventListener("input", () => {
    state.countyColor = normalizeHexColor(countyColorInput.value, state.countyColor);
  });

  showCountyLabelsInput.addEventListener("change", async () => {
    state.showCountyLabels = showCountyLabelsInput.checked;
    if (state.showCountyLabels) {
      state.showPoliticalBoundaries = true;
      showPoliticalBoundariesInput.checked = true;
    }
    if (!state.showPoliticalBoundaries) {
      return;
    }
    try {
      await loadPoliticalBoundaries();
    } catch (error) {
      state.showPoliticalBoundaries = false;
      state.showCountyLabels = false;
      showPoliticalBoundariesInput.checked = false;
      showCountyLabelsInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  showPlaceBoundariesInput.addEventListener("change", async () => {
    state.showPlaceBoundaries = showPlaceBoundariesInput.checked;
    if (!state.showPlaceBoundaries) {
      state.showPlaceLabels = false;
      showPlaceLabelsInput.checked = false;
      return;
    }
    try {
      await loadPlaceBoundaries();
    } catch (error) {
      state.showPlaceBoundaries = false;
      showPlaceBoundariesInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  placeColorInput.addEventListener("input", () => {
    state.placeColor = normalizeHexColor(placeColorInput.value, state.placeColor);
  });

  showPlaceLabelsInput.addEventListener("change", async () => {
    state.showPlaceLabels = showPlaceLabelsInput.checked;
    if (state.showPlaceLabels) {
      state.showPlaceBoundaries = true;
      showPlaceBoundariesInput.checked = true;
    }
    if (!state.showPlaceBoundaries) {
      return;
    }
    try {
      await loadPlaceBoundaries();
    } catch (error) {
      state.showPlaceBoundaries = false;
      state.showPlaceLabels = false;
      showPlaceBoundariesInput.checked = false;
      showPlaceLabelsInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  showLakesInput.addEventListener("change", async () => {
    state.showLakes = showLakesInput.checked;
    if (!state.showLakes) {
      return;
    }
    try {
      await loadLakes();
    } catch (error) {
      state.showLakes = false;
      showLakesInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  showLakeFillInput.addEventListener("change", async () => {
    state.showLakeFill = showLakeFillInput.checked;
    if (!state.showLakeFill) {
      return;
    }
    try {
      await loadLakeFill();
    } catch (error) {
      state.showLakeFill = false;
      showLakeFillInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  lakeColorInput.addEventListener("input", () => {
    state.lakeColor = normalizeHexColor(lakeColorInput.value, state.lakeColor);
  });

  showRiversInput.addEventListener("change", async () => {
    state.showRivers = showRiversInput.checked;
    if (!state.showRivers) {
      return;
    }
    try {
      await loadRivers();
    } catch (error) {
      state.showRivers = false;
      showRiversInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  riverColorInput.addEventListener("input", () => {
    state.riverColor = normalizeHexColor(riverColorInput.value, state.riverColor);
  });

  showRoadsInput.addEventListener("change", async () => {
    state.showRoads = showRoadsInput.checked;
    if (!state.showRoads) {
      return;
    }
    try {
      await loadRoads();
    } catch (error) {
      console.error(error);
      state.showRoads = false;
      showRoadsInput.checked = false;
      showStatus(error.message, true);
    }
  });

  roadColorInput.addEventListener("input", () => {
    state.roadColor = normalizeHexColor(roadColorInput.value, state.roadColor);
  });

  showAllFaultsInput.addEventListener("change", async () => {
    await setAllFaultsVisible(showAllFaultsInput.checked);
  });

  showAltInput.addEventListener("change", async () => {
    state.showAlt = showAltInput.checked;
    if (showAllFaultsInput.checked) {
      await setAllFaultsVisible(true, { resetCamera: false });
      return;
    }
    renderFaultList();
    fitSceneToVisible(false);
    updateStats();
  });

  opacityInput.addEventListener("input", () => {
    state.opacity = Number(opacityInput.value) / 100;
  });

  terrainExaggerationInput.addEventListener("input", () => {
    state.terrainExaggeration = Number(terrainExaggerationInput.value);
  });

  terrainOpacityInput.addEventListener("input", () => {
    state.terrainOpacity = Number(terrainOpacityInput.value) / 100;
  });

  document.querySelector("#reset-camera").addEventListener("click", () => {
    fitSceneToVisible(true);
  });

  compassButton.addEventListener("click", () => {
    fitSceneToVisible(true);
  });

  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.renderMode = button.dataset.mode;
      document.querySelectorAll("[data-mode]").forEach((candidate) => {
        candidate.classList.toggle("active", candidate === button);
      });
    });
  });

  canvas.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    state.pointer.active = true;
    state.pointer.x = event.clientX;
    state.pointer.y = event.clientY;
    state.pointer.moved = 0;
    state.pointer.mode = event.button === 1 ? "pan" : event.metaKey || event.ctrlKey ? "focus" : "orbit";
    canvas.classList.toggle("is-panning", state.pointer.mode === "pan");
    canvas.setPointerCapture(event.pointerId);
  });

  canvas.addEventListener("pointermove", (event) => {
    if (!state.pointer.active) {
      return;
    }
    const dx = event.clientX - state.pointer.x;
    const dy = event.clientY - state.pointer.y;
    state.pointer.x = event.clientX;
    state.pointer.y = event.clientY;
    state.pointer.moved += Math.abs(dx) + Math.abs(dy);
    if (state.pointer.mode === "pan") {
      panCamera(dx, dy);
    } else if (state.pointer.mode === "orbit") {
      orbitCamera(dx, dy);
    }
  });

  canvas.addEventListener("pointerup", (event) => {
    if (state.pointer.moved < 5 && state.pointer.mode !== "pan") {
      if (state.pointer.mode === "focus" || event.metaKey || event.ctrlKey) {
        setFocusFromClick(event.clientX, event.clientY);
      } else {
        selectNearestFault(event.clientX, event.clientY);
      }
    }
    state.pointer.active = false;
    state.pointer.mode = "orbit";
    canvas.classList.remove("is-panning");
    if (canvas.hasPointerCapture(event.pointerId)) {
      canvas.releasePointerCapture(event.pointerId);
    }
  });

  canvas.addEventListener("pointercancel", (event) => {
    state.pointer.active = false;
    state.pointer.mode = "orbit";
    canvas.classList.remove("is-panning");
    if (canvas.hasPointerCapture(event.pointerId)) {
      canvas.releasePointerCapture(event.pointerId);
    }
  });

  canvas.addEventListener("mousedown", (event) => {
    if (event.button === 1) {
      event.preventDefault();
    }
  });

  canvas.addEventListener("auxclick", (event) => {
    if (event.button === 1) {
      event.preventDefault();
    }
  });

  canvas.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      const zoom = Math.exp(event.deltaY * 0.001);
      zoomCamera(zoom);
    },
    { passive: false }
  );

  window.addEventListener("resize", resizeCanvas);
}

function distance(a, b) {
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

function vectorLength(vector) {
  return Math.hypot(vector[0], vector[1], vector[2]);
}

function subtractVectors(a, b) {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function addVectors(a, b) {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

function scaleVector(vector, scale) {
  return [vector[0] * scale, vector[1] * scale, vector[2] * scale];
}

function rotatePointAroundAxis(point, origin, axis, angle) {
  return addVectors(origin, rotateVectorAroundAxis(subtractVectors(point, origin), axis, angle));
}

function rotateVectorAroundAxis(vector, axis, angle) {
  const normalizedAxis = normalize(axis);
  const cosAngle = Math.cos(angle);
  const sinAngle = Math.sin(angle);
  const term1 = scaleVector(vector, cosAngle);
  const term2 = scaleVector(cross(normalizedAxis, vector), sinAngle);
  const term3 = scaleVector(normalizedAxis, dot(normalizedAxis, vector) * (1 - cosAngle));
  return addVectors(addVectors(term1, term2), term3);
}

function identityMatrix() {
  return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}

function perspectiveMatrix(fovy, aspect, near, far) {
  const f = 1 / Math.tan(fovy / 2);
  const out = new Float32Array(16);
  out[0] = f / aspect;
  out[5] = f;
  out[10] = (far + near) / (near - far);
  out[11] = -1;
  out[14] = (2 * far * near) / (near - far);
  return out;
}

function lookAtMatrix(eye, center, up) {
  const z = normalize([eye[0] - center[0], eye[1] - center[1], eye[2] - center[2]]);
  const x = normalize(cross(up, z));
  const y = cross(z, x);
  const out = identityMatrix();

  out[0] = x[0];
  out[1] = y[0];
  out[2] = z[0];
  out[4] = x[1];
  out[5] = y[1];
  out[6] = z[1];
  out[8] = x[2];
  out[9] = y[2];
  out[10] = z[2];
  out[12] = -dot(x, eye);
  out[13] = -dot(y, eye);
  out[14] = -dot(z, eye);
  return out;
}

function multiplyMatrices(a, b) {
  const out = new Float32Array(16);
  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      out[col * 4 + row] =
        a[0 * 4 + row] * b[col * 4 + 0] +
        a[1 * 4 + row] * b[col * 4 + 1] +
        a[2 * 4 + row] * b[col * 4 + 2] +
        a[3 * 4 + row] * b[col * 4 + 3];
    }
  }
  return out;
}

function multiplyMatrixVector(matrix, vector) {
  return [
    matrix[0] * vector[0] + matrix[4] * vector[1] + matrix[8] * vector[2] + matrix[12] * vector[3],
    matrix[1] * vector[0] + matrix[5] * vector[1] + matrix[9] * vector[2] + matrix[13] * vector[3],
    matrix[2] * vector[0] + matrix[6] * vector[1] + matrix[10] * vector[2] + matrix[14] * vector[3],
    matrix[3] * vector[0] + matrix[7] * vector[1] + matrix[11] * vector[2] + matrix[15] * vector[3]
  ];
}

function normalize(vector) {
  const length = Math.hypot(vector[0], vector[1], vector[2]) || 1;
  return [vector[0] / length, vector[1] / length, vector[2] / length];
}

function latLonFromXyz(point) {
  const radius = vectorLength(point) || 1;
  return {
    lat: (Math.asin(Math.max(-1, Math.min(1, point[2] / radius))) * 180) / Math.PI,
    lon: (Math.atan2(-point[0], point[1]) * 180) / Math.PI
  };
}

function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ];
}

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

async function init() {
  const gl = canvas.getContext("webgl2", {
    alpha: false,
    antialias: true
  });

  if (!gl) {
    showStatus("WebGL2 is required for this local viewer", true);
    return;
  }

  state.gl = gl;
  state.programs = createPrograms(gl);
  bindEvents();
  resizeCanvas();
  window.requestAnimationFrame(drawScene);

  try {
    await loadManifest();
  } catch (error) {
    showStatus(error.message, true);
    console.error(error);
  }
}

init();
