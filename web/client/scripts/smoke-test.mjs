import { readFile } from "node:fs/promises";
import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, "../..");

async function readJson(relativePath) {
  const contents = await readFile(path.join(webRoot, relativePath), "utf8");
  return JSON.parse(contents);
}

const index = await readFile(path.join(webRoot, "client/index.html"), "utf8");
const manifest = await readJson("public-data/faults/manifest.json");
const stateBoundary = await readJson("public-data/political-boundaries/ca_state/state-boundary.json");
const drapedStateBoundary = await readJson("public-data/political-boundaries/ca_state/state-boundary-draped-500m.json");
const countyBoundaries = await readJson("public-data/political-boundaries/ca_counties/counties-boundaries.json");
const drapedCountyBoundaries = await readJson("public-data/political-boundaries/ca_counties/counties-boundaries-draped-500m.json");
const placeBoundaries = await readJson("public-data/political-boundaries/ca_places/places-boundaries.json");
const drapedPlaceBoundaries = await readJson("public-data/political-boundaries/ca_places/places-boundaries-draped-500m.json");
const municipalPlaceBoundaries = await readJson("public-data/political-boundaries/ca_places/municipal-places-boundaries.json");
const drapedMunicipalPlaceBoundaries = await readJson("public-data/political-boundaries/ca_places/municipal-places-boundaries-draped-500m.json");
const municipalPlaceFill = await readJson("public-data/political-boundaries/ca_places/municipal-places-fill.json");
const drapedMunicipalPlaceFill = await readJson("public-data/political-boundaries/ca_places/municipal-places-fill-draped-500m.json");
const municipalities = await readJson("public-data/political-boundaries/ca_municipalities_points/converted/california-municipalities.json");
const drapedMunicipalities = await readJson("public-data/political-boundaries/ca_municipalities_points/converted/california-municipalities-draped-500m.json");
const censusTractBoundaries = await readJson("public-data/census-data/converted/census-tracts-boundaries.json");
const drapedCensusTractBoundaries = await readJson("public-data/census-data/converted/census-tracts-boundaries-draped-500m.json");
const censusTractFill = await readJson("public-data/census-data/converted/census-tracts-fill.json");
const drapedCensusTractFill = await readJson("public-data/census-data/converted/census-tracts-fill-draped-500m.json");
const censusTractFeatures = await readJson("public-data/census-data/converted/census-tracts-features.json");
const censusTractProperties = await readJson("public-data/census-data/converted/census-tracts-properties.json");
const terrain = await readJson("public-data/elevation-models/combined/terrain-500m.json");
const lakes = await readJson("public-data/water-bodies/converted/california-lakes.json");
const lakeFill = await readJson("public-data/water-bodies/converted/california-lakes-fill.json");
const drapedLakes = await readJson("public-data/water-bodies/converted/california-lakes-draped-500m.json");
const drapedLakeFill = await readJson("public-data/water-bodies/converted/california-lakes-fill-draped-500m.json");
const rivers = await readJson("public-data/water-bodies/converted/nhd-major-rivers.json");
const drapedRivers = await readJson("public-data/water-bodies/converted/nhd-major-rivers-draped-500m.json");
const shoreline = await readJson("public-data/water-bodies/converted/cdfw-shoreline.json");
const drapedShoreline = await readJson("public-data/water-bodies/converted/cdfw-shoreline-draped-500m.json");
const geology = await readJson("public-data/geology/converted/geologic-units-fill.json");
const drapedGeology = await readJson("public-data/geology/converted/geologic-units-terrain-draped.json");
const oilGasFields = await readJson("public-data/oil-and-gas/converted/oil-gas-fields.json");
const drapedOilGasFields = await readJson("public-data/oil-and-gas/converted/oil-gas-fields-draped-500m.json");
const oilGasFieldFill = await readJson("public-data/oil-and-gas/converted/oil-gas-fields-fill.json");
const drapedOilGasFieldFill = await readJson("public-data/oil-and-gas/converted/oil-gas-fields-fill-draped-500m.json");
const offshoreOilLeases = await readJson("public-data/oil-and-gas/converted/offshore-oil-leases.json");
const drapedOffshoreOilLeases = await readJson("public-data/oil-and-gas/converted/offshore-oil-leases-draped-500m.json");
const offshoreOilLeaseFill = await readJson("public-data/oil-and-gas/converted/offshore-oil-leases-fill.json");
const drapedOffshoreOilLeaseFill = await readJson("public-data/oil-and-gas/converted/offshore-oil-leases-fill-draped-500m.json");
const oilPlatforms = await readJson("public-data/oil-and-gas/converted/offshore-oil-platforms.json");
const drapedOilPlatforms = await readJson("public-data/oil-and-gas/converted/offshore-oil-platforms-draped-500m.json");
const powerPlants = await readJson("public-data/power-plants/converted/california-power-plants.json");
const drapedPowerPlants = await readJson("public-data/power-plants/converted/california-power-plants-draped-500m.json");
const transmissionLines = await readJson("public-data/transmission-lines/converted/california-transmission-lines.json");
const drapedTransmissionLines = await readJson("public-data/transmission-lines/converted/california-transmission-lines-draped-500m.json");
const tsunamiHazard = await readJson("public-data/hazards/converted/tsunami-hazard-line.json");
const drapedTsunamiHazard = await readJson("public-data/hazards/converted/tsunami-hazard-line-draped-500m.json");
const tsunamiHazardShade = await readJson("public-data/hazards/converted/tsunami-hazard-shade.json");
const drapedTsunamiHazardShade = await readJson("public-data/hazards/converted/tsunami-hazard-shade-draped-500m.json");
const activeFires = await readJson("public-data/hazards/firms-active-fires/converted/active-fires.json");
const drapedActiveFires = await readJson("public-data/hazards/firms-active-fires/converted/active-fires-draped-500m.json");
const activeFireFootprints = await readJson("public-data/hazards/firms-active-fires/converted/active-fire-footprints.json");
const drapedActiveFireFootprints = await readJson("public-data/hazards/firms-active-fires/converted/active-fire-footprints-draped-500m.json");
const healthcareFacilities = await readJson("public-data/hospitals/converted/licensed-certified-healthcare-facilities.json");
const drapedHealthcareFacilities = await readJson("public-data/hospitals/converted/licensed-certified-healthcare-facilities-draped-500m.json");
const roads = await readJson("public-data/roads/converted/shn-lines.json");
const drapedHighways = await readJson("public-data/roads/converted/shn-lines-draped-500m.json");
const publicRoads = await readJson("public-data/roads/converted/all-public-roads.json");
const drapedPublicRoads = await readJson("public-data/roads/converted/all-public-roads-draped-500m.json");

if (!index.includes("viewer-canvas")) {
  throw new Error("client/index.html is missing the viewer canvas");
}

if (!index.includes("locate-user")) {
  throw new Error("client/index.html is missing the location control");
}

if (
  !index.includes("mobile-layers-toggle") ||
  !index.includes("mobile-tools-toggle") ||
  !index.includes("mobile-tools-close") ||
  !index.includes("mobile-inspector-close")
) {
  throw new Error("client/index.html is missing mobile drawer controls");
}

if (
  !index.includes("selection-type") ||
  !index.includes('<option value="healthcare">Healthcare</option>') ||
  !index.includes('<option value="geology">Rock units</option>') ||
  !index.includes('<option value="oilgas">Oil/gas fields</option>') ||
  !index.includes('<option value="offshorelease">Offshore oil leases</option>') ||
  !index.includes('<option value="oilplatform">Oil platforms</option>') ||
  !index.includes('<option value="powerplant">Power plants</option>') ||
  !index.includes('<option value="transmission">Transmission lines</option>') ||
  !index.includes('<option value="municipality">Municipalities</option>') ||
  !index.includes('<option value="census">Census tracts</option>') ||
  !index.includes('<option value="fire">Active fires</option>') ||
  !index.includes("inspector-collapse")
) {
  throw new Error("client/index.html is missing entity selection or inspector collapse controls");
}

if (!index.includes("show-place-boundaries")) {
  throw new Error("client/index.html is missing the places boundary toggle");
}

if (!index.includes("show-terrain")) {
  throw new Error("client/index.html is missing the terrain toggle");
}

if (!index.includes("terrain-exaggeration")) {
  throw new Error("client/index.html is missing the terrain relief control");
}

if (!index.includes("terrain-opacity")) {
  throw new Error("client/index.html is missing the DEM opacity control");
}

if (!index.includes('id="terrain-opacity" type="range" min="10" max="100" value="100"')) {
  throw new Error("DEM opacity should default to 100%");
}

if (!index.includes("show-matching-faults") || !index.includes("hide-matching-faults")) {
  throw new Error("client/index.html is missing the matching fault actions");
}

if (
  !index.includes("county-color") ||
  !index.includes("show-state-boundary") ||
  !index.includes("state-boundary-color") ||
  !index.includes("show-county-labels") ||
  !index.includes("place-color") ||
  !index.includes("show-place-labels") ||
  !index.includes("show-municipal-place-boundaries") ||
  !index.includes("show-municipal-place-fill") ||
  !index.includes("color-places-by-population") ||
  !index.includes("municipal-place-color-metric") ||
  !index.includes("show-municipality-points") ||
  !index.includes("municipality-color") ||
  !index.includes("municipality-population-scale")
) {
  throw new Error("client/index.html is missing county style controls");
}

if (
  !index.includes("show-census-tracts") ||
  !index.includes("show-census-tract-fill") ||
  !index.includes("census-tract-line-color") ||
  !index.includes("census-tract-metric") ||
  !index.includes("census-tract-opacity")
) {
  throw new Error("client/index.html is missing census tract layer controls");
}

if (
  !index.includes("show-lakes") ||
  !index.includes("show-lake-fill") ||
  !index.includes("show-rivers") ||
  !index.includes("show-shoreline") ||
  !index.includes("lake-color") ||
  !index.includes("river-color") ||
  !index.includes("shoreline-color")
) {
  throw new Error("client/index.html is missing water layer controls");
}

if (
  !index.includes("show-geology") ||
  !index.includes("geology-opacity") ||
  !index.includes("geology-unit-select") ||
  !index.includes("geology-unit-color")
) {
  throw new Error("client/index.html is missing geology layer controls");
}

if (
  !index.includes("show-oil-gas-fields") ||
  !index.includes("show-oil-gas-field-fill") ||
  !index.includes("oil-gas-field-color") ||
  !index.includes("oil-gas-field-opacity") ||
  !index.includes("show-offshore-oil-leases") ||
  !index.includes("show-offshore-oil-lease-fill") ||
  !index.includes("offshore-oil-lease-color") ||
  !index.includes("offshore-oil-lease-opacity") ||
  !index.includes("show-oil-platforms") ||
  !index.includes("oil-platform-color") ||
  !index.includes("oil-platform-scale") ||
  !index.includes("show-power-plants") ||
  !index.includes("power-plant-color") ||
  !index.includes("power-plant-scale") ||
  !index.includes("show-transmission-lines") ||
  !index.includes("transmission-line-color") ||
  !index.includes("transmission-line-opacity")
) {
  throw new Error("client/index.html is missing energy layer controls");
}

if (
  !index.includes("show-active-fires") ||
  !index.includes("show-active-fire-footprints") ||
  !index.includes("active-fire-color") ||
  !index.includes("active-fire-scale") ||
  !index.includes("show-tsunami-hazard") ||
  !index.includes("show-tsunami-hazard-shade") ||
  !index.includes("tsunami-hazard-color") ||
  !index.includes("tsunami-hazard-opacity")
) {
  throw new Error("client/index.html is missing tsunami hazard layer controls");
}

if (
  !index.includes("show-healthcare-facilities") ||
  !index.includes("show-healthcare-labels") ||
  !index.includes("healthcare-color") ||
  !index.includes("healthcare-bed-scale") ||
  !index.includes('data-healthcare-category="general-acute"') ||
  !index.includes('data-healthcare-category="skilled-nursing"')
) {
  throw new Error("client/index.html is missing healthcare facility layer controls");
}

if (!index.includes("show-roads") || !index.includes("road-color")) {
  throw new Error("client/index.html is missing road layer controls");
}

if (
  !index.includes("show-public-roads") ||
  !index.includes("public-road-color") ||
  !index.includes("public-road-zoom-threshold") ||
  !index.includes("public-road-search")
) {
  throw new Error("client/index.html is missing public road layer controls");
}

if (
  index.includes("show-draped-political-boundaries") ||
  index.includes("show-draped-lakes") ||
  index.includes("show-draped-rivers") ||
  index.includes("show-draped-shoreline") ||
  index.includes("show-draped-highways") ||
  index.includes("show-draped-public-roads")
) {
  throw new Error("3D overlay controls should be driven by Terrain, not separate checkboxes");
}

if (!index.includes('id="public-road-zoom-threshold" type="range" min="10" max="100" value="55"')) {
  throw new Error("public road zoom threshold slider should default to 55");
}

if (index.indexOf("show-terrain") > index.indexOf("fault-search")) {
  throw new Error("sidebar layer controls should appear before fault search");
}

if (index.indexOf("fault-search") > index.indexOf("fault-list-section")) {
  throw new Error("fault search should appear directly above the fault list");
}

if (!Array.isArray(manifest.faults) || manifest.faults.length === 0) {
  throw new Error("fault manifest has no faults");
}

const firstFault = manifest.faults[0];
const mesh = await readJson(`public-data/${firstFault.meshPath}`);

if (!Array.isArray(mesh.vertices) || !Array.isArray(mesh.triangles)) {
  throw new Error(`${firstFault.id} mesh is missing vertices or triangles`);
}

if (mesh.vertices.length < 9 || mesh.triangles.length < 3) {
  throw new Error(`${firstFault.id} mesh is too small to render`);
}

function checkBoundaryLayer(layer, label, expectedFeatureCount, minimumSourcePointCount) {
  if (!Array.isArray(layer.lineVertices) || layer.lineVertices.length < 6) {
    throw new Error(`${label} boundary mesh is missing line vertices`);
  }

  if (
    layer.featureCount !== expectedFeatureCount ||
    layer.sourcePointCount < minimumSourcePointCount ||
    layer.processing?.downsampled !== false
  ) {
    throw new Error(`${label} boundary metadata does not match the expected full-resolution shapefile`);
  }

  if (layer.vertexCount !== layer.segmentCount * 2 || layer.lineVertices.length !== layer.vertexCount * 3) {
    throw new Error(`${label} boundary vertex counts are inconsistent`);
  }

  if (!Array.isArray(layer.features) || !layer.features.every((feature) => typeof feature.name === "string")) {
    throw new Error(`${label} boundary features are missing names`);
  }
}

checkBoundaryLayer(stateBoundary, "state", 1, 11000);
checkBoundaryLayer(countyBoundaries, "county", 58, 200000);
checkBoundaryLayer(placeBoundaries, "place", 1521, 900000);

async function checkBinaryLineLayer(layer, label, minimumFeatureCount, minimumSourcePointCount) {
  if (layer.format !== "webgl-line-layer-v1" || !layer.linePath) {
    throw new Error(`${label} line layer is missing binary line metadata`);
  }
  if (
    layer.featureCount < minimumFeatureCount ||
    layer.sourcePointCount < minimumSourcePointCount ||
    layer.processing?.downsampled !== false
  ) {
    throw new Error(`${label} line layer metadata does not match the expected full-resolution shapefile`);
  }
  if (layer.vertexCount !== layer.segmentCount * 2) {
    throw new Error(`${label} vertex count is inconsistent`);
  }
  const lineInfo = await stat(path.join(webRoot, layer.linePath.replace(/^web\//, "")));
  const expectedByteLength = typeof layer.byteLength === "number" ? layer.byteLength : layer.byteLength?.lines;
  if (lineInfo.size !== layer.vertexCount * 3 * 4 || lineInfo.size !== expectedByteLength) {
    throw new Error(`${label} binary line buffer size is inconsistent`);
  }
}

async function checkMunicipalPlaceFillLayer(layer, label, expectedFormat) {
  if (layer.format !== expectedFormat || !layer.positionPath || !layer.trianglePath) {
    throw new Error(`${label} fill layer is missing binary fill metadata`);
  }
  if (
    layer.featureCount < 470 ||
    layer.vertexCount < 300000 ||
    layer.triangleCount < 300000 ||
    layer.processing?.downsampled !== false ||
    !Array.isArray(layer.features)
  ) {
    throw new Error(`${label} fill metadata does not match the municipal place polygon layer`);
  }
  if (
    !layer.bounds?.population2020 ||
    !layer.bounds?.populationDensityPerSqMi ||
    layer.bounds.populationDensityPerSqMi[1] <= layer.bounds.populationDensityPerSqMi[0]
  ) {
    throw new Error(`${label} fill layer is missing population or density bounds`);
  }
  if (
    !layer.features.every(
      (feature) =>
        feature.triangleIndexCount === feature.triangleCount * 3 &&
        Number.isFinite(Number(feature.population2020)) &&
        Number.isFinite(Number(feature.populationDensityPerSqMi))
    )
  ) {
    throw new Error(`${label} fill features are missing triangle ranges or metric values`);
  }
  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const triangleInfo = await stat(path.join(webRoot, layer.trianglePath.replace(/^web\//, "")));
  if (
    positionInfo.size !== layer.vertexCount * 3 * 4 ||
    positionInfo.size !== layer.byteLength.positions ||
    triangleInfo.size !== layer.triangleCount * 3 * 4 ||
    triangleInfo.size !== layer.byteLength.triangles
  ) {
    throw new Error(`${label} fill buffer size is inconsistent`);
  }
  if (expectedFormat === "webgl-draped-fill-layer-v1") {
    const elevationInfo = await stat(path.join(webRoot, layer.elevationPath.replace(/^web\//, "")));
    if (
      layer.demResolutionMeters !== 500 ||
      layer.processing?.draped !== true ||
      layer.processing?.terrainConforming !== true ||
      !String(layer.processing?.demSampling || "").includes("interpolation") ||
      elevationInfo.size !== layer.vertexCount * 4 ||
      elevationInfo.size !== layer.byteLength.elevations
    ) {
      throw new Error(`${label} draped fill metadata is incomplete`);
    }
  }
}

await checkBinaryLineLayer(municipalPlaceBoundaries, "municipal place", 470, 380000);
await checkMunicipalPlaceFillLayer(municipalPlaceFill, "municipal place", "webgl-fill-layer-v1");
await checkMunicipalPlaceFillLayer(drapedMunicipalPlaceFill, "3D municipal place", "webgl-draped-fill-layer-v1");
await checkBinaryLineLayer(lakes, "lakes", 25000, 1900000);
await checkBinaryLineLayer(rivers, "rivers", 50000, 700000);
await checkBinaryLineLayer(shoreline, "shoreline", 13000, 400000);
await checkBinaryLineLayer(oilGasFields, "oil/gas field", 500, 11000);
await checkBinaryLineLayer(offshoreOilLeases, "offshore oil lease", 34, 1800);
await checkBinaryLineLayer(roads, "roads", 5000, 100000);
await checkBinaryLineLayer(transmissionLines, "transmission line", 6800, 290000);

function checkTransmissionLineMetadata(layer, label) {
  if (
    layer.featureCount !== 6839 ||
    layer.sourcePointCount !== 294516 ||
    layer.sourcePartCount !== 6955 ||
    layer.processing?.sourceDbfMetadataPreserved !== true ||
    !Array.isArray(layer.features) ||
    !layer.features.every(
      (feature) =>
        feature.id &&
        feature.name &&
        feature.properties?.GlobalID &&
        feature.properties?.Owner !== undefined &&
        feature.properties?.kV !== undefined
    ) ||
    !layer.features.some((feature) => Number.isFinite(Number(feature.kv)) && Number(feature.kv) >= 500)
  ) {
    throw new Error(`${label} transmission line metadata does not preserve the CEC line attributes`);
  }
}

checkTransmissionLineMetadata(transmissionLines, "flat");

async function checkDrapedLineLayer(layer, label, expectedFeatureCount, minimumSourcePointCount, minimumMaxElevationMeters = 1000) {
  if (layer.format !== "webgl-draped-line-layer-v1" || !layer.linePath || !layer.elevationPath) {
    throw new Error(`${label} draped line layer is missing binary metadata`);
  }
  if (
    layer.featureCount !== expectedFeatureCount ||
    layer.sourcePointCount < minimumSourcePointCount ||
    layer.processing?.downsampled !== false ||
    layer.processing?.draped !== true ||
    layer.demResolutionMeters !== 500
  ) {
    throw new Error(`${label} draped metadata does not match the expected DEM-draped shapefile`);
  }
  if (layer.vertexCount !== layer.segmentCount * 2) {
    throw new Error(`${label} draped vertex count is inconsistent`);
  }
  const lineInfo = await stat(path.join(webRoot, layer.linePath.replace(/^web\//, "")));
  const elevationInfo = await stat(path.join(webRoot, layer.elevationPath.replace(/^web\//, "")));
  if (
    lineInfo.size !== layer.vertexCount * 3 * 4 ||
    lineInfo.size !== layer.byteLength.lines ||
    elevationInfo.size !== layer.vertexCount * 4 ||
    elevationInfo.size !== layer.byteLength.elevations
  ) {
    throw new Error(`${label} draped binary buffer sizes are inconsistent`);
  }
  if (!layer.bounds?.elevationMeters || layer.bounds.elevationMeters[1] <= minimumMaxElevationMeters) {
    throw new Error(`${label} draped elevation bounds look wrong`);
  }
}

await checkDrapedLineLayer(drapedHighways, "highway", 5266, 100000);
await checkDrapedLineLayer(drapedRivers, "river", 57007, 700000);
await checkDrapedLineLayer(drapedLakes, "lake", 27506, 1900000);
await checkDrapedLineLayer(drapedStateBoundary, "state", 1, 11000);
await checkDrapedLineLayer(drapedCountyBoundaries, "county", 58, 200000);
await checkDrapedLineLayer(drapedPlaceBoundaries, "place", 1521, 900000);
await checkDrapedLineLayer(drapedMunicipalPlaceBoundaries, "municipal place", 476, 380000);
await checkDrapedLineLayer(drapedShoreline, "shoreline", 13224, 400000, 50);
await checkDrapedLineLayer(drapedOilGasFields, "oil/gas field", 516, 11000);
await checkDrapedLineLayer(drapedTransmissionLines, "transmission line", 6839, 290000);
checkTransmissionLineMetadata(drapedTransmissionLines, "draped");

if (
  drapedOffshoreOilLeases.format !== "webgl-draped-line-layer-v1" ||
  drapedOffshoreOilLeases.featureCount !== 34 ||
  drapedOffshoreOilLeases.sourcePointCount < 1800 ||
  drapedOffshoreOilLeases.demResolutionMeters !== 500 ||
  drapedOffshoreOilLeases.processing?.draped !== true ||
  !String(drapedOffshoreOilLeases.processing?.demSampling || "").includes("interpolation")
) {
  throw new Error("offshore oil lease draped line metadata is incomplete");
}

if (
  municipalPlaceBoundaries.featureCount !== 476 ||
  municipalPlaceBoundaries.municipalityMatchCount !== 476 ||
  municipalPlaceBoundaries.bounds?.population2020?.[1] < 3000000 ||
  municipalPlaceBoundaries.processing?.segmentDeduplication !== false ||
  !municipalPlaceBoundaries.features.every((feature) => feature.municipality?.properties?.municipality_name)
) {
  throw new Error("municipal place boundaries are missing municipality population metadata");
}

if (
  drapedStateBoundary.processing?.interpolatedNoDataVertexCount === undefined ||
  !String(drapedStateBoundary.processing?.demSampling || "").includes("interpolation")
) {
  throw new Error("state draped boundary should document DEM no-data interpolation");
}

if (
  drapedCountyBoundaries.processing?.interpolatedNoDataVertexCount === undefined ||
  !String(drapedCountyBoundaries.processing?.demSampling || "").includes("interpolation")
) {
  throw new Error("county draped boundaries should document DEM no-data interpolation");
}

if (
  drapedPlaceBoundaries.processing?.interpolatedNoDataVertexCount === undefined ||
  !String(drapedPlaceBoundaries.processing?.demSampling || "").includes("interpolation")
) {
  throw new Error("place draped boundaries should document DEM no-data interpolation");
}

if (
  drapedShoreline.processing?.interpolatedNoDataVertexCount === undefined ||
  !String(drapedShoreline.processing?.demSampling || "").includes("interpolation")
) {
  throw new Error("shoreline draped boundaries should document DEM no-data interpolation");
}

async function checkTiledPublicRoadLayer(layer) {
  if (layer.format !== "webgl-tiled-line-layer-v1" || !Array.isArray(layer.tiles)) {
    throw new Error("public roads should use tiled line metadata");
  }
  if (
    layer.tileCount < 700 ||
    layer.featureCount < 660000 ||
    layer.searchRecordCount !== layer.featureCount ||
    layer.segmentCount < 16000000 ||
    layer.vertexCount !== layer.segmentCount * 2 ||
    layer.processing?.downsampled !== false ||
    layer.processing?.tiled !== true
  ) {
    throw new Error("public roads metadata does not match the expected full-resolution tiled shapefile");
  }
  if (!layer.activation || layer.activation.maxCameraDistanceRatio > 0.7) {
    throw new Error("public roads should be gated behind a close zoom level");
  }
  if (!layer.searchShards || Object.keys(layer.searchShards).length < 30) {
    throw new Error("public roads search shards are missing");
  }

  const sampleTile = layer.tiles.find((tile) => tile.segmentCount > 1000);
  if (!sampleTile || !sampleTile.linePath || !sampleTile.routePath) {
    throw new Error("public roads sample tile is missing line or route paths");
  }
  if (sampleTile.vertexCount !== sampleTile.segmentCount * 2) {
    throw new Error("public roads sample tile vertex count is inconsistent");
  }
  const lineInfo = await stat(path.join(webRoot, sampleTile.linePath.replace(/^web\//, "")));
  const routeInfo = await stat(path.join(webRoot, sampleTile.routePath.replace(/^web\//, "")));
  if (
    lineInfo.size !== sampleTile.vertexCount * 3 * 4 ||
    lineInfo.size !== sampleTile.byteLength ||
    routeInfo.size !== sampleTile.segmentCount * 4 ||
    routeInfo.size !== sampleTile.routeByteLength
  ) {
    throw new Error("public roads sample tile buffer sizes are inconsistent");
  }

  const shardInfo = layer.searchShards.M || Object.values(layer.searchShards)[0];
  const shard = await readJson(shardInfo.path.replace(/^web\//, ""));
  if (
    shard.format !== "public-road-search-shard-v1" ||
    !Array.isArray(shard.records) ||
    shard.records.length === 0 ||
    shard.records.some((record) => !Array.isArray(record) || record.length !== 7)
  ) {
    throw new Error("public roads search shard has invalid records");
  }
}

await checkTiledPublicRoadLayer(publicRoads);

async function checkDrapedTiledPublicRoadLayer(layer, flatLayer) {
  if (layer.format !== "webgl-draped-tiled-line-layer-v1" || !Array.isArray(layer.tiles)) {
    throw new Error("3D public roads should use draped tiled line metadata");
  }
  if (
    layer.tileCount !== flatLayer.tileCount ||
    layer.featureCount !== flatLayer.featureCount ||
    layer.segmentCount !== flatLayer.segmentCount ||
    layer.vertexCount !== flatLayer.vertexCount ||
    layer.processing?.downsampled !== false ||
    layer.processing?.tiled !== true ||
    layer.processing?.draped !== true ||
    layer.demResolutionMeters !== 500
  ) {
    throw new Error("3D public roads metadata does not match the flat public road tiling");
  }
  if (
    layer.processing?.interpolatedNoDataVertexCount === undefined ||
    !String(layer.processing?.demSampling || "").includes("interpolation")
  ) {
    throw new Error("3D public roads should document DEM no-data interpolation");
  }

  const sampleTile = layer.tiles.find((tile) => tile.segmentCount > 1000);
  if (!sampleTile || !sampleTile.linePath || !sampleTile.routePath || !sampleTile.elevationPath) {
    throw new Error("3D public roads sample tile is missing paths");
  }
  if (sampleTile.vertexCount !== sampleTile.segmentCount * 2) {
    throw new Error("3D public roads sample tile vertex count is inconsistent");
  }
  const lineInfo = await stat(path.join(webRoot, sampleTile.linePath.replace(/^web\//, "")));
  const routeInfo = await stat(path.join(webRoot, sampleTile.routePath.replace(/^web\//, "")));
  const elevationInfo = await stat(path.join(webRoot, sampleTile.elevationPath.replace(/^web\//, "")));
  if (
    lineInfo.size !== sampleTile.vertexCount * 3 * 4 ||
    lineInfo.size !== sampleTile.byteLength ||
    routeInfo.size !== sampleTile.segmentCount * 4 ||
    routeInfo.size !== sampleTile.routeByteLength ||
    elevationInfo.size !== sampleTile.vertexCount * 4 ||
    elevationInfo.size !== sampleTile.elevationByteLength
  ) {
    throw new Error("3D public roads sample tile buffer sizes are inconsistent");
  }
}

await checkDrapedTiledPublicRoadLayer(drapedPublicRoads, publicRoads);

async function checkFillLayer(layer, label, minimumVertexCount, minimumTriangleCount) {
  if (layer.format !== "webgl-fill-layer-v1" || !layer.positionPath || !layer.trianglePath) {
    throw new Error(`${label} fill layer is missing binary fill metadata`);
  }
  if (layer.vertexCount < minimumVertexCount || layer.triangleCount < minimumTriangleCount) {
    throw new Error(`${label} fill layer is unexpectedly small`);
  }
  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const triangleInfo = await stat(path.join(webRoot, layer.trianglePath.replace(/^web\//, "")));
  if (positionInfo.size !== layer.vertexCount * 3 * 4 || triangleInfo.size !== layer.triangleCount * 3 * 4) {
    throw new Error(`${label} fill buffer size is inconsistent`);
  }
}

await checkFillLayer(lakeFill, "lake", 1800000, 1800000);

async function checkGroupedGeologyLayer(layer) {
  if (layer.format !== "webgl-grouped-fill-layer-v1" || !layer.positionPath || !layer.trianglePath) {
    throw new Error("geology fill layer is missing grouped fill metadata");
  }
  if (
    layer.unitCount < 60 ||
    layer.vertexCount < 1700000 ||
    layer.triangleCount < 3000000 ||
    layer.demResolutionMeters !== 500 ||
    layer.processing?.terrainMeshTessellated !== true ||
    !Array.isArray(layer.units)
  ) {
    throw new Error("geology fill metadata does not match the 500 m grouped geologic units");
  }
  if (!layer.units.every((unit) => unit.id && unit.color && unit.triangleIndexCount === unit.triangleCount * 3)) {
    throw new Error("geology units are missing ids, colors, or triangle ranges");
  }
  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const triangleInfo = await stat(path.join(webRoot, layer.trianglePath.replace(/^web\//, "")));
  if (
    positionInfo.size !== layer.vertexCount * 3 * 4 ||
    positionInfo.size !== layer.byteLength.positions ||
    triangleInfo.size !== layer.triangleCount * 3 * 4 ||
    triangleInfo.size !== layer.byteLength.triangles
  ) {
    throw new Error("geology grouped fill buffer sizes are inconsistent");
  }
}

await checkGroupedGeologyLayer(geology);

async function checkTerrainIndexedGeologyLayer(layer, terrainLayer) {
  if (layer.format !== "webgl-terrain-indexed-grouped-fill-layer-v1" || !layer.trianglePath) {
    throw new Error("terrain geology layer is missing grouped terrain metadata");
  }
  if (
    layer.unitCount < 60 ||
    layer.terrainVertexCount !== terrainLayer.vertexCount ||
    layer.terrainTriangleCount !== terrainLayer.triangleCount ||
    layer.triangleCount < 3000000 ||
    layer.processing?.terrainConforming !== true ||
    layer.processing?.draped !== true ||
    layer.processing?.interpolatedNoDataVertexCount === undefined ||
    !String(layer.processing?.demSampling || "").includes("no-data")
  ) {
    throw new Error("terrain geology metadata does not match DEM-conforming grouped units");
  }
  const triangleInfo = await stat(path.join(webRoot, layer.trianglePath.replace(/^web\//, "")));
  if (triangleInfo.size !== layer.triangleCount * 3 * 4 || triangleInfo.size !== layer.byteLength.triangles) {
    throw new Error("terrain geology triangle buffer size is inconsistent");
  }
}

await checkTerrainIndexedGeologyLayer(drapedGeology, terrain);

async function checkOilGasFillLayer(layer, label, expectedFormat) {
  if (layer.format !== expectedFormat || !layer.positionPath || !layer.trianglePath) {
    throw new Error(`${label} oil/gas fill layer is missing binary fill metadata`);
  }
  if (
    layer.featureCount !== 516 ||
    layer.sourcePointCount < 11000 ||
    layer.vertexCount < 10000 ||
    layer.triangleCount < 10000 ||
    layer.processing?.downsampled !== false ||
    layer.processing?.sourceDbfMetadataPreserved !== true ||
    !Array.isArray(layer.features) ||
    !layer.features.every((feature) => feature.name && feature.properties?.NAME && feature.triangleIndexCount === feature.triangleCount * 3)
  ) {
    throw new Error(`${label} oil/gas fill metadata does not preserve the CalGEM field polygons and DBF records`);
  }
  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const triangleInfo = await stat(path.join(webRoot, layer.trianglePath.replace(/^web\//, "")));
  if (
    positionInfo.size !== layer.vertexCount * 3 * 4 ||
    positionInfo.size !== layer.byteLength.positions ||
    triangleInfo.size !== layer.triangleCount * 3 * 4 ||
    triangleInfo.size !== layer.byteLength.triangles
  ) {
    throw new Error(`${label} oil/gas fill buffer size is inconsistent`);
  }
  if (expectedFormat === "webgl-draped-fill-layer-v1") {
    const elevationInfo = await stat(path.join(webRoot, layer.elevationPath.replace(/^web\//, "")));
    if (
      layer.demResolutionMeters !== 500 ||
      layer.processing?.draped !== true ||
      layer.processing?.terrainConforming !== true ||
      layer.processing?.interpolatedNoDataVertexCount === undefined ||
      !String(layer.processing?.demSampling || "").includes("interpolation") ||
      elevationInfo.size !== layer.vertexCount * 4 ||
      elevationInfo.size !== layer.byteLength.elevations
    ) {
      throw new Error(`${label} draped oil/gas fill metadata is incomplete`);
    }
  }
}

await checkOilGasFillLayer(oilGasFieldFill, "flat", "webgl-fill-layer-v1");
await checkOilGasFillLayer(drapedOilGasFieldFill, "draped", "webgl-draped-fill-layer-v1");

async function checkOffshoreOilLeaseFillLayer(layer, label, expectedFormat) {
  if (layer.format !== expectedFormat || !layer.positionPath || !layer.trianglePath) {
    throw new Error(`${label} offshore lease fill layer is missing binary fill metadata`);
  }
  if (
    layer.featureCount !== 34 ||
    layer.sourcePointCount < 1800 ||
    layer.vertexCount < 1800 ||
    layer.triangleCount < 1700 ||
    layer.processing?.downsampled !== false ||
    layer.processing?.sourceDbfMetadataPreserved !== true ||
    !Array.isArray(layer.features) ||
    !layer.features.every((feature) => feature.prc && feature.properties?.PRC && feature.triangleIndexCount === feature.triangleCount * 3)
  ) {
    throw new Error(`${label} offshore lease fill metadata does not preserve source polygons and DBF records`);
  }
  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const triangleInfo = await stat(path.join(webRoot, layer.trianglePath.replace(/^web\//, "")));
  if (
    positionInfo.size !== layer.vertexCount * 3 * 4 ||
    positionInfo.size !== layer.byteLength.positions ||
    triangleInfo.size !== layer.triangleCount * 3 * 4 ||
    triangleInfo.size !== layer.byteLength.triangles
  ) {
    throw new Error(`${label} offshore lease fill buffer size is inconsistent`);
  }
  if (expectedFormat === "webgl-draped-fill-layer-v1") {
    const elevationInfo = await stat(path.join(webRoot, layer.elevationPath.replace(/^web\//, "")));
    if (
      layer.demResolutionMeters !== 500 ||
      layer.processing?.draped !== true ||
      layer.processing?.terrainConforming !== true ||
      layer.processing?.interpolatedNoDataVertexCount === undefined ||
      !String(layer.processing?.demSampling || "").includes("interpolation") ||
      elevationInfo.size !== layer.vertexCount * 4 ||
      elevationInfo.size !== layer.byteLength.elevations
    ) {
      throw new Error(`${label} draped offshore lease fill metadata is incomplete`);
    }
  }
}

await checkOffshoreOilLeaseFillLayer(offshoreOilLeaseFill, "flat", "webgl-fill-layer-v1");
await checkOffshoreOilLeaseFillLayer(drapedOffshoreOilLeaseFill, "draped", "webgl-draped-fill-layer-v1");

async function checkPowerPlantPointLayer(layer, label, expectedFormat) {
  if (layer.format !== expectedFormat || !layer.positionPath || !layer.capacityPath || !layer.categoryPath) {
    throw new Error(`${label} power plant layer is missing binary point metadata`);
  }
  const expectedCategories = new Map([
    ["solar", 936],
    ["natural-gas", 245],
    ["hydro", 282],
    ["wind", 116],
    ["geothermal", 42],
    ["bioenergy", 95],
    ["storage", 12],
    ["other", 11],
  ]);
  const actualCategories = new Map((layer.categories || []).map((category) => [category.id, category.count]));
  if (
    layer.plantCount !== 1739 ||
    layer.vertexCount !== layer.plantCount ||
    Math.abs(Number(layer.capacityTotalMw) - 102748.83) > 0.01 ||
    layer.demResolutionMeters !== 500 ||
    !String(layer.categoryFormat || "").includes("uint8") ||
    actualCategories.size !== expectedCategories.size ||
    [...expectedCategories].some(([categoryId, count]) => actualCategories.get(categoryId) !== count) ||
    layer.processing?.downsampled !== false ||
    layer.processing?.sourceCoordinatesPreserved !== true ||
    !String(layer.processing?.filter || "").includes("Retired_Pl == 0") ||
    !Array.isArray(layer.features) ||
    !layer.features.every((feature) => feature.properties?.PlantName && feature.properties?.CECPlantID)
  ) {
    throw new Error(`${label} power plant metadata does not match the active plant source filter`);
  }
  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const capacityInfo = await stat(path.join(webRoot, layer.capacityPath.replace(/^web\//, "")));
  const categoryInfo = await stat(path.join(webRoot, layer.categoryPath.replace(/^web\//, "")));
  if (
    positionInfo.size !== layer.vertexCount * 3 * 4 ||
    capacityInfo.size !== layer.vertexCount * 4 ||
    categoryInfo.size !== layer.vertexCount ||
    categoryInfo.size !== layer.byteLength.categories
  ) {
    throw new Error(`${label} power plant point buffer size is inconsistent`);
  }
  if (expectedFormat === "webgl-draped-point-layer-v1") {
    const elevationInfo = await stat(path.join(webRoot, layer.elevationPath.replace(/^web\//, "")));
    if (
      layer.processing?.draped !== true ||
      !String(layer.processing?.demSampling || "").includes("nearest-valid fallback") ||
      elevationInfo.size !== layer.vertexCount * 4
    ) {
      throw new Error(`${label} power plant draped point metadata is incomplete`);
    }
  }
}

await checkPowerPlantPointLayer(powerPlants, "flat", "webgl-point-layer-v1");
await checkPowerPlantPointLayer(drapedPowerPlants, "draped", "webgl-draped-point-layer-v1");

async function checkOilPlatformPointLayer(layer, label, expectedFormat) {
  if (layer.format !== expectedFormat || !layer.positionPath || !layer.capacityPath || !layer.categoryPath) {
    throw new Error(`${label} oil platform layer is missing binary point metadata`);
  }
  if (
    layer.platformCount !== 32 ||
    layer.vertexCount !== layer.platformCount ||
    layer.demResolutionMeters !== 500 ||
    layer.processing?.downsampled !== false ||
    layer.processing?.sourceCoordinatesPreserved !== true ||
    layer.processing?.sourceCsvMetadataPreserved !== true ||
    !Array.isArray(layer.features) ||
    !layer.features.every((feature) => feature.name && feature.properties?.LATDD83 && feature.properties?.LONDD83)
  ) {
    throw new Error(`${label} oil platform metadata does not match the offshore platform CSV`);
  }
  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const capacityInfo = await stat(path.join(webRoot, layer.capacityPath.replace(/^web\//, "")));
  const categoryInfo = await stat(path.join(webRoot, layer.categoryPath.replace(/^web\//, "")));
  if (
    positionInfo.size !== layer.vertexCount * 3 * 4 ||
    capacityInfo.size !== layer.vertexCount * 4 ||
    categoryInfo.size !== layer.vertexCount ||
    categoryInfo.size !== layer.byteLength.categories
  ) {
    throw new Error(`${label} oil platform point buffer size is inconsistent`);
  }
  if (expectedFormat === "webgl-draped-point-layer-v1") {
    const elevationInfo = await stat(path.join(webRoot, layer.elevationPath.replace(/^web\//, "")));
    if (
      layer.processing?.draped !== true ||
      !String(layer.processing?.demSampling || "").includes("nearest-valid fallback") ||
      elevationInfo.size !== layer.vertexCount * 4
    ) {
      throw new Error(`${label} oil platform draped point metadata is incomplete`);
    }
  }
}

await checkOilPlatformPointLayer(oilPlatforms, "flat", "webgl-point-layer-v1");
await checkOilPlatformPointLayer(drapedOilPlatforms, "draped", "webgl-draped-point-layer-v1");

async function checkTsunamiHazardLineLayer(layer, label, expectedFormat) {
  if (layer.format !== expectedFormat || !layer.positionPath || !layer.indexPath) {
    throw new Error(`${label} tsunami hazard line layer is missing binary indexed-line metadata`);
  }
  if (
    layer.vertexCount < 4000000 ||
    layer.segmentCount < 4000000 ||
    layer.lineIndexCount !== layer.segmentCount * 2 ||
    layer.demResolutionMeters !== 500 ||
    layer.processing?.downsampled !== false ||
    layer.processing?.sourceVerticesPreserved !== true ||
    layer.processing?.sourceAreaBoundary !== true ||
    !String(layer.source || "").includes("CA_Tsunami_Hazard_Area.shp") ||
    !String(layer.processing?.sourceGeometry || "").includes("without simplification")
  ) {
    throw new Error(`${label} tsunami hazard metadata does not preserve the source area boundary resolution`);
  }
  if (!layer.bounds?.elevationMeters || layer.bounds.elevationMeters[1] > 500) {
    throw new Error(`${label} tsunami hazard line elevations look wrong`);
  }
  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const indexInfo = await stat(path.join(webRoot, layer.indexPath.replace(/^web\//, "")));
  if (
    positionInfo.size !== layer.vertexCount * 3 * 4 ||
    indexInfo.size !== layer.lineIndexCount * 4
  ) {
    throw new Error(`${label} tsunami hazard line buffer size is inconsistent`);
  }
  if (expectedFormat === "webgl-draped-indexed-line-layer-v1") {
    const elevationInfo = await stat(path.join(webRoot, layer.elevationPath.replace(/^web\//, "")));
    if (
      layer.processing?.draped !== true ||
      elevationInfo.size !== layer.vertexCount * 4
    ) {
      throw new Error(`${label} tsunami hazard draped line metadata is incomplete`);
    }
  }
}

await checkTsunamiHazardLineLayer(tsunamiHazard, "flat", "webgl-indexed-line-layer-v1");
await checkTsunamiHazardLineLayer(drapedTsunamiHazard, "draped", "webgl-draped-indexed-line-layer-v1");

async function checkTsunamiHazardShadeLayer(layer, label, expectedFormat) {
  if (layer.format !== expectedFormat || !layer.positionPath || !layer.trianglePath) {
    throw new Error(`${label} tsunami hazard shade layer is missing binary fill metadata`);
  }
  if (
    layer.vertexCount < 4000000 ||
    layer.triangleCount < 4000000 ||
    layer.sourcePointCount < 4000000 ||
    layer.demResolutionMeters !== 500 ||
    layer.processing?.downsampled !== false ||
    layer.processing?.sourcePolygonBoundaryFill !== true ||
    layer.processing?.sourceVerticesPreserved !== true ||
    layer.processing?.sourceResolutionPreserved !== true ||
    layer.processing?.sourceAreaShapefile !== true ||
    layer.processing?.lineToLineVectorBand !== false ||
    layer.processing?.terrainMeshTessellated !== false ||
    !String(layer.source || "").includes("CA_Tsunami_Hazard_Area.shp") ||
    !String(layer.processing?.classification || "").includes("rendered directly") ||
    !String(layer.processing?.triangulation || "").includes("mapbox_earcut") ||
    !String(layer.processing?.demSampling || "").includes("per-ring interpolation")
  ) {
    throw new Error(`${label} tsunami hazard shade metadata does not describe the source-resolution area shapefile fill`);
  }
  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const triangleInfo = await stat(path.join(webRoot, layer.trianglePath.replace(/^web\//, "")));
  if (
    positionInfo.size !== layer.vertexCount * 3 * 4 ||
    triangleInfo.size !== layer.triangleCount * 3 * 4
  ) {
    throw new Error(`${label} tsunami hazard shade buffer size is inconsistent`);
  }
  if (expectedFormat === "webgl-draped-fill-layer-v1") {
    const elevationInfo = await stat(path.join(webRoot, layer.elevationPath.replace(/^web\//, "")));
    if (
      layer.processing?.draped !== true ||
      layer.processing?.terrainConforming !== true ||
      elevationInfo.size !== layer.vertexCount * 4
    ) {
      throw new Error(`${label} tsunami hazard draped shade metadata is incomplete`);
    }
  }
}

await checkTsunamiHazardShadeLayer(tsunamiHazardShade, "flat", "webgl-fill-layer-v1");
await checkTsunamiHazardShadeLayer(drapedTsunamiHazardShade, "draped", "webgl-draped-fill-layer-v1");

async function checkActiveFirePointLayer(layer, label, expectedFormat) {
  if (layer.format !== expectedFormat || !layer.positionPath || !layer.capacityPath || !layer.categoryPath) {
    throw new Error(`${label} active fire layer is missing binary point metadata`);
  }
  const categoryTotal = (layer.categories || []).reduce((sum, category) => sum + Number(category.count || 0), 0);
  if (
    !String(layer.sourceProduct || "").includes("FIRMS") ||
    layer.region !== "usa_contiguous_and_hawaii" ||
    layer.dateSpan !== "24h" ||
    layer.featureCount !== layer.detectionCount ||
    layer.vertexCount !== layer.featureCount ||
    categoryTotal !== layer.featureCount ||
    layer.processing?.californiaClip !== true ||
    layer.processing?.sourceFootprintsPreserved !== true ||
    layer.processing?.downsampled !== false ||
    !Array.isArray(layer.features) ||
    layer.features.some((feature) => !feature.sensor || !feature.detectionTime || !Number.isFinite(Number(feature.frpMw)))
  ) {
    throw new Error(`${label} active fire metadata does not match the California-clipped FIRMS VIIRS feed`);
  }
  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const frpInfo = await stat(path.join(webRoot, layer.capacityPath.replace(/^web\//, "")));
  const categoryInfo = await stat(path.join(webRoot, layer.categoryPath.replace(/^web\//, "")));
  if (
    positionInfo.size !== layer.vertexCount * 3 * 4 ||
    frpInfo.size !== layer.vertexCount * 4 ||
    categoryInfo.size !== layer.vertexCount ||
    frpInfo.size !== layer.byteLength.capacities ||
    categoryInfo.size !== layer.byteLength.categories
  ) {
    throw new Error(`${label} active fire point buffer size is inconsistent`);
  }
  if (expectedFormat === "webgl-draped-point-layer-v1") {
    const elevationInfo = await stat(path.join(webRoot, layer.elevationPath.replace(/^web\//, "")));
    if (
      layer.demResolutionMeters !== 500 ||
      layer.processing?.draped !== true ||
      !String(layer.processing?.demSampling || "").includes("nearest valid fallback") ||
      elevationInfo.size !== layer.vertexCount * 4
    ) {
      throw new Error(`${label} draped active fire point metadata is incomplete`);
    }
  }
}

async function checkActiveFireFootprintLayer(layer, label, expectedFormat) {
  if (layer.format !== expectedFormat || !layer.positionPath || !layer.trianglePath) {
    throw new Error(`${label} active fire footprint layer is missing binary fill metadata`);
  }
  if (
    !String(layer.sourceProduct || "").includes("FIRMS") ||
    layer.featureCount !== layer.detectionCount ||
    layer.vertexCount < layer.featureCount * 3 ||
    layer.triangleCount < layer.featureCount ||
    layer.processing?.californiaClip !== true ||
    layer.processing?.sourceResolutionPreserved !== true ||
    layer.processing?.downsampled !== false
  ) {
    throw new Error(`${label} active fire footprints should preserve FIRMS footprint geometry`);
  }
  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const triangleInfo = await stat(path.join(webRoot, layer.trianglePath.replace(/^web\//, "")));
  if (
    positionInfo.size !== layer.vertexCount * 3 * 4 ||
    triangleInfo.size !== layer.triangleCount * 3 * 4 ||
    positionInfo.size !== layer.byteLength.positions ||
    triangleInfo.size !== layer.byteLength.triangles
  ) {
    throw new Error(`${label} active fire footprint buffer size is inconsistent`);
  }
  if (expectedFormat === "webgl-draped-fill-layer-v1") {
    const elevationInfo = await stat(path.join(webRoot, layer.elevationPath.replace(/^web\//, "")));
    if (
      layer.demResolutionMeters !== 500 ||
      layer.processing?.draped !== true ||
      layer.processing?.terrainConforming !== true ||
      !String(layer.processing?.demSampling || "").includes("interpolation") ||
      elevationInfo.size !== layer.vertexCount * 4
    ) {
      throw new Error(`${label} draped active fire footprint metadata is incomplete`);
    }
  }
}

await checkActiveFirePointLayer(activeFires, "flat", "webgl-point-layer-v1");
await checkActiveFirePointLayer(drapedActiveFires, "draped", "webgl-draped-point-layer-v1");
await checkActiveFireFootprintLayer(activeFireFootprints, "flat", "webgl-fill-layer-v1");
await checkActiveFireFootprintLayer(drapedActiveFireFootprints, "draped", "webgl-draped-fill-layer-v1");

async function checkHealthcarePointLayer(layer, label, expectedFormat) {
  if (layer.format !== expectedFormat || !layer.positionPath || !layer.capacityPath || !layer.categoryPath) {
    throw new Error(`${label} healthcare layer is missing binary point metadata`);
  }
  const expectedCategories = new Map([
    ["trauma", 83],
    ["critical-access", 32],
    ["general-acute", 270],
    ["psych-hospital", 105],
    ["skilled-nursing", 1164],
    ["dialysis", 601],
    ["intermediate-care", 955],
    ["other", 2],
  ]);
  const actualCategories = new Map((layer.categories || []).map((category) => [category.id, category.count]));
  if (
    layer.facilityCount !== 3212 ||
    layer.vertexCount !== layer.facilityCount ||
    layer.capacityTotal !== 212508 ||
    layer.demResolutionMeters !== 500 ||
    !String(layer.categoryFormat || "").includes("uint8") ||
    actualCategories.size !== expectedCategories.size ||
    [...expectedCategories].some(([categoryId, count]) => actualCategories.get(categoryId) !== count) ||
    layer.processing?.downsampled !== false ||
    layer.processing?.sourceCoordinatesPreserved !== true ||
    !String(layer.processing?.filter || "").includes("CAPACITY > 0")
  ) {
    throw new Error(`${label} healthcare metadata does not match the licensed-and-certified capacity filter`);
  }
  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const capacityInfo = await stat(path.join(webRoot, layer.capacityPath.replace(/^web\//, "")));
  const categoryInfo = await stat(path.join(webRoot, layer.categoryPath.replace(/^web\//, "")));
  if (
    positionInfo.size !== layer.vertexCount * 3 * 4 ||
    capacityInfo.size !== layer.vertexCount * 4 ||
    categoryInfo.size !== layer.vertexCount ||
    categoryInfo.size !== layer.byteLength.categories
  ) {
    throw new Error(`${label} healthcare point buffer size is inconsistent`);
  }
  if (expectedFormat === "webgl-draped-point-layer-v1") {
    const elevationInfo = await stat(path.join(webRoot, layer.elevationPath.replace(/^web\//, "")));
    if (layer.processing?.draped !== true || elevationInfo.size !== layer.vertexCount * 4) {
      throw new Error(`${label} healthcare draped point metadata is incomplete`);
    }
  }
}

await checkHealthcarePointLayer(healthcareFacilities, "flat", "webgl-point-layer-v1");
await checkHealthcarePointLayer(drapedHealthcareFacilities, "draped", "webgl-draped-point-layer-v1");

async function checkMunicipalityPointLayer(layer, label, expectedFormat) {
  if (layer.format !== expectedFormat || !layer.positionPath || !layer.capacityPath || !layer.categoryPath) {
    throw new Error(`${label} municipality layer is missing binary point metadata`);
  }
  if (
    layer.municipalityCount !== 483 ||
    layer.vertexCount !== layer.municipalityCount ||
    layer.populationTotal !== 33025454 ||
    layer.demResolutionMeters !== 500 ||
    layer.processing?.downsampled !== false ||
    layer.processing?.sourceCoordinatesPreserved !== true ||
    !String(layer.processing?.filter || "").includes("population_2020 > 0") ||
    !Array.isArray(layer.features) ||
    !layer.features.every((feature) => feature.properties?.municipality_name)
  ) {
    throw new Error(`${label} municipality metadata does not match the CSV point source`);
  }
  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const populationInfo = await stat(path.join(webRoot, layer.capacityPath.replace(/^web\//, "")));
  const categoryInfo = await stat(path.join(webRoot, layer.categoryPath.replace(/^web\//, "")));
  if (
    positionInfo.size !== layer.vertexCount * 3 * 4 ||
    populationInfo.size !== layer.vertexCount * 4 ||
    categoryInfo.size !== layer.vertexCount ||
    categoryInfo.size !== layer.byteLength.categories
  ) {
    throw new Error(`${label} municipality point buffer size is inconsistent`);
  }
  if (expectedFormat === "webgl-draped-point-layer-v1") {
    const elevationInfo = await stat(path.join(webRoot, layer.elevationPath.replace(/^web\//, "")));
    if (layer.processing?.draped !== true || elevationInfo.size !== layer.vertexCount * 4) {
      throw new Error(`${label} municipality draped point metadata is incomplete`);
    }
  }
}

await checkMunicipalityPointLayer(municipalities, "flat", "webgl-point-layer-v1");
await checkMunicipalityPointLayer(drapedMunicipalities, "draped", "webgl-draped-point-layer-v1");

async function checkCensusTractFeatureTables() {
  if (
    censusTractFeatures.format !== "census-tract-feature-table-v1" ||
    censusTractFeatures.featureCount !== 9129 ||
    censusTractFeatures.defaultMetric !== "total_population" ||
    !Array.isArray(censusTractFeatures.metrics) ||
    censusTractFeatures.metrics.length < 70 ||
    !Array.isArray(censusTractFeatures.features) ||
    !censusTractFeatures.features.every(
      (feature) =>
        feature.geoid &&
        Array.isArray(feature.metricValues) &&
        feature.metricValues.length === censusTractFeatures.metrics.length &&
        feature.triangleIndexCount === feature.triangleCount * 3
    )
  ) {
    throw new Error("census tract feature table is missing compact tract metrics or triangle ranges");
  }
  if (
    censusTractProperties.format !== "census-tract-property-table-v1" ||
    censusTractProperties.rowCount !== 9129 ||
    censusTractProperties.fieldCount < 100 ||
    !Array.isArray(censusTractProperties.fields) ||
    !Array.isArray(censusTractProperties.rows) ||
    censusTractProperties.rows.length !== 9129
  ) {
    throw new Error("census tract property table is missing joined DBF/CSV metadata");
  }
}

async function checkCensusTractFillLayer(layer, label, expectedFormat) {
  if (layer.format !== expectedFormat || !layer.positionPath || !layer.trianglePath || !layer.featurePath) {
    throw new Error(`${label} census tract fill layer is missing binary fill or feature-table metadata`);
  }
  if (
    layer.tractCount !== 9129 ||
    layer.vertexCount !== 3156099 ||
    layer.triangleCount !== 3137885 ||
    layer.sourcePointCount >= layer.vertexCount + 20000 ||
    layer.matchedDemographicRecordCount !== 9129 ||
    layer.processing?.downsampled !== false ||
    layer.processing?.sourceVerticesPreserved !== true ||
    layer.processing?.sourceDemographicsJoined !== true ||
    !Array.isArray(layer.metrics) ||
    layer.metrics.length < 70 ||
    layer.defaultMetric !== "total_population"
  ) {
    throw new Error(`${label} census tract fill metadata does not preserve the source tract geometry and demographics`);
  }
  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const triangleInfo = await stat(path.join(webRoot, layer.trianglePath.replace(/^web\//, "")));
  if (
    positionInfo.size !== layer.vertexCount * 3 * 4 ||
    positionInfo.size !== layer.byteLength.positions ||
    triangleInfo.size !== layer.triangleCount * 3 * 4 ||
    triangleInfo.size !== layer.byteLength.triangles
  ) {
    throw new Error(`${label} census tract fill buffer size is inconsistent`);
  }
  if (expectedFormat === "webgl-draped-fill-layer-v1") {
    const elevationInfo = await stat(path.join(webRoot, layer.elevationPath.replace(/^web\//, "")));
    if (
      layer.demResolutionMeters !== 500 ||
      layer.processing?.draped !== true ||
      layer.processing?.terrainConforming !== true ||
      !String(layer.processing?.demSampling || "").includes("interpolation") ||
      elevationInfo.size !== layer.vertexCount * 4 ||
      elevationInfo.size !== layer.byteLength.elevations
    ) {
      throw new Error(`${label} draped census tract fill metadata is incomplete`);
    }
  }
}

async function checkCensusTractBoundaryLayer(layer, label, expectedFormat) {
  if (layer.format !== expectedFormat || !layer.positionPath || !layer.indexPath) {
    throw new Error(`${label} census tract boundary layer is missing indexed-line metadata`);
  }
  if (
    layer.tractCount !== 9129 ||
    layer.vertexCount !== 3156099 ||
    layer.segmentCount !== 3156099 ||
    layer.lineIndexCount !== layer.segmentCount * 2 ||
    layer.processing?.downsampled !== false ||
    layer.processing?.sourceVerticesPreserved !== true
  ) {
    throw new Error(`${label} census tract boundary metadata does not preserve full source vertices`);
  }
  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const indexInfo = await stat(path.join(webRoot, layer.indexPath.replace(/^web\//, "")));
  if (
    positionInfo.size !== layer.vertexCount * 3 * 4 ||
    indexInfo.size !== layer.lineIndexCount * 4
  ) {
    throw new Error(`${label} census tract boundary buffer size is inconsistent`);
  }
  if (expectedFormat === "webgl-draped-indexed-line-layer-v1") {
    const elevationInfo = await stat(path.join(webRoot, layer.elevationPath.replace(/^web\//, "")));
    if (
      layer.demResolutionMeters !== 500 ||
      layer.processing?.draped !== true ||
      !String(layer.processing?.demSampling || "").includes("interpolation") ||
      elevationInfo.size !== layer.vertexCount * 4
    ) {
      throw new Error(`${label} draped census tract boundary metadata is incomplete`);
    }
  }
}

await checkCensusTractFeatureTables();
await checkCensusTractFillLayer(censusTractFill, "flat", "webgl-fill-layer-v1");
await checkCensusTractFillLayer(drapedCensusTractFill, "draped", "webgl-draped-fill-layer-v1");
await checkCensusTractBoundaryLayer(censusTractBoundaries, "flat", "webgl-indexed-line-layer-v1");
await checkCensusTractBoundaryLayer(drapedCensusTractBoundaries, "draped", "webgl-draped-indexed-line-layer-v1");

async function checkDrapedFillLayer(layer, label, minimumVertexCount, minimumTriangleCount) {
  if (layer.format !== "webgl-draped-fill-layer-v1" || !layer.positionPath || !layer.elevationPath || !layer.trianglePath) {
    throw new Error(`${label} draped fill layer is missing binary fill metadata`);
  }
  if (
    layer.vertexCount < minimumVertexCount ||
    layer.triangleCount < minimumTriangleCount ||
    layer.processing?.downsampled !== false ||
    layer.processing?.draped !== true ||
    layer.processing?.flatWaterSurface !== true ||
    layer.demResolutionMeters !== 500
  ) {
    throw new Error(`${label} draped fill metadata is unexpectedly small or incomplete`);
  }
  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const elevationInfo = await stat(path.join(webRoot, layer.elevationPath.replace(/^web\//, "")));
  const triangleInfo = await stat(path.join(webRoot, layer.trianglePath.replace(/^web\//, "")));
  if (
    positionInfo.size !== layer.vertexCount * 3 * 4 ||
    positionInfo.size !== layer.byteLength.positions ||
    elevationInfo.size !== layer.vertexCount * 4 ||
    elevationInfo.size !== layer.byteLength.elevations ||
    triangleInfo.size !== layer.triangleCount * 3 * 4 ||
    triangleInfo.size !== layer.byteLength.triangles
  ) {
    throw new Error(`${label} draped fill buffer size is inconsistent`);
  }
  if (!layer.bounds?.elevationMeters || layer.bounds.elevationMeters[1] <= 1000) {
    throw new Error(`${label} draped fill elevation bounds look wrong`);
  }
}

await checkDrapedFillLayer(drapedLakeFill, "lake", 1800000, 1800000);

async function checkTerrainAsset(layer) {
  if (layer.format !== "webgl-terrain-mesh-v1" || layer.vertexCount < 1700000 || layer.triangleCount < 3400000) {
    throw new Error("terrain mesh metadata is too small or has the wrong format");
  }

  const positionInfo = await stat(path.join(webRoot, layer.positionPath.replace(/^web\//, "")));
  const normalInfo = await stat(path.join(webRoot, layer.normalPath.replace(/^web\//, "")));
  const elevationInfo = await stat(path.join(webRoot, layer.elevationPath.replace(/^web\//, "")));
  const triangleInfo = await stat(path.join(webRoot, layer.trianglePath.replace(/^web\//, "")));

  if (positionInfo.size !== layer.vertexCount * 3 * 4 || normalInfo.size !== layer.vertexCount * 3 * 4) {
    throw new Error("terrain position or normal buffer size is inconsistent");
  }
  if (elevationInfo.size !== layer.vertexCount * 4 || triangleInfo.size !== layer.triangleCount * 3 * 4) {
    throw new Error("terrain elevation or triangle buffer size is inconsistent");
  }
}

await checkTerrainAsset(terrain);

console.log(
  `Smoke OK: ${manifest.faults.length} faults, first mesh ${mesh.vertexCount} vertices / ${mesh.triangleCount} triangles, ${stateBoundary.featureCount} state boundary, ${countyBoundaries.featureCount} counties, ${drapedCountyBoundaries.featureCount} draped counties, ${placeBoundaries.featureCount} places, ${drapedPlaceBoundaries.featureCount} draped places, ${municipalPlaceBoundaries.featureCount} municipal places, ${municipalities.municipalityCount} municipalities, ${censusTractFill.tractCount} census tracts, ${lakes.featureCount} lakes, ${drapedLakes.featureCount} draped lakes, ${rivers.featureCount} rivers, ${drapedRivers.featureCount} draped rivers, ${shoreline.featureCount} shoreline segments, ${drapedShoreline.featureCount} draped shoreline segments, ${geology.unitCount} geology units, ${drapedGeology.triangleCount} geology terrain triangles, ${oilGasFields.featureCount} oil/gas fields, ${offshoreOilLeases.featureCount} offshore leases, ${oilPlatforms.platformCount} oil platforms, ${powerPlants.plantCount} power plants, ${transmissionLines.featureCount} transmission lines, ${tsunamiHazard.segmentCount} tsunami hazard line segments, ${tsunamiHazardShade.triangleCount} tsunami shade triangles, ${activeFires.detectionCount} active fire detections, ${healthcareFacilities.facilityCount} healthcare facilities, ${roads.featureCount} highways, ${drapedHighways.featureCount} draped highways, ${publicRoads.featureCount} public roads, terrain ${terrain.vertexCount} vertices`
);
