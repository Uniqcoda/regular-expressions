// A String method to convert the first letter of a string from lower case to upper case
let toUpper = require('../method_files/toUpper');

String.prototype.upperCaseFirst = function () {  
   // convert the first letter to upper and add the other characters to it 
   return (this.charAt(0).toUpper() + this.slice(1));
}
// export the method for external use
module.exports = String.prototype.upperCaseFirst;