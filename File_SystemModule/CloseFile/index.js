const fs = require("fs");

fs.open("input.txt", "r+", (err, fd) => {
  if (err) {
    console.log("Error in opening file", err);
    return err;
  } else {
    console.log("File opened successfully");
  }

  // Appending content in node file

  fs.appendFile("input.txt", "My sweatHeart is Sandhya", (err) => {
    if (err) {
      console.log("Error in appending file", err);
      return err;
    } else {
      console.log("File appended successfully");

      // closing the file
      fs.close(fd, (err) => {
        if (err) {
          console.log("Error in closing file", err);
          return err;
        } else {
          console.log("File closed successfully");
        }
      });
    }
  });
});
