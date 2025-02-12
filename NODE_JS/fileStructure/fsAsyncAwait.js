const fs = require("fs/promises");
const path = require("path");

const fileName = "./fsAsyncAwait.txt";
const filepath = path.join(__dirname, fileName);
const file = __dirname;

// fs.readdir(file)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//! async await

//! read file
const readFolder = async () => {
  try {
    const result = await fs.readdir(file);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};
readFolder();

//! write file
const writeFileExample = async () => {
  try {
    await fs.writeFile(filepath, "Fs async await started", "utf-8");
    console.log("File written successfully");
  } catch (err) {
    console.error(err);
  }
};
writeFileExample();

//!
