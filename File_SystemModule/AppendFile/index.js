const fs = require("fs");

fs.appendFile("input.txt", "You are my sweatHeart", (err) => {
  if (err) {
    console.log("Error in appending file", err);
    return err;
  } else {
    console.log("File appended successfully");
  }

  // Read the file

  fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("Error in reading file", err);
      return err;
    } else {
      console.log("File content is: ", data);
    }
  });
});
