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
const countyBoundaries = await readJson("public-data/political-boundaries/ca_counties/counties-boundaries.json");
const placeBoundaries = await readJson("public-data/political-boundaries/ca_places/places-boundaries.json");
const terrain = await readJson("public-data/elevation-models/combined/terrain-2000m.json");
const lakes = await readJson("public-data/water-bodies/converted/california-lakes.json");
const lakeFill = await readJson("public-data/water-bodies/converted/california-lakes-fill.json");
const rivers = await readJson("public-data/water-bodies/converted/nhd-major-rivers.json");
const roads = await readJson("public-data/roads/converted/shn-lines.json");

if (!index.includes("viewer-canvas")) {
  throw new Error("client/index.html is missing the viewer canvas");
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
  !index.includes("show-county-labels") ||
  !index.includes("place-color") ||
  !index.includes("show-place-labels")
) {
  throw new Error("client/index.html is missing county style controls");
}

if (
  !index.includes("show-lakes") ||
  !index.includes("show-lake-fill") ||
  !index.includes("show-rivers") ||
  !index.includes("lake-color") ||
  !index.includes("river-color")
) {
  throw new Error("client/index.html is missing water layer controls");
}

if (!index.includes("show-roads") || !index.includes("road-color")) {
  throw new Error("client/index.html is missing road layer controls");
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
  if (lineInfo.size !== layer.vertexCount * 3 * 4 || lineInfo.size !== layer.byteLength) {
    throw new Error(`${label} binary line buffer size is inconsistent`);
  }
}

await checkBinaryLineLayer(lakes, "lakes", 25000, 1900000);
await checkBinaryLineLayer(rivers, "rivers", 50000, 700000);
await checkBinaryLineLayer(roads, "roads", 5000, 100000);

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

async function checkTerrainAsset(layer) {
  if (layer.format !== "webgl-terrain-mesh-v1" || layer.vertexCount < 100000 || layer.triangleCount < 200000) {
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
  `Smoke OK: ${manifest.faults.length} faults, first mesh ${mesh.vertexCount} vertices / ${mesh.triangleCount} triangles, ${countyBoundaries.featureCount} counties, ${placeBoundaries.featureCount} places, ${lakes.featureCount} lakes, ${rivers.featureCount} rivers, ${roads.featureCount} roads, terrain ${terrain.vertexCount} vertices`
);
