//! module

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

function greetWithSum(text, a, b, sum) {
  const result = sum(a, b);
  console.log(text, result);
}
greetWithSum("Hello I am greeting with sum", 2, 3, sum);
