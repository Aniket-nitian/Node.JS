import express from "express";
import path from "path";
import Path from "path";

const app = express();

const staticPath = Path.join(import.meta.dirname, "public");

app.use(express.static(staticPath));

// app.get("/contact", (req, res) => {
//   console.log(req.query);
//   res.redirect("/");
// });

//* OR use POST method instead of action.

app.use(express.urlencoded({ extended: true }));

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

//!error

app.use((req, res) => {
  // return res.status(404).send("Page not found");
  return res
    .status(404)
    .sendFile(path.join(import.meta.dirname, "views", "error.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
