const sumAll = function(a, b) {
    if ((typeof(a) !== 'number') || (typeof(b) !== 'number') ||
        (a < 0) || (b < 0)) {
        return "ERROR";
    }
    
    if (a > b) {
        let c = a;
        a = b;
        b = c;
    }

    let resultado = 0;
    for (let index = a; index <= b; index++){
        resultado = resultado + index; 
    }
    return resultado;
};

// Do not edit below this line
module.exports = sumAll;
