// 
let toUpper = require('../method_files/toUpper');
let toLower = require('../method_files/toLower');

String.prototype.inverseCase = function () {
  let regex1 = /([a-z])/;
  let regex2 = /([A-Z])/;
  let array = this.split('');
  let newArray = []
  for (let index = 0; index < array.length; index++) {
    if (regex1.test(array[index])) {
      newArray.push(array[index].toUpper());
    } else if (regex2.test(array[index])) {
      newArray.push(array[index].toLower());
    } else {
      newArray.push(array[index])
    }
  }
  return newArray.join('')
}
module.exports = String.prototype.inverseCase;