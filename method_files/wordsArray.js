// A String method to create an array containing all the words in a string
String.prototype.wordsArray = function () {
  let regex = /(\b[a-z]+\b)/ig;
  let array = (this).match(regex);
  return array;
}

// export the method to the test file
module.exports = String.prototype.wordsArray;