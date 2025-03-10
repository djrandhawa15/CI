function isPalindrome(string) {
    let reversed = string.split('').reverse().join('');
    // let cleanString = string.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let cleanReversed = reversed.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    return string === cleanReversed;
    // return string === reversed;
}

module.exports = {isPalindrome};
