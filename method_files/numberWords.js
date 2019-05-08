// a method to convert digits to words
String.prototype.numberWords = function () {
  // an array that represents indexes in words
  let indexInWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  // an array of all digits in the given string
  let digitsArray = this.match(/([0-9])/g);
  // an array to save all words equivalent of each digit in the given string
  let digitsInWords = [];
  for (let index = 0; index < digitsArray.length; index++) {
    let digit = digitsArray[index];
    // save the words equivalent of every digit
    digitsInWords.push(indexInWords[digit]);
  }
  return digitsInWords.join(' ')
}
module.exports = String.prototype.numberWords;