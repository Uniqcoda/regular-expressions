// A String method to check if a string is only one digit
String.prototype.isDigit = function () {
  let regex = /^[0-9]$/; // a regular expression to match only one digit
  return regex.test(this);
}
// export the method for external use
module.exports = String.prototype.isDigit;