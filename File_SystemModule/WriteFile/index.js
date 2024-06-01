const fs = require("fs");

fs.writeFile("input.txt", "Hello content!", (err) => {
  if (err) {
    console.log("Error in writing file", err);
    return err;
  } else {
    console.log("File written successfully.");
  }
  fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
      log("Error in reading file", err);
      return err;
    } else {
      console.log("File content:", data);
    }
  });
});
