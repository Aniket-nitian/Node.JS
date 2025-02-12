const obj = require("./greeting.json");
//console.log(obj);

function englishGreet() {
  console.log(obj.english);
}
module.exports = englishGreet;
