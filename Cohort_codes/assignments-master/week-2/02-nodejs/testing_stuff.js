const fs = require("fs");
const path = require("path");

// console.log(fs.readdir("/files"));

const dir_path =
  "C:\\Users\\ayush\\OneDrive\\Desktop\\WebDev\\Cohort_codes\\assignments-master\\week-2\\02-nodejs\\files";

fs.readdir(dir_path, (err, files) => {
  if (err) {
    console.log(`The file cannot be read and the error is : ${err}`);
  } else {
    console.log(`The contents of the file are : ${files}`);
  }
});
