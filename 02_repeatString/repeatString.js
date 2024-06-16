const repeatString = function(oldString, numOfTimes) {
    if (numOfTimes < 0) return "ERROR";

    let newString = '';
    for (let i = numOfTimes; i > 0; i--) {
        newString += oldString;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
