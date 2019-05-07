// hasVowels (typeof Boolean): Returns true if the string contains vowels. This method must implement Regular Expression.
let hasVowels = require('../method_files/hasVowels');
describe('tests for the hasVowel method', function () {
    test('to return true if the string contains vowels', function () {
        let text = 'Hi Tolu! Are you having Fura drink today?';
        expect(text.hasVowels).toBe(true);
    })
    test('to return false if the string does not contain vowels', function () {
        let text = 'rbg clr tdy';
        expect(text.hasVowels).toBe(false)
    })
})

// toUpper (typeof String): Returns the String in question but with all characters in upper cases as applicable. This method should be implemented without the use of toUpperCase internal methods.
let toUpper = require('../method_files/toUpper');

// toLower (typeof String): Returns the String in question but with all characters in their lower cases as applicable. This method should be implemented without the use of toLowerCase internal methods.
let toLower = require('../method_files/toLower');

// ucFirst (typeof String): Returns the String in question but changes the First Character to an Upper case. Make use of your toUpper method above to implement this method or a one-liner.
let ucFirst = require('../method_files/ucFirst');

// isQuestion (typeof Boolean): Return true if the string is a question (ending with a question mark). This method must implement Regular Expression.
let isQuestion = require('../method_files/isQuestion');

// words: Returns a list of the words in the string, as an Array. This method must implement Regular Expression.
let wordsArray = require('../method_files/wordsArray');

// wordCount (typeof Number): Returns the number of words in the string. It must make use of the words method above.
let wordCount = require('../method_files/wordCount');

// toCurrency (typeof String): Returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11.
let toCurrency = require('../method_files/toCurrency');


// fromCurrency (typeof Number): Returns a number representation of the Currency String e.g 11,111.11 should return 11111.11
let fromCurrency = require('../method_files/fromCurrency');

// inverseCase (typeof String): Returns each letter in the string as an inverse of its current case e.g Mr. Ben should return mR. bEN.
let inverseCase = require('../method_files/inverseCase');

// alternatingCase (typeof String): Returns the letters in alternating cases. It must start with a lower case e.g Onomatopoeia should return oNoMaToPoEiA.
let alternatingCase = require('../method_files/alternatingCase');


// numberWords (typeof String): Returns the numbers in words e.g 325 should return three two five.
let numberWords = require('../method_files/numberWords');

// isDigit (typeof Boolean): Returns true if the string is a digit(one number) e.g 3 should return true and 34 should return false. This method must implement Regular Expression.
let isDigit = require('../method_files/isDigit');