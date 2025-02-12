const http = require("http");

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   //res.write("<h1>Hello World</h1>"); //!response is written now
  //   res.end("Hello Server"); //!response is now send by using end method
  // } else if (req.url === "/api/user") {
  //   const user = {
  //     name: "Aniket chauhan",
  //     age: 21,
  //   };
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(user));
  // } else if (req.url === "/login") {
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   res.end("Login Successfully");
  // } else if (req.url === "/SignUp") {
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   res.end("SignUp Successfully");
  // } else {
  //   res.writeHead(404, { "Content-Type": "text/html" });
  //   res.end("<h1>Page not found!!!</h1>");
  // }

  //! Handling a post method
  //GET, POST, DELETE, PATCH, PUT
  if (req.method === "POST" && req.url === "/submitt") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); //! conver buffer to string, eg: hello --> 128, 102, 108, 108, 111......
    });
    //End event is fired when all data is received
    req.on("end", () => {
      console.log(body);
      console.log(JSON.parse(body));
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          success: true,
          message: "Accound created successfully",
        })
      );
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(
      JSON.stringify({
        success: false,
        message: "Sorry!! nothing found....",
      })
    );
  }
});

server.listen(1000, () => {
  console.log("Server is running on port 1000");
});
