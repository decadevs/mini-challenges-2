function removeDuplicates(obj) {

    let keys = Object.keys(obj);
    let sorted = keys.sort((a, b) => a - b);
    let values = Object.values(obj);
    let flattenedArr = values.flat();
    let uniqueFlat = getUnique(flattenedArr);
    
    for (let i = values.length-1; i > -1; i--){
        
        let uniqArr = getUnique(values[i])
        values[i] = uniqArr;
        if (i != -1){
            for (let j = 0; j < values[i].length; j++){
        
                if (uniqueFlat.length == 0){
                    values[i].splice(j, 1);
                }
                else {
                    for (let x = 0; x < uniqueFlat.length; x++){
                        if (values[i][j] == uniqueFlat[x]){
                            uniqueFlat.splice(x, 1);
                            x = uniqueFlat.length-1
                        }
                        else{
                            values[i].splice(j, 1);
                        }
                    }
                }

            }            
        }

    }
    console.log(values, uniqueFlat);
    let result = Object.prototype;
    for (let i = 0; i < values.length; i++){
        result[sorted[i]] = values[i];
    }
    return result;
}

function getUnique(arr){
    let unique = [...new Set(arr)];
    return unique;
}

module.exports = removeDuplicates;

console.log(removeDuplicates({
    "1": ["A"],
    "2": ["A"],
    "3": ["A"],
  }));