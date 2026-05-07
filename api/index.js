import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import server from "../dist/server/server.js";

const __dirname = join(fileURLToPath(import.meta.url), "..");

const mimeTypes = {
  js: "application/javascript",
  css: "text/css",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  svg: "image/svg+xml",
  woff: "font/woff",
  woff2: "font/woff2",
  json: "application/json",
};

export default async function handler(req, res) {
  try {
    // Try to serve static assets
    if (req.url.startsWith("/assets/")) {
      const filePath = join(__dirname, "dist", "server", req.url);
      if (existsSync(filePath)) {
        const content = readFileSync(filePath);
        const ext = req.url.split(".").pop().toLowerCase();
        res.setHeader("Content-Type", mimeTypes[ext] || "application/octet-stream");
        res.setHeader("Cache-Control", "public, max-age=31536000");
        res.end(content);
        return;
      }
    }

    // Handle server-side rendering
    const url = new URL(req.url, `http://${req.headers.host}`);
    const fetchRequest = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: req.body && ["POST", "PUT", "PATCH"].includes(req.method) ? req.body : undefined,
    });

    const fetchResponse = await server.fetch(fetchRequest);

    res.statusCode = fetchResponse.status;

    for (const [key, value] of fetchResponse.headers) {
      res.setHeader(key, value);
    }

    res.end(await fetchResponse.text());
  } catch (error) {
    console.error("Handler error:", error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
