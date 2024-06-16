const reverseString = function(str) {
    let charsArray = str.split("");
    charsArray.reverse();
    let reversedStr = charsArray.join("");

    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
