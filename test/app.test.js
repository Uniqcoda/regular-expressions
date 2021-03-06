// hasVowels (typeof Boolean): Returns true if the string contains vowels. This method must implement Regular Expression.
let hasVowels = require('../method_files/hasVowels');
describe('test for the hasVowel method', function () {
  test('returns true if the string contains vowels', function () {
    let text = new String('Hi Tolu! Are you having Fura drink today?');
    expect(text.hasVowels()).toBe(true);
  });
  test('returns false if the string does not contain vowels', function () {
    let text = new String('rbg clr tdy');
    expect(text.hasVowels()).toBe(false);
  });
})

// toUpper (typeof String): Returns the String in question but with all characters in upper cases as applicable. This method should be implemented without the use of toUpperCase internal methods.
let toUpper = require('../method_files/toUpper');
describe('test for the toUpper method', function () {
  test('returns string in all uppercase', function () {
    let text = new String('Hi Tolu! Are you having Fura drink today?');
    expect(text.toUpper()).toEqual('HI TOLU! ARE YOU HAVING FURA DRINK TODAY?');
  })
})

// toLower (typeof String): Returns the String in question but with all characters in their lower cases as applicable. This method should be implemented without the use of toLowerCase internal methods.
let toLower = require('../method_files/toLower');
describe('test for the toLower method', function () {
  test('returns string in all lowercase', function () {
    let text = new String('Hi Tolu! Are you hungry?');
    expect(text.toLower()).toEqual('hi tolu! are you hungry?');
  })
})

// upperCaseFirst (typeof String): Returns the String in question but changes the First Character to an Upper case. Make use of your toUpper method above to implement this method or a one-liner.
let upperCaseFirst = require('../method_files/upperCaseFirst');
describe('to for the upperCaseFirst method', function () {
  test('returns first letter as upper case', function () {
    let text = new String('my name is my name.');
    expect(text.upperCaseFirst()).toEqual('My name is my name.');
  })
})

// isQuestion (typeof Boolean): Return true if the string is a question (ending with a question mark). This method must implement Regular Expression.
let isQuestion = require('../method_files/isQuestion');
describe('test for the isQuestion method', function () {
  test('returns true if the string is a question', function () {
    let text = new String('Are you having Fura drink today?');
    expect(text.isQuestion()).toBe(true);
  });
  test('returns false if the string is not a question', function () {
    let text = new String('Hi David!');
    expect(text.isQuestion()).toBe(false);
  });
})

// words: Returns a list of the words in the string, as an Array. This method must implement Regular Expression.
let wordsArray = require('../method_files/wordsArray');
describe('test for the wordsArray method', function () {
  let text = new String('Tick says the clock, tick tick. What you have to do, do quick.');
  test('to confirm that the new array contains the right things', function () {
    expect(text.wordsArray().length).toBe(13);
    expect(text.wordsArray()).toContain('Tick', 'says');
  })
})

// wordCount (typeof Number): Returns the number of words in the string. It must make use of the words method above.
let wordCount = require('../method_files/wordCount');
describe('test for the wordCount method', function () {
  let text = new String('Tick says the clock, tick tick. What you have to do, do quick.');
  test('confirms that the new array contains the right number of elements', function () {
    expect(text.wordCount()).toBe(13);
  })
})

// toCurrency (typeof String): Returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11
let toCurrency = require('../method_files/toCurrency');
describe('test for the toCurrency method', function () {
  test('to add a comma for every 3 digits before a dot', function () {
    let num = new String('1111111.11111');
    expect(num.toCurrency()).toBe('1,111,111.11111');
    let num2 = new String('1111111');
    expect(num2.toCurrency()).toBe('1,111,111');
  });
})

// fromCurrency (typeof Number): Returns a number representation of the Currency String e.g 11,111.11 should return 11111.11
let fromCurrency = require('../method_files/fromCurrency');
describe('test for the fromCurrency method', function () {
  test('returns a number representation of the Currency String', function () {
    let num = new String('1,111,111.11111');
    expect(num.fromCurrency()).toBe(1111111.11111);
  })
})

// inverseCase (typeof String): Returns each letter in the string as an inverse of its current case e.g Mr. Ben should return mR. bEN.
let inverseCase = require('../method_files/inverseCase');
describe('test for the inverseCase method', function () {
  test('returns the string in inverse case', function () {
    let text = new String('Mr. Ben');
    expect(text.inverseCase()).toEqual('mR. bEN');
  })
})

// alternatingCase (typeof String): Returns the letters in alternating cases. It must start with a lower case e.g Onomatopoeia should return oNoMaToPoEiA.
let alternatingCase = require('../method_files/alternatingCase');
describe('test for alternatingCase method', function () {
  test('returns a string in alternating case', function () {
    let text = new String('onomatopoeia');
    expect(text.alternatingCase()).toEqual('oNoMaToPoEiA');
  })
})

// numberWords (typeof String): Returns the numbers in words e.g 325 should return three two five.
let numberWords = require('../method_files/numberWords');
describe('test for the numberWords method', function () {
  test('returns a string of numbers in words', function () {
    let num = new String('325');
    expect(num.numberWords()).toBe('three two five');
  });
})

// isDigit (typeof Boolean): Returns true if the string is a digit(one number) e.g 3 should return true and 34 should return false. This method must implement Regular Expression.
let isDigit = require('../method_files/isDigit');
describe('test for the isDigit method', function () {
  test('returns true if the string is a digit', function () {
    let num = new String('5');
    expect(num.isDigit()).toBe(true);
  });
  test('returns false if the string is more than a digit', function () {
    let num = new String('556');
    expect(num.isDigit()).toBe(false);
  });
})

// convertCharacter (typeof String): Takes a single character string and returns the inverse case of the character.
let convertCharacter = require('../method_files/convertCharacter');
describe('test for the convertCharacter method', function () {
  let character1 = 'a';
  let character2 = 'A';
  let character3 = '?';
  test('returns the inverse case of a string character', function () {
    expect(convertCharacter(character1)).toBe('A');
    expect(convertCharacter(character2)).toBe('a');
    expect(convertCharacter(character3)).toBe('?');
  })
})