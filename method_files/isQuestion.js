// A String method to check if a string is a question
String.prototype.isQuestion = function () {
  let regex = /.+\?$/; // a regular expression to match a question mark preceded by a any character
  return regex.test(this);
}
// export the method for external use
module.exports = String.prototype.isQuestion;