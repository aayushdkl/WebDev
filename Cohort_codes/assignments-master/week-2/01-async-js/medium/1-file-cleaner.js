const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading the file");
    return;
  }

  console.log("data read from the file is ");
  console.log(data);

  let new_data = data.replace(/\s+/g, " ");
  fs.appendFile("a.txt", `\n${new_data}`, (err) => {
    if (err) {
      console.log("Error writing the file");
      return;
    }
    console.log("The updated file contains");
    console.log(new_data);
  });
});
