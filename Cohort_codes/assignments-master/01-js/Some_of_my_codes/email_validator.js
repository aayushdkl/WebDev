const val = "aayushdkl54321@gmail.com";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;


// Test the regex with some examples
console.log(emailRegex.test("user@example.com"));      // Should return true
console.log(emailRegex.test("user123@gmail.co.uk"));    // Should return true
console.log(emailRegex.test("invalid.email@domain"));   // Should return false
console.log(emailRegex.test("missing@tld."));           // Should return false

