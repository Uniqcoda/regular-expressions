// A String method to check if a string has vowels
String.prototype.hasVowels = function () {
  let regex = /[aeiou]/g; // a regular expression to match vowels
  return regex.test(this);
}
// export the method for external use
module.exports = String.prototype.hasVowels;