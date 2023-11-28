const path = require("path");
const fs = require("fs");

const rs = fs.createReadStream(path.join(__dirname, "file", "bigfil.txt"));
const ws = fs.createWriteStream(path.join(__dirname, "file", "bigFile.txt"));

rs.on("data", (dataChunk) => {
  ws.write(dataChunk);
});

// rs.pipe(ws);
