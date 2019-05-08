// A String method to check if a string is only one digit
String.prototype.isDigit = function () {
  let regex = /^[0-9]$/;
  if (regex.test(this)) return true;
  return false;
}
// export the method to the test file
module.exports = String.prototype.isDigit;