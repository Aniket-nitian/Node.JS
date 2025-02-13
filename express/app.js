import express from "express";
import { PORT } from "./env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello I am coming from express server</h1>");
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
