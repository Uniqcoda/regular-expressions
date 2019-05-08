// A String method to convert a string of currency to numbers
String.prototype.fromCurrency = function () {
  let regex = /,/g;
  while (regex.test(this)) {
    // search for and replace all the commas with empty string
    newNum = this.replace(regex, '');
    return Number(newNum);
  }
}
module.exports = String.prototype.fromCurrency;