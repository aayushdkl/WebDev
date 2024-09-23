//  Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
let a = 1;
console.log(a);

const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log("data read from the file is ");
  console.log(data);
});

fs.writeFile("b.txt", "Hello world!", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File written successfully");
});

let ans = 0;
for (let i = 0; i < 100; i++) {
  ans += i;
}
console.log(ans);
