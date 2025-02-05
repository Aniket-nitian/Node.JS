//Events -- on, emit
//emit is used to trigger an event · on is used to add a callback function that's going to be executed when the event is triggered.

function Emitter() {
  this.events = {}; //an empty events object in Emitter function
}

Emitter.prototype.on = function (type, listener) {
  // this.events.type= this.events[type] || []; --> access from events object
  this.events[type] = this.events[type] || []; //false || [] --> []
  this.events[type].push(listener); //adding callBack fxn in empt array
};

Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach((listener) => listener());
  }
};

module.exports = Emitter;
