// A String method to count the number of words in a string
// import the wordsArray method
let wordsArray = require('../method_files/wordsArray');

String.prototype.wordCount = function () {
  // check the length of the new array of all words
  return this.wordsArray().length;
}

module.exports = String.prototype.wordCount;