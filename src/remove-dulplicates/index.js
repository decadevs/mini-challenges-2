function removeDuplicates(obj) {
    const keysArray = Object.keys(obj);
    keysArray.sort((a,b)=> a-b);
    const objBlocker = {};

    for (let i = keysArray.length -1; i>=0; i--) {
        let arr = [];

        for (let j = 0; j < obj[keysArray[i]].length; j++){
            if (objBlocker.hasOwnProperty(obj[keysArray[i]][j])) {
                continue;
            }
            arr.push(obj[keysArray[i]][j]);
            objBlocker[obj[keysArray[i]][j]] = 0;
        }
        obj[keysArray[i]] = arr;
    }
    return obj;
}


module.exports = removeDuplicates;
