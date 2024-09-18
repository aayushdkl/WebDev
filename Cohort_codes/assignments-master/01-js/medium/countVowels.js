/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  
  
  const val = /[aeiou]/gi;
  const res = str.match(val);
  
  if (res) {
    return (res.length);
  }
  else{
    return(0);
  }

}
module.exports = countVowels;
