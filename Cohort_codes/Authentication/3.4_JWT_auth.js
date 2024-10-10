const jwt = require("jsonwebtoken");

//decode, verify, generate

const value = {
  name: "aayush",
  accountNumber: 123123123,
};

//jwt
const token = jwt.sign(value, "secret"); //This token has been generated using this secret , and hence this token can only be decoded using this secret. Sign => Generate

// console.log(token);

const verified_value = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWF5dXNoIiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3Mjg1MzYyMDF9.gKVwgDBEov2aPNHLqZ16obQjL5sHsk1k-eSg95wjtDU",
  "secret"
);

console.log(verified_value);
