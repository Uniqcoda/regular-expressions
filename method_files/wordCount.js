
let wordsArray = require('../method_files/wordsArray');
String.prototype.wordCount = function () {
  let count = this.wordsArray().length;
  return count;
}

module.exports = String.prototype.wordCount;