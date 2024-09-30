//console.log("Hello World!");

// const a = 1000;

// if (a % 2 == 0) {
//   console.log("a is even");
// } else {
//   console.log("a is odd");
// }

// for (let i = 0; i <= a; i++) {
//   console.log(i);
// }

//Json parse and stringify

// const obj = '{"name":"aayush", "age": 2}';
// // console.log(obj);
// // console.log(typeof obj);

// const user = JSON.parse(obj);
// console.log(user);

// const user = {
//   name: "aayush",
//   age: 2,
// };

// const obj = JSON.stringify(user);
// console.log(obj);

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});
