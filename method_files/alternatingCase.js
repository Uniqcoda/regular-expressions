// A String method that returns a string after alternating the case of its characters
// import the toUpper, toLower and inverseCase methods in order to use them
let toUpper = require('../method_files/toUpper');
let toLower = require('../method_files/toLower');
let inverseCase = require('../method_files/inverseCase');

String.prototype.alternatingCase = function () {
  let regex = /([a-z])/;    // a regular expression to match lower case
  let newArray = [];  
  newArray.push(this[0].toLower());    // start by converting the first character to lowercase
  for (let index = 1; index < this.length; index++) {
    // for other characters, inverse their cases based on the case of the most recent character
    if (regex.test(newArray[index - 1])) {
      newArray.push(this[index].toUpper())
      continue;
    };
    newArray.push(this[index].toLower());
  }
  return newArray.join('');
}

// export the method for external use
module.exports = String.prototype.alternatingCase;