const reverseString = function(texto) {
    let splitted = texto.split('');
    let resultado = new Array();
    for (let i = splitted.length-1 ; i>=0; i--) {
        resultado.push(splitted[i]);
    }
    return resultado.join('');

};

// Do not edit below this line
module.exports = reverseString;
