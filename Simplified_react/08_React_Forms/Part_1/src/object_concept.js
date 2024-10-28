const myObject = {
  a: "marshall",
  b: 1,
  c: false,
}

Object.keys(myObject).forEach((i) => {
  console.log(myObject[i])
})

let value = Object.values(myObject)
console.log(value)
