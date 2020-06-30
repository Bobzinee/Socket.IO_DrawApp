const express = require("express");
const app = express();
const http = require("http").createServer(app);
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

http.listen(3000, () => {
  console.log(`listening on ${port}`);
});
