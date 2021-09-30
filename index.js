// Import packages
const Bundler = require("parcel-bundler");
const express = require("express");
const socketIO = require("socket.io");
const path = require("path");

// Configuration
const PORT = process.env.PORT || 3000;
let bundler = new Bundler(path.join(__dirname, "/app/index.html"));

// Start server
const server = express()
  .use(bundler.middleware())
  .listen(PORT, () => console.log("Listening on localhost:" + PORT));

// Initiatlize SocketIO
// const io = socketIO(server);

// Register "connection" events to the WebSocket
// io.on("connection", function (socket) {
//   console.log("io connecté");

//   // Register "join" events, requested by a connected client
//   socket.on("join", function (room) {
//     console.log("client connecté");
//     // join channel provided by client
//     socket.join(room);
//     // Register "image" events, sent by the client
//     socket.on("image", function (msg) {
//       // Broadcast the "image" event to all other clients in the room
//       socket.broadcast.to(room).emit("image", msg);
//     });
//   });
// });
