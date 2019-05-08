// a function that converts a character from uppercase to lowercase and vice-versa
function convertCharacter(character) {
  let charCode = character.charCodeAt(0);
  if (charCode > 96 && charCode < 123) {
    return character = String.fromCharCode(charCode - 32);
  } else if (charCode > 63 && charCode < 91) {
    return character = String.fromCharCode(charCode + 32);
  } else {
    return character;
  }
}

module.exports = convertCharacter;

