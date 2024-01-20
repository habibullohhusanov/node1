const Emitter = require("events");

const emitter = new Emitter();

// 1-

// emitter.on("message", (data, second, third) => {
//    console.log(data);
//    console.log(second);
// });
// const MESSAGE = process.env.message || '';
// if (MESSAGE) {
//    emitter.emit("message", MESSAGE, 123)
// } else {
//    emitter.emit("message", "Nimadir")
// }


// 2-

const callback = (data, second, third) => {
   console.log(data);
   console.log(second);
}
emitter.once("message", callback);
emitter.emit('message');
emitter.emit('message');
emitter.emit('message');
emitter.emit('message');
emitter.emit('message');
emitter.emit('message');
emitter.emit('message');
emitter.removeAllListeners();
emitter.removeListener("message", callback)