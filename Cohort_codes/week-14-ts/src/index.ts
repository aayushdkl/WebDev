// let x: number = 1

// x = "aayush"
// console.log(x)

// printName("aayush")

// function printName(firstName: string) {
//   console.log(`Hello ${firstName}`)
// }

// In typescript , we can define the type of the variable and the type of the function arguments
// If we try to assign a different type of value to the variable or pass a different type of argument to the function, typescript will throw an error
//The types that we can define are : number, string, boolean, any, void, null, undefined, never, object, array, tuple, enum, unknown, union, intersection, literal, type alias, type assertion, type guard, type inference, type compatibility, type query, type reflection, type widening, type narrowing, type erasure, type instantiation, type resolution, type deduction, type coercion, type casting, type conversion, type checking, type assertion, type annotation, type declaration, type definition, type signature, type system, type safety, type soundness, type theory, type variable, type parameter, type constructor, type predicate, type operator

// function sum(a: number, b: number): number {
//   return a + b
// }

// let ans: number = sum(1, 2)
// console.log(ans)

// function verifyAge(age: number) {
//   if (age > 18) return true
//   return false
// }

// verifyAge(3)

// function delayedCall(fn: () => void) {
//   setTimeout(fn, 1000)
// }

// The way to do apply typescript to the above function is :
// function delayedCall(fn: () => void): void {
//   setTimeout(fn, 1000)
// }
// The same function if it took an arguemtn and returned a value would be :
// function delayedCall(fn: () => number): number {
//   setTimeout(fn, 1000)
// }

//An example of a function that takes a function as an argument and returns a function
// function add(a: number) {
//   return function (b: number) {
//     return a + b
//   }

// delayedCall(function () {
//   console.log("hello")
// })

// function greet(user: { firstName: string; age: number }) {
//   console.log(user.firstName)
// }

// greet({
//   firstName: "Marshall",
//   age: 52,
// })

// interface userType {
//   firstName: string
//   lastName: string
//   age: number
// }

// function greet (user: userType) {

// }

// let user1 : userType = {
//   firstName: "Marshall",
//   lastName: "Mathers"
//   age: 52
// }

type StringOrNumber = string | number

function sum(a: StringOrNumber, b: StringOrNumber) {
  return a + b
}
