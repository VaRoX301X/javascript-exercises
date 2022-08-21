const repeatString = function(str, t) {
    if (t < 0) {
        return "ERROR";
    }
    let res = new Array;
    for (let index = 0; index < t; index++) {
        res.push(str);
    }
    return res.join('');
};

// Do not edit below this line
module.exports = repeatString;
