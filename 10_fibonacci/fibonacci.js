const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    
    let a = 0;
    let b = 1;
    let c = a + b;
    for (let i = 0; i < n - 1; i++) { 
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
