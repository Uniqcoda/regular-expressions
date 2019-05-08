// // a method to convert a string of numbers to currency, by adding commas
String.prototype.toCurrency = function () {
  let splitNumber = this.split('.');
  let wholeNumber = splitNumber[0];
  let decimalNumber = splitNumber.length > 1 ? '.' + splitNumber[1] : '';
  let regex = /(\d+)(\d{3})/g;
  while (regex.test(wholeNumber)) {
    wholeNumber = wholeNumber.replace(regex, '$1' + ',' + '$2');
  }
  return wholeNumber + decimalNumber;
}
module.exports = String.prototype.toCurrency;