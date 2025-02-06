//! FS module

const fs = require("fs");
const path = require("path");

//const filepath = path.join(__dirname, __filename);

//! reading file
//! Asynchronous(non blocking) --> run at last
fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

//! Writting file

fs.writeFile("./input.txt", "Hello World", (err) => {
  if (err) {
    throw err;
  }
  // console.log("File has been written");
});

//! renames file
const newUpdatedFileName = "newInput.txt";
const newFilePath = path.join(__dirname, newUpdatedFileName);
fs.renameSync("./input.txt", newFilePath);

//! Synchronous(blocking) --> run first
const result = fs.readFileSync("./input.txt", "utf-8");
console.log(result);

//! Append file -->adding new texts

fs.appendFile("./input.txt", "\nLearning NODE.JS", (err) => {
  if (err) {
    throw err;
  }
  // console.log("File has been written");
});

//! Delete file

// fs.unlink("./input.txt", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File has been deleted");
// });

//! Recomened
//reading
const readStream = fs.createReadStream("./input.txt", "utf-8");

readStream.on("data", (chunk) => {
  console.log(chunk);
});
readStream.on("end", () => {
  console.log("No more data to read");
});

//write
const writeStream = fs.createWriteStream("./input.txt");

writeStream.write("writeSteam learnt");

//! pipe --> read and write, transfer data from one stream to another

const readSteam = fs.createReadStream("./input.txt");
const writeSteam = fs.createWriteStream("./output.txt");

readSteam.pipe(writeSteam);
