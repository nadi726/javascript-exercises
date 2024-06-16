const sumAll = function(m, n) {
    if (typeof m != "number" || typeof n != "number" 
        || m < 0 || n < 0) {
        return "ERROR";
    }
    
    // Ensure that the larger number is last
    if (m > n) return sumAll(n, m);

    let sum = 0;
    for (let currentNum = m; currentNum <= n; currentNum++) {
        sum += currentNum;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
