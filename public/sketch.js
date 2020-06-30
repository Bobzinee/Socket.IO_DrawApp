let socket;
let width = window.innerWidth;
let height = window.innerHeight;

function setup() {
  createCanvas(width, height);
  background(0);
  socket = io();

  socket.on("draw", function (data) {
    fill(0, 0, 255);
    noStroke();
    ellipse(data.x, data.y, 20, 20);
  });
}

function mouseDragged() {
  // Draw some white circles
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
  // Send mouse coordinates to server
  sendmouse(mouseX, mouseY);
}

// Function for sending to the socket
function sendmouse(xpos, ypos) {
  // Make an object with x and y
  var data = {
    x: xpos,
    y: ypos,
  };

  // Send that object to the socket
  socket.emit("draw", data);
}
