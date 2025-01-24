"use strict";
// //1. Primitive Types
// //a. Number
// let age: number = 16
// let price: number = 28
// //b. String
// let firstName: string = "Ayush"
// let fullName: string = `${firstName} Dhakal`
// //c. Boolean
// let isLoggedIn: boolean = true
// let hasDiscount: boolean = false
// //d. Null and undefined
// let emptyValue: null = null
// let notAssigned: undefined = undefined
// // Arrays and Tuples
// //1. Arrays
// //Numbers
// let numbers: number[] = [1, 2, 3, 4, 5]
// let numbers2: Array<number> = [1, 2, 3, 4, 5]
// //Strings
// let names: string[] = ["ayush", "marshall", "jcole"]
// let names2: Array<string> = ["aayush", "marshall", "jcole"]
// //2. Tuples
// let nameAndAge: [string, number] = ["marshall", 52]
// let addressAndRoll: [string, number] = ["detroit", 313]
// //Special Types:
// //1. Any
// let data: any = 42
// data = "marshall"
// //2. unknown
// let input: unknown = "Hello"
// if (typeof input === "string") {
//   console.log(input.toUpperCase())
// }
// //3. never
// function throwError(message: string): never {
//   throw new Error(message)
// }
// //Practice problems:
// // 1. Write a function that accepts an unknown type, checks if it’s a string, and returns it in uppercase if true.
// function upperCaseFn(name: unknown): string | undefined {
//   if (typeof name == "string") {
//     return name.toUpperCase()
//   } else {
//     return undefined
//   }
// }
// let myName: unknown = "ayush"
// let resIs: string | undefined = upperCaseFn(myName)
// //Objects:
// let person: {
//   name: string
//   age: number
// } = {
//   name: "marshall",
//   age: 52,
// }
// //Practice problems
// //1.Declare a variable using type annotation for:
// // A boolean
// // A number
// // A string
// let isOnline = true
// let aNumber = 1
// let nameIs = "aayush"
// //2. Write a function that:
// // Accepts two numbers as parameters.
// // Returns their sum.
// // Annotate both parameters and the return type
// function sum(a: number, b: number): number {
//   return a + b
// }
// let res = sum(3, 2)
// // Create an object with type annotations:
// // Name: string
// // Age: number
// // IsStudent: boolean
// let myObj: {
//   name: string
//   Age: number
//   IsStudent: boolean
// } = {
//   name: "marshall",
//   Age: 52,
//   IsStudent: false,
// }
// // 4. Union and Literal Types
// // 1. Union Types
// let score: number | string
// score = 100 // Valid
// score = "A+" // Valid
// // Example
// function printValue(value: string | number) {
//   if (typeof value === "string") {
//     console.log("String value:", value)
//   } else {
//     console.log("Number value:", value)
//   }
// }
// printValue("Hello") // Output: String value: Hello
// printValue(42) // Output: Number value: 42
// // 2.Literal Types
// let statusIs: "success" | "loading " | "error "
// statusIs = "loading "
// statusIs = "error "
// statusIs = "success"
// // statusIs = "pending "
// //example:
// function processStatus(status: "success" | "error" | "loading") {
//   if (status === "success") {
//     console.log("Operation was successful!")
//   } else if (status === "error") {
//     console.log("There was an error.")
//   } else {
//     console.log("Loading...")
//   }
// }
// processStatus("success") // Output: Operation was successful!
// //3.  Combining Union and Literal Types
// type Role = "admin " | "user " | "guest "
// function whoIsThis(role: Role) {
//   if (role === "admin ") return "Admin Dashboard"
//   if (role === "user ") return "User Dashboard"
//   return "Guest Dashbaord"
// }
// console.log(whoIsThis("admin "))
// // 5. Type Aliases
// type Age = number
// let userAge: Age = 23
// type Coordinates = { x: number; y: number }
// let point1: Coordinates = { x: 23, y: 32 }
// // Example of an intersection
// type Person = { name: string; age: number }
// type Employee = Person & { role: string }
// let emp1: Employee = {
//   name: "Marshall",
//   age: 52,
//   role: "CEO at shady records",
// }
// let person1: Person = {
//   name: "Dr.Dre",
//   age: 61,
// }
// //Practice problems:
// // 1. Define a union type alias for a variable that can store either "high", "medium", or "low". Write a function that accepts this type and logs a message based on the value.
// type State = "high" | "medium" | "low"
// function acceptTheState(data: State) {
//   if (data === "high") console.log("High state")
//   if (data == "medium") console.log("Medium state")
//   console.log("Low state")
// }
// acceptTheState("high")
// acceptTheState("medium")
// acceptTheState("low")
// //2. Create an intersection type alias for Student (with id and name) and Graduate (with degree), and declare a variable using this type.
// type Student = { id: number; name: string }
// type Graduate = Student & { degree: string }
// let grad1: Graduate = {
//   id: 4,
//   name: "John",
//   degree: "Electronics , communication and information engineering",
// }
// let stud1: Student = {
//   id: 3,
//   name: "george",
// }
// // 6. Functions in TypeScript (Parameter and Return Types)
// //a. Parameter Type Annotations
// function greet(name: string): void {
//   console.log(`Hello ${name}`)
// }
// greet("ayush")
// // b. Return Type Annotations
// function sumOfNo(a: number, b: number): number {
//   return a + b
// }
// let resssIs = sumOfNo(3, 2)
// //c. Optional Parameters
// function sumOfNo2(a: number = 4, b?: number): number {
//   return b ? a + b : a
// }
// let resssIs2 = sumOfNo(3, 2)
// // d. Rest Parameters
// function sumAll(...numbers: number[]): number {
//   return numbers.reduce((total, sum) => total + sum, 0)
// }
// sumAll(1, 2, 3, 4, 5)
// // e. Arrow function
// type sumNum = (x: number, y: number) => number
// const sumOfNo3: sumNum = (x, y) => x + y
// sumOfNo3(3, 2)
// // Practice Problems
// // 1. Write a function calculateArea that:
// // Accepts shape ("circle" or "square") as the first parameter.
// // For "circle," accept the radius as the second parameter.
// // For "square," accept the side length as the second parameter.
// // Return the area.
// type Shape = "circle" | "square"
// function calculateArea(shape: Shape, value: number) {
//   if (shape === "circle") {
//     return 3.14 * value * value
//   } else {
//     return value * value
//   }
// }
// calculateArea("circle", 3)
// // 2. Create a function introduce that:
// // Takes two parameters: name (string) and age (optional, number).
// // Logs a message: "Hi, I am <name>". If age is provided, also log "I am <age> years old."
// function introduce(name: string, age?: number) {
//   age
//     ? console.log(`Hi, I am ${name} and I am ${age} years old`)
//     : console.log(`Hi, I am ${name} `)
// }
// introduce("marshall", 52)
// // 3. Define a MathOperation function type for (a: number, b: number) => number.
// // Implement add, subtract, multiply, and divide functions using this type.
// type fxMathTemplate = (a: number, b: number) => number
// const add: fxMathTemplate = (a, b) => a + b
// add(3, 2)
// const sub: fxMathTemplate = (a, b) => a - b
// sub(3, 2)
// const mul: fxMathTemplate = (x, y) => x * y
// mul(3, 2)
// const div: fxMathTemplate = (x, y) => x / y
// div(3, 2)
// // 4. Create a function sumAndMultiply that:
// // Accepts an array of numbers as a rest parameter.
// // Returns an object with the sum and the product of all the numbers.
// function sumAndMultiply(...nums: Array<number>): object {
//   return {
//     sum: nums.reduce((total, sum) => total + sum, 0),
//     mul: nums.reduce((total, mul) => total * mul, 1),
//   }
// }
// let resIsThis = sumAndMultiply(1, 2, 3, 4, 5)
// console.log(resIsThis)
// // 7. Arrays and Tuples in TypeScript
// //Tuples
// type TupleIs = [id: number, name: string, isActive: boolean]
// let user: TupleIs = [3, "Alice", true]
// //Array of objects
// type ArrayOfObjType = { id: number; name: string; isOnlie: boolean }
// let userArray: ArrayOfObjType[] = [
//   { id: 3, name: "jorge", isOnlie: true },
//   { id: 4, name: "washing", isOnlie: false },
//   { id: 23, name: "walles", isOnlie: true },
// ]
// //Enums in Typescript
// enum Direction {
//   east, //0
//   west, //1
//   north,
//   south,
// }
// // enum Status{
// //   success : "SUCCESS",
// //   failure : "Failure",
// // }
// // let person23: People = {
// //   name: "marshall",
// //   age: 52,
// //   greet: () => {
// //     return "hi"
// //   },
// // }
