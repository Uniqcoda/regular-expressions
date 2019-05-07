// a method to check if a string has vowels
String.prototype.hasVowels = function () {
  let regex = /[aeiou]/g;
  if (regex.test(this)) return true;
  return false;
}
// export the method to the test file
module.exports = String.prototype.hasVowels;