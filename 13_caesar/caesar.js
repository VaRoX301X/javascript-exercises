const caesar = function(str, n) {
    letrasL = 'abcdefghijklmnopqrstuvwxyz';
    letrasArr = letrasL.split('');
    strArr = str.split('');
    strRes = new Array();

    for (let indexi = 0; indexi < strArr.length; indexi++) {
        let isLowerCase = false;
        if (strArr[indexi] == strArr[indexi].toLowerCase()) {
            isLowerCase = true;
        } 
        let letter = strArr[indexi].toLowerCase();
        for (let index = 0; index < letrasArr.length; index++) {
            if (letter == letrasArr[index]){
                let newIndex = index + n;
                let letraRes = null;
                if (newIndex < 0) {
                    // letraRes = letrasArr[-(Math.round(((newIndex/letrasArr.length)%1)*letrasArr.length-1))];
                    // console.log('nuevo index negativo: ', Math.round(((newIndex/letrasArr.length)%1)*letrasArr.length), ' y la letra: ', letraRes);
                    let pos = letrasArr.length + newIndex
                    while (pos < 0) {
                        pos = pos + letrasArr.length;
                    }                    
                    letraRes = letrasArr[pos];
                } else{
                    letraRes = letrasArr[newIndex%letrasArr.length];
                }
                
                if (isLowerCase) {
                    strRes.push(letraRes);
                } else {
                    strRes.push(letraRes.toUpperCase());
                }
                break;
            }
            if (index == letrasArr.length-1) {
                strRes.push(strArr[indexi]);
            }               
        }
        
        
    }

    return strRes.join('');
    

    

};

// Do not edit below this line
module.exports = caesar;
