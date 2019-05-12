// A String method that inverses upper case to lower case and vice-versa
let toUpper = require('../method_files/toUpper');
let toLower = require('../method_files/toLower');

String.prototype.inverseCase = function () {
  let regex1 = /([a-z])/; // a regular expression to match lower cases
  let regex2 = /([A-Z])/; // a regular expression to match upper cases
  let newArray = [];
  // loop through the string and inverse the case of each character, then push to newArray
  for (let index = 0; index < this.length; index++) {
    if (regex1.test(this[index])) { // test if the character is lower case
      newArray.push(this[index].toUpper());
      continue;
    }
    if (regex2.test(this[index])) { // test if the character is upper case
      newArray.push(this[index].toLower());
      continue;
    }
      newArray.push(this[index]);
  }
  return newArray.join('');   // join the array elements to return a string
}
// export the method for external use
module.exports = String.prototype.inverseCase;