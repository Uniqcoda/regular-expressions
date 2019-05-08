// 
let toUpper = require('../method_files/toUpper');
let toLower = require('../method_files/toLower');
let inverseCase = require('../method_files/inverseCase');


String.prototype.alternatingCase = function () {
  let regex = /([a-z])/;
  let array = this.split('');
  let newArray = [];
  newArray.push(array[0].inverseCase())
  for (let index = 1; index < array.length; index++) {
    if (regex.test(newArray[index-1])) {
      newArray.push(array[index].toUpper());
    } else {
      newArray.push(array[index].toLower());
    }
  }
  return newArray.join('');
}
module.exports = String.prototype.alternatingCase;

let txt = new String('oladimeji is a good boy');
console.log(txt.alternatingCase());
