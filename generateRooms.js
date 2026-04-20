const fs = require("fs");

let rooms = [];
let id = 1;

// Generate 50 lecture halls
for (let i = 1; i <= 50; i++) {
  rooms.push({
    id: id++,
    name: `Lecture Hall A${i}`,
    type: "classroom",
    x: Math.floor(Math.random() * 800),
    y: Math.floor(Math.random() * 500)
  });
}

// Generate 30 labs
for (let i = 1; i <= 30; i++) {
  rooms.push({
    id: id++,
    name: `Lab ${i}`,
    type: "lab",
    x: Math.floor(Math.random() * 800),
    y: Math.floor(Math.random() * 500)
  });
}

// Generate 20 facilities
const facilities = ["Library", "Cafeteria", "Auditorium", "Gym"];
for (let i = 1; i <= 20; i++) {
  rooms.push({
    id: id++,
    name: facilities[i % facilities.length] + " " + i,
    type: "facility",
    x: Math.floor(Math.random() * 800),
    y: Math.floor(Math.random() * 500)
  });
}

// Save to file
fs.writeFileSync("rooms.json", JSON.stringify({ rooms }, null, 2));

console.log("✅ 100+ rooms dataset generated!");