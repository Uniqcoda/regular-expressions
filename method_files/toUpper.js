// a method that converts every lower case character in a string to uppercase
// import the method for converting characters
let convertCharacter = require('../method_files/convertCharacter');

String.prototype.toUpper = function () {
  let regex = /([a-z])/g;
  // find the character the matches the regex and replace it with its uppercase equivalent
  return this.replace(regex, convertCharacter);
  
}

