const express = require("express");
const app = express();
const http = require("http").createServer(app);
var io = require("socket.io")(http);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("A user has connected!");

  socket.on("draw", function (data) {
    // Broadcast to all users
    socket.broadcast.emit("draw", data);
  });

  socket.on("disconnect", () => {
    console.log("A user has disconnected");
  });
});

http.listen(3000, () => {
  console.log(`listening on ${port}`);
});
