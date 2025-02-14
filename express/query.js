import express from "express";

const app = express();

app.get("/product", (req, res) => {
  console.log(req.query);
  res.send(`<h1>user search for ${req.query.search}</h1>`);
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
