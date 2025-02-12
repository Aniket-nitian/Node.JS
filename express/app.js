import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello I am coming from express server</h1>");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
