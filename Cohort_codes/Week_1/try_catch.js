try {
  let a;
  console.log(a.lenght);
  console.log("Ctrl wont reach here cause this is an error: Inside try block");
} catch (e) {
  console.log("Ctrl reaches here : Inside catch block");
}

console.log("Then the code proceeds further");
