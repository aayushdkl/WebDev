/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const reg = /[\W]/g;
  const orig_str = str.toLowerCase().replace(reg,'');

  const reversed_str = orig_str.split('').reverse().join('');

  if (orig_str === reversed_str) {
    return true;
    
  } else {
    return false;
  }
}

module.exports = isPalindrome;
