let toUpper = require('../method_files/toUpper');

String.prototype.upperCaseFirst = function () {
   let first = this.charAt(0).toUpper();
   let others =  this.split(this.charAt(0));   
   return (first + others[1])

}
module.exports = String.prototype.upperCaseFirst;

