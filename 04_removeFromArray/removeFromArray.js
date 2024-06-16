const removeFromArray = function(arr, ...toRemove) {
    return arr.filter((e) => !toRemove.includes(e));
};

// Do not edit below this line
module.exports = removeFromArray;
