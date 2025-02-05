//! FS module

const fs = require("fs");

//! reading file
//! Asynchronous(non blocking) --> run at last
fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

//! Synchronous(blocking) --> run first
const result = fs.readFileSync("./input.txt", "utf-8");
console.log(result);

//! Writting file

fs.writeFile("./input.txt", "Hello World", (err) => {
  if (err) {
    throw err;
  }
  // console.log("File has been written");
});

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
