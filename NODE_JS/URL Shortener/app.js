import http from "http";
import fs from "fs/promises";
import crypto from "crypto ";
import { json } from "stream/consumers";
import path from "path";

const DATA_FILE = path.join("data", "links.json");

const serveFile = async (res, filepath, contentType) => {
  try {
    const data = await fs.readFile(filepath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
};

const savelinks = async () => {
  await fs.writeFile(DATA_FILE, JSON.stringify(links));
};

const loadLinks = async () => {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.writeFile(DATA_FILE, JSON.stringify({}));
      return {};
    }
    throw error;
  }
};

const server = http.createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      return serveFile(res, "./index.html", "text/html");
    } else if (req.url === "/style.css") {
      return serveFile(res, "./style.css", "text/css");
    }
  }

  if (req.method === "POST" && req.url === "/shorten") {
    const links = await loadLinks();

    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", async () => {
      console.log(body);
      const { url, shortCode } = JSON.parse(body);

      if (!url) {
        res.writeHead(400, { "content-type": "text/plain" });
        return res.end("URL is required");
      }

      const finalshortCode = shortCode || crypto.randomBytes(4).toString("hex");
      if (links[finalshortCode]) {
        res.writeHead(400, { "content-type": "text/plain" });
        return res.end("Short code already exists. please choose another.");
      }
      links[finalshortCode] = url;
      await savelinks(links);
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify({ success: true, shortCode: finalshortCode }));
    });
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
