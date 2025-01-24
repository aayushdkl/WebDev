"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
let sum = sumOfAge({ name: "marshall", age: 52 }, { name: "John", age: 32 });
console.log(sum);
