const express = require("express");

const app = express();

// test route
app.get("/", (req, res) => {
  res.send("Server is working");
});

// load rooms.json
const roomsData = require("./rooms.json");

// rooms API
app.get("/rooms", (req, res) => {
  res.json(roomsData.rooms);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});