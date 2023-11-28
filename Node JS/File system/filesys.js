const path = require("path");
const fsPromises = require("fs").promises;

const fileOps = async () => {
  const data = await fsPromises.readFile(
    path.join(__dirname, "files", "start.txt"),
    "utf-8"
  );
  console.log(data);

  await fsPromises.writeFile(
    path.join(__dirname, "files", "sub.txt"),
    "sub file"
  );
  console.log("write finished");
  await fsPromises.appendFile(
    path.join(__dirname, "files", "sub.txt"),
    "\n\n hello sub"
  );
  await fsPromises.rename(
    path.join(__dirname, "files", "sub.txt"),
    path.join(__dirname, "files", "substitute.txt")
  );
  //   await fsPromises.unlink(path.join(__dirname, "files", "start.txt"));
};
fileOps();
