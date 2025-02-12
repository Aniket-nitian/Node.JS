//! FS module

const fs = require("fs");
const path = require("path");

const fileName = "./input.txt";

const filepath = path.join(__dirname, fileName);

//! reading file
//! Asynchronous(non blocking) --> run at last
fs.readFile(filepath, "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

//! Writting file

fs.writeFile(filepath, "Hello World", (err) => {
  if (err) {
    throw err;
  }
  // console.log("File has been written");
});

//! Synchronous(blocking) --> run first
const result = fs.readFileSync(filepath, "utf-8");
console.log(result);

//! Append file -->adding new texts

fs.appendFile(filepath, "\nLearning NODE.JS", (err) => {
  if (err) {
    throw err;
  }
  // console.log("File has been written");
});

//! renames file
const newUpdatedFileName = "newInput.txt";
const newFilePath = path.join(__dirname, newUpdatedFileName);
fs.renameSync(filepath, newFilePath);

//! Delete file

// fs.unlink(filepath, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File has been deleted");
// });

//! Recomened
//reading
// const readStream = fs.createReadStream(filepath, "utf-8");

// readStream.on("data", (chunk) => {
//   console.log(chunk);
// });
// readStream.on("end", () => {
//   console.log("No more data to read");
// });

// write
// const writeStream = fs.createWriteStream(filepath);

// writeStream.write("writeSteam learnt");

// //! pipe --> read and write, transfer data from one stream to another

// const readSteam = fs.createReadStream(filepath);
// const writeSteam = fs.createWriteStream(filepath);

// readSteam.pipe(writeSteam);
