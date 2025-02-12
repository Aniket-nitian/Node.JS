//! Module
function greet() {
  console.log("Hello World!");
}
//greet();

function sub(a, b) {
  return a > b ? a - b : b - a;
}

module.exports = {
  greet,
  sub,
};

//! or

// module.exports.greet = greet;
// module.exports.sub = sub;
