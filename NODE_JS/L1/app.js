//! function statement
function greet() {
  console.log("hello mister");
}
greet();

//! function are first class
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

//! function expression --> it will extra space in memory so use function expression on the fly
const speak = function () {
  console.log("hello there 1st");
};
speak();

//! use thge function expression on the fly
logGreeting(function () {
  console.log("hello there 2nd");
});
