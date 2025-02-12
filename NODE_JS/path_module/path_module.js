//path module is an inbuild module in node js

const path = require("path");

console.log(__dirname); //tells current directory
console.log(__filename); //tells current executing file

//school --> folder/students/data.txt
//path.join() --> Joins multiple path segments into one,
const filepath = path.join("folder", "students", "data.txt");
console.log(filepath);

const parseData = path.parse(filepath);
const resovePath = path.resolve(filepath);
const extname = path.extname(filepath);
const basename = path.basename(filepath);
const dirname = path.dirname(filepath);

console.log({ parseData, resovePath, extname, basename, dirname });
