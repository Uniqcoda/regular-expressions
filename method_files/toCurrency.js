// A String method to convert a string of numbers to currency, by adding commas
String.prototype.toCurrency = function () {
  // split the string in two, separated by the decimal point
  let splitNumber = this.split('.');  
  let wholeNumber = splitNumber[0];   
  let decimalNumber = splitNumber.length > 1 ? '.' + splitNumber[1] : ''; // save the second part of the split as decimal numbers
  let regex = /(\d+)(\d{3})/g; // a regular expression to match and group every 3 digits preceded by a digit
  while (regex.test(wholeNumber)) {
    // replace the whole number with a number that has a comma separating every 3 digits
    // $ is used to reference regex groups when doing a replace
    wholeNumber = wholeNumber.replace(regex, '$1' + ',' + '$2'); 
  }
  return wholeNumber + decimalNumber;
}
// export the method for external use
module.exports = String.prototype.toCurrency;