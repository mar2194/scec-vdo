const canvas = document.querySelector("#viewer-canvas");
const appShell = document.querySelector("#app");
const faultList = document.querySelector("#fault-list");
const faultCount = document.querySelector("#fault-count");
const searchInput = document.querySelector("#fault-search");
const showMatchingFaultsButton = document.querySelector("#show-matching-faults");
const hideMatchingFaultsButton = document.querySelector("#hide-matching-faults");
const showTerrainInput = document.querySelector("#show-terrain");
const showGridInput = document.querySelector("#show-grid");
const showGridLabelsInput = document.querySelector("#show-grid-labels");
const showStateBoundaryInput = document.querySelector("#show-state-boundary");
const stateBoundaryColorInput = document.querySelector("#state-boundary-color");
const showPoliticalBoundariesInput = document.querySelector("#show-political-boundaries");
const showPlaceBoundariesInput = document.querySelector("#show-place-boundaries");
const countyColorInput = document.querySelector("#county-color");
const showCountyLabelsInput = document.querySelector("#show-county-labels");
const placeColorInput = document.querySelector("#place-color");
const showPlaceLabelsInput = document.querySelector("#show-place-labels");
const showMunicipalPlaceBoundariesInput = document.querySelector("#show-municipal-place-boundaries");
const showMunicipalPlaceFillInput = document.querySelector("#show-municipal-place-fill");
const colorPlacesByPopulationInput = document.querySelector("#color-places-by-population");
const municipalPlaceColorMetricInput = document.querySelector("#municipal-place-color-metric");
const showMunicipalityPointsInput = document.querySelector("#show-municipality-points");
const municipalityColorInput = document.querySelector("#municipality-color");
const municipalityPopulationScaleInput = document.querySelector("#municipality-population-scale");
const municipalityPopulationScaleValue = document.querySelector("#municipality-population-scale-value");
const showCensusTractsInput = document.querySelector("#show-census-tracts");
const showCensusTractFillInput = document.querySelector("#show-census-tract-fill");
const censusTractLineColorInput = document.querySelector("#census-tract-line-color");
const censusTractMetricInput = document.querySelector("#census-tract-metric");
const censusTractOpacityInput = document.querySelector("#census-tract-opacity");
const censusTractOpacityValue = document.querySelector("#census-tract-opacity-value");
const showLakesInput = document.querySelector("#show-lakes");
const showLakeFillInput = document.querySelector("#show-lake-fill");
const lakeColorInput = document.querySelector("#lake-color");
const showRiversInput = document.querySelector("#show-rivers");
const riverColorInput = document.querySelector("#river-color");
const showShorelineInput = document.querySelector("#show-shoreline");
const shorelineColorInput = document.querySelector("#shoreline-color");
const showGeologyInput = document.querySelector("#show-geology");
const geologyOpacityInput = document.querySelector("#geology-opacity");
const geologyOpacityValue = document.querySelector("#geology-opacity-value");
const geologyUnitSelect = document.querySelector("#geology-unit-select");
const geologyUnitColorInput = document.querySelector("#geology-unit-color");
const showOilGasFieldsInput = document.querySelector("#show-oil-gas-fields");
const showOilGasFieldFillInput = document.querySelector("#show-oil-gas-field-fill");
const oilGasFieldColorInput = document.querySelector("#oil-gas-field-color");
const oilGasFieldOpacityInput = document.querySelector("#oil-gas-field-opacity");
const oilGasFieldOpacityValue = document.querySelector("#oil-gas-field-opacity-value");
const showOffshoreOilLeasesInput = document.querySelector("#show-offshore-oil-leases");
const showOffshoreOilLeaseFillInput = document.querySelector("#show-offshore-oil-lease-fill");
const offshoreOilLeaseColorInput = document.querySelector("#offshore-oil-lease-color");
const offshoreOilLeaseOpacityInput = document.querySelector("#offshore-oil-lease-opacity");
const offshoreOilLeaseOpacityValue = document.querySelector("#offshore-oil-lease-opacity-value");
const showOilPlatformsInput = document.querySelector("#show-oil-platforms");
const oilPlatformColorInput = document.querySelector("#oil-platform-color");
const oilPlatformScaleInput = document.querySelector("#oil-platform-scale");
const oilPlatformScaleValue = document.querySelector("#oil-platform-scale-value");
const showPowerPlantsInput = document.querySelector("#show-power-plants");
const powerPlantColorInput = document.querySelector("#power-plant-color");
const powerPlantScaleInput = document.querySelector("#power-plant-scale");
const powerPlantScaleValue = document.querySelector("#power-plant-scale-value");
const showTransmissionLinesInput = document.querySelector("#show-transmission-lines");
const transmissionLineColorInput = document.querySelector("#transmission-line-color");
const transmissionLineOpacityInput = document.querySelector("#transmission-line-opacity");
const transmissionLineOpacityValue = document.querySelector("#transmission-line-opacity-value");
const showActiveFiresInput = document.querySelector("#show-active-fires");
const showActiveFireFootprintsInput = document.querySelector("#show-active-fire-footprints");
const activeFireColorInput = document.querySelector("#active-fire-color");
const activeFireScaleInput = document.querySelector("#active-fire-scale");
const activeFireScaleValue = document.querySelector("#active-fire-scale-value");
const showTsunamiHazardInput = document.querySelector("#show-tsunami-hazard");
const showTsunamiHazardShadeInput = document.querySelector("#show-tsunami-hazard-shade");
const tsunamiHazardColorInput = document.querySelector("#tsunami-hazard-color");
const tsunamiHazardOpacityInput = document.querySelector("#tsunami-hazard-opacity");
const tsunamiHazardOpacityValue = document.querySelector("#tsunami-hazard-opacity-value");
const showHealthcareFacilitiesInput = document.querySelector("#show-healthcare-facilities");
const showHealthcareLabelsInput = document.querySelector("#show-healthcare-labels");
const healthcareColorInput = document.querySelector("#healthcare-color");
const healthcareBedScaleInput = document.querySelector("#healthcare-bed-scale");
const healthcareBedScaleValue = document.querySelector("#healthcare-bed-scale-value");
const healthcareCategoryInputs = [...document.querySelectorAll("[data-healthcare-category]")];
const selectionTypeInput = document.querySelector("#selection-type");
const showRoadsInput = document.querySelector("#show-roads");
const roadColorInput = document.querySelector("#road-color");
const showPublicRoadsInput = document.querySelector("#show-public-roads");
const publicRoadColorInput = document.querySelector("#public-road-color");
const publicRoadZoomThresholdInput = document.querySelector("#public-road-zoom-threshold");
const publicRoadZoomValue = document.querySelector("#public-road-zoom-value");
const publicRoadSearchInput = document.querySelector("#public-road-search");
const publicRoadStatus = document.querySelector("#public-road-status");
const publicRoadResults = document.querySelector("#public-road-results");
const showAllFaultsInput = document.querySelector("#show-all-faults");
const showAltInput = document.querySelector("#show-alt");
const opacityInput = document.querySelector("#opacity");
const terrainExaggerationInput = document.querySelector("#terrain-exaggeration");
const terrainOpacityInput = document.querySelector("#terrain-opacity");
const statusBanner = document.querySelector("#status-banner");
const sceneStats = document.querySelector("#scene-stats");
const selectedName = document.querySelector("#selected-name");
const faultDetails = document.querySelector("#fault-details");
const inspectorPanel = document.querySelector(".inspector");
const inspectorCollapseButton = document.querySelector("#inspector-collapse");
const gridLabelsLayer = document.querySelector("#grid-labels");
const faultLabelsLayer = document.querySelector("#fault-labels");
const countyLabelsLayer = document.querySelector("#county-labels");
const placeLabelsLayer = document.querySelector("#place-labels");
const healthcareLabelsLayer = document.querySelector("#healthcare-labels");
const focusMarker = document.querySelector("#focus-marker");
const compassButton = document.querySelector("#compass");
const compassRose = document.querySelector("#compass-rose");
const locateUserButton = document.querySelector("#locate-user");
const bottomBar = document.querySelector(".bottom-bar");
const mobileTopBar = document.querySelector(".mobile-top-bar");
const mobileLayersToggle = document.querySelector("#mobile-layers-toggle");
const mobileLayersClose = document.querySelector("#mobile-layers-close");
const mobileToolsToggle = document.querySelector("#mobile-tools-toggle");
const mobileToolsClose = document.querySelector("#mobile-tools-close");
const mobileInspectorClose = document.querySelector("#mobile-inspector-close");

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
  selectedEntity: undefined,
  selectionType: "fault",
  inspectorCollapsed: false,
  query: "",
  showTerrain: false,
  showGrid: true,
  showGridLabels: false,
  showStateBoundary: false,
  showDrapedStateBoundary: false,
  showPoliticalBoundaries: false,
  showDrapedPoliticalBoundaries: false,
  showPlaceBoundaries: false,
  showDrapedPlaceBoundaries: false,
  showMunicipalPlaceBoundaries: false,
  showMunicipalPlaceFill: true,
  colorPlacesByPopulation: false,
  municipalPlaceColorMetric: "population",
  showMunicipalityPoints: false,
  showDrapedMunicipalityPoints: false,
  showCensusTracts: false,
  showCensusTractFill: true,
  showDrapedCensusTracts: false,
  showLakes: false,
  showLakeFill: false,
  showDrapedLakes: false,
  showRivers: false,
  showDrapedRivers: false,
  showShoreline: false,
  showDrapedShoreline: false,
  showGeology: false,
  showDrapedGeology: false,
  showOilGasFields: false,
  showOilGasFieldFill: true,
  showDrapedOilGasFields: false,
  showOffshoreOilLeases: false,
  showOffshoreOilLeaseFill: true,
  showDrapedOffshoreOilLeases: false,
  showOilPlatforms: false,
  showDrapedOilPlatforms: false,
  showPowerPlants: false,
  showDrapedPowerPlants: false,
  showTransmissionLines: false,
  showDrapedTransmissionLines: false,
  showActiveFires: false,
  showActiveFireFootprints: true,
  showDrapedActiveFires: false,
  showTsunamiHazard: false,
  showTsunamiHazardShade: true,
  showDrapedTsunamiHazard: false,
  showHealthcareFacilities: false,
  showHealthcareLabels: false,
  showDrapedHealthcareFacilities: false,
  showRoads: false,
  showDrapedHighways: false,
  showPublicRoads: false,
  showDrapedPublicRoads: false,
  showCountyLabels: false,
  showPlaceLabels: false,
  showAlt: true,
  opacity: 0.88,
  terrainExaggeration: 12,
  terrainOpacity: 1,
  stateBoundaryColor: "#f3f0e7",
  countyColor: "#edde94",
  placeColor: "#75c2f5",
  municipalityColor: "#f7b267",
  municipalityPopulationScale: 1,
  censusTractLineColor: "#f2efe5",
  censusTractOpacity: 0.48,
  censusTractMetric: "total_population",
  lakeColor: "#2f9bd3",
  riverColor: "#5bbff7",
  shorelineColor: "#9be7df",
  geologyOpacity: 0.62,
  geologySelectedUnitId: "",
  geologyColorOverrides: new Map(),
  oilGasFieldColor: "#d08a38",
  oilGasFieldOpacity: 0.42,
  offshoreOilLeaseColor: "#58d6c9",
  offshoreOilLeaseOpacity: 0.34,
  oilPlatformColor: "#ffb15f",
  oilPlatformScale: 1.25,
  powerPlantColor: "#c9f05d",
  powerPlantScale: 1,
  transmissionLineColor: "#b8f071",
  transmissionLineOpacity: 0.86,
  activeFireColor: "#ff5a3d",
  activeFireScale: 1.1,
  tsunamiHazardColor: "#f26d5b",
  tsunamiHazardOpacity: 0.42,
  healthcareColor: "#ff6b8a",
  healthcareBedScale: 1,
  healthcareCategoryFilters: new Set([
    "trauma",
    "critical-access",
    "general-acute",
    "psych-hospital",
    "skilled-nursing",
    "dialysis",
    "intermediate-care",
    "other"
  ]),
  roadColor: "#f3d16b",
  publicRoadColor: "#d9d3bd",
  publicRoadZoomThreshold: 0.55,
  renderMode: "surface",
  grid: undefined,
  terrain: undefined,
  stateBoundary: undefined,
  drapedStateBoundary: undefined,
  politicalBoundaries: undefined,
  drapedPoliticalBoundaries: undefined,
  placeBoundaries: undefined,
  drapedPlaceBoundaries: undefined,
  municipalPlaceBoundaries: undefined,
  drapedMunicipalPlaceBoundaries: undefined,
  municipalPlaceFill: undefined,
  drapedMunicipalPlaceFill: undefined,
  municipalityPoints: undefined,
  drapedMunicipalityPoints: undefined,
  censusTractBoundaries: undefined,
  drapedCensusTractBoundaries: undefined,
  censusTractFill: undefined,
  drapedCensusTractFill: undefined,
  censusTractFeatures: undefined,
  censusTractProperties: undefined,
  lakes: undefined,
  lakeFill: undefined,
  drapedLakes: undefined,
  drapedLakeFill: undefined,
  rivers: undefined,
  drapedRivers: undefined,
  shoreline: undefined,
  drapedShoreline: undefined,
  geology: undefined,
  drapedGeology: undefined,
  oilGasFields: undefined,
  drapedOilGasFields: undefined,
  oilGasFieldFill: undefined,
  drapedOilGasFieldFill: undefined,
  offshoreOilLeases: undefined,
  drapedOffshoreOilLeases: undefined,
  offshoreOilLeaseFill: undefined,
  drapedOffshoreOilLeaseFill: undefined,
  oilPlatforms: undefined,
  drapedOilPlatforms: undefined,
  powerPlants: undefined,
  drapedPowerPlants: undefined,
  transmissionLines: undefined,
  drapedTransmissionLines: undefined,
  activeFires: undefined,
  drapedActiveFires: undefined,
  activeFireFootprints: undefined,
  drapedActiveFireFootprints: undefined,
  tsunamiHazard: undefined,
  tsunamiHazardShade: undefined,
  drapedTsunamiHazard: undefined,
  drapedTsunamiHazardShade: undefined,
  healthcareFacilities: undefined,
  drapedHealthcareFacilities: undefined,
  healthcareLabelElements: new Map(),
  roads: undefined,
  drapedHighways: undefined,
  publicRoads: undefined,
  drapedPublicRoads: undefined,
  publicRoadTiles: new Map(),
  publicRoadTileLoads: new Map(),
  drapedPublicRoadTiles: new Map(),
  drapedPublicRoadTileLoads: new Map(),
  publicRoadActiveTileIds: new Set(),
  publicRoadSearchQuery: "",
  publicRoadSearchShardCache: new Map(),
  publicRoadSearchResults: [],
  publicRoadSelectedIds: new Set(),
  publicRoadSelectedRecords: new Map(),
  publicRoadSelectedLayer: undefined,
  drapedPublicRoadSelectedLayer: undefined,
  publicRoadTileUpdateKey: "",
  publicRoadVisibleTileCount: 0,
  publicRoadCappedTileCount: 0,
  publicRoadLastStatus: "",
  userLocationGeo: undefined,
  locationRequest: undefined,
  cameraInteractionUntil: 0,
  pickFramebuffer: undefined,
  needsRender: true,
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
  touch: {
    pointers: new Map(),
    moved: 0,
    lastCenter: undefined,
    lastDistance: undefined,
    lastAngle: undefined
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

const populationColorStops = [
  [0.36, 0.69, 0.86],
  [0.95, 0.77, 0.28],
  [0.83, 0.25, 0.22]
];
const censusColorStops = [
  [0.15, 0.30, 0.45],
  [0.18, 0.54, 0.66],
  [0.50, 0.70, 0.44],
  [0.96, 0.78, 0.30],
  [0.88, 0.42, 0.23],
  [0.58, 0.16, 0.29]
];
const censusMissingColor = [0.37, 0.39, 0.36];
const censusMetricBinCount = 7;
const publicRoadSearchLimit = 80;
const publicRoadLeadingDirections = new Set(["N", "S", "E", "W", "NE", "NW", "SE", "SW", "NB", "SB", "EB", "WB"]);
const navigationFocusHeightKm = 0.35;

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

function markRenderDirty() {
  state.needsRender = true;
}

function setLocateUserButtonStatus(status) {
  locateUserButton.dataset.status = status;
  locateUserButton.disabled = status === "locating";
  locateUserButton.setAttribute("aria-busy", String(status === "locating"));
}

function locationErrorMessage(error) {
  if (error?.code === 1) {
    return "Location permission was denied";
  }
  if (error?.code === 2) {
    return "Location is unavailable";
  }
  if (error?.code === 3) {
    return "Location request timed out";
  }
  return "Unable to get your location";
}

function locationAccuracyText(position) {
  const accuracy = position?.coords?.accuracy;
  if (!Number.isFinite(accuracy)) {
    return "";
  }
  if (accuracy >= 1000) {
    return ` within about ${(accuracy / 1000).toFixed(1)} km`;
  }
  return ` within about ${Math.round(accuracy)} m`;
}

async function requestUserLocation(options = {}) {
  const { initial = false } = options;
  if (!("geolocation" in navigator)) {
    setLocateUserButtonStatus("error");
    if (!initial) {
      showStatus("Location is not available in this browser", true);
    }
    return undefined;
  }

  if (state.locationRequest) {
    return state.locationRequest;
  }

  setLocateUserButtonStatus("locating");
  showStatus("Finding your location", true);
  state.locationRequest = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      maximumAge: 60000,
      timeout: 12000
    });
  });

  try {
    const position = await state.locationRequest;
    const geo = normalizeGeo({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    });
    state.userLocationGeo = {
      ...geo,
      accuracyMeters: position.coords.accuracy,
      timestamp: position.timestamp
    };
    focusCameraOnGeo(geo, { announce: false });
    setLocateUserButtonStatus("located");
    showStatus(`Centered on your location${locationAccuracyText(position)}`);
    return state.userLocationGeo;
  } catch (error) {
    setLocateUserButtonStatus("error");
    showStatus(initial ? `${locationErrorMessage(error)}; using default view` : locationErrorMessage(error), !initial);
    return undefined;
  } finally {
    state.locationRequest = undefined;
  }
}

function isMobileLayout() {
  return window.matchMedia("(max-width: 760px)").matches;
}

function setMobileLayersOpen(open) {
  appShell.classList.toggle("mobile-layers-open", open);
  mobileLayersToggle?.setAttribute("aria-expanded", String(open));
  if (open) {
    setMobileToolsOpen(false);
    setMobileInspectorOpen(false);
  }
}

function setMobileToolsOpen(open) {
  appShell.classList.toggle("mobile-tools-open", open);
  mobileToolsToggle?.setAttribute("aria-expanded", String(open));
  if (open) {
    setMobileInspectorOpen(false);
  }
}

function hasSelectedEntity() {
  return Boolean(state.selectedEntity || state.selectedId);
}

function setMobileInspectorOpen(open) {
  const shouldOpen = open && hasSelectedEntity();
  appShell.classList.toggle("mobile-inspector-open", shouldOpen);
  if (shouldOpen) {
    setMobileToolsOpen(false);
  }
}

function syncMobileSelectionSheet() {
  if (isMobileLayout()) {
    setMobileInspectorOpen(hasSelectedEntity());
  } else {
    setMobileInspectorOpen(false);
    setMobileLayersOpen(false);
    setMobileToolsOpen(false);
  }
}

function setInspectorCollapsed(collapsed) {
  state.inspectorCollapsed = Boolean(collapsed);
  appShell.classList.toggle("inspector-collapsed", state.inspectorCollapsed);
  if (inspectorCollapseButton) {
    inspectorCollapseButton.textContent = state.inspectorCollapsed ? "<" : ">";
    inspectorCollapseButton.title = state.inspectorCollapsed ? "Expand details" : "Collapse details";
    inspectorCollapseButton.setAttribute(
      "aria-label",
      state.inspectorCollapsed ? "Expand details" : "Collapse details"
    );
  }
  resizeCanvas();
  markRenderDirty();
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

function interpolateColor(a, b, t) {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t
  ];
}

function municipalPlaceMetricValue(feature) {
  if (state.municipalPlaceColorMetric === "density") {
    return Number(feature?.populationDensityPerSqMi || feature?.municipality?.populationDensityPerSqMi || 0);
  }
  return Number(feature?.population2020 || feature?.municipality?.population2020 || 0);
}

function municipalPlaceMetricRange(layer) {
  if (state.municipalPlaceColorMetric === "density") {
    return layer?.bounds?.populationDensityPerSqMi;
  }
  return layer?.bounds?.population2020;
}

function municipalPlaceMetricColorForFeature(feature, layer) {
  const metric = Math.max(1, municipalPlaceMetricValue(feature) || 1);
  const range = municipalPlaceMetricRange(layer) || [1, metric];
  const minMetric = Math.max(1, Number(range[0]) || 1);
  const maxMetric = Math.max(minMetric + 1, Number(range[1]) || metric);
  const normalized = Math.max(
    0,
    Math.min(
      1,
      (Math.log(metric) - Math.log(minMetric)) / (Math.log(maxMetric) - Math.log(minMetric))
    )
  );
  if (normalized < 0.5) {
    return interpolateColor(populationColorStops[0], populationColorStops[1], normalized * 2);
  }
  return interpolateColor(populationColorStops[1], populationColorStops[2], (normalized - 0.5) * 2);
}

function activeCensusTractFillLayer() {
  return state.showDrapedCensusTracts ? state.drapedCensusTractFill : state.censusTractFill;
}

function censusMetricIndex(layer, metricId = state.censusTractMetric) {
  const metrics = layer?.metrics || state.censusTractFeatures?.metrics || [];
  return metrics.findIndex((metric) => metric.id === metricId);
}

function censusMetricDefinition(layer, metricId = state.censusTractMetric) {
  const metrics = layer?.metrics || state.censusTractFeatures?.metrics || [];
  return metrics.find((metric) => metric.id === metricId) || metrics[0];
}

function censusMetricValue(feature, layer, metricId = state.censusTractMetric) {
  const index = censusMetricIndex(layer, metricId);
  if (index >= 0 && Array.isArray(feature?.metricValues)) {
    const value = Number(feature.metricValues[index]);
    return Number.isFinite(value) ? value : undefined;
  }
  const value = Number(feature?.metrics?.[metricId]);
  return Number.isFinite(value) ? value : undefined;
}

function normalizedCensusMetricValue(value, metric) {
  if (!metric || !Number.isFinite(value)) {
    return undefined;
  }
  const [rangeMin, rangeMax] = metric.range || [0, 1];
  if (metric.scale === "log") {
    const minValue = Math.max(1, Number(rangeMin) || 1);
    const maxValue = Math.max(minValue + 1, Number(rangeMax) || minValue + 1);
    const clamped = Math.max(minValue, value);
    return Math.max(
      0,
      Math.min(1, (Math.log(clamped) - Math.log(minValue)) / (Math.log(maxValue) - Math.log(minValue)))
    );
  }
  const minValue = Number(rangeMin) || 0;
  const maxValue = Math.max(minValue + 0.000001, Number(rangeMax) || 1);
  return Math.max(0, Math.min(1, (value - minValue) / (maxValue - minValue)));
}

function censusMetricColor(normalized) {
  if (!Number.isFinite(normalized)) {
    return censusMissingColor;
  }
  const scaled = Math.max(0, Math.min(1, normalized)) * (censusColorStops.length - 1);
  const index = Math.min(censusColorStops.length - 2, Math.floor(scaled));
  return interpolateColor(censusColorStops[index], censusColorStops[index + 1], scaled - index);
}

function censusMetricBucket(feature, layer) {
  const metric = censusMetricDefinition(layer);
  const value = censusMetricValue(feature, layer, metric?.id);
  const normalized = normalizedCensusMetricValue(value, metric);
  if (!Number.isFinite(normalized)) {
    return 0;
  }
  return Math.min(censusMetricBinCount, Math.max(1, 1 + Math.floor(normalized * censusMetricBinCount)));
}

function censusBucketColor(bucket) {
  if (bucket <= 0) {
    return censusMissingColor;
  }
  const normalized = censusMetricBinCount <= 1 ? 0 : (bucket - 1) / (censusMetricBinCount - 1);
  return censusMetricColor(normalized);
}

function normalizeGroupedFillUnits(units) {
  return units.map((unit, index) => ({
    ...unit,
    id: String(unit.id || `unit-${index}`),
    label: String(unit.label || unit.id || `Unit ${index + 1}`),
    color: normalizeHexColor(unit.color, defaultColorSwatches[index % defaultColorSwatches.length]),
    triangleOffset: Number(unit.triangleOffset) || 0,
    triangleIndexCount: Number(unit.triangleIndexCount) || (Number(unit.triangleCount) || 0) * 3,
    triangleCount: Number(unit.triangleCount) || 0
  }));
}

function activeGeologyLayer() {
  return state.showDrapedGeology ? state.drapedGeology : state.geology;
}

function activeHealthcareFacilitiesLayer() {
  return state.showDrapedHealthcareFacilities ? state.drapedHealthcareFacilities : state.healthcareFacilities;
}

function activeMunicipalityPointsLayer() {
  return state.showDrapedMunicipalityPoints ? state.drapedMunicipalityPoints : state.municipalityPoints;
}

function activePowerPlantsLayer() {
  return state.showDrapedPowerPlants ? state.drapedPowerPlants : state.powerPlants;
}

function activeTransmissionLinesLayer() {
  return state.showDrapedTransmissionLines ? state.drapedTransmissionLines : state.transmissionLines;
}

function activeOilPlatformsLayer() {
  return state.showDrapedOilPlatforms ? state.drapedOilPlatforms : state.oilPlatforms;
}

function activeFlatPlaceBoundaryLayer() {
  return state.showMunicipalPlaceBoundaries ? state.municipalPlaceBoundaries : state.placeBoundaries;
}

function activeDrapedPlaceBoundaryLayer() {
  return state.showMunicipalPlaceBoundaries ? state.drapedMunicipalPlaceBoundaries : state.drapedPlaceBoundaries;
}

function activeFlatMunicipalPlaceFillLayer() {
  return state.showMunicipalPlaceBoundaries ? state.municipalPlaceFill : undefined;
}

function activeDrapedMunicipalPlaceFillLayer() {
  return state.showMunicipalPlaceBoundaries ? state.drapedMunicipalPlaceFill : undefined;
}

function getGeologyUnitColor(unit) {
  return normalizeHexColor(state.geologyColorOverrides.get(unit.id), unit.color);
}

function syncGeologyOpacityControl() {
  const value = Math.round(state.geologyOpacity * 100);
  geologyOpacityInput.value = String(value);
  geologyOpacityValue.textContent = String(value);
}

function syncTsunamiHazardOpacityControl() {
  const value = Math.round(state.tsunamiHazardOpacity * 100);
  tsunamiHazardOpacityInput.value = String(value);
  tsunamiHazardOpacityValue.textContent = String(value);
}

function syncOilGasFieldOpacityControl() {
  const value = Math.round(state.oilGasFieldOpacity * 100);
  oilGasFieldOpacityInput.value = String(value);
  oilGasFieldOpacityValue.textContent = String(value);
}

function syncOffshoreOilLeaseOpacityControl() {
  const value = Math.round(state.offshoreOilLeaseOpacity * 100);
  offshoreOilLeaseOpacityInput.value = String(value);
  offshoreOilLeaseOpacityValue.textContent = String(value);
}

function syncOilPlatformScaleControl() {
  const value = Math.round(state.oilPlatformScale * 100);
  oilPlatformScaleInput.value = String(value);
  oilPlatformScaleValue.textContent = String(value);
}

function syncPowerPlantScaleControl() {
  const value = Math.round(state.powerPlantScale * 100);
  powerPlantScaleInput.value = String(value);
  powerPlantScaleValue.textContent = String(value);
}

function syncTransmissionLineOpacityControl() {
  const value = Math.round(state.transmissionLineOpacity * 100);
  transmissionLineOpacityInput.value = String(value);
  transmissionLineOpacityValue.textContent = String(value);
}

function syncHealthcareBedScaleControl() {
  const value = Math.round(state.healthcareBedScale * 100);
  healthcareBedScaleInput.value = String(value);
  healthcareBedScaleValue.textContent = String(value);
}

function syncMunicipalityPopulationScaleControl() {
  const value = Math.round(state.municipalityPopulationScale * 100);
  municipalityPopulationScaleInput.value = String(value);
  municipalityPopulationScaleValue.textContent = String(value);
}

function syncCensusTractOpacityControl() {
  const value = Math.round(state.censusTractOpacity * 100);
  censusTractOpacityInput.value = String(value);
  censusTractOpacityValue.textContent = String(value);
}

function syncCensusMetricControls() {
  const featureTable = state.censusTractFeatures;
  const metrics = featureTable?.metrics || [];
  const previousSelection = state.censusTractMetric;
  censusTractMetricInput.replaceChildren();

  if (metrics.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = state.showCensusTracts ? "Loading census" : "Load census";
    censusTractMetricInput.append(option);
    censusTractMetricInput.disabled = true;
    return;
  }

  const categories = new Map();
  for (const metric of metrics) {
    const category = metric.category || "Census";
    if (!categories.has(category)) {
      const group = document.createElement("optgroup");
      group.label = category;
      categories.set(category, group);
      censusTractMetricInput.append(group);
    }
    const option = document.createElement("option");
    option.value = metric.id;
    option.textContent = metric.label || metric.id;
    option.title = metric.description || metric.id;
    categories.get(category).append(option);
  }

  const nextSelection = metrics.some((metric) => metric.id === previousSelection)
    ? previousSelection
    : featureTable.defaultMetric || metrics[0].id;
  state.censusTractMetric = nextSelection;
  censusTractMetricInput.value = nextSelection;
  censusTractMetricInput.disabled = false;
}

function syncActiveFireScaleControl() {
  const value = Math.round(state.activeFireScale * 100);
  activeFireScaleInput.value = String(value);
  activeFireScaleValue.textContent = String(value);
}

function allPointCategoriesVisibleMask() {
  return Array.from({ length: 8 }, () => 1);
}

function healthcareCategoryMaskVector() {
  const activeLayer = activeHealthcareFacilitiesLayer();
  const categories = activeLayer?.categories || state.healthcareFacilities?.categories || state.drapedHealthcareFacilities?.categories || [];
  const mask = Array.from({ length: 8 }, () => 0);
  for (const category of categories) {
    const index = Number(category.index);
    if (state.healthcareCategoryFilters.has(category.id) && index >= 0 && index < mask.length) {
      mask[index] = 1;
    }
  }
  return mask;
}

function syncGeologyUnitControls() {
  const layer = activeGeologyLayer() || state.geology || state.drapedGeology;
  const units = layer?.units || [];
  const previousSelection = state.geologySelectedUnitId;
  geologyUnitSelect.replaceChildren();

  if (units.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = state.showGeology ? "Loading geology" : "Load geology";
    geologyUnitSelect.append(option);
    geologyUnitSelect.disabled = true;
    geologyUnitColorInput.disabled = true;
    return;
  }

  for (const unit of units) {
    const option = document.createElement("option");
    option.value = unit.id;
    option.textContent = `${unit.label} (${unit.triangleCount.toLocaleString()} tris)`;
    geologyUnitSelect.append(option);
  }

  const nextSelection = units.some((unit) => unit.id === previousSelection)
    ? previousSelection
    : units[0].id;
  state.geologySelectedUnitId = nextSelection;
  geologyUnitSelect.value = nextSelection;
  geologyUnitSelect.disabled = false;
  geologyUnitColorInput.disabled = false;
  const unit = units.find((candidate) => candidate.id === nextSelection);
  geologyUnitColorInput.value = unit ? getGeologyUnitColor(unit) : "#d7b56d";
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

function createDrapedLineProgram(gl) {
  const vertexSource = `#version 300 es
    in vec3 aPosition;
    in float aElevation;
    uniform mat4 uProjection;
    uniform mat4 uView;
    uniform vec3 uSceneCenter;
    uniform float uScale;
    uniform float uTerrainExaggeration;

    void main() {
      vec3 radialUp = normalize(aPosition);
      float extraHeightKm = (uTerrainExaggeration - 1.0) * aElevation / 1000.0;
      vec3 localPosition = (aPosition + radialUp * extraHeightKm - uSceneCenter) * uScale;
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

  const program = createProgram(gl, vertexSource, fragmentSource);
  program.attributes.elevation = gl.getAttribLocation(program.program, "aElevation");
  program.uniforms.terrainExaggeration = gl.getUniformLocation(program.program, "uTerrainExaggeration");
  return program;
}

function createDrapedFillProgram(gl) {
  const vertexSource = `#version 300 es
    in vec3 aPosition;
    in float aElevation;
    uniform mat4 uProjection;
    uniform mat4 uView;
    uniform vec3 uSceneCenter;
    uniform float uScale;
    uniform float uTerrainExaggeration;

    void main() {
      vec3 radialUp = normalize(aPosition);
      float extraHeightKm = (uTerrainExaggeration - 1.0) * aElevation / 1000.0;
      vec3 localPosition = (aPosition + radialUp * extraHeightKm - uSceneCenter) * uScale;
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

  const program = createProgram(gl, vertexSource, fragmentSource);
  program.attributes.elevation = gl.getAttribLocation(program.program, "aElevation");
  program.uniforms.terrainExaggeration = gl.getUniformLocation(program.program, "uTerrainExaggeration");
  return program;
}

function createPointProgram(gl, { draped = false } = {}) {
  const vertexSource = `#version 300 es
    in vec3 aPosition;
    in float aCapacity;
    ${draped ? "in float aElevation;" : ""}
    uniform mat4 uProjection;
    uniform mat4 uView;
    uniform vec3 uSceneCenter;
    uniform float uScale;
    uniform float uTerrainExaggeration;
    uniform float uPointScale;
    uniform float uValueDivisor;
    uniform vec4 uCategoryMaskA;
    uniform vec4 uCategoryMaskB;
    in float aCategory;
    out float vVisible;

    float categoryVisible(float category) {
      if (category < 0.5) { return uCategoryMaskA.x; }
      if (category < 1.5) { return uCategoryMaskA.y; }
      if (category < 2.5) { return uCategoryMaskA.z; }
      if (category < 3.5) { return uCategoryMaskA.w; }
      if (category < 4.5) { return uCategoryMaskB.x; }
      if (category < 5.5) { return uCategoryMaskB.y; }
      if (category < 6.5) { return uCategoryMaskB.z; }
      return uCategoryMaskB.w;
    }

    void main() {
      vec3 worldPosition = aPosition;
      ${draped ? "worldPosition += normalize(aPosition) * ((uTerrainExaggeration - 1.0) * aElevation / 1000.0);" : ""}
      vec3 localPosition = (worldPosition - uSceneCenter) * uScale;
      gl_Position = uProjection * uView * vec4(localPosition, 1.0);
      vVisible = categoryVisible(aCategory);
      float scaledValue = max(aCapacity / max(uValueDivisor, 0.0001), 1.0);
      gl_PointSize = vVisible * uPointScale * clamp(5.0 + sqrt(scaledValue) * 0.36, 6.0, 18.0);
    }
  `;

  const fragmentSource = `#version 300 es
    precision highp float;
    uniform vec4 uColor;
    in float vVisible;
    out vec4 outColor;

    void main() {
      if (vVisible < 0.5) {
        discard;
      }
      vec2 centered = gl_PointCoord * 2.0 - 1.0;
      float radius = dot(centered, centered);
      if (radius > 1.0) {
        discard;
      }
      float edge = smoothstep(1.0, 0.72, radius);
      float core = smoothstep(0.42, 0.0, radius);
      vec3 color = mix(uColor.rgb, vec3(1.0), core * 0.42);
      outColor = vec4(color, uColor.a * edge);
    }
  `;

  const program = createProgram(gl, vertexSource, fragmentSource);
  program.attributes.capacity = gl.getAttribLocation(program.program, "aCapacity");
  program.attributes.category = gl.getAttribLocation(program.program, "aCategory");
  if (draped) {
    program.attributes.elevation = gl.getAttribLocation(program.program, "aElevation");
  }
  program.uniforms.terrainExaggeration = gl.getUniformLocation(program.program, "uTerrainExaggeration");
  program.uniforms.pointScale = gl.getUniformLocation(program.program, "uPointScale");
  program.uniforms.valueDivisor = gl.getUniformLocation(program.program, "uValueDivisor");
  program.uniforms.categoryMaskA = gl.getUniformLocation(program.program, "uCategoryMaskA");
  program.uniforms.categoryMaskB = gl.getUniformLocation(program.program, "uCategoryMaskB");
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
    drapedLine: createDrapedLineProgram(gl),
    drapedFill: createDrapedFillProgram(gl),
    point: createPointProgram(gl),
    drapedPoint: createPointProgram(gl, { draped: true }),
    terrain: createTerrainProgram(gl)
  };
}

function createBuffer(gl, target, data, options = {}) {
  const buffer = gl.createBuffer();
  gl.bindBuffer(target, buffer);
  gl.bufferData(target, data, gl.STATIC_DRAW);
  if (options.dirty !== false) {
    markRenderDirty();
  }
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
  const metadataPath = "/public-data/elevation-models/combined/terrain-500m.json";
  const metadata = await fetchJson(metadataPath);
  const [positionBuffer, normalBuffer, elevationBuffer, triangleBuffer] = await Promise.all([
    fetchArrayBuffer(publicDataUrl(metadata.positionPath)),
    fetchArrayBuffer(publicDataUrl(metadata.normalPath)),
    fetchArrayBuffer(publicDataUrl(metadata.elevationPath)),
    fetchArrayBuffer(publicDataUrl(metadata.trianglePath))
  ]);

  const gl = state.gl;
  const positions = new Float32Array(positionBuffer);
  const normals = new Float32Array(normalBuffer);
  const elevations = new Float32Array(elevationBuffer);
  const triangles = new Uint32Array(triangleBuffer);
  const terrain = {
    ...metadata,
    positions,
    elevations,
    triangles,
    vertexBuffer: createBuffer(gl, gl.ARRAY_BUFFER, positions),
    normalBuffer: createBuffer(gl, gl.ARRAY_BUFFER, normals),
    elevationBuffer: createBuffer(gl, gl.ARRAY_BUFFER, elevations),
    triangleBuffer: createBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, triangles),
    triangleIndexCount: metadata.triangleCount * 3,
    minElevationMeters: metadata.bounds.elevationMeters[0],
    maxElevationMeters: metadata.bounds.elevationMeters[1]
  };
  state.terrain = terrain;
  showStatus("Terrain loaded");
  return terrain;
}

function lineFeatureRanges(features = []) {
  let vertexOffset = 0;
  return features.map((feature, index) => {
    const segmentCount = Number(feature.segmentCount) || 0;
    const range = {
      index,
      vertexOffset,
      vertexCount: segmentCount * 2,
      segmentCount
    };
    vertexOffset += range.vertexCount;
    return range;
  });
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
    vertices,
    featureRanges: lineFeatureRanges(payload.features),
    vertexBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, vertices),
    vertexCount: vertices.length / 3
  };
}

async function createDrapedLineLayerRenderData(payload) {
  const [lineBuffer, elevationBuffer] = await Promise.all([
    fetchArrayBuffer(publicDataUrl(payload.linePath)),
    fetchArrayBuffer(publicDataUrl(payload.elevationPath))
  ]);
  const vertices = new Float32Array(lineBuffer);
  const elevations = new Float32Array(elevationBuffer);
  if (elevations.length !== vertices.length / 3) {
    throw new Error(`${payload.name || "Draped line layer"} has mismatched elevation data`);
  }

  return {
    ...payload,
    vertices,
    elevations,
    featureRanges: lineFeatureRanges(payload.features),
    vertexBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, vertices),
    elevationBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, elevations),
    vertexCount: vertices.length / 3
  };
}

async function createIndexedLineLayerRenderData(payload) {
  const [positionBuffer, indexBuffer] = await Promise.all([
    fetchArrayBuffer(publicDataUrl(payload.positionPath)),
    fetchArrayBuffer(publicDataUrl(payload.indexPath))
  ]);
  const positions = new Float32Array(positionBuffer);
  const indices = new Uint32Array(indexBuffer);
  return {
    ...payload,
    positions,
    vertexBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, positions),
    indexBuffer: createBuffer(state.gl, state.gl.ELEMENT_ARRAY_BUFFER, indices),
    vertexCount: positions.length / 3,
    lineIndexCount: payload.lineIndexCount || indices.length
  };
}

async function createDrapedIndexedLineLayerRenderData(payload) {
  const [positionBuffer, elevationBuffer, indexBuffer] = await Promise.all([
    fetchArrayBuffer(publicDataUrl(payload.positionPath)),
    fetchArrayBuffer(publicDataUrl(payload.elevationPath)),
    fetchArrayBuffer(publicDataUrl(payload.indexPath))
  ]);
  const positions = new Float32Array(positionBuffer);
  const elevations = new Float32Array(elevationBuffer);
  const indices = new Uint32Array(indexBuffer);
  if (elevations.length !== positions.length / 3) {
    throw new Error(`${payload.name || "Draped indexed line layer"} has mismatched elevation data`);
  }
  return {
    ...payload,
    positions,
    elevations,
    vertexBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, positions),
    elevationBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, elevations),
    indexBuffer: createBuffer(state.gl, state.gl.ELEMENT_ARRAY_BUFFER, indices),
    vertexCount: positions.length / 3,
    lineIndexCount: payload.lineIndexCount || indices.length
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

async function createDrapedFillLayerRenderData(payload) {
  const [positionBuffer, elevationBuffer, triangleBuffer] = await Promise.all([
    fetchArrayBuffer(publicDataUrl(payload.positionPath)),
    fetchArrayBuffer(publicDataUrl(payload.elevationPath)),
    fetchArrayBuffer(publicDataUrl(payload.trianglePath))
  ]);
  const positions = new Float32Array(positionBuffer);
  const elevations = new Float32Array(elevationBuffer);
  if (elevations.length !== positions.length / 3) {
    throw new Error(`${payload.name || "Draped fill layer"} has mismatched elevation data`);
  }

  return {
    ...payload,
    vertexBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, positions),
    elevationBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, elevations),
    triangleBuffer: createBuffer(state.gl, state.gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(triangleBuffer)),
    triangleIndexCount: payload.triangleCount * 3
  };
}

async function loadCensusTractFeatureTable(path) {
  if (state.censusTractFeatures) {
    return state.censusTractFeatures;
  }
  const featureTable = await fetchJson(publicDataUrl(path));
  featureTable.metricIndex = new Map((featureTable.metrics || []).map((metric, index) => [metric.id, index]));
  state.censusTractFeatures = featureTable;
  syncCensusMetricControls();
  return featureTable;
}

async function loadCensusTractProperties(path) {
  if (state.censusTractProperties) {
    return state.censusTractProperties;
  }
  state.censusTractProperties = await fetchJson(publicDataUrl(path));
  return state.censusTractProperties;
}

async function createCensusFillLayerRenderData(payload, { draped = false } = {}) {
  const featureTable = await loadCensusTractFeatureTable(payload.featurePath);
  const loads = [
    fetchArrayBuffer(publicDataUrl(payload.positionPath)),
    fetchArrayBuffer(publicDataUrl(payload.trianglePath)),
    loadCensusTractProperties(payload.propertyTablePath || featureTable.propertyTablePath)
  ];
  if (draped) {
    loads.splice(1, 0, fetchArrayBuffer(publicDataUrl(payload.elevationPath)));
  }
  const buffers = await Promise.all(loads);
  const positions = new Float32Array(buffers[0]);
  const triangles = new Uint32Array(draped ? buffers[2] : buffers[1]);
  const renderData = {
    ...payload,
    metrics: featureTable.metrics || payload.metrics || [],
    defaultMetric: featureTable.defaultMetric || payload.defaultMetric,
    features: featureTable.features || [],
    propertyTable: state.censusTractProperties,
    positions,
    triangles,
    vertexBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, positions),
    triangleBuffer: createBuffer(state.gl, state.gl.ELEMENT_ARRAY_BUFFER, triangles),
    triangleIndexCount: payload.triangleCount * 3
  };
  if (draped) {
    const elevations = new Float32Array(buffers[1]);
    if (elevations.length !== positions.length / 3) {
      throw new Error(`${payload.name || "Draped census tract layer"} has mismatched elevation data`);
    }
    renderData.elevations = elevations;
    renderData.elevationBuffer = createBuffer(state.gl, state.gl.ARRAY_BUFFER, elevations);
  }
  syncCensusMetricControls();
  return renderData;
}

async function createPointLayerRenderData(payload) {
  const [positionBuffer, capacityBuffer, categoryBuffer] = await Promise.all([
    fetchArrayBuffer(publicDataUrl(payload.positionPath)),
    fetchArrayBuffer(publicDataUrl(payload.capacityPath)),
    fetchArrayBuffer(publicDataUrl(payload.categoryPath))
  ]);
  const positions = new Float32Array(positionBuffer);
  const capacities = new Float32Array(capacityBuffer);
  const categories = new Uint8Array(categoryBuffer);
  if (capacities.length !== positions.length / 3 || categories.length !== positions.length / 3) {
    throw new Error(`${payload.name || "Point layer"} has mismatched capacity or category data`);
  }

  return {
    ...payload,
    positions,
    capacities,
    categoriesBinary: categories,
    vertexBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, positions),
    capacityBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, capacities),
    categoryBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, categories),
    vertexCount: positions.length / 3
  };
}

async function createDrapedPointLayerRenderData(payload) {
  const [positionBuffer, elevationBuffer, capacityBuffer, categoryBuffer] = await Promise.all([
    fetchArrayBuffer(publicDataUrl(payload.positionPath)),
    fetchArrayBuffer(publicDataUrl(payload.elevationPath)),
    fetchArrayBuffer(publicDataUrl(payload.capacityPath)),
    fetchArrayBuffer(publicDataUrl(payload.categoryPath))
  ]);
  const positions = new Float32Array(positionBuffer);
  const elevations = new Float32Array(elevationBuffer);
  const capacities = new Float32Array(capacityBuffer);
  const categories = new Uint8Array(categoryBuffer);
  if (
    elevations.length !== positions.length / 3 ||
    capacities.length !== positions.length / 3 ||
    categories.length !== positions.length / 3
  ) {
    throw new Error(`${payload.name || "Draped point layer"} has mismatched elevation or capacity data`);
  }

  return {
    ...payload,
    positions,
    elevations,
    capacities,
    categoriesBinary: categories,
    vertexBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, positions),
    elevationBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, elevations),
    capacityBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, capacities),
    categoryBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, categories),
    vertexCount: positions.length / 3
  };
}

async function createGroupedFillLayerRenderData(payload) {
  const [positionBuffer, triangleBuffer] = await Promise.all([
    fetchArrayBuffer(publicDataUrl(payload.positionPath)),
    fetchArrayBuffer(publicDataUrl(payload.trianglePath))
  ]);
  const positions = new Float32Array(positionBuffer);
  const triangles = new Uint32Array(triangleBuffer);
  const units = normalizeGroupedFillUnits(payload.units || []);
  return {
    ...payload,
    units,
    unitMap: new Map(units.map((unit) => [unit.id, unit])),
    positions,
    triangles,
    vertexBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, positions),
    triangleBuffer: createBuffer(state.gl, state.gl.ELEMENT_ARRAY_BUFFER, triangles),
    triangleIndexCount: payload.triangleCount * 3
  };
}

async function createTerrainIndexedGroupedFillLayerRenderData(payload) {
  const triangleBuffer = await fetchArrayBuffer(publicDataUrl(payload.trianglePath));
  const triangles = new Uint32Array(triangleBuffer);
  const units = normalizeGroupedFillUnits(payload.units || []);
  return {
    ...payload,
    units,
    unitMap: new Map(units.map((unit) => [unit.id, unit])),
    triangles,
    triangleBuffer: createBuffer(state.gl, state.gl.ELEMENT_ARRAY_BUFFER, triangles),
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

async function loadDrapedFillLayer(stateKey, path, label, missingHint = "") {
  if (state[stateKey]) {
    return state[stateKey];
  }

  showStatus(`Loading ${label}`, true);
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`${label} mesh not found.${missingHint ? ` ${missingHint}` : ""}`);
  }
  const renderData = await createDrapedFillLayerRenderData(await response.json());
  state[stateKey] = renderData;
  showStatus(`${label} loaded`);
  return renderData;
}

async function loadDrapedLineLayer(stateKey, path, label, missingHint = "") {
  if (state[stateKey]) {
    return state[stateKey];
  }

  showStatus(`Loading ${label}`, true);
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`${label} mesh not found.${missingHint ? ` ${missingHint}` : ""}`);
  }
  const renderData = await createDrapedLineLayerRenderData(await response.json());
  state[stateKey] = renderData;
  showStatus(`${label} loaded`);
  return renderData;
}

async function loadIndexedLineLayer(stateKey, path, label, missingHint = "") {
  if (state[stateKey]) {
    return state[stateKey];
  }

  showStatus(`Loading ${label}`, true);
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`${label} mesh not found.${missingHint ? ` ${missingHint}` : ""}`);
  }
  const renderData = await createIndexedLineLayerRenderData(await response.json());
  state[stateKey] = renderData;
  showStatus(`${label} loaded`);
  return renderData;
}

async function loadDrapedIndexedLineLayer(stateKey, path, label, missingHint = "") {
  if (state[stateKey]) {
    return state[stateKey];
  }

  showStatus(`Loading ${label}`, true);
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`${label} mesh not found.${missingHint ? ` ${missingHint}` : ""}`);
  }
  const renderData = await createDrapedIndexedLineLayerRenderData(await response.json());
  state[stateKey] = renderData;
  showStatus(`${label} loaded`);
  return renderData;
}

async function loadPointLayer(stateKey, path, label, missingHint = "") {
  if (state[stateKey]) {
    return state[stateKey];
  }

  showStatus(`Loading ${label}`, true);
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`${label} points not found.${missingHint ? ` ${missingHint}` : ""}`);
  }
  const renderData = await createPointLayerRenderData(await response.json());
  state[stateKey] = renderData;
  showStatus(`${label} loaded`);
  return renderData;
}

async function loadDrapedPointLayer(stateKey, path, label, missingHint = "") {
  if (state[stateKey]) {
    return state[stateKey];
  }

  showStatus(`Loading ${label}`, true);
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`${label} points not found.${missingHint ? ` ${missingHint}` : ""}`);
  }
  const renderData = await createDrapedPointLayerRenderData(await response.json());
  state[stateKey] = renderData;
  showStatus(`${label} loaded`);
  return renderData;
}

async function loadBoundaryLayer(stateKey, path, label) {
  return loadLineLayer(stateKey, path, label, "Run npm run convert:political-boundaries from web/.");
}

async function loadStateBoundary() {
  return loadLineLayer(
    "stateBoundary",
    "/public-data/political-boundaries/ca_state/state-boundary.json",
    "state boundary",
    "Run npm run convert:political-state from web/."
  );
}

async function loadDrapedStateBoundary() {
  return loadDrapedLineLayer(
    "drapedStateBoundary",
    "/public-data/political-boundaries/ca_state/state-boundary-draped-500m.json",
    "3D state boundary",
    "Run npm run convert:political-state from web/."
  );
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

async function loadDrapedPoliticalBoundaries() {
  const layer = await loadDrapedLineLayer(
    "drapedPoliticalBoundaries",
    "/public-data/political-boundaries/ca_counties/counties-boundaries-draped-500m.json",
    "3D county boundaries",
    "Run npm run convert:political-counties from web/."
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

async function loadDrapedPlaceBoundaries() {
  const layer = await loadDrapedLineLayer(
    "drapedPlaceBoundaries",
    "/public-data/political-boundaries/ca_places/places-boundaries-draped-500m.json",
    "3D place boundaries",
    "Run npm run convert:political-places from web/."
  );
  createPlaceLabels(layer);
  return layer;
}

async function loadMunicipalPlaceBoundaries() {
  const layer = await loadLineLayer(
    "municipalPlaceBoundaries",
    "/public-data/political-boundaries/ca_places/municipal-places-boundaries.json",
    "municipal place boundaries",
    "Run npm run convert:municipal-places from web/."
  );
  createPlaceLabels(layer);
  return layer;
}

async function loadDrapedMunicipalPlaceBoundaries() {
  const layer = await loadDrapedLineLayer(
    "drapedMunicipalPlaceBoundaries",
    "/public-data/political-boundaries/ca_places/municipal-places-boundaries-draped-500m.json",
    "3D municipal place boundaries",
    "Run npm run convert:municipal-places from web/."
  );
  createPlaceLabels(layer);
  return layer;
}

async function loadMunicipalPlaceFill() {
  return loadFillLayer(
    "municipalPlaceFill",
    "/public-data/political-boundaries/ca_places/municipal-places-fill.json",
    "municipal place fill",
    "Run npm run convert:municipal-places from web/."
  );
}

async function loadDrapedMunicipalPlaceFill() {
  return loadDrapedFillLayer(
    "drapedMunicipalPlaceFill",
    "/public-data/political-boundaries/ca_places/municipal-places-fill-draped-500m.json",
    "3D municipal place fill",
    "Run npm run convert:municipal-places from web/."
  );
}

async function loadMunicipalityPoints() {
  return loadPointLayer(
    "municipalityPoints",
    "/public-data/political-boundaries/ca_municipalities_points/converted/california-municipalities.json",
    "municipality coordinates",
    "Run npm run convert:municipalities from web/."
  );
}

async function loadDrapedMunicipalityPoints() {
  return loadDrapedPointLayer(
    "drapedMunicipalityPoints",
    "/public-data/political-boundaries/ca_municipalities_points/converted/california-municipalities-draped-500m.json",
    "3D municipality coordinates",
    "Run npm run convert:municipalities from web/."
  );
}

async function loadCensusTractBoundaries() {
  return loadIndexedLineLayer(
    "censusTractBoundaries",
    "/public-data/census-data/converted/census-tracts-boundaries.json",
    "census tract boundaries",
    "Run npm run convert:census-tracts from web/."
  );
}

async function loadDrapedCensusTractBoundaries() {
  return loadDrapedIndexedLineLayer(
    "drapedCensusTractBoundaries",
    "/public-data/census-data/converted/census-tracts-boundaries-draped-500m.json",
    "3D census tract boundaries",
    "Run npm run convert:census-tracts from web/."
  );
}

async function loadCensusTractFill() {
  if (state.censusTractFill) {
    return state.censusTractFill;
  }
  showStatus("Loading census tract fill", true);
  const response = await fetch("/public-data/census-data/converted/census-tracts-fill.json");
  if (!response.ok) {
    throw new Error("census tract fill mesh not found. Run npm run convert:census-tracts from web/.");
  }
  state.censusTractFill = await createCensusFillLayerRenderData(await response.json());
  showStatus("Census tract fill loaded");
  return state.censusTractFill;
}

async function loadDrapedCensusTractFill() {
  if (state.drapedCensusTractFill) {
    return state.drapedCensusTractFill;
  }
  showStatus("Loading terrain census tracts", true);
  const response = await fetch("/public-data/census-data/converted/census-tracts-fill-draped-500m.json");
  if (!response.ok) {
    throw new Error("3D census tract fill mesh not found. Run npm run convert:census-tracts from web/.");
  }
  state.drapedCensusTractFill = await createCensusFillLayerRenderData(await response.json(), { draped: true });
  showStatus("Terrain census tracts loaded");
  return state.drapedCensusTractFill;
}

async function loadLakes() {
  return loadLineLayer(
    "lakes",
    "/public-data/water-bodies/converted/california-lakes.json",
    "lakes",
    "Run npm run convert:water-bodies from web/."
  );
}

async function loadDrapedLakes() {
  return loadDrapedLineLayer(
    "drapedLakes",
    "/public-data/water-bodies/converted/california-lakes-draped-500m.json",
    "3D lakes",
    "Run npm run convert:lakes from web/."
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

async function loadDrapedLakeFill() {
  return loadDrapedFillLayer(
    "drapedLakeFill",
    "/public-data/water-bodies/converted/california-lakes-fill-draped-500m.json",
    "3D lake fill",
    "Run npm run convert:lakes from web/."
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

async function loadDrapedRivers() {
  return loadDrapedLineLayer(
    "drapedRivers",
    "/public-data/water-bodies/converted/nhd-major-rivers-draped-500m.json",
    "3D rivers",
    "Run npm run convert:rivers from web/."
  );
}

async function loadShoreline() {
  return loadLineLayer(
    "shoreline",
    "/public-data/water-bodies/converted/cdfw-shoreline.json",
    "shoreline",
    "Run npm run convert:shoreline from web/."
  );
}

async function loadDrapedShoreline() {
  return loadDrapedLineLayer(
    "drapedShoreline",
    "/public-data/water-bodies/converted/cdfw-shoreline-draped-500m.json",
    "3D shoreline",
    "Run npm run convert:shoreline from web/."
  );
}

async function loadGeology() {
  if (state.geology) {
    syncGeologyUnitControls();
    return state.geology;
  }

  showStatus("Loading geology", true);
  const response = await fetch("/public-data/geology/converted/geologic-units-fill.json");
  if (!response.ok) {
    throw new Error("geology fill mesh not found. Run npm run convert:geology from web/.");
  }
  const renderData = await createGroupedFillLayerRenderData(await response.json());
  state.geology = renderData;
  syncGeologyUnitControls();
  showStatus("Geology loaded");
  return renderData;
}

async function loadDrapedGeology() {
  if (state.drapedGeology) {
    syncGeologyUnitControls();
    return state.drapedGeology;
  }

  showStatus("Loading terrain geology", true);
  const response = await fetch("/public-data/geology/converted/geologic-units-terrain-draped.json");
  if (!response.ok) {
    throw new Error("terrain geology mesh not found. Run npm run convert:geology from web/.");
  }
  const renderData = await createTerrainIndexedGroupedFillLayerRenderData(await response.json());
  state.drapedGeology = renderData;
  syncGeologyUnitControls();
  showStatus("Terrain geology loaded");
  return renderData;
}

async function loadOilGasFields() {
  return loadLineLayer(
    "oilGasFields",
    "/public-data/oil-and-gas/converted/oil-gas-fields.json",
    "oil and gas field boundaries",
    "Run npm run convert:oil-gas from web/."
  );
}

async function loadDrapedOilGasFields() {
  return loadDrapedLineLayer(
    "drapedOilGasFields",
    "/public-data/oil-and-gas/converted/oil-gas-fields-draped-500m.json",
    "3D oil and gas field boundaries",
    "Run npm run convert:oil-gas from web/."
  );
}

async function loadOilGasFieldFill() {
  return loadFillLayer(
    "oilGasFieldFill",
    "/public-data/oil-and-gas/converted/oil-gas-fields-fill.json",
    "oil and gas field fill",
    "Run npm run convert:oil-gas from web/."
  );
}

async function loadDrapedOilGasFieldFill() {
  return loadDrapedFillLayer(
    "drapedOilGasFieldFill",
    "/public-data/oil-and-gas/converted/oil-gas-fields-fill-draped-500m.json",
    "3D oil and gas field fill",
    "Run npm run convert:oil-gas from web/."
  );
}

async function loadOffshoreOilLeases() {
  return loadLineLayer(
    "offshoreOilLeases",
    "/public-data/oil-and-gas/converted/offshore-oil-leases.json",
    "offshore oil lease boundaries",
    "Run npm run convert:offshore-oil-gas from web/."
  );
}

async function loadDrapedOffshoreOilLeases() {
  return loadDrapedLineLayer(
    "drapedOffshoreOilLeases",
    "/public-data/oil-and-gas/converted/offshore-oil-leases-draped-500m.json",
    "3D offshore oil lease boundaries",
    "Run npm run convert:offshore-oil-gas from web/."
  );
}

async function loadOffshoreOilLeaseFill() {
  return loadFillLayer(
    "offshoreOilLeaseFill",
    "/public-data/oil-and-gas/converted/offshore-oil-leases-fill.json",
    "offshore oil lease fill",
    "Run npm run convert:offshore-oil-gas from web/."
  );
}

async function loadDrapedOffshoreOilLeaseFill() {
  return loadDrapedFillLayer(
    "drapedOffshoreOilLeaseFill",
    "/public-data/oil-and-gas/converted/offshore-oil-leases-fill-draped-500m.json",
    "3D offshore oil lease fill",
    "Run npm run convert:offshore-oil-gas from web/."
  );
}

async function loadOilPlatforms() {
  return loadPointLayer(
    "oilPlatforms",
    "/public-data/oil-and-gas/converted/offshore-oil-platforms.json",
    "offshore oil platforms",
    "Run npm run convert:offshore-oil-gas from web/."
  );
}

async function loadDrapedOilPlatforms() {
  return loadDrapedPointLayer(
    "drapedOilPlatforms",
    "/public-data/oil-and-gas/converted/offshore-oil-platforms-draped-500m.json",
    "3D offshore oil platforms",
    "Run npm run convert:offshore-oil-gas from web/."
  );
}

async function loadPowerPlants() {
  return loadPointLayer(
    "powerPlants",
    "/public-data/power-plants/converted/california-power-plants.json",
    "power plants",
    "Run npm run convert:power-plants from web/."
  );
}

async function loadDrapedPowerPlants() {
  return loadDrapedPointLayer(
    "drapedPowerPlants",
    "/public-data/power-plants/converted/california-power-plants-draped-500m.json",
    "3D power plants",
    "Run npm run convert:power-plants from web/."
  );
}

async function loadTransmissionLines() {
  return loadLineLayer(
    "transmissionLines",
    "/public-data/transmission-lines/converted/california-transmission-lines.json",
    "transmission lines",
    "Run npm run convert:transmission-lines from web/."
  );
}

async function loadDrapedTransmissionLines() {
  return loadDrapedLineLayer(
    "drapedTransmissionLines",
    "/public-data/transmission-lines/converted/california-transmission-lines-draped-500m.json",
    "3D transmission lines",
    "Run npm run convert:transmission-lines from web/."
  );
}

async function loadTsunamiHazard() {
  return loadIndexedLineLayer(
    "tsunamiHazard",
    "/public-data/hazards/converted/tsunami-hazard-line.json",
    "tsunami hazard boundary",
    "Run npm run convert:hazards from web/."
  );
}

async function loadDrapedTsunamiHazard() {
  return loadDrapedIndexedLineLayer(
    "drapedTsunamiHazard",
    "/public-data/hazards/converted/tsunami-hazard-line-draped-500m.json",
    "3D tsunami hazard boundary",
    "Run npm run convert:hazards from web/."
  );
}

async function loadTsunamiHazardShade() {
  return loadFillLayer(
    "tsunamiHazardShade",
    "/public-data/hazards/converted/tsunami-hazard-shade.json",
    "tsunami hazard shade",
    "Run npm run convert:hazards from web/."
  );
}

async function loadDrapedTsunamiHazardShade() {
  return loadDrapedFillLayer(
    "drapedTsunamiHazardShade",
    "/public-data/hazards/converted/tsunami-hazard-shade-draped-500m.json",
    "3D tsunami hazard shade",
    "Run npm run convert:hazards from web/."
  );
}

async function loadActiveFires() {
  return loadPointLayer(
    "activeFires",
    "/public-data/hazards/firms-active-fires/converted/active-fires.json",
    "active fires",
    "Run npm run download:active-fires from web/."
  );
}

async function loadDrapedActiveFires() {
  return loadDrapedPointLayer(
    "drapedActiveFires",
    "/public-data/hazards/firms-active-fires/converted/active-fires-draped-500m.json",
    "3D active fires",
    "Run npm run download:active-fires from web/."
  );
}

async function loadActiveFireFootprints() {
  return loadFillLayer(
    "activeFireFootprints",
    "/public-data/hazards/firms-active-fires/converted/active-fire-footprints.json",
    "active fire footprints",
    "Run npm run download:active-fires from web/."
  );
}

async function loadDrapedActiveFireFootprints() {
  return loadDrapedFillLayer(
    "drapedActiveFireFootprints",
    "/public-data/hazards/firms-active-fires/converted/active-fire-footprints-draped-500m.json",
    "3D active fire footprints",
    "Run npm run download:active-fires from web/."
  );
}

async function loadHealthcareFacilities() {
  return loadPointLayer(
    "healthcareFacilities",
    "/public-data/hospitals/converted/licensed-certified-healthcare-facilities.json",
    "healthcare facilities",
    "Run npm run convert:hospitals from web/."
  );
}

async function loadDrapedHealthcareFacilities() {
  return loadDrapedPointLayer(
    "drapedHealthcareFacilities",
    "/public-data/hospitals/converted/licensed-certified-healthcare-facilities-draped-500m.json",
    "3D healthcare facilities",
    "Run npm run convert:hospitals from web/."
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

async function loadDrapedHighways() {
  return loadDrapedLineLayer(
    "drapedHighways",
    "/public-data/roads/converted/shn-lines-draped-500m.json",
    "3D highways",
    "Run npm run convert:highways from web/."
  );
}

function syncTerrainDrapingState() {
  const useDrapedOverlays = state.showTerrain;
  state.showDrapedStateBoundary = useDrapedOverlays;
  state.showDrapedPoliticalBoundaries = useDrapedOverlays;
  state.showDrapedPlaceBoundaries = useDrapedOverlays;
  state.showDrapedMunicipalityPoints = useDrapedOverlays;
  state.showDrapedCensusTracts = useDrapedOverlays;
  state.showDrapedLakes = useDrapedOverlays;
  state.showDrapedRivers = useDrapedOverlays;
  state.showDrapedShoreline = useDrapedOverlays;
  state.showDrapedGeology = useDrapedOverlays;
  state.showDrapedOilGasFields = useDrapedOverlays;
  state.showDrapedOffshoreOilLeases = useDrapedOverlays;
  state.showDrapedOilPlatforms = useDrapedOverlays;
  state.showDrapedPowerPlants = useDrapedOverlays;
  state.showDrapedTransmissionLines = useDrapedOverlays;
  state.showDrapedActiveFires = useDrapedOverlays;
  state.showDrapedTsunamiHazard = useDrapedOverlays;
  state.showDrapedHealthcareFacilities = useDrapedOverlays;
  state.showDrapedHighways = useDrapedOverlays;
  state.showDrapedPublicRoads = useDrapedOverlays;
}

async function loadCurrentStateBoundary() {
  syncTerrainDrapingState();
  return state.showDrapedStateBoundary ? loadDrapedStateBoundary() : loadStateBoundary();
}

async function loadCurrentPoliticalBoundaries() {
  syncTerrainDrapingState();
  return state.showDrapedPoliticalBoundaries ? loadDrapedPoliticalBoundaries() : loadPoliticalBoundaries();
}

async function loadCurrentPlaceBoundaries() {
  syncTerrainDrapingState();
  if (state.showMunicipalPlaceBoundaries) {
    return state.showDrapedPlaceBoundaries ? loadDrapedMunicipalPlaceBoundaries() : loadMunicipalPlaceBoundaries();
  }
  return state.showDrapedPlaceBoundaries ? loadDrapedPlaceBoundaries() : loadPlaceBoundaries();
}

async function loadCurrentMunicipalPlaceFill() {
  syncTerrainDrapingState();
  return state.showDrapedPlaceBoundaries ? loadDrapedMunicipalPlaceFill() : loadMunicipalPlaceFill();
}

async function loadCurrentPlaceVisuals() {
  await loadCurrentPlaceBoundaries();
  if (state.showMunicipalPlaceBoundaries && state.showMunicipalPlaceFill) {
    await loadCurrentMunicipalPlaceFill();
  }
}

async function loadCurrentMunicipalityPoints() {
  syncTerrainDrapingState();
  return state.showDrapedMunicipalityPoints ? loadDrapedMunicipalityPoints() : loadMunicipalityPoints();
}

async function loadCurrentCensusTractBoundaries() {
  syncTerrainDrapingState();
  return state.showDrapedCensusTracts ? loadDrapedCensusTractBoundaries() : loadCensusTractBoundaries();
}

async function loadCurrentCensusTractFill() {
  syncTerrainDrapingState();
  return state.showDrapedCensusTracts ? loadDrapedCensusTractFill() : loadCensusTractFill();
}

async function loadCurrentCensusTractVisuals() {
  await loadCurrentCensusTractBoundaries();
  if (state.showCensusTractFill) {
    await loadCurrentCensusTractFill();
  }
}

async function loadCurrentLakes() {
  syncTerrainDrapingState();
  return state.showDrapedLakes ? loadDrapedLakes() : loadLakes();
}

async function loadCurrentLakeFill() {
  syncTerrainDrapingState();
  return state.showDrapedLakes ? loadDrapedLakeFill() : loadLakeFill();
}

async function loadCurrentRivers() {
  syncTerrainDrapingState();
  return state.showDrapedRivers ? loadDrapedRivers() : loadRivers();
}

async function loadCurrentShoreline() {
  syncTerrainDrapingState();
  return state.showDrapedShoreline ? loadDrapedShoreline() : loadShoreline();
}

async function loadCurrentGeology() {
  syncTerrainDrapingState();
  if (state.showDrapedGeology) {
    await loadTerrain();
    return loadDrapedGeology();
  }
  return loadGeology();
}

async function loadCurrentOilGasFields() {
  syncTerrainDrapingState();
  return state.showDrapedOilGasFields ? loadDrapedOilGasFields() : loadOilGasFields();
}

async function loadCurrentOilGasFieldFill() {
  syncTerrainDrapingState();
  return state.showDrapedOilGasFields ? loadDrapedOilGasFieldFill() : loadOilGasFieldFill();
}

async function loadCurrentOilGasVisuals() {
  await loadCurrentOilGasFields();
  if (state.showOilGasFieldFill) {
    await loadCurrentOilGasFieldFill();
  }
}

async function loadCurrentOffshoreOilLeases() {
  syncTerrainDrapingState();
  return state.showDrapedOffshoreOilLeases ? loadDrapedOffshoreOilLeases() : loadOffshoreOilLeases();
}

async function loadCurrentOffshoreOilLeaseFill() {
  syncTerrainDrapingState();
  return state.showDrapedOffshoreOilLeases ? loadDrapedOffshoreOilLeaseFill() : loadOffshoreOilLeaseFill();
}

async function loadCurrentOffshoreOilLeaseVisuals() {
  await loadCurrentOffshoreOilLeases();
  if (state.showOffshoreOilLeaseFill) {
    await loadCurrentOffshoreOilLeaseFill();
  }
}

async function loadCurrentOilPlatforms() {
  syncTerrainDrapingState();
  return state.showDrapedOilPlatforms ? loadDrapedOilPlatforms() : loadOilPlatforms();
}

async function loadCurrentPowerPlants() {
  syncTerrainDrapingState();
  return state.showDrapedPowerPlants ? loadDrapedPowerPlants() : loadPowerPlants();
}

async function loadCurrentTransmissionLines() {
  syncTerrainDrapingState();
  return state.showDrapedTransmissionLines ? loadDrapedTransmissionLines() : loadTransmissionLines();
}

async function loadCurrentTsunamiHazard() {
  syncTerrainDrapingState();
  const loads = [
    state.showDrapedTsunamiHazard ? loadDrapedTsunamiHazard() : loadTsunamiHazard()
  ];
  if (state.showTsunamiHazardShade) {
    loads.push(state.showDrapedTsunamiHazard ? loadDrapedTsunamiHazardShade() : loadTsunamiHazardShade());
  }
  const [lineLayer] = await Promise.all(loads);
  return lineLayer;
}

async function loadCurrentActiveFires() {
  syncTerrainDrapingState();
  const loads = [
    state.showDrapedActiveFires ? loadDrapedActiveFires() : loadActiveFires()
  ];
  if (state.showActiveFireFootprints) {
    loads.push(
      state.showDrapedActiveFires ? loadDrapedActiveFireFootprints() : loadActiveFireFootprints()
    );
  }
  const [pointLayer] = await Promise.all(loads);
  return pointLayer;
}

async function loadCurrentHealthcareFacilities() {
  syncTerrainDrapingState();
  return state.showDrapedHealthcareFacilities ? loadDrapedHealthcareFacilities() : loadHealthcareFacilities();
}

async function loadCurrentHighways() {
  syncTerrainDrapingState();
  return state.showDrapedHighways ? loadDrapedHighways() : loadRoads();
}

async function loadCurrentPublicRoadIndex() {
  syncTerrainDrapingState();
  await loadPublicRoads();
  if (state.showDrapedPublicRoads) {
    await loadDrapedPublicRoads();
  }
}

async function refreshTerrainDependentOverlays() {
  syncTerrainDrapingState();
  state.publicRoadTileUpdateKey = "";
  const loads = [];

  if (state.showStateBoundary) {
    loads.push(loadCurrentStateBoundary());
  }
  if (state.showPoliticalBoundaries || state.showCountyLabels) {
    loads.push(loadCurrentPoliticalBoundaries());
  }
  if (state.showPlaceBoundaries || state.showPlaceLabels) {
    loads.push(loadCurrentPlaceBoundaries());
    if (state.showMunicipalPlaceBoundaries && state.showMunicipalPlaceFill) {
      loads.push(loadCurrentMunicipalPlaceFill());
    }
  }
  if (state.showMunicipalityPoints) {
    loads.push(loadCurrentMunicipalityPoints());
  }
  if (state.showCensusTracts) {
    loads.push(loadCurrentCensusTractVisuals());
  }
  if (state.showLakes) {
    loads.push(loadCurrentLakes());
  }
  if (state.showLakeFill) {
    loads.push(loadCurrentLakeFill());
  }
  if (state.showRivers) {
    loads.push(loadCurrentRivers());
  }
  if (state.showShoreline) {
    loads.push(loadCurrentShoreline());
  }
  if (state.showGeology) {
    loads.push(loadCurrentGeology());
  }
  if (state.showOilGasFields) {
    loads.push(loadCurrentOilGasVisuals());
  }
  if (state.showOffshoreOilLeases) {
    loads.push(loadCurrentOffshoreOilLeaseVisuals());
  }
  if (state.showOilPlatforms) {
    loads.push(loadCurrentOilPlatforms());
  }
  if (state.showPowerPlants) {
    loads.push(loadCurrentPowerPlants());
  }
  if (state.showTransmissionLines) {
    loads.push(loadCurrentTransmissionLines());
  }
  if (state.showActiveFires) {
    loads.push(loadCurrentActiveFires());
  }
  if (state.showTsunamiHazard) {
    loads.push(loadCurrentTsunamiHazard());
  }
  if (state.showHealthcareFacilities) {
    loads.push(loadCurrentHealthcareFacilities());
  }
  if (state.showRoads) {
    loads.push(loadCurrentHighways());
  }
  if (state.showPublicRoads) {
    loads.push(loadCurrentPublicRoadIndex());
  }

  await Promise.all(loads);

  if (state.publicRoadSelectedIds.size > 0) {
    await loadSelectedPublicRoadTilesForCurrentMode();
    rebuildSelectedPublicRoadLayer();
  }
  updatePublicRoadTilesForView();
  updatePublicRoadStatus();
  markRenderDirty();
}

async function loadPublicRoads() {
  if (state.publicRoads) {
    return state.publicRoads;
  }

  showStatus("Loading public road index", true);
  const payload = await fetchJson("/public-data/roads/converted/all-public-roads.json");
  state.publicRoads = {
    ...payload,
    tileMap: new Map((payload.tiles || []).map((tile) => [tile.id, tile]))
  };
  showStatus("Public road index loaded");
  return state.publicRoads;
}

async function loadDrapedPublicRoads() {
  if (state.drapedPublicRoads) {
    return state.drapedPublicRoads;
  }

  showStatus("Loading 3D public road index", true);
  const payload = await fetchJson("/public-data/roads/converted/all-public-roads-draped-500m.json");
  state.drapedPublicRoads = {
    ...payload,
    tileMap: new Map((payload.tiles || []).map((tile) => [tile.id, tile]))
  };
  showStatus("3D public road index loaded");
  return state.drapedPublicRoads;
}

async function loadPublicRoadTile(tileId) {
  if (state.publicRoadTiles.has(tileId)) {
    return state.publicRoadTiles.get(tileId);
  }
  if (state.publicRoadTileLoads.has(tileId)) {
    return state.publicRoadTileLoads.get(tileId);
  }

  const manifest = await loadPublicRoads();
  const tile = manifest.tileMap.get(tileId);
  if (!tile) {
    return undefined;
  }

  const load = Promise.all([
    fetchArrayBuffer(publicDataUrl(tile.linePath)),
    fetchArrayBuffer(publicDataUrl(tile.routePath))
  ]).then(([lineBuffer, routeBuffer]) => {
    const vertices = new Float32Array(lineBuffer);
    const routeIds = new Uint32Array(routeBuffer);
    if (routeIds.length !== vertices.length / 6) {
      throw new Error(`${tileId} public road tile has mismatched route ids`);
    }
    const renderData = {
      ...tile,
      vertices,
      routeIds,
      vertexBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, vertices),
      vertexCount: vertices.length / 3
    };
    state.publicRoadTiles.set(tileId, renderData);
    state.publicRoadTileLoads.delete(tileId);
    if (state.publicRoadSelectedIds.size > 0) {
      rebuildSelectedPublicRoadLayer();
    }
    updatePublicRoadStatus();
    return renderData;
  }).catch((error) => {
    state.publicRoadTileLoads.delete(tileId);
    throw error;
  });

  state.publicRoadTileLoads.set(tileId, load);
  return load;
}

async function loadDrapedPublicRoadTile(tileId) {
  if (state.drapedPublicRoadTiles.has(tileId)) {
    return state.drapedPublicRoadTiles.get(tileId);
  }
  if (state.drapedPublicRoadTileLoads.has(tileId)) {
    return state.drapedPublicRoadTileLoads.get(tileId);
  }

  const manifest = await loadDrapedPublicRoads();
  const tile = manifest.tileMap.get(tileId);
  if (!tile) {
    return undefined;
  }

  const load = Promise.all([
    fetchArrayBuffer(publicDataUrl(tile.linePath)),
    fetchArrayBuffer(publicDataUrl(tile.elevationPath)),
    fetchArrayBuffer(publicDataUrl(tile.routePath))
  ]).then(([lineBuffer, elevationBuffer, routeBuffer]) => {
    const vertices = new Float32Array(lineBuffer);
    const elevations = new Float32Array(elevationBuffer);
    const routeIds = new Uint32Array(routeBuffer);
    if (routeIds.length !== vertices.length / 6) {
      throw new Error(`${tileId} 3D public road tile has mismatched route ids`);
    }
    if (elevations.length !== vertices.length / 3) {
      throw new Error(`${tileId} 3D public road tile has mismatched elevation data`);
    }
    const renderData = {
      ...tile,
      vertices,
      elevations,
      routeIds,
      vertexBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, vertices),
      elevationBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, elevations),
      vertexCount: vertices.length / 3
    };
    state.drapedPublicRoadTiles.set(tileId, renderData);
    state.drapedPublicRoadTileLoads.delete(tileId);
    if (state.publicRoadSelectedIds.size > 0) {
      rebuildSelectedPublicRoadLayer();
    }
    updatePublicRoadStatus();
    return renderData;
  }).catch((error) => {
    state.drapedPublicRoadTileLoads.delete(tileId);
    throw error;
  });

  state.drapedPublicRoadTileLoads.set(tileId, load);
  return load;
}

function publicRoadTileIdFor(lat, lon, tileSizeDegrees) {
  return `lat${Math.floor(lat / tileSizeDegrees)}_lon${Math.floor(lon / tileSizeDegrees)}`;
}

function publicRoadTileIndexRange(minValue, maxValue, tileSizeDegrees) {
  return [
    Math.floor(minValue / tileSizeDegrees),
    Math.floor(maxValue / tileSizeDegrees)
  ];
}

function publicRoadMaxActiveTiles() {
  syncTerrainDrapingState();
  const metadataLimit = state.publicRoads?.activation?.maxActiveTiles || 96;
  return state.showDrapedPublicRoads ? Math.min(metadataLimit, 36) : metadataLimit;
}

function publicRoadTileDistanceFromFocus(tileId) {
  const tile = state.publicRoads?.tileMap?.get(tileId);
  if (!tile?.bounds) {
    return Number.POSITIVE_INFINITY;
  }
  const centerLat = (tile.bounds.lat[0] + tile.bounds.lat[1]) / 2;
  const centerLon = (tile.bounds.lon[0] + tile.bounds.lon[1]) / 2;
  const focus = state.camera.focusGeo;
  const lonScale = Math.cos((focus.lat * Math.PI) / 180);
  const dLat = centerLat - focus.lat;
  const dLon = (centerLon - focus.lon) * lonScale;
  return dLat * dLat + dLon * dLon;
}

function cameraDistanceRatio() {
  const distanceToPivot = vectorLength(subtractVectors(state.camera.eyeWorld, state.camera.pivotWorld));
  return distanceToPivot / Math.max(state.scene.radius, 1e-6);
}

function markCameraInteraction(durationMs = 260) {
  state.cameraInteractionUntil = performance.now() + durationMs;
  markRenderDirty();
}

function cameraIsInteracting() {
  return performance.now() < state.cameraInteractionUntil;
}

function publicRoadsAreCloseEnough() {
  return cameraDistanceRatio() <= state.publicRoadZoomThreshold;
}

function syncPublicRoadZoomControl() {
  const value = Math.round(state.publicRoadZoomThreshold * 100);
  publicRoadZoomThresholdInput.value = String(value);
  publicRoadZoomValue.textContent = String(value);
}

function publicRoadViewportGeoBounds() {
  if (!state.publicRoads) {
    return undefined;
  }

  const viewDirection = normalize(subtractVectors(state.camera.targetWorld, state.camera.eyeWorld));
  const rightAxis = normalize(cross(viewDirection, state.camera.upWorld));
  const upAxis = normalize(cross(rightAxis, viewDirection));
  const fov = (48 * Math.PI) / 180;
  const aspect = canvas.width / Math.max(canvas.height, 1);
  const tanY = Math.tan(fov / 2);
  const tanX = tanY * aspect;
  const radius = vectorLength(
    latLonHeightToXyz(
      state.camera.focusGeo.lat,
      state.camera.focusGeo.lon,
      state.publicRoads.heightKm || 6.52
    )
  );

  const bounds = {
    lat: [Infinity, -Infinity],
    lon: [Infinity, -Infinity]
  };
  const columns = 9;
  const rows = 7;

  for (let row = 0; row < rows; row += 1) {
    const ndcY = rows === 1 ? 0 : 1 - (row / (rows - 1)) * 2;
    for (let column = 0; column < columns; column += 1) {
      const ndcX = columns === 1 ? 0 : (column / (columns - 1)) * 2 - 1;
      const rayDirection = normalize(
        addVectors(
          viewDirection,
          addVectors(
            scaleVector(rightAxis, ndcX * tanX),
            scaleVector(upAxis, ndcY * tanY)
          )
        )
      );
      const point = raySphereIntersection(state.camera.eyeWorld, rayDirection, radius);
      if (!point) {
        continue;
      }
      const geo = latLonFromXyz(point);
      bounds.lat[0] = Math.min(bounds.lat[0], geo.lat);
      bounds.lat[1] = Math.max(bounds.lat[1], geo.lat);
      bounds.lon[0] = Math.min(bounds.lon[0], geo.lon);
      bounds.lon[1] = Math.max(bounds.lon[1], geo.lon);
    }
  }

  if (!Number.isFinite(bounds.lat[0]) || !Number.isFinite(bounds.lon[0])) {
    const focus = state.camera.focusGeo;
    bounds.lat = [focus.lat, focus.lat];
    bounds.lon = [focus.lon, focus.lon];
  }

  return bounds;
}

function publicRoadTileIdsForView() {
  if (!state.publicRoads) {
    return [];
  }
  const tileSize = state.publicRoads.tileSizeDegrees || 0.25;
  const viewportBounds = publicRoadViewportGeoBounds();
  if (!viewportBounds) {
    return [];
  }

  const layerBounds = state.publicRoads.bounds || viewportBounds;
  const paddedBounds = {
    lat: [
      Math.max(layerBounds.lat[0], viewportBounds.lat[0] - tileSize),
      Math.min(layerBounds.lat[1], viewportBounds.lat[1] + tileSize)
    ],
    lon: [
      Math.max(layerBounds.lon[0], viewportBounds.lon[0] - tileSize),
      Math.min(layerBounds.lon[1], viewportBounds.lon[1] + tileSize)
    ]
  };
  const [minLatIndex, maxLatIndex] = publicRoadTileIndexRange(paddedBounds.lat[0], paddedBounds.lat[1], tileSize);
  const [minLonIndex, maxLonIndex] = publicRoadTileIndexRange(paddedBounds.lon[0], paddedBounds.lon[1], tileSize);
  const ids = [];

  for (let latIndex = minLatIndex; latIndex <= maxLatIndex; latIndex += 1) {
    for (let lonIndex = minLonIndex; lonIndex <= maxLonIndex; lonIndex += 1) {
      const id = `lat${latIndex}_lon${lonIndex}`;
      if (state.publicRoads.tileMap.has(id)) {
        ids.push(id);
      }
    }
  }

  const focusTileId = publicRoadTileIdFor(state.camera.focusGeo.lat, state.camera.focusGeo.lon, tileSize);
  if (ids.length === 0 && state.publicRoads.tileMap.has(focusTileId)) {
    ids.push(focusTileId);
  }
  ids.sort((a, b) => {
    const distanceDelta = publicRoadTileDistanceFromFocus(a) - publicRoadTileDistanceFromFocus(b);
    return distanceDelta || a.localeCompare(b);
  });
  state.publicRoadVisibleTileCount = ids.length;
  const maxActiveTiles = publicRoadMaxActiveTiles();
  const activeIds = ids.slice(0, maxActiveTiles).sort();
  state.publicRoadCappedTileCount = Math.max(0, ids.length - activeIds.length);
  return activeIds;
}

function updatePublicRoadTilesForView() {
  syncTerrainDrapingState();
  if (!state.showPublicRoads || !state.publicRoads || !publicRoadsAreCloseEnough()) {
    state.publicRoadActiveTileIds.clear();
    state.publicRoadTileUpdateKey = "";
    state.publicRoadVisibleTileCount = 0;
    state.publicRoadCappedTileCount = 0;
    updatePublicRoadStatus();
    return;
  }

  const ids = publicRoadTileIdsForView();
  const updateKey = `${state.showDrapedPublicRoads ? "3d" : "flat"}:${ids.join("|")}`;
  if (updateKey === state.publicRoadTileUpdateKey) {
    updatePublicRoadStatus();
    return;
  }

  state.publicRoadTileUpdateKey = updateKey;
  state.publicRoadActiveTileIds = new Set(ids);
  for (const tileId of ids) {
    const tileLoad = state.showDrapedPublicRoads ? loadDrapedPublicRoadTile(tileId) : loadPublicRoadTile(tileId);
    tileLoad.catch((error) => {
      console.error(error);
      showStatus(error.message, true);
    });
  }
  updatePublicRoadStatus();
}

function normalizePublicRoadQuery(value) {
  return value.toUpperCase().replace(/[^A-Z0-9]+/g, " ").trim();
}

function publicRoadShardKeyForQuery(query) {
  const tokens = normalizePublicRoadQuery(query).split(/\s+/).filter(Boolean);
  while (tokens.length > 0 && publicRoadLeadingDirections.has(tokens[0])) {
    tokens.shift();
  }
  return tokens[0]?.[0] || "";
}

function unpackPublicRoadRecord(record) {
  return {
    id: record[0],
    name: record[1],
    routeId: record[2],
    county: record[3],
    segmentCount: record[4],
    tileIds: record[5] || [],
    bounds: {
      lat: [record[6][0], record[6][1]],
      lon: [record[6][2], record[6][3]]
    }
  };
}

async function loadPublicRoadSearchShard(key) {
  const manifest = await loadPublicRoads();
  const shard = manifest.searchShards?.[key];
  if (!shard) {
    return [];
  }
  if (state.publicRoadSearchShardCache.has(key)) {
    return state.publicRoadSearchShardCache.get(key);
  }

  showStatus(`Searching ${key} roads`, true);
  const payload = await fetchJson(publicDataUrl(shard.path));
  const records = (payload.records || []).map(unpackPublicRoadRecord);
  state.publicRoadSearchShardCache.set(key, records);
  showStatus("Road search ready");
  return records;
}

function publicRoadMatchesQuery(record, query) {
  const terms = normalizePublicRoadQuery(query).split(/\s+/).filter(Boolean);
  const haystack = normalizePublicRoadQuery(`${record.name} ${record.routeId} ${record.county}`);
  return terms.every((term) => haystack.includes(term));
}

async function updatePublicRoadSearchResults() {
  const query = state.publicRoadSearchQuery.trim();
  if (query.length < 2) {
    state.publicRoadSearchResults = [];
    renderPublicRoadResults();
    updatePublicRoadStatus();
    return;
  }

  try {
    const key = publicRoadShardKeyForQuery(query);
    const records = await loadPublicRoadSearchShard(key);
    state.publicRoadSearchResults = records
      .filter((record) => publicRoadMatchesQuery(record, query))
      .slice(0, publicRoadSearchLimit);
    renderPublicRoadResults();
    updatePublicRoadStatus();
  } catch (error) {
    console.error(error);
    showStatus(error.message, true);
  }
}

function renderPublicRoadResults() {
  publicRoadResults.replaceChildren();
  const records = state.publicRoadSearchQuery.trim()
    ? state.publicRoadSearchResults
    : [...state.publicRoadSelectedRecords.values()];
  if (records.length === 0) {
    return;
  }

  const fragment = document.createDocumentFragment();
  for (const record of records) {
    const row = document.createElement("label");
    row.className = "road-result-row";
    row.title = record.routeId;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = state.publicRoadSelectedIds.has(record.id);
    checkbox.addEventListener("change", async () => {
      await setPublicRoadSelected(record, checkbox.checked);
    });

    const label = document.createElement("span");
    const title = document.createElement("span");
    title.className = "road-result-title";
    title.textContent = record.name;
    const meta = document.createElement("span");
    meta.className = "road-result-meta";
    meta.textContent = [record.county, `${record.segmentCount.toLocaleString()} seg.`].filter(Boolean).join(" / ");
    label.append(title, meta);
    row.append(checkbox, label);
    fragment.append(row);
  }

  publicRoadResults.append(fragment);
}

async function setPublicRoadSelected(record, selected) {
  if (selected) {
    state.publicRoadSelectedIds.add(record.id);
    state.publicRoadSelectedRecords.set(record.id, record);
    updatePublicRoadStatus();
    await Promise.all(record.tileIds.map((tileId) => loadPublicRoadTileForCurrentMode(tileId)));
  } else {
    state.publicRoadSelectedIds.delete(record.id);
    state.publicRoadSelectedRecords.delete(record.id);
  }
  rebuildSelectedPublicRoadLayer();
  renderPublicRoadResults();
  updatePublicRoadStatus();
}

function loadPublicRoadTileForCurrentMode(tileId) {
  syncTerrainDrapingState();
  return state.showDrapedPublicRoads ? loadDrapedPublicRoadTile(tileId) : loadPublicRoadTile(tileId);
}

async function loadSelectedPublicRoadTilesForCurrentMode() {
  syncTerrainDrapingState();
  const tileIds = new Set();
  for (const record of state.publicRoadSelectedRecords.values()) {
    record.tileIds.forEach((tileId) => tileIds.add(tileId));
  }
  await Promise.all([...tileIds].map((tileId) => loadPublicRoadTileForCurrentMode(tileId)));
}

function rebuildSelectedPublicRoadLayer() {
  syncTerrainDrapingState();
  if (state.publicRoadSelectedLayer?.vertexBuffer) {
    state.gl.deleteBuffer(state.publicRoadSelectedLayer.vertexBuffer);
  }
  if (state.drapedPublicRoadSelectedLayer?.vertexBuffer) {
    state.gl.deleteBuffer(state.drapedPublicRoadSelectedLayer.vertexBuffer);
  }
  if (state.drapedPublicRoadSelectedLayer?.elevationBuffer) {
    state.gl.deleteBuffer(state.drapedPublicRoadSelectedLayer.elevationBuffer);
  }
  if (state.publicRoadSelectedIds.size === 0) {
    state.publicRoadSelectedLayer = undefined;
    state.drapedPublicRoadSelectedLayer = undefined;
    return;
  }

  const selectedIds = state.publicRoadSelectedIds;
  const selectedTileIds = new Set();
  for (const record of state.publicRoadSelectedRecords.values()) {
    record.tileIds.forEach((tileId) => selectedTileIds.add(tileId));
  }

  const selectedVertices = [];
  const selectedElevations = [];
  const sourceTiles = state.showDrapedPublicRoads ? state.drapedPublicRoadTiles : state.publicRoadTiles;
  for (const tileId of selectedTileIds) {
    const tile = sourceTiles.get(tileId);
    if (!tile) {
      continue;
    }
    for (let segmentIndex = 0; segmentIndex < tile.routeIds.length; segmentIndex += 1) {
      if (!selectedIds.has(tile.routeIds[segmentIndex])) {
        continue;
      }
      const vertexOffset = segmentIndex * 6;
      for (let offset = 0; offset < 6; offset += 1) {
        selectedVertices.push(tile.vertices[vertexOffset + offset]);
      }
      if (state.showDrapedPublicRoads) {
        const elevationOffset = segmentIndex * 2;
        selectedElevations.push(tile.elevations[elevationOffset], tile.elevations[elevationOffset + 1]);
      }
    }
  }

  if (selectedVertices.length === 0) {
    state.publicRoadSelectedLayer = undefined;
    state.drapedPublicRoadSelectedLayer = undefined;
    return;
  }

  const vertices = new Float32Array(selectedVertices);
  if (state.showDrapedPublicRoads) {
    const elevations = new Float32Array(selectedElevations);
    state.publicRoadSelectedLayer = undefined;
    state.drapedPublicRoadSelectedLayer = {
      vertexBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, vertices),
      elevationBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, elevations),
      vertexCount: vertices.length / 3
    };
  } else {
    state.drapedPublicRoadSelectedLayer = undefined;
    state.publicRoadSelectedLayer = {
      vertexBuffer: createBuffer(state.gl, state.gl.ARRAY_BUFFER, vertices),
      vertexCount: vertices.length / 3
    };
  }
}

function updatePublicRoadStatus() {
  syncTerrainDrapingState();
  const parts = [`${state.publicRoadSelectedIds.size.toLocaleString()} selected`];
  if (state.showPublicRoads) {
    if (!state.publicRoads) {
      parts.push("loading all");
    } else if (!publicRoadsAreCloseEnough()) {
      parts.push(`zoom in for all (${Math.round(state.publicRoadZoomThreshold * 100)})`);
    } else {
      const activeCount = state.publicRoadActiveTileIds.size;
      const tileMap = state.showDrapedPublicRoads ? state.drapedPublicRoadTiles : state.publicRoadTiles;
      const loadedCount = [...state.publicRoadActiveTileIds].filter((tileId) => tileMap.has(tileId)).length;
      parts.push(`${loadedCount}/${activeCount} tiles`);
      if (state.publicRoadCappedTileCount > 0) {
        parts.push(`nearest ${activeCount}/${state.publicRoadVisibleTileCount}`);
      }
    }
  }
  if (state.showDrapedPublicRoads) {
    parts.push("3D");
  }
  if (state.publicRoadSearchQuery.trim()) {
    parts.push(`${state.publicRoadSearchResults.length.toLocaleString()} matches`);
  }
  const text = parts.join(" / ");
  if (text !== state.publicRoadLastStatus) {
    publicRoadStatus.textContent = text;
    state.publicRoadLastStatus = text;
  }
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
    labels.push(
      createGridLabel(formatLatitude(lat), latLonHeightToXyz(lat, minLon, heightKm), {
        kind: "latitude",
        side: "west",
        value: lat,
        minLon,
        maxLon,
        heightKm
      })
    );
    labels.push(
      createGridLabel(formatLatitude(lat), latLonHeightToXyz(lat, maxLon, heightKm), {
        kind: "latitude",
        side: "east",
        value: lat,
        minLon,
        maxLon,
        heightKm
      })
    );
  }

  for (let lon = minLon; lon <= maxLon; lon += 1) {
    for (let lat = minLat; lat < maxLat; lat += 0.25) {
      vertices.push(...latLonHeightToXyz(lat, lon, heightKm));
      vertices.push(...latLonHeightToXyz(Math.min(lat + 0.25, maxLat), lon, heightKm));
    }
    labels.push(
      createGridLabel(formatLongitude(lon), latLonHeightToXyz(minLat, lon, heightKm), {
        kind: "longitude",
        side: "south",
        value: lon,
        minLat,
        maxLat,
        heightKm
      })
    );
    labels.push(
      createGridLabel(formatLongitude(lon), latLonHeightToXyz(maxLat, lon, heightKm), {
        kind: "longitude",
        side: "north",
        value: lon,
        minLat,
        maxLat,
        heightKm
      })
    );
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

function createGridLabel(text, position, metadata = {}) {
  const element = document.createElement("span");
  element.className = "grid-label";
  element.textContent = text;
  return { text, position, element, ...metadata };
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

function navigationPivotForGeo(geo) {
  return latLonHeightToXyz(geo.lat, geo.lon, navigationFocusHeightKm);
}

function normalizeGeo(geo) {
  const lat = Math.max(-89.5, Math.min(89.5, Number(geo.lat)));
  let lon = Number(geo.lon);
  lon = ((lon + 180) % 360 + 360) % 360 - 180;
  return { lat, lon };
}

function rebaseVectorBetweenGeo(vector, fromGeo, toGeo) {
  const fromBasis = basisForLatLon(fromGeo.lat, fromGeo.lon);
  const toBasis = basisForLatLon(toGeo.lat, toGeo.lon);
  return addVectors(
    addVectors(
      scaleVector(toBasis.east, dot(vector, fromBasis.east)),
      scaleVector(toBasis.north, dot(vector, fromBasis.north))
    ),
    scaleVector(toBasis.up, dot(vector, fromBasis.up))
  );
}

function focusCameraOnGeo(geo, options = {}) {
  const { announce = true } = options;
  const focusGeo = normalizeGeo(geo);
  if (!Number.isFinite(focusGeo.lat) || !Number.isFinite(focusGeo.lon)) {
    return;
  }

  const previousFocusGeo = { ...state.camera.focusGeo };
  const viewVector = subtractVectors(state.camera.eyeWorld, state.camera.targetWorld);
  const rebasedViewVector = rebaseVectorBetweenGeo(viewVector, previousFocusGeo, focusGeo);
  const rebasedUpWorld = normalize(rebaseVectorBetweenGeo(state.camera.upWorld, previousFocusGeo, focusGeo));
  const distanceToTarget = Math.max(
    vectorLength(rebasedViewVector),
    state.scene.radius * 0.0001,
    1
  );
  const viewDirection = normalize(rebasedViewVector);
  const pivotWorld = navigationPivotForGeo(focusGeo);

  state.camera.focusGeo = focusGeo;
  state.camera.pivotWorld = pivotWorld;
  state.camera.targetWorld = [...pivotWorld];
  state.camera.eyeWorld = addVectors(pivotWorld, scaleVector(viewDirection, distanceToTarget));
  state.camera.upWorld = rebasedUpWorld;
  markCameraInteraction(480);
  if (announce) {
    showStatus(
      `Centered at ${formatLatitude(Number(focusGeo.lat.toFixed(4)))}, ${formatLongitude(Number(focusGeo.lon.toFixed(4)))}`
    );
  }
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
      if (!state.visibleIds.has(meta.id)) {
        state.visibleIds.add(meta.id);
      }
      await loadFault(meta.id);
      setSelectedEntity({ type: "fault", id: meta.id }, { renderList: false });
      fitSceneToVisible(false);
      renderFaultList();
      if (isMobileLayout()) {
        setMobileLayersOpen(false);
      }
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
      state.selectedEntity = undefined;
    }
  }
  fitSceneToVisible(false);
  renderFaultList();
  renderDetails();
  updateStats();
}

async function setAllFaultsVisible(visible) {
  if (!visible) {
    state.visibleIds.clear();
    state.selectedId = undefined;
    state.selectedEntity = undefined;
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
      state.selectedEntity = undefined;
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
    state.selectedEntity = { type: "fault", id: ids[0] };
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

function setSelectedEntity(entity, options = {}) {
  const { renderList = true, expandInspector = true } = options;
  state.selectedEntity = entity;
  state.selectedId = entity?.type === "fault" ? entity.id : undefined;
  if (entity?.type && selectionTypeInput?.querySelector(`option[value="${entity.type}"]`)) {
    state.selectionType = entity.type;
    selectionTypeInput.value = entity.type;
  }
  if (entity && expandInspector && !isMobileLayout()) {
    setInspectorCollapsed(false);
  }
  if (renderList) {
    renderFaultList();
  }
  renderDetails();
  markRenderDirty();
}

function renderDetails() {
  const selection = state.selectedEntity || (state.selectedId ? { type: "fault", id: state.selectedId } : undefined);
  if (!selection) {
    selectedName.textContent = "None";
    faultDetails.replaceChildren(detailRow("Status", `Pick a ${selectionTypeLabel(state.selectionType)} on the map`));
    syncMobileSelectionSheet();
    return;
  }

  if (selection.type === "fault") {
    renderFaultDetails(selection.id);
  } else if (selection.type === "healthcare") {
    renderHealthcareDetails(selection);
  } else if (selection.type === "municipality") {
    renderMunicipalityDetails(selection);
  } else if (selection.type === "census") {
    renderCensusTractDetails(selection);
  } else if (selection.type === "lake" || selection.type === "river") {
    renderWaterFeatureDetails(selection);
  } else if (selection.type === "geology") {
    renderGeologyDetails(selection);
  } else if (selection.type === "oilgas") {
    renderOilGasFieldDetails(selection);
  } else if (selection.type === "offshorelease") {
    renderOffshoreOilLeaseDetails(selection);
  } else if (selection.type === "oilplatform") {
    renderOilPlatformDetails(selection);
  } else if (selection.type === "powerplant") {
    renderPowerPlantDetails(selection);
  } else if (selection.type === "transmission") {
    renderTransmissionLineDetails(selection);
  } else if (selection.type === "fire") {
    renderFireDetails(selection);
  } else {
    selectedName.textContent = "None";
    faultDetails.replaceChildren(detailRow("Status", "No selected entity metadata is available"));
  }
  syncMobileSelectionSheet();
}

function renderFaultDetails(id) {
  const meta = state.faultMetas.find((fault) => fault.id === id);
  if (!meta) {
    selectedName.textContent = "None";
    faultDetails.replaceChildren(detailRow("Status", "Selected fault metadata was not found"));
    return;
  }

  selectedName.textContent = meta.name;
  const rows = [
    detailRow("Type", "Fault"),
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
    rows.splice(6, 0, detailRow("Resolution", meta.resolution));
  }
  faultDetails.replaceChildren(...rows);
}

function renderHealthcareDetails(selection) {
  const feature = selection.feature || activeHealthcareFacilitiesLayer()?.features?.[selection.index];
  if (!feature) {
    selectedName.textContent = "None";
    faultDetails.replaceChildren(detailRow("Status", "Selected healthcare facility metadata was not found"));
    return;
  }

  const category = healthcareCategoryLabel(feature.category);
  selectedName.textContent = feature.name || "Healthcare facility";
  faultDetails.replaceChildren(
    detailRow("Type", "Healthcare"),
    detailRow("Category", category),
    detailRow("Facility", feature.type || "Unknown"),
    detailRow("Code", feature.typeCode || "Unknown"),
    detailRow("Capacity", `${Number(feature.capacity || 0).toLocaleString()} beds`),
    detailRow("Trauma", feature.trauma || "No"),
    detailRow("Critical", feature.criticalAccess ? "Yes" : "No"),
    detailRow("Birthing", feature.birthing ? "Yes" : "No"),
    detailRow("Address", [feature.address, feature.city, feature.county].filter(Boolean).join(", ") || "Unknown"),
    detailRow("Latitude", formatNumber(feature.lat, 6)),
    detailRow("Longitude", formatNumber(feature.lon, 6))
  );
}

function renderMunicipalityDetails(selection) {
  const feature = selection.feature || activeMunicipalityPointsLayer()?.features?.[selection.index];
  if (!feature) {
    selectedName.textContent = "None";
    faultDetails.replaceChildren(detailRow("Status", "Selected municipality metadata was not found"));
    return;
  }

  selectedName.textContent = feature.name || "Municipality";
  const rows = [detailRow("Type", "Municipality")];
  const properties = feature.properties || {};
  for (const [field, value] of Object.entries(properties)) {
    rows.push(detailRow(municipalityFieldLabel(field), value || "Unknown"));
  }
  faultDetails.replaceChildren(...rows);
}

function censusTractPropertyMap(feature) {
  const table = state.censusTractProperties || activeCensusTractFillLayer()?.propertyTable;
  const row = table?.rows?.[feature?.propertyIndex];
  if (!table || !Array.isArray(row)) {
    return {};
  }
  const properties = {};
  table.fields.forEach((field, index) => {
    properties[field] = row[index];
  });
  return properties;
}

function censusPropertyLabel(field) {
  const table = state.censusTractProperties || activeCensusTractFillLayer()?.propertyTable;
  return table?.fieldLabels?.[field] || metadataFieldLabel(field);
}

function renderCensusTractDetails(selection) {
  const layer = activeCensusTractFillLayer() || state.censusTractFill || state.drapedCensusTractFill;
  const feature = selection.feature || layer?.features?.[selection.index];
  if (!feature) {
    selectedName.textContent = "None";
    faultDetails.replaceChildren(detailRow("Status", "Selected census tract metadata was not found"));
    return;
  }

  const metric = censusMetricDefinition(layer);
  const metricValue = censusMetricValue(feature, layer, metric?.id);
  const properties = censusTractPropertyMap(feature);
  selectedName.textContent = feature.name || feature.geoid || "Census tract";
  const rows = [
    detailRow("Type", "Census tract"),
    detailRow("GEOID", feature.geoid || "Unknown"),
    detailRow("County", feature.county || "Unknown"),
    detailRow("Population", Number(feature.population || 0).toLocaleString()),
    detailRow("Density", `${formatNumber(feature.populationDensityPerSqMi, 2)} per sq mi`),
    detailRow("Land area", `${formatNumber(feature.landAreaSqMi, 3)} sq mi`),
    detailRow("Color metric", metric?.label || state.censusTractMetric),
    detailRow("Metric value", Number.isFinite(metricValue) ? formatNumber(metricValue, 2) : "Unknown"),
    detailRow("Polygons", Number(feature.polygonCount || 0).toLocaleString()),
    detailRow("Triangles", Number(feature.triangleCount || 0).toLocaleString()),
    detailRow("Latitude", formatRange(feature.bounds?.lat, 5)),
    detailRow("Longitude", formatRange(feature.bounds?.lon, 5)),
    detailRow("Elevation", formatRange(feature.bounds?.elevationMeters, 1))
  ];

  for (const [field, value] of Object.entries(properties)) {
    rows.push(detailRow(censusPropertyLabel(field), value === "" ? "Unknown" : String(value)));
  }
  faultDetails.replaceChildren(...rows);
}

function renderWaterFeatureDetails(selection) {
  const feature = selection.feature;
  const label = selection.type === "lake" ? "Lake" : "River";
  if (!feature) {
    selectedName.textContent = "None";
    faultDetails.replaceChildren(detailRow("Status", `Selected ${label.toLowerCase()} metadata was not found`));
    return;
  }

  selectedName.textContent = feature.name || label;
  faultDetails.replaceChildren(
    detailRow("Type", label),
    detailRow("Name", feature.name || "Unnamed"),
    detailRow("Class", feature.type || "Unknown"),
    detailRow("Segments", Number(feature.segmentCount || 0).toLocaleString()),
    detailRow("Latitude", formatRange(feature.bounds?.lat, 5)),
    detailRow("Longitude", formatRange(feature.bounds?.lon, 5))
  );
}

function renderGeologyDetails(selection) {
  const unit = selection.unit || activeGeologyLayer()?.unitMap?.get(selection.id);
  if (!unit) {
    selectedName.textContent = "None";
    faultDetails.replaceChildren(detailRow("Status", "Selected rock unit metadata was not found"));
    return;
  }

  selectedName.textContent = unit.label || unit.id || "Rock unit";
  faultDetails.replaceChildren(
    detailRow("Type", "Rock unit"),
    detailRow("Unit", unit.id || "Unknown"),
    detailRow("Lithology", unit.lithology || "Unknown"),
    detailRow("Age", unit.age || "Unknown"),
    detailRow("Description", unit.description || "No description"),
    detailRow("Features", Number(unit.featureCount || 0).toLocaleString()),
    detailRow("Polygons", Number(unit.polygonCount || 0).toLocaleString()),
    detailRow("Source points", Number(unit.sourcePointCount || 0).toLocaleString()),
    detailRow("Triangles", Number(unit.triangleCount || 0).toLocaleString()),
    colorDetailRow("Color", getGeologyUnitColor(unit)),
    detailRow("Latitude", formatRange(unit.bounds?.lat, 5)),
    detailRow("Longitude", formatRange(unit.bounds?.lon, 5))
  );
}

function renderOilGasFieldDetails(selection) {
  const feature = selection.feature || (
    state.showDrapedOilGasFields ? state.drapedOilGasFieldFill : state.oilGasFieldFill
  )?.features?.[selection.index];
  if (!feature) {
    selectedName.textContent = "None";
    faultDetails.replaceChildren(detailRow("Status", "Selected oil/gas field metadata was not found"));
    return;
  }

  selectedName.textContent = feature.name || "Oil/gas field";
  const rows = [
    detailRow("Type", "Oil/gas field"),
    detailRow("Name", feature.name || "Unknown"),
    detailRow("Field code", feature.fieldCode || "Unknown"),
    detailRow("District", feature.district || "Unknown"),
    detailRow("Area", `${formatNumber(feature.areaSqMi, 2)} sq mi / ${Number(feature.areaAcres || 0).toLocaleString()} acres`),
    detailRow("Polygons", Number(feature.polygonCount || 0).toLocaleString()),
    detailRow("Triangles", Number(feature.triangleCount || 0).toLocaleString()),
    detailRow("Latitude", formatRange(feature.bounds?.lat, 5)),
    detailRow("Longitude", formatRange(feature.bounds?.lon, 5)),
    detailRow("Elevation", formatRange(feature.bounds?.elevationMeters, 1))
  ];

  for (const [field, value] of Object.entries(feature.properties || {})) {
    rows.push(detailRow(metadataFieldLabel(field), value === "" ? "Unknown" : String(value)));
  }
  faultDetails.replaceChildren(...rows);
}

function renderOffshoreOilLeaseDetails(selection) {
  const feature = selection.feature || (
    state.showDrapedOffshoreOilLeases ? state.drapedOffshoreOilLeaseFill : state.offshoreOilLeaseFill
  )?.features?.[selection.index];
  if (!feature) {
    selectedName.textContent = "None";
    faultDetails.replaceChildren(detailRow("Status", "Selected offshore oil lease metadata was not found"));
    return;
  }

  selectedName.textContent = feature.name || "Offshore oil lease";
  const rows = [
    detailRow("Type", "Offshore oil lease"),
    detailRow("PRC", feature.prc || "Unknown"),
    detailRow("Status", feature.status || "Unknown"),
    detailRow("Notes", feature.notes || "None"),
    detailRow("Polygons", Number(feature.polygonCount || 0).toLocaleString()),
    detailRow("Triangles", Number(feature.triangleCount || 0).toLocaleString()),
    detailRow("Latitude", formatRange(feature.bounds?.lat, 5)),
    detailRow("Longitude", formatRange(feature.bounds?.lon, 5)),
    detailRow("Elevation", formatRange(feature.bounds?.elevationMeters, 1))
  ];

  for (const [field, value] of Object.entries(feature.properties || {})) {
    rows.push(detailRow(metadataFieldLabel(field), value === "" ? "Unknown" : String(value)));
  }
  faultDetails.replaceChildren(...rows);
}

function renderOilPlatformDetails(selection) {
  const feature = selection.feature || activeOilPlatformsLayer()?.features?.[selection.index];
  if (!feature) {
    selectedName.textContent = "None";
    faultDetails.replaceChildren(detailRow("Status", "Selected oil platform metadata was not found"));
    return;
  }

  selectedName.textContent = feature.name || "Oil platform";
  const rows = [
    detailRow("Type", "Offshore oil platform"),
    detailRow("Name", feature.name || "Unknown"),
    detailRow("Jurisdiction", feature.jurisdiction || "Unknown"),
    detailRow("Object ID", feature.objectId || "Unknown"),
    detailRow("Latitude", formatNumber(feature.lat, 6)),
    detailRow("Longitude", formatNumber(feature.lon, 6))
  ];

  for (const [field, value] of Object.entries(feature.properties || {})) {
    rows.push(detailRow(metadataFieldLabel(field), value === "" ? "Unknown" : String(value)));
  }
  faultDetails.replaceChildren(...rows);
}

function renderPowerPlantDetails(selection) {
  const feature = selection.feature || activePowerPlantsLayer()?.features?.[selection.index];
  if (!feature) {
    selectedName.textContent = "None";
    faultDetails.replaceChildren(detailRow("Status", "Selected power plant metadata was not found"));
    return;
  }

  selectedName.textContent = feature.name || "Power plant";
  const rows = [
    detailRow("Type", "Power plant"),
    detailRow("Plant", feature.name || "Unknown"),
    detailRow("CEC plant ID", feature.cecPlantId || "Unknown"),
    detailRow("Operator", feature.operator || "Unknown"),
    detailRow("County", feature.county || "Unknown"),
    detailRow("Capacity", `${formatNumber(feature.capacityMw, 2)} MW`),
    detailRow("Primary source", feature.primaryEnergySourceLabel || feature.primaryEnergySource || "Unknown"),
    detailRow("Category", feature.categoryLabel || feature.category || "Unknown"),
    detailRow("Units", feature.units || "Unknown"),
    detailRow("Start date", feature.startDate || "Unknown"),
    detailRow("Latitude", formatNumber(feature.lat, 6)),
    detailRow("Longitude", formatNumber(feature.lon, 6))
  ];

  for (const [field, value] of Object.entries(feature.properties || {})) {
    rows.push(detailRow(metadataFieldLabel(field), value === "" ? "Unknown" : String(value)));
  }
  faultDetails.replaceChildren(...rows);
}

function renderTransmissionLineDetails(selection) {
  const feature = selection.feature || activeTransmissionLinesLayer()?.features?.[selection.index];
  if (!feature) {
    selectedName.textContent = "None";
    faultDetails.replaceChildren(detailRow("Status", "Selected transmission line metadata was not found"));
    return;
  }

  selectedName.textContent = feature.name || "Transmission line";
  const rows = [
    detailRow("Type", "Transmission line"),
    detailRow("Name", feature.name || "Unknown"),
    detailRow("Voltage", feature.kv === null || feature.kv === undefined ? "Unknown" : `${formatNumber(feature.kv, 1)} kV`),
    detailRow("Owner", feature.owner || "Unknown"),
    detailRow("Status", feature.status || "Unknown"),
    detailRow("Circuit", feature.circuit || "Unknown"),
    detailRow("Line type", feature.lineType || "Unknown"),
    detailRow("Legend", feature.legend || "Unknown"),
    detailRow("Length", feature.lengthMiles === null || feature.lengthMiles === undefined ? "Unknown" : `${formatNumber(feature.lengthMiles, 2)} miles`),
    detailRow("Source", feature.source || "Unknown"),
    detailRow("Segments", Number(feature.segmentCount || 0).toLocaleString()),
    detailRow("Latitude", formatRange(feature.bounds?.lat, 5)),
    detailRow("Longitude", formatRange(feature.bounds?.lon, 5)),
    detailRow("Elevation", formatRange(feature.bounds?.elevationMeters, 1))
  ];

  if (feature.comments) {
    rows.push(detailRow("Comments", feature.comments));
  }
  for (const [field, value] of Object.entries(feature.properties || {})) {
    rows.push(detailRow(metadataFieldLabel(field), value === "" ? "Unknown" : String(value)));
  }
  faultDetails.replaceChildren(...rows);
}

function renderFireDetails(selection) {
  const feature = selection.feature || (state.showDrapedActiveFires ? state.drapedActiveFires : state.activeFires)?.features?.[selection.index];
  if (!feature) {
    selectedName.textContent = "None";
    faultDetails.replaceChildren(detailRow("Status", "Selected fire detection metadata was not found"));
    return;
  }

  selectedName.textContent = "Active fire detection";
  faultDetails.replaceChildren(
    detailRow("Type", "NASA FIRMS active fire"),
    detailRow("Sensor", feature.sensor || "Unknown"),
    detailRow("Detection time", feature.detectionTime || "Unknown"),
    detailRow("Age", feature.ageCategory || "Unknown"),
    detailRow("Confidence", feature.confidence || "Unknown"),
    detailRow("Day/night", feature.dayNight || "Unknown"),
    detailRow("FRP", `${formatNumber(feature.frpMw, 2)} MW`),
    detailRow("Brightness", `${formatNumber(feature.brightnessK, 2)} K`),
    detailRow("Scan / track", `${formatNumber(feature.scanKm, 2)} km / ${formatNumber(feature.trackKm, 2)} km`),
    detailRow("Latitude", formatNumber(feature.lat, 6)),
    detailRow("Longitude", formatNumber(feature.lon, 6))
  );
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

function colorDetailRow(label, color, key = "") {
  const row = detailRow(label, "", key);
  const dd = row.querySelector("dd");
  dd.replaceChildren(colorValue(color));
  return row;
}

function colorValue(color) {
  const normalized = normalizeHexColor(color);
  const wrapper = document.createElement("span");
  wrapper.className = "detail-color-value";

  const swatch = document.createElement("span");
  swatch.className = "detail-color-swatch";
  swatch.style.background = normalized;
  swatch.setAttribute("aria-hidden", "true");

  const text = document.createElement("span");
  text.textContent = normalized;
  wrapper.append(swatch, text);
  return wrapper;
}

function formatNumber(value, digits = 3) {
  const number = Number(value);
  return Number.isFinite(number) ? number.toFixed(digits) : "Unknown";
}

function formatRange(range, digits = 3) {
  if (!Array.isArray(range) || range.length < 2) {
    return "Unknown";
  }
  const first = Number(range[0]);
  const second = Number(range[1]);
  if (!Number.isFinite(first) || !Number.isFinite(second)) {
    return "Unknown";
  }
  return `${first.toFixed(digits)} to ${second.toFixed(digits)}`;
}

function selectionTypeLabel(type) {
  return {
    fault: "fault",
    healthcare: "healthcare facility",
    municipality: "municipality",
    census: "census tract",
    fire: "active fire",
    lake: "lake",
    river: "river",
    geology: "rock unit",
    oilgas: "oil/gas field",
    offshorelease: "offshore oil lease",
    oilplatform: "oil platform",
    powerplant: "power plant",
    transmission: "transmission line"
  }[type] || "entity";
}

function metadataFieldLabel(field) {
  return String(field)
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function municipalityFieldLabel(field) {
  return String(field)
    .split("_")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function healthcareCategoryLabel(categoryId) {
  const layer = activeHealthcareFacilitiesLayer() || state.healthcareFacilities || state.drapedHealthcareFacilities;
  const category = layer?.categories?.find((candidate) => candidate.id === categoryId);
  return category?.label || categoryId || "Unknown";
}

async function ensureSelectionLayerDisplayed(type) {
  if (type === "fault") {
    if (state.visibleIds.size === 0) {
      showAllFaultsInput.checked = true;
      await setAllFaultsVisible(true);
    }
    syncAllFaultsInput();
    return;
  }

  if (type === "healthcare") {
    state.showHealthcareFacilities = true;
    showHealthcareFacilitiesInput.checked = true;
    await loadCurrentHealthcareFacilities();
    updateHealthcareLabels();
    markRenderDirty();
    return;
  }

  if (type === "municipality") {
    state.showMunicipalityPoints = true;
    showMunicipalityPointsInput.checked = true;
    await loadCurrentMunicipalityPoints();
    markRenderDirty();
    return;
  }

  if (type === "census") {
    state.showCensusTracts = true;
    state.showCensusTractFill = true;
    showCensusTractsInput.checked = true;
    showCensusTractFillInput.checked = true;
    await loadCurrentCensusTractVisuals();
    markRenderDirty();
    return;
  }

  if (type === "fire") {
    state.showActiveFires = true;
    showActiveFiresInput.checked = true;
    await loadCurrentActiveFires();
    markRenderDirty();
    return;
  }

  if (type === "lake") {
    state.showLakes = true;
    state.showLakeFill = true;
    showLakesInput.checked = true;
    showLakeFillInput.checked = true;
    await Promise.all([loadCurrentLakes(), loadCurrentLakeFill()]);
    markRenderDirty();
    return;
  }

  if (type === "river") {
    state.showRivers = true;
    showRiversInput.checked = true;
    await loadCurrentRivers();
    markRenderDirty();
    return;
  }

  if (type === "geology") {
    state.showGeology = true;
    showGeologyInput.checked = true;
    await loadCurrentGeology();
    syncGeologyUnitControls();
    markRenderDirty();
    return;
  }

  if (type === "oilgas") {
    state.showOilGasFields = true;
    state.showOilGasFieldFill = true;
    showOilGasFieldsInput.checked = true;
    showOilGasFieldFillInput.checked = true;
    await loadCurrentOilGasVisuals();
    markRenderDirty();
    return;
  }

  if (type === "offshorelease") {
    state.showOffshoreOilLeases = true;
    state.showOffshoreOilLeaseFill = true;
    showOffshoreOilLeasesInput.checked = true;
    showOffshoreOilLeaseFillInput.checked = true;
    await loadCurrentOffshoreOilLeaseVisuals();
    markRenderDirty();
    return;
  }

  if (type === "oilplatform") {
    state.showOilPlatforms = true;
    showOilPlatformsInput.checked = true;
    await loadCurrentOilPlatforms();
    markRenderDirty();
    return;
  }

  if (type === "powerplant") {
    state.showPowerPlants = true;
    showPowerPlantsInput.checked = true;
    await loadCurrentPowerPlants();
    markRenderDirty();
    return;
  }

  if (type === "transmission") {
    state.showTransmissionLines = true;
    showTransmissionLinesInput.checked = true;
    await loadCurrentTransmissionLines();
    markRenderDirty();
  }
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
  const targetWorld = navigationPivotForGeo(state.scene.geoCenter);
  state.camera.pivotWorld = targetWorld;
  state.camera.targetWorld = [...targetWorld];
  state.camera.focusGeo = { ...state.scene.geoCenter };
  state.camera.upWorld = basis.north;
  state.camera.eyeWorld = [
    targetWorld[0] + basis.up[0] * state.scene.radius * 2.35,
    targetWorld[1] + basis.up[1] * state.scene.radius * 2.35,
    targetWorld[2] + basis.up[2] * state.scene.radius * 2.35
  ];
  showStatus("North-up centered view");
}

function setNorthUpCurrentView() {
  const focusGeo = { ...state.camera.focusGeo };
  const pivotWorld = navigationPivotForGeo(focusGeo);
  const basis = basisForLatLon(focusGeo.lat, focusGeo.lon);
  const distanceToTarget = Math.max(
    vectorLength(subtractVectors(state.camera.eyeWorld, state.camera.targetWorld)),
    state.scene.radius * 0.0001
  );

  state.camera.pivotWorld = pivotWorld;
  state.camera.targetWorld = [...pivotWorld];
  state.camera.focusGeo = focusGeo;
  state.camera.upWorld = basis.north;
  state.camera.eyeWorld = [
    pivotWorld[0] + basis.up[0] * distanceToTarget,
    pivotWorld[1] + basis.up[1] * distanceToTarget,
    pivotWorld[2] + basis.up[2] * distanceToTarget
  ];
  showStatus("North-up current view");
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
    markRenderDirty();
    return true;
  }
  return false;
}

function drawScene() {
  const gl = state.gl;
  resizeCanvas();
  syncTerrainDrapingState();
  const cameraMoving = cameraIsInteracting();
  if (!state.needsRender && !cameraMoving) {
    window.requestAnimationFrame(drawScene);
    return;
  }
  state.needsRender = false;
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
  if ((state.showPublicRoads || state.publicRoadSelectedIds.size > 0) && !cameraMoving) {
    updatePublicRoadTilesForView();
  }

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

  const drawFlatHighways = state.showRoads && !state.showDrapedHighways && state.roads;
  const drawDrapedHighways = state.showRoads && state.showDrapedHighways && state.drapedHighways;
  const drawFlatStateBoundary = state.showStateBoundary && !state.showDrapedStateBoundary && state.stateBoundary;
  const drawDrapedStateBoundary =
    state.showStateBoundary && state.showDrapedStateBoundary && state.drapedStateBoundary;
  const drawFlatLakeFill = state.showLakeFill && !state.showDrapedLakes && state.lakeFill;
  const drawDrapedLakeFill = state.showLakeFill && state.showDrapedLakes && state.drapedLakeFill;
  const drawFlatLakes = state.showLakes && !state.showDrapedLakes && state.lakes;
  const drawDrapedLakes = state.showLakes && state.showDrapedLakes && state.drapedLakes;
  const drawFlatPoliticalBoundaries =
    state.showPoliticalBoundaries && !state.showDrapedPoliticalBoundaries && state.politicalBoundaries;
  const drawDrapedPoliticalBoundaries =
    state.showPoliticalBoundaries && state.showDrapedPoliticalBoundaries && state.drapedPoliticalBoundaries;
  const drawFlatPlaceBoundaries =
    state.showPlaceBoundaries && !state.showDrapedPlaceBoundaries && activeFlatPlaceBoundaryLayer();
  const drawDrapedPlaceBoundaries =
    state.showPlaceBoundaries && state.showDrapedPlaceBoundaries && activeDrapedPlaceBoundaryLayer();
  const drawFlatMunicipalPlaceFill =
    state.showPlaceBoundaries
    && state.showMunicipalPlaceBoundaries
    && state.showMunicipalPlaceFill
    && !state.showDrapedPlaceBoundaries
    && activeFlatMunicipalPlaceFillLayer();
  const drawDrapedMunicipalPlaceFill =
    state.showPlaceBoundaries
    && state.showMunicipalPlaceBoundaries
    && state.showMunicipalPlaceFill
    && state.showDrapedPlaceBoundaries
    && activeDrapedMunicipalPlaceFillLayer();
  const drawFlatRivers = state.showRivers && !state.showDrapedRivers && state.rivers;
  const drawDrapedRivers = state.showRivers && state.showDrapedRivers && state.drapedRivers;
  const drawFlatShoreline = state.showShoreline && !state.showDrapedShoreline && state.shoreline;
  const drawDrapedShoreline =
    state.showShoreline && state.showDrapedShoreline && state.drapedShoreline;
  const drawFlatGeology = state.showGeology && !state.showDrapedGeology && state.geology;
  const drawDrapedGeology =
    state.showGeology && state.showDrapedGeology && state.drapedGeology && state.terrain;
  const drawFlatOilGasFieldFill =
    state.showOilGasFields
    && state.showOilGasFieldFill
    && !state.showDrapedOilGasFields
    && state.oilGasFieldFill;
  const drawDrapedOilGasFieldFill =
    state.showOilGasFields
    && state.showOilGasFieldFill
    && state.showDrapedOilGasFields
    && state.drapedOilGasFieldFill;
  const drawFlatOilGasFields =
    state.showOilGasFields && !state.showDrapedOilGasFields && state.oilGasFields;
  const drawDrapedOilGasFields =
    state.showOilGasFields && state.showDrapedOilGasFields && state.drapedOilGasFields;
  const drawFlatOffshoreOilLeaseFill =
    state.showOffshoreOilLeases
    && state.showOffshoreOilLeaseFill
    && !state.showDrapedOffshoreOilLeases
    && state.offshoreOilLeaseFill;
  const drawDrapedOffshoreOilLeaseFill =
    state.showOffshoreOilLeases
    && state.showOffshoreOilLeaseFill
    && state.showDrapedOffshoreOilLeases
    && state.drapedOffshoreOilLeaseFill;
  const drawFlatOffshoreOilLeases =
    state.showOffshoreOilLeases && !state.showDrapedOffshoreOilLeases && state.offshoreOilLeases;
  const drawDrapedOffshoreOilLeases =
    state.showOffshoreOilLeases && state.showDrapedOffshoreOilLeases && state.drapedOffshoreOilLeases;
  const drawFlatOilPlatforms =
    state.showOilPlatforms && !state.showDrapedOilPlatforms && state.oilPlatforms;
  const drawDrapedOilPlatforms =
    state.showOilPlatforms && state.showDrapedOilPlatforms && state.drapedOilPlatforms;
  const drawFlatPowerPlants =
    state.showPowerPlants && !state.showDrapedPowerPlants && state.powerPlants;
  const drawDrapedPowerPlants =
    state.showPowerPlants && state.showDrapedPowerPlants && state.drapedPowerPlants;
  const drawFlatTransmissionLines =
    state.showTransmissionLines && !state.showDrapedTransmissionLines && state.transmissionLines;
  const drawDrapedTransmissionLines =
    state.showTransmissionLines && state.showDrapedTransmissionLines && state.drapedTransmissionLines;
  const drawFlatActiveFireFootprints =
    state.showActiveFires
    && state.showActiveFireFootprints
    && !state.showDrapedActiveFires
    && state.activeFireFootprints;
  const drawDrapedActiveFireFootprints =
    state.showActiveFires
    && state.showActiveFireFootprints
    && state.showDrapedActiveFires
    && state.drapedActiveFireFootprints;
  const drawFlatActiveFires = state.showActiveFires && !state.showDrapedActiveFires && state.activeFires;
  const drawDrapedActiveFires = state.showActiveFires && state.showDrapedActiveFires && state.drapedActiveFires;
  const drawFlatTsunamiHazard =
    state.showTsunamiHazard && !state.showDrapedTsunamiHazard && state.tsunamiHazard;
  const drawDrapedTsunamiHazard =
    state.showTsunamiHazard && state.showDrapedTsunamiHazard && state.drapedTsunamiHazard;
  const drawFlatTsunamiHazardShade =
    state.showTsunamiHazard
    && state.showTsunamiHazardShade
    && !state.showDrapedTsunamiHazard
    && state.tsunamiHazardShade;
  const drawDrapedTsunamiHazardShade =
    state.showTsunamiHazard
    && state.showTsunamiHazardShade
    && state.showDrapedTsunamiHazard
    && state.drapedTsunamiHazardShade;
  const drawFlatHealthcareFacilities =
    state.showHealthcareFacilities
    && !state.showDrapedHealthcareFacilities
    && state.healthcareFacilities;
  const drawDrapedHealthcareFacilities =
    state.showHealthcareFacilities
    && state.showDrapedHealthcareFacilities
    && state.drapedHealthcareFacilities;
  const drawFlatMunicipalityPoints =
    state.showMunicipalityPoints
    && !state.showDrapedMunicipalityPoints
    && state.municipalityPoints;
  const drawDrapedMunicipalityPoints =
    state.showMunicipalityPoints
    && state.showDrapedMunicipalityPoints
    && state.drapedMunicipalityPoints;
  const drawFlatCensusTractFill =
    state.showCensusTracts
    && state.showCensusTractFill
    && !state.showDrapedCensusTracts
    && state.censusTractFill;
  const drawDrapedCensusTractFill =
    state.showCensusTracts
    && state.showCensusTractFill
    && state.showDrapedCensusTracts
    && state.drapedCensusTractFill;
  const drawFlatCensusTracts =
    state.showCensusTracts && !state.showDrapedCensusTracts && state.censusTractBoundaries;
  const drawDrapedCensusTracts =
    state.showCensusTracts && state.showDrapedCensusTracts && state.drapedCensusTractBoundaries;
  const drawAllPublicRoads = state.showPublicRoads && state.publicRoads && publicRoadsAreCloseEnough();
  const drawFlatSelectedPublicRoads = Boolean(state.publicRoadSelectedLayer);
  const drawDrapedSelectedPublicRoads = Boolean(state.drapedPublicRoadSelectedLayer);

  if (
    drawFlatStateBoundary ||
    drawDrapedStateBoundary ||
    drawFlatPoliticalBoundaries ||
    drawDrapedPoliticalBoundaries ||
    drawFlatPlaceBoundaries ||
    drawDrapedPlaceBoundaries ||
    drawFlatMunicipalPlaceFill ||
    drawDrapedMunicipalPlaceFill ||
    drawFlatLakeFill ||
    drawDrapedLakeFill ||
    drawFlatLakes ||
    drawDrapedLakes ||
    drawFlatRivers ||
    drawDrapedRivers ||
    drawFlatShoreline ||
    drawDrapedShoreline ||
    drawFlatGeology ||
    drawDrapedGeology ||
    drawFlatOilGasFieldFill ||
    drawDrapedOilGasFieldFill ||
    drawFlatOilGasFields ||
    drawDrapedOilGasFields ||
    drawFlatOffshoreOilLeaseFill ||
    drawDrapedOffshoreOilLeaseFill ||
    drawFlatOffshoreOilLeases ||
    drawDrapedOffshoreOilLeases ||
    drawFlatOilPlatforms ||
    drawDrapedOilPlatforms ||
    drawFlatPowerPlants ||
    drawDrapedPowerPlants ||
    drawFlatTransmissionLines ||
    drawDrapedTransmissionLines ||
    drawFlatActiveFireFootprints ||
    drawDrapedActiveFireFootprints ||
    drawFlatActiveFires ||
    drawDrapedActiveFires ||
    drawFlatTsunamiHazardShade ||
    drawDrapedTsunamiHazardShade ||
    drawFlatTsunamiHazard ||
    drawDrapedTsunamiHazard ||
    drawFlatHealthcareFacilities ||
    drawDrapedHealthcareFacilities ||
    drawFlatMunicipalityPoints ||
    drawDrapedMunicipalityPoints ||
    drawFlatCensusTractFill ||
    drawDrapedCensusTractFill ||
    drawFlatCensusTracts ||
    drawDrapedCensusTracts ||
    drawFlatHighways ||
    drawDrapedHighways ||
    drawAllPublicRoads ||
    drawFlatSelectedPublicRoads ||
    drawDrapedSelectedPublicRoads
  ) {
    gl.disable(gl.DEPTH_TEST);
    gl.depthMask(false);
    if (drawFlatGeology) {
      drawGroupedFillLayer(state.geology, state.geologyOpacity);
    }
    if (drawDrapedGeology) {
      drawTerrainIndexedGroupedFillLayer(state.drapedGeology, state.terrain, state.geologyOpacity);
    }
    if (drawFlatOilGasFieldFill) {
      drawFeatureFillLayer(state.oilGasFieldFill, state.oilGasFieldOpacity, () => state.oilGasFieldColor);
    }
    if (drawDrapedOilGasFieldFill) {
      drawDrapedFeatureFillLayer(state.drapedOilGasFieldFill, state.oilGasFieldOpacity, () => state.oilGasFieldColor);
    }
    if (drawFlatOffshoreOilLeaseFill) {
      drawFeatureFillLayer(
        state.offshoreOilLeaseFill,
        state.offshoreOilLeaseOpacity,
        () => state.offshoreOilLeaseColor
      );
    }
    if (drawDrapedOffshoreOilLeaseFill) {
      drawDrapedFeatureFillLayer(
        state.drapedOffshoreOilLeaseFill,
        state.offshoreOilLeaseOpacity,
        () => state.offshoreOilLeaseColor
      );
    }
    if (drawFlatActiveFireFootprints) {
      drawFillLayer(state.activeFireFootprints, [...hexToRgb(state.activeFireColor), 0.32]);
    }
    if (drawDrapedActiveFireFootprints) {
      drawDrapedFillLayer(state.drapedActiveFireFootprints, [...hexToRgb(state.activeFireColor), 0.38]);
    }
    if (drawFlatTsunamiHazardShade) {
      drawFillLayer(state.tsunamiHazardShade, [
        ...hexToRgb(state.tsunamiHazardColor),
        state.tsunamiHazardOpacity
      ]);
    }
    if (drawDrapedTsunamiHazardShade) {
      drawDrapedFillLayer(state.drapedTsunamiHazardShade, [
        ...hexToRgb(state.tsunamiHazardColor),
        state.tsunamiHazardOpacity
      ]);
    }
    if (drawFlatCensusTractFill) {
      drawCensusMetricFillLayer(state.censusTractFill, state.censusTractOpacity);
    }
    if (drawDrapedCensusTractFill) {
      drawDrapedCensusMetricFillLayer(state.drapedCensusTractFill, state.censusTractOpacity);
    }
    if (drawFlatTsunamiHazard) {
      drawIndexedBoundaryLayer(state.tsunamiHazard, [
        ...hexToRgb(state.tsunamiHazardColor),
        Math.max(0.86, state.tsunamiHazardOpacity)
      ]);
    }
    if (drawDrapedTsunamiHazard) {
      drawDrapedIndexedLineLayer(
        state.drapedTsunamiHazard,
        [...hexToRgb(state.tsunamiHazardColor), Math.max(0.9, state.tsunamiHazardOpacity)]
      );
    }
    if (drawFlatActiveFires) {
      drawPointLayer(state.activeFires, [...hexToRgb(state.activeFireColor), 0.96], {
        pointScale: state.activeFireScale,
        categoryMask: allPointCategoriesVisibleMask(),
        valueDivisor: 15
      });
    }
    if (drawDrapedActiveFires) {
      drawDrapedPointLayer(state.drapedActiveFires, [...hexToRgb(state.activeFireColor), 0.98], {
        pointScale: state.activeFireScale,
        categoryMask: allPointCategoriesVisibleMask(),
        valueDivisor: 15
      });
    }
    if (drawFlatPowerPlants) {
      drawPointLayer(state.powerPlants, [...hexToRgb(state.powerPlantColor), 0.92], {
        pointScale: state.powerPlantScale,
        categoryMask: allPointCategoriesVisibleMask(),
        valueDivisor: 18
      });
    }
    if (drawDrapedPowerPlants) {
      drawDrapedPointLayer(state.drapedPowerPlants, [...hexToRgb(state.powerPlantColor), 0.96], {
        pointScale: state.powerPlantScale,
        categoryMask: allPointCategoriesVisibleMask(),
        valueDivisor: 18
      });
    }
    if (drawFlatTransmissionLines) {
      drawBoundaryLayer(state.transmissionLines, [...hexToRgb(state.transmissionLineColor), state.transmissionLineOpacity]);
    }
    if (drawDrapedTransmissionLines) {
      drawDrapedLineLayer(state.drapedTransmissionLines, [
        ...hexToRgb(state.transmissionLineColor),
        Math.min(1, state.transmissionLineOpacity + 0.06)
      ]);
    }
    if (drawFlatOilPlatforms) {
      drawPointLayer(state.oilPlatforms, [...hexToRgb(state.oilPlatformColor), 0.94], {
        pointScale: state.oilPlatformScale,
        categoryMask: allPointCategoriesVisibleMask(),
        valueDivisor: 1
      });
    }
    if (drawDrapedOilPlatforms) {
      drawDrapedPointLayer(state.drapedOilPlatforms, [...hexToRgb(state.oilPlatformColor), 0.98], {
        pointScale: state.oilPlatformScale,
        categoryMask: allPointCategoriesVisibleMask(),
        valueDivisor: 1
      });
    }
    if (drawFlatHealthcareFacilities) {
      drawPointLayer(state.healthcareFacilities, [...hexToRgb(state.healthcareColor), 0.92]);
    }
    if (drawDrapedHealthcareFacilities) {
      drawDrapedPointLayer(state.drapedHealthcareFacilities, [...hexToRgb(state.healthcareColor), 0.94]);
    }
    if (drawFlatMunicipalityPoints) {
      drawPointLayer(
        state.municipalityPoints,
        [...hexToRgb(state.municipalityColor), 0.92],
        {
          pointScale: state.municipalityPopulationScale,
          categoryMask: allPointCategoriesVisibleMask(),
          valueDivisor: 650
        }
      );
    }
    if (drawDrapedMunicipalityPoints) {
      drawDrapedPointLayer(
        state.drapedMunicipalityPoints,
        [...hexToRgb(state.municipalityColor), 0.96],
        {
          pointScale: state.municipalityPopulationScale,
          categoryMask: allPointCategoriesVisibleMask(),
          valueDivisor: 650
        }
      );
    }
    if (drawFlatCensusTracts) {
      drawIndexedBoundaryLayer(state.censusTractBoundaries, [...hexToRgb(state.censusTractLineColor), 0.46]);
    }
    if (drawDrapedCensusTracts) {
      drawDrapedIndexedLineLayer(state.drapedCensusTractBoundaries, [
        ...hexToRgb(state.censusTractLineColor),
        0.56
      ]);
    }
    if (drawFlatLakeFill) {
      drawFillLayer(state.lakeFill, [...hexToRgb(state.lakeColor), 0.46]);
    }
    if (drawDrapedLakeFill) {
      drawDrapedFillLayer(state.drapedLakeFill, [...hexToRgb(state.lakeColor), 0.5]);
    }
    if (drawFlatLakes) {
      drawBoundaryLayer(state.lakes, [...hexToRgb(state.lakeColor), 0.82]);
    }
    if (drawDrapedLakes) {
      drawDrapedLineLayer(state.drapedLakes, [...hexToRgb(state.lakeColor), 0.9]);
    }
    if (drawFlatRivers) {
      drawBoundaryLayer(state.rivers, [...hexToRgb(state.riverColor), 0.88]);
    }
    if (drawDrapedRivers) {
      drawDrapedLineLayer(state.drapedRivers, [...hexToRgb(state.riverColor), 0.96]);
    }
    if (drawFlatShoreline) {
      drawBoundaryLayer(state.shoreline, [...hexToRgb(state.shorelineColor), 0.86]);
    }
    if (drawDrapedShoreline) {
      drawDrapedLineLayer(state.drapedShoreline, [...hexToRgb(state.shorelineColor), 0.96]);
    }
    if (drawFlatHighways) {
      drawBoundaryLayer(state.roads, [...hexToRgb(state.roadColor), 0.86]);
    }
    if (drawDrapedHighways) {
      drawDrapedLineLayer(state.drapedHighways, [...hexToRgb(state.roadColor), 0.96]);
    }
    if (drawAllPublicRoads) {
      for (const tileId of state.publicRoadActiveTileIds) {
        const tile = state.showDrapedPublicRoads
          ? state.drapedPublicRoadTiles.get(tileId)
          : state.publicRoadTiles.get(tileId);
        if (tile) {
          if (state.showDrapedPublicRoads) {
            drawDrapedLineLayer(tile, [...hexToRgb(state.publicRoadColor), 0.48]);
          } else {
            drawBoundaryLayer(tile, [...hexToRgb(state.publicRoadColor), 0.38]);
          }
        }
      }
    }
    if (drawFlatSelectedPublicRoads) {
      drawBoundaryLayer(state.publicRoadSelectedLayer, [...hexToRgb(state.publicRoadColor), 0.96]);
    }
    if (drawDrapedSelectedPublicRoads) {
      drawDrapedLineLayer(state.drapedPublicRoadSelectedLayer, [...hexToRgb(state.publicRoadColor), 0.98]);
    }
    if (drawFlatStateBoundary) {
      drawBoundaryLayer(state.stateBoundary, [...hexToRgb(state.stateBoundaryColor), 0.86]);
    }
    if (drawDrapedStateBoundary) {
      drawDrapedLineLayer(state.drapedStateBoundary, [...hexToRgb(state.stateBoundaryColor), 0.96]);
    }
    if (drawFlatPoliticalBoundaries) {
      drawBoundaryLayer(state.politicalBoundaries, [...hexToRgb(state.countyColor), 0.76]);
    }
    if (drawDrapedPoliticalBoundaries) {
      drawDrapedLineLayer(state.drapedPoliticalBoundaries, [...hexToRgb(state.countyColor), 0.9]);
    }
    if (drawFlatMunicipalPlaceFill) {
      if (state.colorPlacesByPopulation) {
        drawMunicipalMetricColoredFillLayer(drawFlatMunicipalPlaceFill, 0.4);
      } else {
        drawFillLayer(drawFlatMunicipalPlaceFill, [...hexToRgb(state.placeColor), 0.28]);
      }
    }
    if (drawDrapedMunicipalPlaceFill) {
      if (state.colorPlacesByPopulation) {
        drawMunicipalMetricColoredDrapedFillLayer(drawDrapedMunicipalPlaceFill, 0.42);
      } else {
        drawDrapedFillLayer(drawDrapedMunicipalPlaceFill, [...hexToRgb(state.placeColor), 0.32]);
      }
    }
    if (drawFlatPlaceBoundaries) {
      if (state.showMunicipalPlaceBoundaries && state.colorPlacesByPopulation) {
        drawMunicipalMetricColoredBoundaryLayer(drawFlatPlaceBoundaries, 0.9);
      } else {
        drawBoundaryLayer(drawFlatPlaceBoundaries, [...hexToRgb(state.placeColor), 0.64]);
      }
    }
    if (drawDrapedPlaceBoundaries) {
      if (state.showMunicipalPlaceBoundaries && state.colorPlacesByPopulation) {
        drawMunicipalMetricColoredDrapedLineLayer(drawDrapedPlaceBoundaries, 0.95);
      } else {
        drawDrapedLineLayer(drawDrapedPlaceBoundaries, [...hexToRgb(state.placeColor), 0.84]);
      }
    }
    if (drawFlatOilGasFields) {
      drawBoundaryLayer(state.oilGasFields, [...hexToRgb(state.oilGasFieldColor), 0.86]);
    }
    if (drawDrapedOilGasFields) {
      drawDrapedLineLayer(state.drapedOilGasFields, [...hexToRgb(state.oilGasFieldColor), 0.96]);
    }
    if (drawFlatOffshoreOilLeases) {
      drawBoundaryLayer(state.offshoreOilLeases, [...hexToRgb(state.offshoreOilLeaseColor), 0.86]);
    }
    if (drawDrapedOffshoreOilLeases) {
      drawDrapedLineLayer(state.drapedOffshoreOilLeases, [...hexToRgb(state.offshoreOilLeaseColor), 0.96]);
    }
    gl.enable(gl.DEPTH_TEST);
  }

  gl.depthMask(true);
  if (cameraMoving) {
    markRenderDirty();
  }
  window.requestAnimationFrame(drawScene);
}

function drawBoundaryLayer(boundaryLayer, color) {
  drawArrays(state.programs.line, boundaryLayer.vertexBuffer, boundaryLayer.vertexCount, color);
}

function drawMunicipalMetricColoredBoundaryLayer(boundaryLayer, alpha) {
  const gl = state.gl;
  const programInfo = state.programs.line;
  gl.bindBuffer(gl.ARRAY_BUFFER, boundaryLayer.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);
  for (const range of boundaryLayer.featureRanges || []) {
    if (range.vertexCount <= 0) {
      continue;
    }
    const rgb = municipalPlaceMetricColorForFeature(boundaryLayer.features[range.index], boundaryLayer);
    bindProgram(programInfo, [...rgb, alpha]);
    gl.drawArrays(gl.LINES, range.vertexOffset, range.vertexCount);
  }
}

function drawIndexedBoundaryLayer(boundaryLayer, color) {
  drawElements(
    state.programs.line,
    boundaryLayer.vertexBuffer,
    boundaryLayer.indexBuffer,
    boundaryLayer.lineIndexCount,
    color,
    state.gl.LINES
  );
}

function drawMunicipalMetricColoredDrapedLineLayer(lineLayer, alpha) {
  const gl = state.gl;
  const programInfo = state.programs.drapedLine;
  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(programInfo.uniforms.projection, false, currentProjectionMatrix());
  gl.uniformMatrix4fv(programInfo.uniforms.view, false, cameraViewMatrix());
  gl.uniform3fv(programInfo.uniforms.sceneCenter, new Float32Array(state.scene.center));
  gl.uniform1f(programInfo.uniforms.scale, state.scene.scale);
  gl.uniform1f(programInfo.uniforms.terrainExaggeration, state.terrainExaggeration);

  gl.bindBuffer(gl.ARRAY_BUFFER, lineLayer.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, lineLayer.elevationBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.elevation);
  gl.vertexAttribPointer(programInfo.attributes.elevation, 1, gl.FLOAT, false, 0, 0);

  for (const range of lineLayer.featureRanges || []) {
    if (range.vertexCount <= 0) {
      continue;
    }
    const rgb = municipalPlaceMetricColorForFeature(lineLayer.features[range.index], lineLayer);
    gl.uniform4fv(programInfo.uniforms.color, new Float32Array([...rgb, alpha]));
    gl.drawArrays(gl.LINES, range.vertexOffset, range.vertexCount);
  }
}

function drawDrapedLineLayer(lineLayer, color) {
  const gl = state.gl;
  const programInfo = state.programs.drapedLine;
  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(programInfo.uniforms.projection, false, currentProjectionMatrix());
  gl.uniformMatrix4fv(programInfo.uniforms.view, false, cameraViewMatrix());
  gl.uniform3fv(programInfo.uniforms.sceneCenter, new Float32Array(state.scene.center));
  gl.uniform1f(programInfo.uniforms.scale, state.scene.scale);
  gl.uniform4fv(programInfo.uniforms.color, new Float32Array(color));
  gl.uniform1f(programInfo.uniforms.terrainExaggeration, state.terrainExaggeration);

  gl.bindBuffer(gl.ARRAY_BUFFER, lineLayer.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, lineLayer.elevationBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.elevation);
  gl.vertexAttribPointer(programInfo.attributes.elevation, 1, gl.FLOAT, false, 0, 0);

  gl.drawArrays(gl.LINES, 0, lineLayer.vertexCount);
}

function drawDrapedIndexedLineLayer(lineLayer, color) {
  const gl = state.gl;
  const programInfo = state.programs.drapedLine;
  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(programInfo.uniforms.projection, false, currentProjectionMatrix());
  gl.uniformMatrix4fv(programInfo.uniforms.view, false, cameraViewMatrix());
  gl.uniform3fv(programInfo.uniforms.sceneCenter, new Float32Array(state.scene.center));
  gl.uniform1f(programInfo.uniforms.scale, state.scene.scale);
  gl.uniform4fv(programInfo.uniforms.color, new Float32Array(color));
  gl.uniform1f(programInfo.uniforms.terrainExaggeration, state.terrainExaggeration);

  gl.bindBuffer(gl.ARRAY_BUFFER, lineLayer.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, lineLayer.elevationBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.elevation);
  gl.vertexAttribPointer(programInfo.attributes.elevation, 1, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, lineLayer.indexBuffer);
  gl.drawElements(gl.LINES, lineLayer.lineIndexCount, gl.UNSIGNED_INT, 0);
}

function drawPointLayer(pointLayer, color, options = {}) {
  const {
    pointScale = state.healthcareBedScale,
    categoryMask = healthcareCategoryMaskVector(),
    valueDivisor = 1
  } = options;
  const gl = state.gl;
  const programInfo = state.programs.point;
  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(programInfo.uniforms.projection, false, currentProjectionMatrix());
  gl.uniformMatrix4fv(programInfo.uniforms.view, false, cameraViewMatrix());
  gl.uniform3fv(programInfo.uniforms.sceneCenter, new Float32Array(state.scene.center));
  gl.uniform1f(programInfo.uniforms.scale, state.scene.scale);
  gl.uniform4fv(programInfo.uniforms.color, new Float32Array(color));
  gl.uniform1f(programInfo.uniforms.terrainExaggeration, state.terrainExaggeration);
  gl.uniform1f(programInfo.uniforms.pointScale, pointScale);
  gl.uniform1f(programInfo.uniforms.valueDivisor, valueDivisor);
  gl.uniform4fv(programInfo.uniforms.categoryMaskA, new Float32Array(categoryMask.slice(0, 4)));
  gl.uniform4fv(programInfo.uniforms.categoryMaskB, new Float32Array(categoryMask.slice(4, 8)));

  gl.bindBuffer(gl.ARRAY_BUFFER, pointLayer.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, pointLayer.capacityBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.capacity);
  gl.vertexAttribPointer(programInfo.attributes.capacity, 1, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, pointLayer.categoryBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.category);
  gl.vertexAttribPointer(programInfo.attributes.category, 1, gl.UNSIGNED_BYTE, false, 0, 0);

  gl.drawArrays(gl.POINTS, 0, pointLayer.vertexCount);
}

function drawDrapedPointLayer(pointLayer, color, options = {}) {
  const {
    pointScale = state.healthcareBedScale,
    categoryMask = healthcareCategoryMaskVector(),
    valueDivisor = 1
  } = options;
  const gl = state.gl;
  const programInfo = state.programs.drapedPoint;
  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(programInfo.uniforms.projection, false, currentProjectionMatrix());
  gl.uniformMatrix4fv(programInfo.uniforms.view, false, cameraViewMatrix());
  gl.uniform3fv(programInfo.uniforms.sceneCenter, new Float32Array(state.scene.center));
  gl.uniform1f(programInfo.uniforms.scale, state.scene.scale);
  gl.uniform4fv(programInfo.uniforms.color, new Float32Array(color));
  gl.uniform1f(programInfo.uniforms.terrainExaggeration, state.terrainExaggeration);
  gl.uniform1f(programInfo.uniforms.pointScale, pointScale);
  gl.uniform1f(programInfo.uniforms.valueDivisor, valueDivisor);
  gl.uniform4fv(programInfo.uniforms.categoryMaskA, new Float32Array(categoryMask.slice(0, 4)));
  gl.uniform4fv(programInfo.uniforms.categoryMaskB, new Float32Array(categoryMask.slice(4, 8)));

  gl.bindBuffer(gl.ARRAY_BUFFER, pointLayer.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, pointLayer.elevationBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.elevation);
  gl.vertexAttribPointer(programInfo.attributes.elevation, 1, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, pointLayer.capacityBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.capacity);
  gl.vertexAttribPointer(programInfo.attributes.capacity, 1, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, pointLayer.categoryBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.category);
  gl.vertexAttribPointer(programInfo.attributes.category, 1, gl.UNSIGNED_BYTE, false, 0, 0);

  gl.drawArrays(gl.POINTS, 0, pointLayer.vertexCount);
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

function drawDrapedFillLayer(fillLayer, color) {
  const gl = state.gl;
  const programInfo = state.programs.drapedFill;
  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(programInfo.uniforms.projection, false, currentProjectionMatrix());
  gl.uniformMatrix4fv(programInfo.uniforms.view, false, cameraViewMatrix());
  gl.uniform3fv(programInfo.uniforms.sceneCenter, new Float32Array(state.scene.center));
  gl.uniform1f(programInfo.uniforms.scale, state.scene.scale);
  gl.uniform4fv(programInfo.uniforms.color, new Float32Array(color));
  gl.uniform1f(programInfo.uniforms.terrainExaggeration, state.terrainExaggeration);

  gl.bindBuffer(gl.ARRAY_BUFFER, fillLayer.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, fillLayer.elevationBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.elevation);
  gl.vertexAttribPointer(programInfo.attributes.elevation, 1, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, fillLayer.triangleBuffer);
  gl.drawElements(gl.TRIANGLES, fillLayer.triangleIndexCount, gl.UNSIGNED_INT, 0);
}

function disposeCensusMetricBins(layer) {
  if (!layer?.metricBins?.buffers) {
    return;
  }
  for (const bucket of layer.metricBins.buffers) {
    if (bucket.buffer) {
      state.gl.deleteBuffer(bucket.buffer);
    }
  }
  layer.metricBins = undefined;
}

function censusMetricBins(layer) {
  const metric = censusMetricDefinition(layer);
  const metricId = metric?.id || state.censusTractMetric;
  const key = `${metricId}:${layer.triangleIndexCount}:${layer.features?.length || 0}`;
  if (layer.metricBins?.key === key) {
    return layer.metricBins.buffers;
  }
  disposeCensusMetricBins(layer);

  const buckets = Array.from({ length: censusMetricBinCount + 1 }, () => []);
  for (const feature of layer.features || []) {
    const triangleIndexCount = Number(feature.triangleIndexCount) || 0;
    const triangleOffset = Number(feature.triangleOffset) || 0;
    if (triangleIndexCount <= 0) {
      continue;
    }
    const bucketIndex = censusMetricBucket(feature, layer);
    const bucket = buckets[bucketIndex];
    for (let index = triangleOffset; index < triangleOffset + triangleIndexCount; index += 1) {
      bucket.push(layer.triangles[index]);
    }
  }

  layer.metricBins = {
    key,
    buffers: buckets.map((values, bucketIndex) => {
      const indices = new Uint32Array(values);
      return {
        bucket: bucketIndex,
        indexCount: indices.length,
        buffer: createBuffer(state.gl, state.gl.ELEMENT_ARRAY_BUFFER, indices, { dirty: false })
      };
    })
  };
  return layer.metricBins.buffers;
}

function drawCensusMetricFillLayer(fillLayer, opacity) {
  const gl = state.gl;
  const programInfo = state.programs.mesh;
  gl.bindBuffer(gl.ARRAY_BUFFER, fillLayer.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);

  for (const bin of censusMetricBins(fillLayer)) {
    if (bin.indexCount <= 0) {
      continue;
    }
    bindProgram(programInfo, [...censusBucketColor(bin.bucket), opacity]);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bin.buffer);
    gl.drawElements(gl.TRIANGLES, bin.indexCount, gl.UNSIGNED_INT, 0);
  }
}

function drawDrapedCensusMetricFillLayer(fillLayer, opacity) {
  const gl = state.gl;
  const programInfo = state.programs.drapedFill;
  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(programInfo.uniforms.projection, false, currentProjectionMatrix());
  gl.uniformMatrix4fv(programInfo.uniforms.view, false, cameraViewMatrix());
  gl.uniform3fv(programInfo.uniforms.sceneCenter, new Float32Array(state.scene.center));
  gl.uniform1f(programInfo.uniforms.scale, state.scene.scale);
  gl.uniform1f(programInfo.uniforms.terrainExaggeration, state.terrainExaggeration);

  gl.bindBuffer(gl.ARRAY_BUFFER, fillLayer.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, fillLayer.elevationBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.elevation);
  gl.vertexAttribPointer(programInfo.attributes.elevation, 1, gl.FLOAT, false, 0, 0);

  for (const bin of censusMetricBins(fillLayer)) {
    if (bin.indexCount <= 0) {
      continue;
    }
    gl.uniform4fv(programInfo.uniforms.color, new Float32Array([...censusBucketColor(bin.bucket), opacity]));
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bin.buffer);
    gl.drawElements(gl.TRIANGLES, bin.indexCount, gl.UNSIGNED_INT, 0);
  }
}

function drawMunicipalMetricColoredFillLayer(fillLayer, alpha) {
  const gl = state.gl;
  const programInfo = state.programs.mesh;
  gl.bindBuffer(gl.ARRAY_BUFFER, fillLayer.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, fillLayer.triangleBuffer);

  for (const feature of fillLayer.features || []) {
    const triangleIndexCount = Number(feature.triangleIndexCount) || 0;
    if (triangleIndexCount <= 0) {
      continue;
    }
    const rgb = municipalPlaceMetricColorForFeature(feature, fillLayer);
    bindProgram(programInfo, [...rgb, alpha]);
    gl.drawElements(gl.TRIANGLES, triangleIndexCount, gl.UNSIGNED_INT, (Number(feature.triangleOffset) || 0) * 4);
  }
}

function drawMunicipalMetricColoredDrapedFillLayer(fillLayer, alpha) {
  const gl = state.gl;
  const programInfo = state.programs.drapedFill;
  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(programInfo.uniforms.projection, false, currentProjectionMatrix());
  gl.uniformMatrix4fv(programInfo.uniforms.view, false, cameraViewMatrix());
  gl.uniform3fv(programInfo.uniforms.sceneCenter, new Float32Array(state.scene.center));
  gl.uniform1f(programInfo.uniforms.scale, state.scene.scale);
  gl.uniform1f(programInfo.uniforms.terrainExaggeration, state.terrainExaggeration);

  gl.bindBuffer(gl.ARRAY_BUFFER, fillLayer.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, fillLayer.elevationBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.elevation);
  gl.vertexAttribPointer(programInfo.attributes.elevation, 1, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, fillLayer.triangleBuffer);
  for (const feature of fillLayer.features || []) {
    const triangleIndexCount = Number(feature.triangleIndexCount) || 0;
    if (triangleIndexCount <= 0) {
      continue;
    }
    const rgb = municipalPlaceMetricColorForFeature(feature, fillLayer);
    gl.uniform4fv(programInfo.uniforms.color, new Float32Array([...rgb, alpha]));
    gl.drawElements(gl.TRIANGLES, triangleIndexCount, gl.UNSIGNED_INT, (Number(feature.triangleOffset) || 0) * 4);
  }
}

function drawFeatureFillLayer(fillLayer, opacity, colorForFeature) {
  const gl = state.gl;
  const programInfo = state.programs.mesh;
  gl.bindBuffer(gl.ARRAY_BUFFER, fillLayer.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, fillLayer.triangleBuffer);

  for (const feature of fillLayer.features || []) {
    const triangleIndexCount = Number(feature.triangleIndexCount) || 0;
    if (triangleIndexCount <= 0) {
      continue;
    }
    bindProgram(programInfo, [...hexToRgb(colorForFeature(feature)), opacity]);
    gl.drawElements(gl.TRIANGLES, triangleIndexCount, gl.UNSIGNED_INT, (Number(feature.triangleOffset) || 0) * 4);
  }
}

function drawDrapedFeatureFillLayer(fillLayer, opacity, colorForFeature) {
  const gl = state.gl;
  const programInfo = state.programs.drapedFill;
  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(programInfo.uniforms.projection, false, currentProjectionMatrix());
  gl.uniformMatrix4fv(programInfo.uniforms.view, false, cameraViewMatrix());
  gl.uniform3fv(programInfo.uniforms.sceneCenter, new Float32Array(state.scene.center));
  gl.uniform1f(programInfo.uniforms.scale, state.scene.scale);
  gl.uniform1f(programInfo.uniforms.terrainExaggeration, state.terrainExaggeration);

  gl.bindBuffer(gl.ARRAY_BUFFER, fillLayer.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, fillLayer.elevationBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.elevation);
  gl.vertexAttribPointer(programInfo.attributes.elevation, 1, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, fillLayer.triangleBuffer);
  for (const feature of fillLayer.features || []) {
    const triangleIndexCount = Number(feature.triangleIndexCount) || 0;
    if (triangleIndexCount <= 0) {
      continue;
    }
    gl.uniform4fv(programInfo.uniforms.color, new Float32Array([...hexToRgb(colorForFeature(feature)), opacity]));
    gl.drawElements(gl.TRIANGLES, triangleIndexCount, gl.UNSIGNED_INT, (Number(feature.triangleOffset) || 0) * 4);
  }
}

function drawGroupedFillLayer(fillLayer, opacity, colorForUnit = getGeologyUnitColor) {
  const gl = state.gl;
  const programInfo = state.programs.mesh;
  gl.bindBuffer(gl.ARRAY_BUFFER, fillLayer.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, fillLayer.triangleBuffer);

  for (const unit of fillLayer.units) {
    if (unit.triangleIndexCount <= 0) {
      continue;
    }
    bindProgram(programInfo, [...hexToRgb(colorForUnit(unit)), opacity]);
    gl.drawElements(gl.TRIANGLES, unit.triangleIndexCount, gl.UNSIGNED_INT, unit.triangleOffset * 4);
  }
}

function drawTerrainIndexedGroupedFillLayer(fillLayer, terrain, opacity, colorForUnit = getGeologyUnitColor) {
  const gl = state.gl;
  const programInfo = state.programs.drapedFill;
  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(programInfo.uniforms.projection, false, currentProjectionMatrix());
  gl.uniformMatrix4fv(programInfo.uniforms.view, false, cameraViewMatrix());
  gl.uniform3fv(programInfo.uniforms.sceneCenter, new Float32Array(state.scene.center));
  gl.uniform1f(programInfo.uniforms.scale, state.scene.scale);
  gl.uniform1f(programInfo.uniforms.terrainExaggeration, state.terrainExaggeration);

  gl.bindBuffer(gl.ARRAY_BUFFER, terrain.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, terrain.elevationBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.elevation);
  gl.vertexAttribPointer(programInfo.attributes.elevation, 1, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, fillLayer.triangleBuffer);
  for (const unit of fillLayer.units) {
    if (unit.triangleIndexCount <= 0) {
      continue;
    }
    gl.uniform4fv(programInfo.uniforms.color, new Float32Array([...hexToRgb(colorForUnit(unit)), opacity]));
    gl.drawElements(gl.TRIANGLES, unit.triangleIndexCount, gl.UNSIGNED_INT, unit.triangleOffset * 4);
  }
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
    setSelectedEntity({ type: "fault", id: nearestVertex.id });
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
    setSelectedEntity({ type: "fault", id: best });
  }
}

async function selectEntityAt(clientX, clientY) {
  if (state.selectionType === "fault") {
    selectNearestFault(clientX, clientY);
    return;
  }
  if (state.selectionType === "healthcare") {
    await selectNearestHealthcareFacility(clientX, clientY);
    return;
  }
  if (state.selectionType === "municipality") {
    await selectNearestMunicipality(clientX, clientY);
    return;
  }
  if (state.selectionType === "census") {
    await selectCensusTract(clientX, clientY);
    return;
  }
  if (state.selectionType === "fire") {
    await selectNearestFireDetection(clientX, clientY);
    return;
  }
  if (state.selectionType === "lake") {
    await selectNearestWaterFeature("lake", clientX, clientY);
    return;
  }
  if (state.selectionType === "river") {
    await selectNearestWaterFeature("river", clientX, clientY);
    return;
  }
  if (state.selectionType === "geology") {
    await selectGeologyUnit(clientX, clientY);
    return;
  }
  if (state.selectionType === "oilgas") {
    await selectOilGasField(clientX, clientY);
    return;
  }
  if (state.selectionType === "offshorelease") {
    await selectOffshoreOilLease(clientX, clientY);
    return;
  }
  if (state.selectionType === "oilplatform") {
    await selectNearestOilPlatform(clientX, clientY);
    return;
  }
  if (state.selectionType === "powerplant") {
    await selectNearestPowerPlant(clientX, clientY);
    return;
  }
  if (state.selectionType === "transmission") {
    await selectNearestTransmissionLine(clientX, clientY);
  }
}

function setFocusFromClick(clientX, clientY) {
  const nearest = nearestVisibleVertex(clientX, clientY, 90);
  if (!nearest) {
    showStatus("No fault near focus click");
    return;
  }

  state.camera.focusGeo = nearest.geo;
  const focusPivot = navigationPivotForGeo(nearest.geo);
  state.camera.pivotWorld = focusPivot;
  state.camera.targetWorld = [...focusPivot];
  setSelectedEntity({ type: "fault", id: nearest.id });
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

function canvasPointFromClient(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  return [clientX - rect.left, clientY - rect.top];
}

function drapedWorldPosition(position, elevationMeters = 0) {
  const extraHeightKm = ((state.terrainExaggeration || 1) - 1) * elevationMeters / 1000;
  return addVectors(position, scaleVector(normalize(position), extraHeightKm));
}

function lineVertexWorld(layer, vertexIndex) {
  const positionIndex = vertexIndex * 3;
  const position = [
    layer.vertices[positionIndex],
    layer.vertices[positionIndex + 1],
    layer.vertices[positionIndex + 2]
  ];
  if (!layer.elevations) {
    return position;
  }
  return drapedWorldPosition(position, layer.elevations[vertexIndex]);
}

function distanceToScreenSegment(point, a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const lengthSquared = dx * dx + dy * dy;
  if (lengthSquared <= 1e-9) {
    return Math.hypot(point[0] - a[0], point[1] - a[1]);
  }
  const t = Math.max(0, Math.min(1, ((point[0] - a[0]) * dx + (point[1] - a[1]) * dy) / lengthSquared));
  return Math.hypot(point[0] - (a[0] + dx * t), point[1] - (a[1] + dy * t));
}

function featureBoundsScreenRect(feature, heightKm) {
  const latRange = feature?.bounds?.lat;
  const lonRange = feature?.bounds?.lon;
  if (!Array.isArray(latRange) || !Array.isArray(lonRange) || latRange.length < 2 || lonRange.length < 2) {
    return undefined;
  }
  const centerLat = (Number(latRange[0]) + Number(latRange[1])) / 2;
  const centerLon = (Number(lonRange[0]) + Number(lonRange[1])) / 2;
  const samples = [
    [centerLat, centerLon],
    [Number(latRange[0]), Number(lonRange[0])],
    [Number(latRange[0]), Number(lonRange[1])],
    [Number(latRange[1]), Number(lonRange[0])],
    [Number(latRange[1]), Number(lonRange[1])]
  ];
  const points = [];
  for (const [lat, lon] of samples) {
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      continue;
    }
    const screen = projectPoint(latLonHeightToXyz(lat, lon, heightKm));
    if (screen) {
      points.push(screen);
    }
  }
  if (points.length === 0) {
    return undefined;
  }
  return {
    minX: Math.min(...points.map((point) => point[0])),
    maxX: Math.max(...points.map((point) => point[0])),
    minY: Math.min(...points.map((point) => point[1])),
    maxY: Math.max(...points.map((point) => point[1]))
  };
}

function distanceToScreenRect(point, rect) {
  const dx = point[0] < rect.minX ? rect.minX - point[0] : point[0] > rect.maxX ? point[0] - rect.maxX : 0;
  const dy = point[1] < rect.minY ? rect.minY - point[1] : point[1] > rect.maxY ? point[1] - rect.maxY : 0;
  return Math.hypot(dx, dy);
}

function nearestLineFeature(layer, clientX, clientY, options = {}) {
  if (!layer?.features?.length || !layer?.vertices || !layer?.featureRanges) {
    return undefined;
  }
  const { maxDistance = 24, candidateLimit = 24 } = options;
  const point = canvasPointFromClient(clientX, clientY);
  const candidates = [];
  const heightKm = layer.heightKm || 6.52;

  for (let index = 0; index < layer.features.length; index += 1) {
    const feature = layer.features[index];
    const screenRect = featureBoundsScreenRect(feature, heightKm);
    if (!screenRect) {
      continue;
    }
    const distance = distanceToScreenRect(point, screenRect);
    if (distance <= 140) {
      candidates.push({ index, feature, range: layer.featureRanges[index], distance });
    }
  }

  candidates.sort((a, b) => a.distance - b.distance);
  let best;
  let bestDistance = maxDistance;

  for (const candidate of candidates.slice(0, candidateLimit)) {
    const range = candidate.range;
    if (!range?.segmentCount) {
      continue;
    }
    const step = Math.max(1, Math.ceil(range.segmentCount / 5000));
    for (let vertex = range.vertexOffset; vertex < range.vertexOffset + range.vertexCount - 1; vertex += step * 2) {
      const screenA = projectPoint(lineVertexWorld(layer, vertex));
      const screenB = projectPoint(lineVertexWorld(layer, vertex + 1));
      if (!screenA || !screenB) {
        continue;
      }
      const distance = distanceToScreenSegment(point, screenA, screenB);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = candidate;
      }
    }
  }

  if (!best && candidates[0]?.distance <= 10) {
    best = candidates[0];
  }
  return best ? { ...best, distance: bestDistance } : undefined;
}

async function selectNearestHealthcareFacility(clientX, clientY) {
  if (!state.showHealthcareFacilities) {
    showStatus("Turn on Healthcare facilities before selecting them");
    return;
  }
  const layer = await loadCurrentHealthcareFacilities();
  const point = canvasPointFromClient(clientX, clientY);
  let best;
  let bestDistance = 30;

  for (let index = 0; index < layer.features.length; index += 1) {
    const feature = layer.features[index];
    if (!healthcareFeatureIsVisible(feature)) {
      continue;
    }
    const positionIndex = index * 3;
    const position = [
      layer.positions[positionIndex],
      layer.positions[positionIndex + 1],
      layer.positions[positionIndex + 2]
    ];
    const world = layer.elevations ? drapedWorldPosition(position, layer.elevations[index]) : position;
    const screen = projectPoint(world);
    if (!screen || !withinCanvas(screen, 48)) {
      continue;
    }
    const distance = Math.hypot(screen[0] - point[0], screen[1] - point[1]);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = { type: "healthcare", id: feature.id || `facility-${index}`, index, feature };
    }
  }

  if (best) {
    setSelectedEntity(best);
  } else {
    showStatus("No healthcare facility near click");
  }
}

async function selectNearestMunicipality(clientX, clientY) {
  if (!state.showMunicipalityPoints) {
    showStatus("Turn on Municipalities before selecting them");
    return;
  }
  const layer = await loadCurrentMunicipalityPoints();
  const point = canvasPointFromClient(clientX, clientY);
  let best;
  let bestDistance = 28;

  for (let index = 0; index < layer.features.length; index += 1) {
    const feature = layer.features[index];
    const positionIndex = index * 3;
    const position = [
      layer.positions[positionIndex],
      layer.positions[positionIndex + 1],
      layer.positions[positionIndex + 2]
    ];
    const world = layer.elevations ? drapedWorldPosition(position, layer.elevations[index]) : position;
    const screen = projectPoint(world);
    if (!screen || !withinCanvas(screen, 48)) {
      continue;
    }
    const distance = Math.hypot(screen[0] - point[0], screen[1] - point[1]);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = { type: "municipality", id: feature.id || `municipality-${index}`, index, feature };
    }
  }

  if (best) {
    setSelectedEntity(best);
  } else {
    showStatus("No municipality near click");
  }
}

async function selectNearestFireDetection(clientX, clientY) {
  if (!state.showActiveFires) {
    showStatus("Turn on Active fires before selecting them");
    return;
  }
  const layer = await loadCurrentActiveFires();
  const point = canvasPointFromClient(clientX, clientY);
  let best;
  let bestDistance = 32;

  for (let index = 0; index < layer.features.length; index += 1) {
    const feature = layer.features[index];
    const positionIndex = index * 3;
    const position = [
      layer.positions[positionIndex],
      layer.positions[positionIndex + 1],
      layer.positions[positionIndex + 2]
    ];
    const world = layer.elevations ? drapedWorldPosition(position, layer.elevations[index]) : position;
    const screen = projectPoint(world);
    if (!screen || !withinCanvas(screen, 54)) {
      continue;
    }
    const distance = Math.hypot(screen[0] - point[0], screen[1] - point[1]);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = { type: "fire", id: feature.id || `fire-${index}`, index, feature };
    }
  }

  if (best) {
    setSelectedEntity(best);
  } else {
    showStatus("No active fire detection near click");
  }
}

async function selectNearestPowerPlant(clientX, clientY) {
  if (!state.showPowerPlants) {
    showStatus("Turn on Power plants before selecting them");
    return;
  }
  const layer = await loadCurrentPowerPlants();
  const point = canvasPointFromClient(clientX, clientY);
  let best;
  let bestDistance = 34;

  for (let index = 0; index < layer.features.length; index += 1) {
    const feature = layer.features[index];
    const positionIndex = index * 3;
    const position = [
      layer.positions[positionIndex],
      layer.positions[positionIndex + 1],
      layer.positions[positionIndex + 2]
    ];
    const world = layer.elevations ? drapedWorldPosition(position, layer.elevations[index]) : position;
    const screen = projectPoint(world);
    if (!screen || !withinCanvas(screen, 54)) {
      continue;
    }
    const distance = Math.hypot(screen[0] - point[0], screen[1] - point[1]);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = { type: "powerplant", id: feature.id || `powerplant-${index}`, index, feature };
    }
  }

  if (best) {
    setSelectedEntity(best);
  } else {
    showStatus("No power plant near click");
  }
}

async function selectNearestTransmissionLine(clientX, clientY) {
  if (!state.showTransmissionLines) {
    showStatus("Turn on Transmission lines before selecting them");
    return;
  }
  const layer = await loadCurrentTransmissionLines();
  const nearest = nearestLineFeature(layer, clientX, clientY, { maxDistance: 26, candidateLimit: 32 });
  if (!nearest) {
    showStatus("No transmission line near click");
    return;
  }
  setSelectedEntity({
    type: "transmission",
    id: nearest.feature.id || `transmission-${nearest.index}`,
    index: nearest.index,
    feature: nearest.feature
  });
}

async function selectNearestOilPlatform(clientX, clientY) {
  if (!state.showOilPlatforms) {
    showStatus("Turn on Oil platforms before selecting them");
    return;
  }
  const layer = await loadCurrentOilPlatforms();
  const point = canvasPointFromClient(clientX, clientY);
  let best;
  let bestDistance = 34;

  for (let index = 0; index < layer.features.length; index += 1) {
    const feature = layer.features[index];
    const positionIndex = index * 3;
    const position = [
      layer.positions[positionIndex],
      layer.positions[positionIndex + 1],
      layer.positions[positionIndex + 2]
    ];
    const world = layer.elevations ? drapedWorldPosition(position, layer.elevations[index]) : position;
    const screen = projectPoint(world);
    if (!screen || !withinCanvas(screen, 54)) {
      continue;
    }
    const distance = Math.hypot(screen[0] - point[0], screen[1] - point[1]);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = { type: "oilplatform", id: feature.id || `oilplatform-${index}`, index, feature };
    }
  }

  if (best) {
    setSelectedEntity(best);
  } else {
    showStatus("No oil platform near click");
  }
}

async function selectNearestWaterFeature(type, clientX, clientY) {
  const isLake = type === "lake";
  if (isLake && !state.showLakes && !state.showLakeFill) {
    showStatus("Turn on Lakes before selecting them");
    return;
  }
  if (!isLake && !state.showRivers) {
    showStatus("Turn on Rivers before selecting them");
    return;
  }
  const layer = isLake ? await loadCurrentLakes() : await loadCurrentRivers();
  const nearest = nearestLineFeature(layer, clientX, clientY, { maxDistance: isLake ? 28 : 22 });
  if (!nearest) {
    showStatus(`No ${isLake ? "lake" : "river"} near click`);
    return;
  }
  setSelectedEntity({
    type,
    id: `${type}-${nearest.index}`,
    index: nearest.index,
    feature: nearest.feature
  });
}

function pickColorForUnitIndex(index) {
  const value = index + 1;
  return `#${((value >> 16) & 255).toString(16).padStart(2, "0")}${((value >> 8) & 255).toString(16).padStart(2, "0")}${(value & 255).toString(16).padStart(2, "0")}`;
}

function ensurePickFramebuffer() {
  const gl = state.gl;
  const width = canvas.width;
  const height = canvas.height;
  const existing = state.pickFramebuffer;
  if (existing && existing.width === width && existing.height === height) {
    return existing;
  }

  if (existing) {
    gl.deleteFramebuffer(existing.framebuffer);
    gl.deleteTexture(existing.texture);
  }

  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

  const framebuffer = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  state.pickFramebuffer = { framebuffer, texture, width, height };
  return state.pickFramebuffer;
}

function renderGeologyPickLayer(layer) {
  const gl = state.gl;
  const pick = ensurePickFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, pick.framebuffer);
  gl.viewport(0, 0, pick.width, pick.height);
  gl.disable(gl.BLEND);
  gl.disable(gl.DEPTH_TEST);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  const pickColor = (unit) => pickColorForUnitIndex(layer.units.indexOf(unit));
  if (state.showDrapedGeology && state.terrain) {
    drawTerrainIndexedGroupedFillLayer(layer, state.terrain, 1, pickColor);
  } else {
    drawGroupedFillLayer(layer, 1, pickColor);
  }
}

function renderOilGasPickLayer(layer) {
  const gl = state.gl;
  const pick = ensurePickFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, pick.framebuffer);
  gl.viewport(0, 0, pick.width, pick.height);
  gl.disable(gl.BLEND);
  gl.disable(gl.DEPTH_TEST);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  const pickColor = (feature) => pickColorForUnitIndex(layer.features.indexOf(feature));
  if (state.showDrapedOilGasFields) {
    drawDrapedFeatureFillLayer(layer, 1, pickColor);
  } else {
    drawFeatureFillLayer(layer, 1, pickColor);
  }
}

function renderOffshoreOilLeasePickLayer(layer) {
  const gl = state.gl;
  const pick = ensurePickFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, pick.framebuffer);
  gl.viewport(0, 0, pick.width, pick.height);
  gl.disable(gl.BLEND);
  gl.disable(gl.DEPTH_TEST);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  const pickColor = (feature) => pickColorForUnitIndex(layer.features.indexOf(feature));
  if (state.showDrapedOffshoreOilLeases) {
    drawDrapedFeatureFillLayer(layer, 1, pickColor);
  } else {
    drawFeatureFillLayer(layer, 1, pickColor);
  }
}

function renderCensusTractPickLayer(layer) {
  const gl = state.gl;
  const pick = ensurePickFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, pick.framebuffer);
  gl.viewport(0, 0, pick.width, pick.height);
  gl.disable(gl.BLEND);
  gl.disable(gl.DEPTH_TEST);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  if (state.showDrapedCensusTracts) {
    const programInfo = state.programs.drapedFill;
    gl.useProgram(programInfo.program);
    gl.uniformMatrix4fv(programInfo.uniforms.projection, false, currentProjectionMatrix());
    gl.uniformMatrix4fv(programInfo.uniforms.view, false, cameraViewMatrix());
    gl.uniform3fv(programInfo.uniforms.sceneCenter, new Float32Array(state.scene.center));
    gl.uniform1f(programInfo.uniforms.scale, state.scene.scale);
    gl.uniform1f(programInfo.uniforms.terrainExaggeration, state.terrainExaggeration);
    gl.bindBuffer(gl.ARRAY_BUFFER, layer.vertexBuffer);
    gl.enableVertexAttribArray(programInfo.attributes.position);
    gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, layer.elevationBuffer);
    gl.enableVertexAttribArray(programInfo.attributes.elevation);
    gl.vertexAttribPointer(programInfo.attributes.elevation, 1, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, layer.triangleBuffer);
    for (let index = 0; index < layer.features.length; index += 1) {
      const feature = layer.features[index];
      const triangleIndexCount = Number(feature.triangleIndexCount) || 0;
      if (triangleIndexCount <= 0) {
        continue;
      }
      gl.uniform4fv(programInfo.uniforms.color, new Float32Array([...hexToRgb(pickColorForUnitIndex(index)), 1]));
      gl.drawElements(gl.TRIANGLES, triangleIndexCount, gl.UNSIGNED_INT, (Number(feature.triangleOffset) || 0) * 4);
    }
    return;
  }

  const programInfo = state.programs.mesh;
  gl.bindBuffer(gl.ARRAY_BUFFER, layer.vertexBuffer);
  gl.enableVertexAttribArray(programInfo.attributes.position);
  gl.vertexAttribPointer(programInfo.attributes.position, 3, gl.FLOAT, false, 0, 0);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, layer.triangleBuffer);
  for (let index = 0; index < layer.features.length; index += 1) {
    const feature = layer.features[index];
    const triangleIndexCount = Number(feature.triangleIndexCount) || 0;
    if (triangleIndexCount <= 0) {
      continue;
    }
    bindProgram(programInfo, [...hexToRgb(pickColorForUnitIndex(index)), 1]);
    gl.drawElements(gl.TRIANGLES, triangleIndexCount, gl.UNSIGNED_INT, (Number(feature.triangleOffset) || 0) * 4);
  }
}

async function selectGeologyUnit(clientX, clientY) {
  if (!state.showGeology) {
    showStatus("Turn on Geology before selecting rock units");
    return;
  }
  const layer = await loadCurrentGeology();
  if (!layer?.units?.length) {
    showStatus("Geology metadata is not loaded");
    return;
  }

  renderGeologyPickLayer(layer);
  const gl = state.gl;
  const rect = canvas.getBoundingClientRect();
  const pixelX = Math.max(0, Math.min(canvas.width - 1, Math.floor((clientX - rect.left) * (canvas.width / rect.width))));
  const pixelY = Math.max(0, Math.min(canvas.height - 1, Math.floor((rect.bottom - clientY) * (canvas.height / rect.height))));
  const pixel = new Uint8Array(4);
  gl.readPixels(pixelX, pixelY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.enable(gl.BLEND);
  markRenderDirty();

  const unitIndex = ((pixel[0] << 16) | (pixel[1] << 8) | pixel[2]) - 1;
  const unit = layer.units[unitIndex];
  if (!unit) {
    showStatus("No rock unit under click");
    return;
  }
  setSelectedEntity({ type: "geology", id: unit.id, unit });
}

async function selectOilGasField(clientX, clientY) {
  if (!state.showOilGasFields) {
    showStatus("Turn on Oil/gas fields before selecting them");
    return;
  }
  const layer = await loadCurrentOilGasFieldFill();
  if (!layer?.features?.length) {
    showStatus("Oil/gas field metadata is not loaded");
    return;
  }

  renderOilGasPickLayer(layer);
  const gl = state.gl;
  const rect = canvas.getBoundingClientRect();
  const pixelX = Math.max(0, Math.min(canvas.width - 1, Math.floor((clientX - rect.left) * (canvas.width / rect.width))));
  const pixelY = Math.max(0, Math.min(canvas.height - 1, Math.floor((rect.bottom - clientY) * (canvas.height / rect.height))));
  const pixel = new Uint8Array(4);
  gl.readPixels(pixelX, pixelY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.enable(gl.BLEND);
  markRenderDirty();

  const featureIndex = ((pixel[0] << 16) | (pixel[1] << 8) | pixel[2]) - 1;
  const feature = layer.features[featureIndex];
  if (!feature) {
    showStatus("No oil/gas field under click");
    return;
  }
  setSelectedEntity({ type: "oilgas", id: feature.id || `oilgas-${featureIndex}`, index: featureIndex, feature });
}

async function selectOffshoreOilLease(clientX, clientY) {
  if (!state.showOffshoreOilLeases) {
    showStatus("Turn on Offshore leases before selecting them");
    return;
  }
  const layer = await loadCurrentOffshoreOilLeaseFill();
  if (!layer?.features?.length) {
    showStatus("Offshore oil lease metadata is not loaded");
    return;
  }

  renderOffshoreOilLeasePickLayer(layer);
  const gl = state.gl;
  const rect = canvas.getBoundingClientRect();
  const pixelX = Math.max(0, Math.min(canvas.width - 1, Math.floor((clientX - rect.left) * (canvas.width / rect.width))));
  const pixelY = Math.max(0, Math.min(canvas.height - 1, Math.floor((rect.bottom - clientY) * (canvas.height / rect.height))));
  const pixel = new Uint8Array(4);
  gl.readPixels(pixelX, pixelY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.enable(gl.BLEND);
  markRenderDirty();

  const featureIndex = ((pixel[0] << 16) | (pixel[1] << 8) | pixel[2]) - 1;
  const feature = layer.features[featureIndex];
  if (!feature) {
    showStatus("No offshore oil lease under click");
    return;
  }
  setSelectedEntity({
    type: "offshorelease",
    id: feature.id || `offshorelease-${featureIndex}`,
    index: featureIndex,
    feature
  });
}

async function selectCensusTract(clientX, clientY) {
  if (!state.showCensusTracts) {
    showStatus("Turn on Census tracts before selecting them");
    return;
  }
  const layer = await loadCurrentCensusTractFill();
  if (!layer?.features?.length) {
    showStatus("Census tract metadata is not loaded");
    return;
  }

  renderCensusTractPickLayer(layer);
  const gl = state.gl;
  const rect = canvas.getBoundingClientRect();
  const pixelX = Math.max(0, Math.min(canvas.width - 1, Math.floor((clientX - rect.left) * (canvas.width / rect.width))));
  const pixelY = Math.max(0, Math.min(canvas.height - 1, Math.floor((rect.bottom - clientY) * (canvas.height / rect.height))));
  const pixel = new Uint8Array(4);
  gl.readPixels(pixelX, pixelY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.enable(gl.BLEND);
  markRenderDirty();

  const featureIndex = ((pixel[0] << 16) | (pixel[1] << 8) | pixel[2]) - 1;
  const feature = layer.features[featureIndex];
  if (!feature) {
    showStatus("No census tract under click");
    return;
  }
  setSelectedEntity({ type: "census", id: feature.id || `census-${featureIndex}`, index: featureIndex, feature });
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
  updateHealthcareLabels();
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

  if (isMobileLayout()) {
    updateMobileGridLabels();
    return;
  }

  for (const label of state.grid.labels) {
    setGridLabelMobileEdge(label.element);
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

function updateMobileGridLabels() {
  const viewport = mobileGridLabelViewport();
  for (const label of state.grid.labels) {
    const intersections = gridLabelViewportIntersections(label, viewport);
    const edgePoint = chooseGridLabelEdgePoint(label, intersections);
    if (!edgePoint) {
      label.element.style.display = "none";
      continue;
    }

    const labelPoint = pinGridLabelToViewportEdge(edgePoint, viewport);
    setGridLabelMobileEdge(label.element, labelPoint.edge);
    label.element.style.display = "block";
    label.element.style.left = `${labelPoint.x}px`;
    label.element.style.top = `${labelPoint.y}px`;
  }
}

function setGridLabelMobileEdge(element, edge) {
  element.classList.remove(
    "mobile-grid-label--west",
    "mobile-grid-label--east",
    "mobile-grid-label--north",
    "mobile-grid-label--south"
  );
  if (edge) {
    element.classList.add(`mobile-grid-label--${edge}`);
  }
}

function pinGridLabelToViewportEdge(point, viewport) {
  const sideInset = 8;
  const endInset = 2;
  if (point.edge === "west") {
    return { ...point, x: viewport.left + sideInset };
  }
  if (point.edge === "east") {
    return { ...point, x: viewport.right - sideInset };
  }
  if (point.edge === "north") {
    return { ...point, y: viewport.top + endInset };
  }
  if (point.edge === "south") {
    return { ...point, y: viewport.bottom - endInset };
  }
  return point;
}

function mobileGridLabelViewport() {
  const topInset = (mobileTopBar?.offsetHeight || 52) + 24;
  let bottomInset = 72;
  if (appShell.classList.contains("mobile-inspector-open")) {
    bottomInset = Math.max(bottomInset, document.querySelector(".inspector")?.offsetHeight || 0);
  } else if (appShell.classList.contains("mobile-tools-open")) {
    bottomInset = Math.max(bottomInset, bottomBar?.offsetHeight || 0);
  }
  return {
    left: 0,
    right: Math.max(0, canvas.clientWidth),
    top: Math.min(canvas.clientHeight - 96, topInset),
    bottom: Math.max(topInset + 80, canvas.clientHeight - bottomInset)
  };
}

function gridLabelViewportIntersections(label, viewport) {
  const samples = projectedGridLineSamples(label);
  const intersections = [];
  for (let index = 0; index < samples.length - 1; index += 1) {
    const start = samples[index];
    const end = samples[index + 1];
    if (!start || !end) {
      continue;
    }
    intersections.push(...segmentViewportIntersections(start, end, viewport));
  }

  return intersections.filter((point, index) => (
    intersections.findIndex((candidate) => Math.hypot(candidate.x - point.x, candidate.y - point.y) < 8) === index
  ));
}

function projectedGridLineSamples(label) {
  const samples = [];
  const count = 96;
  if (label.kind === "latitude") {
    for (let index = 0; index <= count; index += 1) {
      const lon = label.minLon + ((label.maxLon - label.minLon) * index) / count;
      const screen = projectPoint(latLonHeightToXyz(label.value, lon, label.heightKm));
      samples.push(screen ? { x: screen[0], y: screen[1] } : undefined);
    }
    return samples;
  }

  if (label.kind === "longitude") {
    for (let index = 0; index <= count; index += 1) {
      const lat = label.minLat + ((label.maxLat - label.minLat) * index) / count;
      const screen = projectPoint(latLonHeightToXyz(lat, label.value, label.heightKm));
      samples.push(screen ? { x: screen[0], y: screen[1] } : undefined);
    }
  }
  return samples;
}

function segmentViewportIntersections(start, end, viewport) {
  const intersections = [];
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const verticalEdges = [
    { edge: "west", x: viewport.left },
    { edge: "east", x: viewport.right }
  ];
  const horizontalEdges = [
    { edge: "north", y: viewport.top },
    { edge: "south", y: viewport.bottom }
  ];

  for (const { edge, x } of verticalEdges) {
    if (Math.abs(dx) < 1e-6) {
      continue;
    }
    const t = (x - start.x) / dx;
    const y = start.y + dy * t;
    if (t >= 0 && t <= 1 && y >= viewport.top && y <= viewport.bottom) {
      intersections.push({ edge, x, y });
    }
  }

  for (const { edge, y } of horizontalEdges) {
    if (Math.abs(dy) < 1e-6) {
      continue;
    }
    const t = (y - start.y) / dy;
    const x = start.x + dx * t;
    if (t >= 0 && t <= 1 && x >= viewport.left && x <= viewport.right) {
      intersections.push({ edge, x, y });
    }
  }

  return intersections;
}

function chooseGridLabelEdgePoint(label, intersections) {
  if (intersections.length === 0) {
    return undefined;
  }
  const sideMatches = intersections.filter((point) => point.edge === label.side);
  const candidates = sideMatches.length > 0 ? sideMatches : intersections;
  return candidates.reduce((best, candidate) => {
    if (!best) {
      return candidate;
    }
    if (label.side === "west") {
      return candidate.x < best.x ? candidate : best;
    }
    if (label.side === "east") {
      return candidate.x > best.x ? candidate : best;
    }
    if (label.side === "north") {
      return candidate.y < best.y ? candidate : best;
    }
    if (label.side === "south") {
      return candidate.y > best.y ? candidate : best;
    }
    return candidate;
  }, undefined);
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

function healthcareFeatureIsVisible(feature) {
  return state.healthcareCategoryFilters.has(feature.category);
}

function updateHealthcareLabels() {
  const layer = activeHealthcareFacilitiesLayer();
  const visible =
    state.showHealthcareFacilities
    && state.showHealthcareLabels
    && layer?.features?.length > 0
    && layer?.positions?.length >= layer.features.length * 3;
  healthcareLabelsLayer.style.display = visible ? "block" : "none";
  if (!visible) {
    for (const element of state.healthcareLabelElements.values()) {
      element.style.display = "none";
    }
    return;
  }

  const candidates = layer.features
    .map((feature, index) => ({ feature, index }))
    .filter(({ feature }) => healthcareFeatureIsVisible(feature))
    .sort((a, b) => (Number(b.feature.capacity) || 0) - (Number(a.feature.capacity) || 0));
  const activeLabelIds = new Set();
  const maxLabels = isMobileLayout() ? 32 : 90;
  let visibleLabelCount = 0;

  for (const { feature, index } of candidates) {
    if (visibleLabelCount >= maxLabels) {
      break;
    }
    const positionIndex = index * 3;
    const pointWorld = [
      layer.positions[positionIndex],
      layer.positions[positionIndex + 1],
      layer.positions[positionIndex + 2]
    ];
    if (!pointWorld.every(Number.isFinite)) {
      continue;
    }
    const world = layer.elevations ? drapedWorldPosition(pointWorld, layer.elevations[index]) : pointWorld;
    const screen = projectPoint(world);
    if (!screen || !withinCanvas(screen, 90)) {
      continue;
    }

    const labelId = `${feature.id || "facility"}:${index}`;
    let element = state.healthcareLabelElements.get(labelId);
    if (!element) {
      element = document.createElement("span");
      element.className = "healthcare-label";
      state.healthcareLabelElements.set(labelId, element);
      healthcareLabelsLayer.append(element);
    }

    activeLabelIds.add(labelId);
    visibleLabelCount += 1;
    const capacity = Number(feature.capacity) || 0;
    element.textContent = `${feature.name || "Facility"} (${capacity.toLocaleString()} beds)`;
    element.style.color = state.healthcareColor;
    element.style.borderColor = state.healthcareColor;
    element.style.display = "block";
    element.style.left = `${Math.max(76, Math.min(canvas.clientWidth - 76, screen[0]))}px`;
    element.style.top = `${Math.max(34, Math.min(canvas.clientHeight - 96, screen[1]))}px`;
  }

  for (const [labelId, element] of state.healthcareLabelElements) {
    if (!activeLabelIds.has(labelId)) {
      element.style.display = "none";
    }
  }
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
  markCameraInteraction();
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
  markCameraInteraction();
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
  const nextGeo = latLonFromXyz(addVectors(state.camera.pivotWorld, delta));
  const nextPivot = navigationPivotForGeo(nextGeo);
  const surfaceDelta = subtractVectors(nextPivot, state.camera.pivotWorld);

  state.camera.eyeWorld = addVectors(state.camera.eyeWorld, surfaceDelta);
  state.camera.targetWorld = addVectors(state.camera.targetWorld, surfaceDelta);
  state.camera.pivotWorld = nextPivot;
  state.camera.focusGeo = nextGeo;
}

function rotateCameraAroundPivot(axis, angle) {
  const pivot = state.camera.pivotWorld;
  state.camera.eyeWorld = rotatePointAroundAxis(state.camera.eyeWorld, pivot, axis, angle);
  state.camera.targetWorld = rotatePointAroundAxis(state.camera.targetWorld, pivot, axis, angle);
  state.camera.upWorld = normalize(rotateVectorAroundAxis(state.camera.upWorld, axis, angle));
}

function zoomCamera(zoom) {
  markCameraInteraction(360);
  const pivot = state.camera.pivotWorld;
  const viewVector = subtractVectors(state.camera.eyeWorld, pivot);
  const currentDistance = vectorLength(viewVector);
  const minDistance = Math.max(0.35, state.scene.radius * 0.0008);
  const nextDistance = Math.max(minDistance, currentDistance * zoom);
  const direction = normalize(viewVector);
  state.camera.targetWorld = [...pivot];
  state.camera.eyeWorld = [
    pivot[0] + direction[0] * nextDistance,
    pivot[1] + direction[1] * nextDistance,
    pivot[2] + direction[2] * nextDistance
  ];
}

function resetTouchGesture() {
  state.touch.lastCenter = undefined;
  state.touch.lastDistance = undefined;
  state.touch.lastAngle = undefined;
}

function activeTouchPoints() {
  return [...state.touch.pointers.values()];
}

function touchCenter(points) {
  return {
    x: points.reduce((sum, point) => sum + point.x, 0) / points.length,
    y: points.reduce((sum, point) => sum + point.y, 0) / points.length
  };
}

function touchDistance(points) {
  if (points.length < 2) {
    return 0;
  }
  return Math.hypot(points[1].x - points[0].x, points[1].y - points[0].y);
}

function touchAngle(points) {
  if (points.length < 2) {
    return 0;
  }
  return Math.atan2(points[1].y - points[0].y, points[1].x - points[0].x);
}

function normalizeAngleDelta(angle) {
  let delta = angle;
  while (delta > Math.PI) {
    delta -= Math.PI * 2;
  }
  while (delta < -Math.PI) {
    delta += Math.PI * 2;
  }
  return delta;
}

function handleTouchPointerDown(event) {
  event.preventDefault();
  state.touch.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  state.touch.moved = 0;
  resetTouchGesture();
  canvas.classList.add("is-panning");
  canvas.setPointerCapture(event.pointerId);
}

function handleTouchPointerMove(event) {
  if (!state.touch.pointers.has(event.pointerId)) {
    return;
  }

  event.preventDefault();
  const previous = state.touch.pointers.get(event.pointerId);
  state.touch.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  state.touch.moved += Math.abs(event.clientX - previous.x) + Math.abs(event.clientY - previous.y);

  const points = activeTouchPoints();
  if (points.length === 1) {
    const dx = event.clientX - previous.x;
    const dy = event.clientY - previous.y;
    if (event.altKey) {
      zoomCamera(Math.exp(dy * 0.01));
    } else if (event.shiftKey) {
      orbitCamera(dx, dy);
    } else {
      panCamera(dx, dy);
    }
    return;
  }

  const center = touchCenter(points);
  const distance = touchDistance(points);
  const angle = touchAngle(points);

  if (!state.touch.lastCenter || !state.touch.lastDistance || state.touch.lastDistance <= 0) {
    state.touch.lastCenter = center;
    state.touch.lastDistance = distance;
    state.touch.lastAngle = angle;
    return;
  }

  const centerDx = center.x - state.touch.lastCenter.x;
  const centerDy = center.y - state.touch.lastCenter.y;
  const zoom = state.touch.lastDistance / Math.max(distance, 1);
  const angleDelta = normalizeAngleDelta(angle - state.touch.lastAngle);

  if (Number.isFinite(zoom) && Math.abs(1 - zoom) > 0.006) {
    zoomCamera(zoom);
  }
  if (Math.hypot(centerDx, centerDy) > 0.8) {
    orbitCamera(centerDx * 0.55, centerDy * 0.9);
  }
  if (Math.abs(angleDelta) > 0.004) {
    rotateCameraAroundPivot(basisForLatLon(state.camera.focusGeo.lat, state.camera.focusGeo.lon).up, -angleDelta);
    markCameraInteraction();
  }

  state.touch.lastCenter = center;
  state.touch.lastDistance = distance;
  state.touch.lastAngle = angle;
}

function handleTouchPointerEnd(event) {
  const endedPoint = state.touch.pointers.get(event.pointerId);
  state.touch.pointers.delete(event.pointerId);
  if (canvas.hasPointerCapture(event.pointerId)) {
    canvas.releasePointerCapture(event.pointerId);
  }

  if (state.touch.pointers.size === 0) {
    canvas.classList.remove("is-panning");
    if (endedPoint && state.touch.moved < 7) {
      void selectEntityAt(endedPoint.x, endedPoint.y);
    }
    state.touch.moved = 0;
    resetTouchGesture();
    return;
  }

  resetTouchGesture();
}

function pointerModeForEvent(event) {
  if (isMobileLayout()) {
    if (event.altKey) {
      return "zoom";
    }
    if (event.shiftKey) {
      return "orbit";
    }
    if (event.metaKey || event.ctrlKey) {
      return "focus";
    }
    return "pan";
  }
  return event.button === 1 ? "pan" : event.metaKey || event.ctrlKey ? "focus" : "orbit";
}

function bindEvents() {
  mobileLayersToggle?.addEventListener("click", () => {
    setMobileLayersOpen(!appShell.classList.contains("mobile-layers-open"));
  });

  mobileLayersClose?.addEventListener("click", () => {
    setMobileLayersOpen(false);
  });

  mobileToolsToggle?.addEventListener("click", () => {
    setMobileToolsOpen(!appShell.classList.contains("mobile-tools-open"));
  });

  mobileToolsClose?.addEventListener("click", () => {
    setMobileToolsOpen(false);
  });

  mobileInspectorClose?.addEventListener("click", () => {
    setMobileInspectorOpen(false);
  });

  inspectorCollapseButton?.addEventListener("click", () => {
    setInspectorCollapsed(!state.inspectorCollapsed);
  });

  inspectorPanel?.addEventListener("click", (event) => {
    if (!state.inspectorCollapsed || isMobileLayout()) {
      return;
    }
    if (event.target.closest("button")) {
      return;
    }
    setInspectorCollapsed(false);
  });

  selectionTypeInput?.addEventListener("change", async () => {
    state.selectionType = selectionTypeInput.value;
    if (state.selectedEntity?.type !== state.selectionType) {
      state.selectedEntity = undefined;
      state.selectedId = undefined;
      renderFaultList();
    }
    renderDetails();
    try {
      await ensureSelectionLayerDisplayed(state.selectionType);
      renderDetails();
      showStatus(`Selection mode: ${selectionTypeLabel(state.selectionType)}`);
    } catch (error) {
      showStatus(error.message, true);
      console.error(error);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMobileLayersOpen(false);
      setMobileToolsOpen(false);
      setMobileInspectorOpen(false);
      if (!isMobileLayout()) {
        setInspectorCollapsed(true);
      }
    }
  });

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
    syncTerrainDrapingState();
    if (state.showTerrain) {
      try {
        await loadTerrain();
      } catch (error) {
        state.showTerrain = false;
        showTerrainInput.checked = false;
        syncTerrainDrapingState();
        showStatus(error.message, true);
        console.error(error);
        return;
      }
    }
    try {
      await refreshTerrainDependentOverlays();
    } catch (error) {
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

  showStateBoundaryInput.addEventListener("change", async () => {
    state.showStateBoundary = showStateBoundaryInput.checked;
    if (!state.showStateBoundary) {
      markRenderDirty();
      return;
    }
    try {
      await loadCurrentStateBoundary();
      markRenderDirty();
    } catch (error) {
      state.showStateBoundary = false;
      showStateBoundaryInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  stateBoundaryColorInput.addEventListener("input", () => {
    state.stateBoundaryColor = normalizeHexColor(stateBoundaryColorInput.value, state.stateBoundaryColor);
    markRenderDirty();
  });

  showPoliticalBoundariesInput.addEventListener("change", async () => {
    state.showPoliticalBoundaries = showPoliticalBoundariesInput.checked;
    if (!state.showPoliticalBoundaries) {
      state.showCountyLabels = false;
      showCountyLabelsInput.checked = false;
      return;
    }
    try {
      await loadCurrentPoliticalBoundaries();
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
      await loadCurrentPoliticalBoundaries();
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
      await loadCurrentPlaceVisuals();
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
      await loadCurrentPlaceVisuals();
    } catch (error) {
      state.showPlaceBoundaries = false;
      state.showPlaceLabels = false;
      showPlaceBoundariesInput.checked = false;
      showPlaceLabelsInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  showMunicipalPlaceBoundariesInput.addEventListener("change", async () => {
    state.showMunicipalPlaceBoundaries = showMunicipalPlaceBoundariesInput.checked;
    if (!state.showMunicipalPlaceBoundaries) {
      state.colorPlacesByPopulation = false;
      colorPlacesByPopulationInput.checked = false;
      if (!state.showPlaceBoundaries && !state.showPlaceLabels) {
        markRenderDirty();
        return;
      }
    } else {
      state.showPlaceBoundaries = true;
      showPlaceBoundariesInput.checked = true;
    }
    try {
      await loadCurrentPlaceVisuals();
      markRenderDirty();
    } catch (error) {
      state.showMunicipalPlaceBoundaries = false;
      state.colorPlacesByPopulation = false;
      showMunicipalPlaceBoundariesInput.checked = false;
      colorPlacesByPopulationInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  showMunicipalPlaceFillInput.addEventListener("change", async () => {
    state.showMunicipalPlaceFill = showMunicipalPlaceFillInput.checked;
    if (!state.showMunicipalPlaceFill) {
      markRenderDirty();
      return;
    }
    state.showPlaceBoundaries = true;
    state.showMunicipalPlaceBoundaries = true;
    showPlaceBoundariesInput.checked = true;
    showMunicipalPlaceBoundariesInput.checked = true;
    try {
      await loadCurrentPlaceVisuals();
      markRenderDirty();
    } catch (error) {
      state.showMunicipalPlaceFill = false;
      showMunicipalPlaceFillInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  colorPlacesByPopulationInput.addEventListener("change", async () => {
    state.colorPlacesByPopulation = colorPlacesByPopulationInput.checked;
    if (!state.colorPlacesByPopulation) {
      markRenderDirty();
      return;
    }
    state.showPlaceBoundaries = true;
    state.showMunicipalPlaceBoundaries = true;
    showPlaceBoundariesInput.checked = true;
    showMunicipalPlaceBoundariesInput.checked = true;
    try {
      await loadCurrentPlaceVisuals();
      markRenderDirty();
    } catch (error) {
      state.colorPlacesByPopulation = false;
      colorPlacesByPopulationInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  municipalPlaceColorMetricInput.addEventListener("change", () => {
    state.municipalPlaceColorMetric = municipalPlaceColorMetricInput.value === "density" ? "density" : "population";
    markRenderDirty();
  });

  showMunicipalityPointsInput.addEventListener("change", async () => {
    state.showMunicipalityPoints = showMunicipalityPointsInput.checked;
    if (!state.showMunicipalityPoints) {
      if (state.selectedEntity?.type === "municipality") {
        setSelectedEntity(undefined);
      }
      markRenderDirty();
      return;
    }
    try {
      await loadCurrentMunicipalityPoints();
      markRenderDirty();
    } catch (error) {
      state.showMunicipalityPoints = false;
      showMunicipalityPointsInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  municipalityColorInput.addEventListener("input", () => {
    state.municipalityColor = normalizeHexColor(municipalityColorInput.value, state.municipalityColor);
    markRenderDirty();
  });

  municipalityPopulationScaleInput.addEventListener("input", () => {
    state.municipalityPopulationScale = Number(municipalityPopulationScaleInput.value) / 100;
    syncMunicipalityPopulationScaleControl();
    markRenderDirty();
  });

  showCensusTractsInput.addEventListener("change", async () => {
    state.showCensusTracts = showCensusTractsInput.checked;
    if (!state.showCensusTracts) {
      if (state.selectedEntity?.type === "census") {
        setSelectedEntity(undefined);
      }
      markRenderDirty();
      return;
    }
    try {
      await loadCurrentCensusTractVisuals();
      markRenderDirty();
    } catch (error) {
      state.showCensusTracts = false;
      showCensusTractsInput.checked = false;
      syncCensusMetricControls();
      showStatus(error.message, true);
      console.error(error);
    }
  });

  showCensusTractFillInput.addEventListener("change", async () => {
    state.showCensusTractFill = showCensusTractFillInput.checked;
    if (!state.showCensusTractFill || !state.showCensusTracts) {
      markRenderDirty();
      return;
    }
    try {
      await loadCurrentCensusTractFill();
      markRenderDirty();
    } catch (error) {
      state.showCensusTractFill = false;
      showCensusTractFillInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  censusTractLineColorInput.addEventListener("input", () => {
    state.censusTractLineColor = normalizeHexColor(censusTractLineColorInput.value, state.censusTractLineColor);
    markRenderDirty();
  });

  censusTractMetricInput.addEventListener("change", () => {
    state.censusTractMetric = censusTractMetricInput.value || state.censusTractMetric;
    disposeCensusMetricBins(state.censusTractFill);
    disposeCensusMetricBins(state.drapedCensusTractFill);
    if (state.selectedEntity?.type === "census") {
      renderDetails();
    }
    markRenderDirty();
  });

  censusTractOpacityInput.addEventListener("input", () => {
    state.censusTractOpacity = Number(censusTractOpacityInput.value) / 100;
    syncCensusTractOpacityControl();
    markRenderDirty();
  });

  showLakesInput.addEventListener("change", async () => {
    state.showLakes = showLakesInput.checked;
    if (!state.showLakes) {
      if (state.selectedEntity?.type === "lake" && !state.showLakeFill) {
        setSelectedEntity(undefined);
      }
      return;
    }
    try {
      await loadCurrentLakes();
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
      if (state.selectedEntity?.type === "lake" && !state.showLakes) {
        setSelectedEntity(undefined);
      }
      return;
    }
    try {
      await loadCurrentLakeFill();
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
      if (state.selectedEntity?.type === "river") {
        setSelectedEntity(undefined);
      }
      return;
    }
    try {
      await loadCurrentRivers();
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

  showShorelineInput.addEventListener("change", async () => {
    state.showShoreline = showShorelineInput.checked;
    if (!state.showShoreline) {
      return;
    }
    try {
      await loadCurrentShoreline();
    } catch (error) {
      state.showShoreline = false;
      showShorelineInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  shorelineColorInput.addEventListener("input", () => {
    state.shorelineColor = normalizeHexColor(shorelineColorInput.value, state.shorelineColor);
  });

  showGeologyInput.addEventListener("change", async () => {
    state.showGeology = showGeologyInput.checked;
    if (!state.showGeology) {
      if (state.selectedEntity?.type === "geology") {
        setSelectedEntity(undefined);
      }
      return;
    }
    try {
      await loadCurrentGeology();
    } catch (error) {
      state.showGeology = false;
      showGeologyInput.checked = false;
      syncGeologyUnitControls();
      showStatus(error.message, true);
      console.error(error);
    }
  });

  geologyOpacityInput.addEventListener("input", () => {
    state.geologyOpacity = Number(geologyOpacityInput.value) / 100;
    syncGeologyOpacityControl();
  });

  geologyUnitSelect.addEventListener("change", () => {
    state.geologySelectedUnitId = geologyUnitSelect.value;
    const unit = activeGeologyLayer()?.unitMap?.get(state.geologySelectedUnitId)
      || state.geology?.unitMap?.get(state.geologySelectedUnitId)
      || state.drapedGeology?.unitMap?.get(state.geologySelectedUnitId);
    geologyUnitColorInput.value = unit ? getGeologyUnitColor(unit) : "#d7b56d";
  });

  geologyUnitColorInput.addEventListener("input", () => {
    if (!state.geologySelectedUnitId) {
      return;
    }
    state.geologyColorOverrides.set(
      state.geologySelectedUnitId,
      normalizeHexColor(geologyUnitColorInput.value, geologyUnitColorInput.value)
    );
    if (state.selectedEntity?.type === "geology" && state.selectedEntity.id === state.geologySelectedUnitId) {
      renderDetails();
    }
  });

  showOilGasFieldsInput.addEventListener("change", async () => {
    state.showOilGasFields = showOilGasFieldsInput.checked;
    if (!state.showOilGasFields) {
      if (state.selectedEntity?.type === "oilgas") {
        setSelectedEntity(undefined);
      }
      markRenderDirty();
      return;
    }
    try {
      await loadCurrentOilGasVisuals();
      markRenderDirty();
    } catch (error) {
      state.showOilGasFields = false;
      showOilGasFieldsInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  showOilGasFieldFillInput.addEventListener("change", async () => {
    state.showOilGasFieldFill = showOilGasFieldFillInput.checked;
    if (!state.showOilGasFields || !state.showOilGasFieldFill) {
      markRenderDirty();
      return;
    }
    try {
      await loadCurrentOilGasFieldFill();
      markRenderDirty();
    } catch (error) {
      state.showOilGasFieldFill = false;
      showOilGasFieldFillInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  oilGasFieldColorInput.addEventListener("input", () => {
    state.oilGasFieldColor = normalizeHexColor(oilGasFieldColorInput.value, state.oilGasFieldColor);
    markRenderDirty();
  });

  oilGasFieldOpacityInput.addEventListener("input", () => {
    state.oilGasFieldOpacity = Number(oilGasFieldOpacityInput.value) / 100;
    syncOilGasFieldOpacityControl();
    markRenderDirty();
  });

  showOffshoreOilLeasesInput.addEventListener("change", async () => {
    state.showOffshoreOilLeases = showOffshoreOilLeasesInput.checked;
    if (!state.showOffshoreOilLeases) {
      if (state.selectedEntity?.type === "offshorelease") {
        setSelectedEntity(undefined);
      }
      markRenderDirty();
      return;
    }
    try {
      await loadCurrentOffshoreOilLeaseVisuals();
      markRenderDirty();
    } catch (error) {
      state.showOffshoreOilLeases = false;
      showOffshoreOilLeasesInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  showOffshoreOilLeaseFillInput.addEventListener("change", async () => {
    state.showOffshoreOilLeaseFill = showOffshoreOilLeaseFillInput.checked;
    if (!state.showOffshoreOilLeases || !state.showOffshoreOilLeaseFill) {
      markRenderDirty();
      return;
    }
    try {
      await loadCurrentOffshoreOilLeaseFill();
      markRenderDirty();
    } catch (error) {
      state.showOffshoreOilLeaseFill = false;
      showOffshoreOilLeaseFillInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  offshoreOilLeaseColorInput.addEventListener("input", () => {
    state.offshoreOilLeaseColor = normalizeHexColor(offshoreOilLeaseColorInput.value, state.offshoreOilLeaseColor);
    markRenderDirty();
  });

  offshoreOilLeaseOpacityInput.addEventListener("input", () => {
    state.offshoreOilLeaseOpacity = Number(offshoreOilLeaseOpacityInput.value) / 100;
    syncOffshoreOilLeaseOpacityControl();
    markRenderDirty();
  });

  showOilPlatformsInput.addEventListener("change", async () => {
    state.showOilPlatforms = showOilPlatformsInput.checked;
    if (!state.showOilPlatforms) {
      if (state.selectedEntity?.type === "oilplatform") {
        setSelectedEntity(undefined);
      }
      markRenderDirty();
      return;
    }
    try {
      await loadCurrentOilPlatforms();
      markRenderDirty();
    } catch (error) {
      state.showOilPlatforms = false;
      showOilPlatformsInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  oilPlatformColorInput.addEventListener("input", () => {
    state.oilPlatformColor = normalizeHexColor(oilPlatformColorInput.value, state.oilPlatformColor);
    markRenderDirty();
  });

  oilPlatformScaleInput.addEventListener("input", () => {
    state.oilPlatformScale = Number(oilPlatformScaleInput.value) / 100;
    syncOilPlatformScaleControl();
    markRenderDirty();
  });

  showPowerPlantsInput.addEventListener("change", async () => {
    state.showPowerPlants = showPowerPlantsInput.checked;
    if (!state.showPowerPlants) {
      if (state.selectedEntity?.type === "powerplant") {
        setSelectedEntity(undefined);
      }
      markRenderDirty();
      return;
    }
    try {
      await loadCurrentPowerPlants();
      markRenderDirty();
    } catch (error) {
      state.showPowerPlants = false;
      showPowerPlantsInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  powerPlantColorInput.addEventListener("input", () => {
    state.powerPlantColor = normalizeHexColor(powerPlantColorInput.value, state.powerPlantColor);
    markRenderDirty();
  });

  powerPlantScaleInput.addEventListener("input", () => {
    state.powerPlantScale = Number(powerPlantScaleInput.value) / 100;
    syncPowerPlantScaleControl();
    markRenderDirty();
  });

  showTransmissionLinesInput.addEventListener("change", async () => {
    state.showTransmissionLines = showTransmissionLinesInput.checked;
    if (!state.showTransmissionLines) {
      if (state.selectedEntity?.type === "transmission") {
        setSelectedEntity(undefined);
      }
      markRenderDirty();
      return;
    }
    try {
      await loadCurrentTransmissionLines();
      markRenderDirty();
    } catch (error) {
      state.showTransmissionLines = false;
      showTransmissionLinesInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  transmissionLineColorInput.addEventListener("input", () => {
    state.transmissionLineColor = normalizeHexColor(transmissionLineColorInput.value, state.transmissionLineColor);
    markRenderDirty();
  });

  transmissionLineOpacityInput.addEventListener("input", () => {
    state.transmissionLineOpacity = Number(transmissionLineOpacityInput.value) / 100;
    syncTransmissionLineOpacityControl();
    markRenderDirty();
  });

  showActiveFiresInput.addEventListener("change", async () => {
    state.showActiveFires = showActiveFiresInput.checked;
    if (!state.showActiveFires) {
      if (state.selectedEntity?.type === "fire") {
        setSelectedEntity(undefined);
      }
      markRenderDirty();
      return;
    }
    try {
      await loadCurrentActiveFires();
      markRenderDirty();
    } catch (error) {
      state.showActiveFires = false;
      showActiveFiresInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  showActiveFireFootprintsInput.addEventListener("change", async () => {
    state.showActiveFireFootprints = showActiveFireFootprintsInput.checked;
    if (!state.showActiveFires || !state.showActiveFireFootprints) {
      markRenderDirty();
      return;
    }
    try {
      await loadCurrentActiveFires();
      markRenderDirty();
    } catch (error) {
      state.showActiveFireFootprints = false;
      showActiveFireFootprintsInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  activeFireColorInput.addEventListener("input", () => {
    state.activeFireColor = normalizeHexColor(activeFireColorInput.value, state.activeFireColor);
    markRenderDirty();
  });

  activeFireScaleInput.addEventListener("input", () => {
    state.activeFireScale = Number(activeFireScaleInput.value) / 100;
    syncActiveFireScaleControl();
    markRenderDirty();
  });

  showTsunamiHazardInput.addEventListener("change", async () => {
    state.showTsunamiHazard = showTsunamiHazardInput.checked;
    if (!state.showTsunamiHazard) {
      return;
    }
    try {
      await loadCurrentTsunamiHazard();
    } catch (error) {
      state.showTsunamiHazard = false;
      showTsunamiHazardInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  showTsunamiHazardShadeInput.addEventListener("change", async () => {
    state.showTsunamiHazardShade = showTsunamiHazardShadeInput.checked;
    if (!state.showTsunamiHazard || !state.showTsunamiHazardShade) {
      return;
    }
    try {
      await loadCurrentTsunamiHazard();
    } catch (error) {
      state.showTsunamiHazardShade = false;
      showTsunamiHazardShadeInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  tsunamiHazardColorInput.addEventListener("input", () => {
    state.tsunamiHazardColor = normalizeHexColor(tsunamiHazardColorInput.value, state.tsunamiHazardColor);
  });

  tsunamiHazardOpacityInput.addEventListener("input", () => {
    state.tsunamiHazardOpacity = Number(tsunamiHazardOpacityInput.value) / 100;
    syncTsunamiHazardOpacityControl();
  });

  showHealthcareFacilitiesInput.addEventListener("change", async () => {
    state.showHealthcareFacilities = showHealthcareFacilitiesInput.checked;
    if (!state.showHealthcareFacilities) {
      if (state.selectedEntity?.type === "healthcare") {
        setSelectedEntity(undefined);
      }
      updateHealthcareLabels();
      markRenderDirty();
      return;
    }
    try {
      await loadCurrentHealthcareFacilities();
      updateHealthcareLabels();
      markRenderDirty();
    } catch (error) {
      state.showHealthcareFacilities = false;
      showHealthcareFacilitiesInput.checked = false;
      showStatus(error.message, true);
      console.error(error);
    }
  });

  showHealthcareLabelsInput.addEventListener("change", () => {
    state.showHealthcareLabels = showHealthcareLabelsInput.checked;
    updateHealthcareLabels();
  });

  healthcareColorInput.addEventListener("input", () => {
    state.healthcareColor = normalizeHexColor(healthcareColorInput.value, state.healthcareColor);
    markRenderDirty();
  });

  healthcareBedScaleInput.addEventListener("input", () => {
    state.healthcareBedScale = Number(healthcareBedScaleInput.value) / 100;
    syncHealthcareBedScaleControl();
    markRenderDirty();
  });

  for (const input of healthcareCategoryInputs) {
    input.addEventListener("change", () => {
      const categoryId = input.dataset.healthcareCategory;
      if (input.checked) {
        state.healthcareCategoryFilters.add(categoryId);
      } else {
        state.healthcareCategoryFilters.delete(categoryId);
      }
      updateHealthcareLabels();
      markRenderDirty();
    });
  }

  for (const input of healthcareCategoryInputs) {
    input.checked = state.healthcareCategoryFilters.has(input.dataset.healthcareCategory);
  }

  showRoadsInput.addEventListener("change", async () => {
    state.showRoads = showRoadsInput.checked;
    if (!state.showRoads) {
      return;
    }
    try {
      await loadCurrentHighways();
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

  showPublicRoadsInput.addEventListener("change", async () => {
    state.showPublicRoads = showPublicRoadsInput.checked;
    if (!state.showPublicRoads) {
      state.publicRoadActiveTileIds.clear();
      updatePublicRoadStatus();
      return;
    }
    try {
      await loadCurrentPublicRoadIndex();
      updatePublicRoadTilesForView();
      updatePublicRoadStatus();
    } catch (error) {
      console.error(error);
      state.showPublicRoads = false;
      showPublicRoadsInput.checked = false;
      showStatus(error.message, true);
      updatePublicRoadStatus();
    }
  });

  publicRoadColorInput.addEventListener("input", () => {
    state.publicRoadColor = normalizeHexColor(publicRoadColorInput.value, state.publicRoadColor);
  });

  publicRoadZoomThresholdInput.addEventListener("input", () => {
    state.publicRoadZoomThreshold = Number(publicRoadZoomThresholdInput.value) / 100;
    syncPublicRoadZoomControl();
    state.publicRoadTileUpdateKey = "";
    updatePublicRoadTilesForView();
  });

  publicRoadSearchInput.addEventListener("input", () => {
    state.publicRoadSearchQuery = publicRoadSearchInput.value;
    window.clearTimeout(publicRoadSearchInput.searchTimer);
    publicRoadSearchInput.searchTimer = window.setTimeout(() => {
      updatePublicRoadSearchResults();
    }, 160);
  });

  showAllFaultsInput.addEventListener("change", async () => {
    await setAllFaultsVisible(showAllFaultsInput.checked);
  });

  showAltInput.addEventListener("change", async () => {
    state.showAlt = showAltInput.checked;
    if (showAllFaultsInput.checked) {
      await setAllFaultsVisible(true);
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
    setNorthUpCurrentView();
  });

  locateUserButton.addEventListener("click", () => {
    requestUserLocation();
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
    if (event.pointerType === "touch") {
      handleTouchPointerDown(event);
      return;
    }
    state.pointer.active = true;
    state.pointer.x = event.clientX;
    state.pointer.y = event.clientY;
    state.pointer.moved = 0;
    state.pointer.mode = pointerModeForEvent(event);
    canvas.classList.toggle("is-panning", state.pointer.mode === "pan" || state.pointer.mode === "zoom");
    canvas.setPointerCapture(event.pointerId);
  });

  canvas.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") {
      handleTouchPointerMove(event);
      return;
    }
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
    } else if (state.pointer.mode === "zoom") {
      zoomCamera(Math.exp(dy * 0.01));
    } else if (state.pointer.mode === "orbit") {
      orbitCamera(dx, dy);
    }
  });

  canvas.addEventListener("pointerup", async (event) => {
    if (event.pointerType === "touch") {
      handleTouchPointerEnd(event);
      return;
    }
    if (state.pointer.moved < 5 && state.pointer.mode !== "pan") {
      if (state.pointer.mode === "focus" || event.metaKey || event.ctrlKey) {
        setFocusFromClick(event.clientX, event.clientY);
      } else {
        await selectEntityAt(event.clientX, event.clientY);
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
    if (event.pointerType === "touch") {
      handleTouchPointerEnd(event);
      return;
    }
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

  document.addEventListener("change", markRenderDirty, true);
  document.addEventListener("input", markRenderDirty, true);
  document.addEventListener("click", markRenderDirty, true);
  window.addEventListener("resize", () => {
    resizeCanvas();
    syncMobileSelectionSheet();
    markRenderDirty();
  });
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

function raySphereIntersection(origin, direction, radius) {
  const b = 2 * dot(origin, direction);
  const c = dot(origin, origin) - radius * radius;
  const discriminant = b * b - 4 * c;
  if (discriminant < 0) {
    return undefined;
  }

  const sqrtDiscriminant = Math.sqrt(discriminant);
  const near = (-b - sqrtDiscriminant) / 2;
  const far = (-b + sqrtDiscriminant) / 2;
  const t = near > 0 ? near : far > 0 ? far : undefined;
  if (t === undefined) {
    return undefined;
  }
  return addVectors(origin, scaleVector(direction, t));
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
  syncPublicRoadZoomControl();
  syncGeologyOpacityControl();
  syncOilGasFieldOpacityControl();
  syncOffshoreOilLeaseOpacityControl();
  syncOilPlatformScaleControl();
  syncPowerPlantScaleControl();
  syncTransmissionLineOpacityControl();
  syncTsunamiHazardOpacityControl();
  syncMunicipalityPopulationScaleControl();
  syncCensusTractOpacityControl();
  syncActiveFireScaleControl();
  syncGeologyUnitControls();
  syncCensusMetricControls();
  if (selectionTypeInput) {
    selectionTypeInput.value = state.selectionType;
  }
  setInspectorCollapsed(false);
  bindEvents();
  resizeCanvas();
  window.requestAnimationFrame(drawScene);

  try {
    await loadManifest();
    void requestUserLocation({ initial: true });
  } catch (error) {
    showStatus(error.message, true);
    console.error(error);
  }
}

init();
