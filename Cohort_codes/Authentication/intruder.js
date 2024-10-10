const jwt = require("jsonwebtoken");

const i_found_the_content = {
  name: "aayush",
  accountNumber: 123123123,
  iat: 1728536201,
};

const new_token = jwt.sign(i_found_the_content, "intruder");

console.log(new_token);
