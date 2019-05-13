// A String method to convert digits to words
String.prototype.numberWords = function () {
  // an array representing every index in words
  let indexInWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let digitsArray = this.match(/[0-9]/g);   // an array of all digits in the given string
  let digitsInWords = []; // a new array to save every number in words 
  for (let index = 0; index < digitsArray.length; index++) {
    let digit = digitsArray[index];
    digitsInWords.push(indexInWords[digit]);  // save the words equivalent of every digit
  }
  // join the digitsInWords elements to convert to a string, separated by a space
  return digitsInWords.join(' ');
}
// export the method for external use
module.exports = String.prototype.numberWords;