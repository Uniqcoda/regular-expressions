// a method to convert a string of currency to numbers
String.prototype.fromCurrency = function () {
  let regex = /,/g;
  while (regex.test(this)) {
    newNum = this.replace(regex, '');
    return Number(newNum);
  }
}
module.exports = String.prototype.fromCurrency;