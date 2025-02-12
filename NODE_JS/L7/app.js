const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "text/html",
  });
  res.end("Hello I am coming from web server");
});

server.listen(3000, () => {
  //! 3000 is port number -->LocalHost:portnumber
  console.log("server is running on port 3000");
});
