
String.prototype.wordsArray = function () {
  let regex = /(\b[a-z]+\b)/ig;
  let execArray = (this).match(regex);
  let array = [];
  for (let index = 0; index < execArray.length; index++) {
    array.push(execArray[index]);
  }
  return array;
}

// export the method to the test file
module.exports = String.prototype.wordsArray;


