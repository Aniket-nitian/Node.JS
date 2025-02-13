import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  //console.log(__dirname);
  //console.log(__filename);
  //console.log(import.meta.dirname);
  //console.log(import.meta.url);

  const __filename = new URL(import.meta.url).pathname;
  console.log(__filename);

  const homepagepath = path.join(import.meta.dirname, "public", "index.html");
  res.sendFile(homepagepath);
});

app.get("/about", (req, res) => {
  res.send("About page");
});

//const PORT = "3000";
//using environmental variable

//*const PORT = process.env.PORT || 5000; //taking from .env file
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
