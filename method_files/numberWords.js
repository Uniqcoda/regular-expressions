// A String method to convert digits to words
String.prototype.numberWords = function () {
  let indexInWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  // an array of all digits in the given string
  let digitsArray = this.match(/([0-9])/g);
  let digitsInWords = [];
  for (let index = 0; index < digitsArray.length; index++) {
    let digit = digitsArray[index];
    // save the words equivalent of every digit
    digitsInWords.push(indexInWords[digit]);
  }
  // join the digitsInWords elements to convert to a string, separated by a space
  return digitsInWords.join(' ');
}
module.exports = String.prototype.numberWords;