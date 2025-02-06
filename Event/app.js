//! import EventEmitter class
const EventEmitter = require("events");

//* create an object of EventEmitter class
const emitter = new EventEmitter();

//! define an event listener (addListener)
emitter.on("greet", (arg) => {
  console.log("greet event occured");
});

//! Trigger (emit) the "greet" event
emitter.emit("greet");

emitter.on("event", (userName) => {
  console.log(`Hello ${userName}`);
});
emitter.emit("event", "Aniket_chauahan");

//? obj as a parameter
emitter.on("obj", (object) => {
  console.log(
    `Hello ${object.name}, you are a ${object.prof} and you are ${object.age} years old`
  );
});
emitter.emit("obj", { name: "Aniket", prof: "Student", age: "21" });
