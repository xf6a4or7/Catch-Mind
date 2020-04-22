// eslint-disable-next-line no-undef
const socket = io("/");

setTimeout(() => socket.emit("helloGuys"), 4000);
