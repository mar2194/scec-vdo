import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, "../..");
const clientRoot = path.join(webRoot, "client");
const publicDataRoot = path.join(webRoot, "public-data");
const preferredPort = Number.parseInt(process.env.PORT || "4173", 10);
const host = process.env.HOST || "127.0.0.1";

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".svg", "image/svg+xml"],
  [".ico", "image/x-icon"]
]);

function safeJoin(root, urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const resolved = path.resolve(root, decoded.replace(/^\/+/, ""));
  if (!resolved.startsWith(root)) {
    return undefined;
  }
  return resolved;
}

async function resolveRequest(reqUrl) {
  const url = new URL(reqUrl, "http://local");
  if (url.pathname.startsWith("/public-data/")) {
    const relativePath = url.pathname.replace("/public-data/", "");
    return safeJoin(publicDataRoot, relativePath);
  }

  if (url.pathname === "/") {
    return path.join(clientRoot, "index.html");
  }

  const filePath = safeJoin(clientRoot, url.pathname);
  if (!filePath) {
    return undefined;
  }

  try {
    const info = await stat(filePath);
    if (info.isDirectory()) {
      return path.join(filePath, "index.html");
    }
    return filePath;
  } catch {
    return path.join(clientRoot, "index.html");
  }
}

function createAppServer() {
  return createServer(async (req, res) => {
    try {
      const filePath = await resolveRequest(req.url || "/");
      if (!filePath) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }

      const info = await stat(filePath);
      if (!info.isFile()) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      const contentType = mimeTypes.get(path.extname(filePath)) || "application/octet-stream";
      res.writeHead(200, {
        "content-type": contentType,
        "cache-control": "no-store"
      });
      createReadStream(filePath).pipe(res);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  });
}

function listen(port) {
  const server = createAppServer();
  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      listen(port + 1);
      return;
    }
    throw error;
  });
  server.listen(port, host, () => {
    console.log(`SCEC-VDO web viewer running at http://${host}:${port}`);
  });
}

listen(preferredPort);
