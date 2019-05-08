// A String function that converts a character from uppercase to lowercase and vice-versa by using their character codes
/* The character code for letters a-z is 97-122
The character code for letters A-Z is 65-90 */

function convertCharacter(character) {
  let charCode = character.charCodeAt();
  // check if character is lower case and subtract 32 from its code to convert to upper case
  if (charCode > 96 && charCode < 123) {
    return character = String.fromCharCode(charCode - 32);
  } else if (charCode > 64 && charCode < 91) {
    // check if character is upper case and add 32 to its code to convert to lower case
    return character = String.fromCharCode(charCode + 32);
  }
}

module.exports = convertCharacter;