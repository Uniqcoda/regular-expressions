// A String method to convert a string of numbers to currency, by adding commas
String.prototype.toCurrency = function () {
  // split the string in two, separated by the decimal point
  let splitNumber = this.split('.');
  let wholeNumber = splitNumber[0];
  let decimalNumber = splitNumber.length > 1 ? '.' + splitNumber[1] : '';
  let regex = /(\d+)(\d{3})/g;
  while (regex.test(wholeNumber)) {
    // replace the whole number with a string that has a comma separating every# digits
    wholeNumber = wholeNumber.replace(regex, '$1' + ',' + '$2');
  }
  // concatenate both numbers back
  return wholeNumber + decimalNumber;
}
module.exports = String.prototype.toCurrency;