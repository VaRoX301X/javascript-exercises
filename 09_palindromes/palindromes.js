const palindromes = function (str) {
    str = str.replaceAll(',', '');
    str = str.replaceAll('.', '');
    str = str.replaceAll(' ', '');
    str = str.replaceAll('!', '');
    str = str.replaceAll('?', '');
    str = str.toLowerCase();
    let splitted = str.split('');
    let backwards = splitted;
    console.log('Normal: ', splitted);
    console.log('reversed:', backwards.reverse());

    for (let index = 0; index < splitted.length; index++) {
        if (splitted[index] != backwards.reverse()[index]) {
            return false;
        }        
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
