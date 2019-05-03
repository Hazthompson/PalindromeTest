function isPalindrome(s) {
  var noSpaces = s.split(" ").join("");
  console.log(noSpaces);
  var stringReverse = noSpaces.split("").reverse().join("");
  console.log(stringReverse);
  return noSpaces == stringReverse;
}

console.log(isPalindrome("this is not a palindrome"));
module.exports = isPalindrome;
