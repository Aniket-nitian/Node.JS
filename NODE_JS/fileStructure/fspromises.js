//! const fs = require("fs/promises");
const fs = require("fs");
const path = require("path");

const fileName = "./fspromises.txt";
const filepath = path.join(__dirname, fileName);
const file = __dirname;

fs.promises
  .readdir(file)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

fs.promises
  .writeFile(filepath, "Fs promise started", "utf-8")
  .then(() => {
    console.log("File written");
  })
  .catch((err) => {
    console.error(err);
  });

fs.promises
  .readFile(filepath, "World", "utf-8")
  .then(() => {
    console.log("File written");
  })
  .catch((err) => {
    console.error(err);
  });

//! .appendfile
//! .unlink
