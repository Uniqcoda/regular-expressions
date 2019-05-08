let toUpper = require('../method_files/toUpper');

String.prototype.upperCaseFirst = function () {   
   return (this.charAt(0).toUpper() + this.slice(1));

}
module.exports = String.prototype.upperCaseFirst;

