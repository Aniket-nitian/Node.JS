const hello = require("./greet.js"); //!commonJS
//const { sub, greet } = require("./greet.js"); //!ES6
hello.greet();

//
//console.log(sub(10, 4));
console.log(hello.sub(10, 4));
