// A String method to create an array containing all the words in a string
String.prototype.wordsArray = function () {
  let regex = /(\b\w+\b)/ig; // a regular expression to match every word in the string
  let array = (this).match(regex);
  return array;
}

// export the method for external use
module.exports = String.prototype.wordsArray;