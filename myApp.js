var express = require("express");
var app = express();

console.log("Hello World");
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});

module.exports = app;
