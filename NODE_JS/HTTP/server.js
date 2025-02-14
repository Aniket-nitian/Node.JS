const { getMaxListeners } = require("events");
const http = require("http");

//? .createServer()

//web server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello I am coming from web server");
  }
  if (req.url === "/about") {
    res.setHeader("Content-Type", "text/plain");
    res.end("About page, using nodemon.");
  }
});

//*Event emitter

//! server call or Emit
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
