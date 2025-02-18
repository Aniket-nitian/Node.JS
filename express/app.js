import express from "express";
//import { PORT } from "./env.js";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("view", "/view");
app.get("/", (req, res) => {
  res.render("report");
});

//* in newer version of node.js (14.8+), you can use top-level await without needing to wrap it in an async function.

// const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const json = await response.json();
// console.log(json);

// //!absolute path
// const staticpath = path.join(import.meta.dirname, "public");
// app.use("/public", express.static(staticpath));

// //app.get("/", (req, res) => {
// // console.log(__dirname);
// // console.log(__filename);  --> both are not defined in ES module
// // console.log(import.meta.dirname);
// // console.log(import.meta.url);
// // OR
// //   const __filename = new URL(import.meta.url).pathname;
// //   console.log(__filename);

// //   const homepagepath = path.join(import.meta.dirname, "public", "index.html");

// //   res.sendFile(homepagepath);
// // });

// app.get("/", (req, res) => {
//   res.send("About page");
// });

// //const PORT = "3000";
// //using environmental variable

// //*const PORT = process.env.PORT || 5000; //taking from .env file

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//commands
//! $env:PORT=5000;node app.js  --> for powershell
// or

//! set PORT=5000 && node app.js  -->for command prompt

//or

//! using file .env

//echo $env:PORT  --> to see the existing port value   --> in powershell
//Remove-Item env:PORT  --> to remove the existing port value  --> in powershell
