const getTheTitles = function(arr) {
    let res = new Array();
    for (let index = 0; index < arr.length; index++) {
        res.push(arr[index].title);
        
    }
    console.log(res);
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
