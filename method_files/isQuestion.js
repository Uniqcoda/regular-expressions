// a method to check if a string is a question
String.prototype.isQuestion = function () {
  let regex = /.+\?$/;
  if (regex.test(this)) return true;
  return false;
}
// export the method to the test file
module.exports = String.prototype.isQuestion;
