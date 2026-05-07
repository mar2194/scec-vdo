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

if (!index.includes("viewer-canvas")) {
  throw new Error("client/index.html is missing the viewer canvas");
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

console.log(`Smoke OK: ${manifest.faults.length} faults, first mesh ${mesh.vertexCount} vertices / ${mesh.triangleCount} triangles`);
