//! require from own file, custom events
//! const Emitter = require("./emitter");

//! require from node_modules, core node module events -->no need of emitter.jhs file
const Emitter = require("events");
const obj = require("./confiq");
const events = obj.event;

const emitter = new Emitter();

//! adding callBack fxn to event

// emitter.on("greet", () => {
//type and listener
// console.log("Somewhere, someone said hello.");
//});

//! ORRR

emitter.on(events.GREET, () => {
  //! type and listener
  console.log("Somewhere, someone said hello.");
});

emitter.on(events.FILESAVED, () => {
  console.log("file saved successfully");
});

emitter.on(events.FILEOPEN, () => {
  console.log("file opened successfully");
});

//! emitter.emit("greet");
emitter.emit(events.GREET);
emitter.emit(events.FILESAVED);
emitter.emit(events.FILEOPEN);
