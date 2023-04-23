const express = require("express");

const { Server } = require("socket.io");

const app = express();

const io = new Server(app.listen(3000));

io.on("connection", (socket) => {
  socket.on("user-sendchat", (data) => {
    io.emit("server-sendchat", data);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
