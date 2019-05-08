// A String method that converts every upper case character in a string to lowercase
// import the method for converting characters
let convertCharacter = require('../method_files/convertCharacter');

String.prototype.toLower = function () {
  let regex = /([A-Z])/g;
  // find the character the matches the regex and replace it with its lowercase equivalent
  return this.replace(regex, convertCharacter);
}

module.exports = String.prototype.toLower;