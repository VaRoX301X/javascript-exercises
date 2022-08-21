const removeFromArray = function(arr, ...args) {
    // console.log(args);
    let indexes = new Array;
    for (let index1 = 0; index1 < args.length; index1 ++){
        for (let index = 0 ; index < arr.length; index++){
        if (arr[index] === args[index1]) {
            indexes.push(index);
            
        }        
    }
    }
    indexes = indexes.sort(function(a, b) {
        return a - b;
      });
    for (let index = 0 ; index < indexes.length; index++){
        arr.splice(indexes[index]-index,1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
