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
let res = upperCaseFn(myName);
