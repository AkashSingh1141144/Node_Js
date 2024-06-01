const fs = require("fs");
const buf = new Buffer(1024);

fs.open("input.txt", "r+", (err, data) => {
  if (err) {
    console.log("Error: ", err);
    return err;
  } else {
    console.log("File opened Successfully: ");
  }
  fs.read(data, buf, 0, buf.length, 0, (err, data) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("Reading File: ");
      console.log(data);
      //console.log(buf.slice(0, data).toString()); // 2nd method to print content of file in string

      console.log(buf.toString()); // 1st method to print content of file in string
    }
  });
});


// mostly avoid this method to use as it is not efficient