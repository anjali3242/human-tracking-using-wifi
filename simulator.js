const faculty = ["Dr.Renuka devi", "DR. Anjali", "Dr.hanisha"];
const aps = [
  { name: "AP-BlockA-2F", location: "Block A - Staff Room" },
  { name: "AP-Library-2F", location: "Library - Second Floor" },
  { name: "AP-Lab3", location: "Computer Lab 3" },
  { name: "AP-Admin-GF", location: "Admin Block - Ground Floor" },
  { name: "AP-class-1F-115B ", locaton:"Class-115-B -First Floor" }];

let facultyState = {};

faculty.forEach(name => {
  facultyState[name] = {
    currentAP: aps[Math.floor(Math.random() * aps.length)].name
  };
});

function generateRandomMAC() {
  return "AA:BB:CC:" + Math.floor(Math.random() * 100);
}

function generateLogs() {
  const logs = [];

  faculty.forEach(name => {

    // 20% chance faculty moves
    if (Math.random() < 0.2) {
      facultyState[name].currentAP =
        aps[Math.floor(Math.random() * aps.length)].name;
    }

    logs.push({
      username: name,
      ap_name: facultyState[name].currentAP,
      mac_address: generateRandomMAC(),
      rssi: -40 - Math.floor(Math.random() * 30),
      timestamp: new Date()
    });
  });

  return logs;
}

module.exports = { generateLogs };