const Events = require("events");

const emitter = new Events();

const eventCount = {
  user_login: 0,
  user_purchase: 0,
  profie_updaed: 0,
  user_logout: 0,
};

emitter.on("user_login", (name) => {
  eventCount.user_login++;
  console.log(`${name} has logged in`);
});

emitter.on("user_purchase", (name, item) => {
  eventCount.user_purchase++;
  console.log(`${name} has purchased ${item}`);
});

emitter.on("profie_updaed", (name, email) => {
  eventCount.profie_updaed++;
  console.log(`${name} has updated ${email}`);
});

emitter.on("user_logout", (name) => {
  eventCount.user_logout++;
  console.log(`${name} has logged out`);
});

emitter.on("summary", () => {
  console.log(eventCount);
});

emitter.emit("user_login", "Aniket");
emitter.emit("user_purchase", "Aniket", "Books");
emitter.emit("profie_updaed", "Aniket", "email");
emitter.emit("user_logout", "Aniket");
emitter.emit("summary");
