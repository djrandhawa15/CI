//expected outcome is a palandrone for the words

const {isPalindrome} = require('./palandrone');

test.each([ ['racecar', true], ['hello', false], ['mom', true] ])(
    'isPalindrome(%s) = %s', (string, expected) => {
        expect(isPalindrome(string)).toBe(expected);
    }
);