import { readFile } from "node:fs/promises";
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

if (!index.includes("viewer-canvas")) {
  throw new Error("client/index.html is missing the viewer canvas");
}

if (!index.includes("show-place-boundaries")) {
  throw new Error("client/index.html is missing the places boundary toggle");
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
}

checkBoundaryLayer(countyBoundaries, "county", 58, 200000);
checkBoundaryLayer(placeBoundaries, "place", 1521, 900000);

console.log(
  `Smoke OK: ${manifest.faults.length} faults, first mesh ${mesh.vertexCount} vertices / ${mesh.triangleCount} triangles, ${countyBoundaries.featureCount} counties, ${placeBoundaries.featureCount} places`
);
