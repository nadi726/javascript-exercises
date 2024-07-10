const palindromes = function (str) {
    const cleanedStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"").toLowerCase();
    const reveredStr = cleanedStr.split("").reverse().join("");
    return reveredStr === cleanedStr;
};

// Do not edit below this line
module.exports = palindromes;
