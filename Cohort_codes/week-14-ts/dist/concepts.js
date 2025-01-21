"use strict";
//1. Primitive Types
//a. Number
let age = 16;
let price = 28;
//b. String
let firstName = "Ayush";
let fullName = `${firstName} Dhakal`;
//c. Boolean
let isLoggedIn = true;
let hasDiscount = false;
//d. Null and undefined
let emptyValue = null;
let notAssigned = undefined;
// Arrays and Tuples
//1. Arrays
//Numbers
let numbers = [1, 2, 3, 4, 5];
let numbers2 = [1, 2, 3, 4, 5];
//Strings
let names = ["ayush", "marshall", "jcole"];
let names2 = ["aayush", "marshall", "jcole"];
//2. Tuples
let nameAndAge = ["marshall", 52];
let addressAndRoll = ["detroit", 313];
//Special Types:
//1. Any
let data = 42;
data = "marshall";
//2. unknown
let input = "Hello";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
//3. never
function throwError(message) {
    throw new Error(message);
}
//Practice problems:
// 1. Write a function that accepts an unknown type, checks if it’s a string, and returns it in uppercase if true.
function upperCaseFn(name) {
    if (typeof name == "string") {
        return name.toUpperCase();
    }
    else {
        return undefined;
    }
}
let myName = "ayush";
let resIs = upperCaseFn(myName);
//Objects:
let person = {
    name: "marshall",
    age: 52,
};
//Practice problems
//1.Declare a variable using type annotation for:
// A boolean
// A number
// A string
let isOnline = true;
let aNumber = 1;
let nameIs = "aayush";
//2. Write a function that:
// Accepts two numbers as parameters.
// Returns their sum.
// Annotate both parameters and the return type
function sum(a, b) {
    return a + b;
}
let res = sum(3, 2);
// Create an object with type annotations:
// Name: string
// Age: number
// IsStudent: boolean
let myObj = {
    name: "marshall",
    Age: 52,
    IsStudent: false,
};
// 4. Union and Literal Types
// 1. Union Types
let score;
score = 100; // Valid
score = "A+"; // Valid
// Example
function printValue(value) {
    if (typeof value === "string") {
        console.log("String value:", value);
    }
    else {
        console.log("Number value:", value);
    }
}
printValue("Hello"); // Output: String value: Hello
printValue(42); // Output: Number value: 42
// 2.Literal Types
let statusIs;
statusIs = "loading ";
statusIs = "error ";
statusIs = "success";
// statusIs = "pending "
//example:
function processStatus(status) {
    if (status === "success") {
        console.log("Operation was successful!");
    }
    else if (status === "error") {
        console.log("There was an error.");
    }
    else {
        console.log("Loading...");
    }
}
processStatus("success"); // Output: Operation was successful!
function whoIsThis(role) {
    if (role === "admin ")
        return "Admin Dashboard";
    if (role === "user ")
        return "User Dashboard";
    return "Guest Dashbaord";
}
console.log(whoIsThis("admin "));
let userAge = 23;
let point1 = { x: 23, y: 32 };
let emp1 = {
    name: "Marshall",
    age: 52,
    role: "CEO at shady records",
};
let person1 = {
    name: "Dr.Dre",
    age: 61,
};
function acceptTheState(data) {
    if (data === "high")
        console.log("High state");
    if (data == "medium")
        console.log("Medium state");
    console.log("Low state");
}
acceptTheState("high");
acceptTheState("medium");
acceptTheState("low");
let grad1 = {
    id: 4,
    name: "John",
    degree: "Electronics , communication and information engineering",
};
let stud1 = {
    id: 3,
    name: "george",
};
// 6. Functions in TypeScript (Parameter and Return Types)
//a. Parameter Type Annotations
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("ayush");
// b. Return Type Annotations
function sumOfNo(a, b) {
    return a + b;
}
let resssIs = sumOfNo(3, 2);
//c. Optional Parameters
function sumOfNo2(a = 4, b) {
    return b ? a + b : a;
}
let resssIs2 = sumOfNo(3, 2);
// d. Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((total, sum) => total + sum, 0);
}
sumAll(1, 2, 3, 4, 5);
const sumOfNo3 = (x, y) => x + y;
sumOfNo3(3, 2);
function calculateArea(shape, value) {
    if (shape === "circle") {
        return 3.14 * value * value;
    }
    else {
        return value * value;
    }
}
calculateArea("circle", 3);
// 2. Create a function introduce that:
// Takes two parameters: name (string) and age (optional, number).
// Logs a message: "Hi, I am <name>". If age is provided, also log "I am <age> years old."
function introduce(name, age) {
    age
        ? console.log(`Hi, I am ${name} and I am ${age} years old`)
        : console.log(`Hi, I am ${name} `);
}
introduce("marshall", 52);
const add = (a, b) => a + b;
add(3, 2);
const sub = (a, b) => a - b;
sub(3, 2);
const mul = (x, y) => x * y;
mul(3, 2);
const div = (x, y) => x / y;
div(3, 2);
// 4. Create a function sumAndMultiply that:
// Accepts an array of numbers as a rest parameter.
// Returns an object with the sum and the product of all the numbers.
function sumAndMultiply(...nums) {
    return {
        sum: nums.reduce((total, sum) => total + sum, 0),
        mul: nums.reduce((total, mul) => total * mul, 1),
    };
}
let resIsThis = sumAndMultiply(1, 2, 3, 4, 5);
console.log(resIsThis);
