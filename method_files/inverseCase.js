// A String method that inverses upper case to lower case and vice-versa
let toUpper = require('../method_files/toUpper');
let toLower = require('../method_files/toLower');

String.prototype.inverseCase = function () {
  let regex1 = /([a-z])/;
  let regex2 = /([A-Z])/;
  // convert the string to an array
  let array = this.split('');
  let newArray = [];
  // loop through array and inverse the case of each element, then push to newArray
  for (let index = 0; index < array.length; index++) {
    if (regex1.test(array[index])) {
      newArray.push(array[index].toUpper());
    } else if (regex2.test(array[index])) {
      newArray.push(array[index].toLower());
    } else {
      newArray.push(array[index]);
    }
  }
  // join the array elements to return a string
  return newArray.join('');
}
module.exports = String.prototype.inverseCase;