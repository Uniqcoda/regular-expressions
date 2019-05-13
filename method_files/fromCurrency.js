// A String method to convert a string of currency to numbers
String.prototype.fromCurrency = function () {
  let regex = /,/g; // a regular expression to match commas
  while (regex.test(this)) {
    // search for and replace all the commas with empty string
    let newNum = this.replace(regex, '');
    return Number(newNum);
  }
}
// export the method for external use
module.exports = String.prototype.fromCurrency;