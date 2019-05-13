// A String method that converts every upper case character in a string to lowercase
// import the method for converting characters
let convertCharacter = require('../method_files/convertCharacter');

String.prototype.toLower = function () {
  let regex = /([A-Z])/g; // a regular expression to match every upper case character
  // find the character that matches the regex and replace it with its lowercase equivalent
  return this.replace(regex, convertCharacter);
}

// export the method for external use
module.exports = String.prototype.toLower;