import { z } from "zod"

interface User {
  id: string
  name: string
  age: number
  email: string
  password: string
}

// function sumOfAge(user1: User, user2: User) {
//   return user1.age + user2.age
// }

// let sum = sumOfAge({ name: "marshall", age: 52 }, { name: "John", age: 32 })
// console.log(sum)

type UpdateProps = Pick<User, "name" | "age" | "email">
function updateUser(userIs: UpdateProps) {
  //hit the database to update the user
}
function updateUser1(userIs: updatedOptionalProps) {
  //hit the database to update the user
}

type updatedOptionalProps = Partial<UpdateProps>
updateUser1({ name: "marshall" })
//Partial:
interface User {
  name: string
  email: string
  pass: string
  id: number
}

//The partial would look like this:
interface User1 {
  name?: string
  email?: string
  id?: number
  pass?: string
}

//Readonly

type Admin = {
  readonly name: string
  readonly email: string
  readonly id: number
}

let adm1: Admin = {
  name: "marshall",
  email: "eminem@gmail.com",
  id: 3,
}
let adm2: Readonly<Admin> = {
  name: "marshall",
  email: "eminem@gmail.com",
  id: 3,
}

// adm1.name = "eminem"// Throws an error
interface Config {
  readonly endpoint: string
  readonly apiKey: string
}

const config: Readonly<Config> = {
  endpoint: "https://api.example.com",
  apiKey: "abcdef123456",
}

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

// type Users = {
//   [key: string]: string
// }
// const users = {
//   marshall: {
//     id: "1",
//     username: "marshall",
//   },
//   eminem: {
//     id: "2",
//     username: "eminem",
//   },
// }

// const userEx = {
//   nameIs: "marshall",
// }

//Records and maps

type Users = Record<string, number>
const userEx = {
  age: 32,
  id: 3,
}

type Users2 = Record<string, { name: string; age: number }>

const userEg2 = {
  name: {
    name: "marshall",
    age: 52,
  },
}

//Maps
const users = new Map()
users.set("marshall", { name: "marshall", age: 52 })
users.set("eminem", { name: "eminem", age: 52 })

// users.set("marshall", { name: "marshall", age: 52 })//Throws an error
const user = users.get("marshall")
console.log(user) // { name: 'marshall', age: 52 }

type Employee = {
  name: string
  age: number
}

const Emp = new Map<string, Employee>()

Emp.set("marshall", { name: "marshall", age: 52 })

type EventType = "click" | "scroll" | "mousemove"
type ExcludeEvent = Exclude<EventType, "scroll">

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event : ${event}`)
}

handleEvent("click")
//Type infer with zod library
const userProfileSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(18).optional(),
})

export type FinalUserSchema = z.infer<typeof userProfileSchema>
