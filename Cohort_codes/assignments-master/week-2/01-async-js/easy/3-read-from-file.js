let a = 1;
console.log(a);

const fs = require("fs");

fs.readFile(
  "Cohort_codesassignments-masterweek-2\01-async-jseasya.txt",
  "utf-8",
  (err, data) => {
    console.log("data read from the file is ");
    console.log(data);
  }
);

let ans = 0;
for (let i = 0; i < 100; i++) {
  ans += i;
}
console.log(ans);
