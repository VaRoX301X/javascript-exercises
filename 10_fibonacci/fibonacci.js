const fibonacci = function(n) {
    if (n <= 0) {
        return "OOPS";
    }
    let f = new Array();
    f.push(1);
    f.push(1);
    let siguiente= 0;
    for (let index = 1; index < n; index++) {
        siguiente = f[index-1] + f[index];
        f.push(siguiente)
    }
    return f[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
