function removeDuplicates(obj) {
    let finalObj = {};
    let newObj = {};
    let bigArr = [];
    let objKeys = Object.keys(obj).reverse();
    newObj[objKeys[0]] = obj[objKeys[0]];
    for (let i = 1; i < objKeys.length; i++) {
        let temp = [];
        bigArr.push(...obj[objKeys[i -1]])
        for (let j = 0; j < obj[objKeys[i]].length; j++) {
            if (!bigArr.includes(obj[objKeys[i]][j])) {
                temp.push(obj[objKeys[i]][j])
            }
        }
        newObj[objKeys[i]] = temp;
        temp = [];
    }

    let newObjKeys = Object.keys(newObj);
    let newTemp = null;
    for (let i = 0; i < newObjKeys.length; i++) {
        newTemp = removeDuplicatesWithinArray(newObj[newObjKeys[i]])
        finalObj[newObjKeys[i]] = newTemp;
        newTemp = null;
    }

    function removeDuplicatesWithinArray(array) {
        let temp = [];
        let char = '';
        for (let i = 0; i < array.length; i++) {
            if (array.lastIndexOf(array[i]) === i) {
                char = array[i];
            }
            else {
                char = array[i];
            }
            if (!temp.includes(char)) {
                temp.push(char);
            }
        }
        return temp;
    }
    return finalObj;
}
module.exports = removeDuplicates;