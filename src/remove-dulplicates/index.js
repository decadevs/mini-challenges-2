function filterDuplicates(arr1, arr2) {
    arr2 = [...new Set(arr2)];
    arr1.forEach(val => {
        arr2 = arr2.filter(arr2Val => val !== arr2Val);
    })

    return arr2;
}



function removeDuplicates(obj) {
    const sortedKeys = Object.keys(obj).map(val => parseInt(val)).sort((a, b) => {
        if (a > b) return 1;
        else if (b > a) return -1;
        else return 0;
    }).map(val => val.toString());

    for (let i = sortedKeys.length - 1; i >= 0; i--) {
        obj[sortedKeys[i]] = [...new Set(obj[sortedKeys[i]])]
        for (let j = i - 1; j >= 0; j--) {
            obj[sortedKeys[j]] = filterDuplicates(obj[sortedKeys[i]], obj[sortedKeys[j]])
        }
    }

    return obj;
}



module.exports = removeDuplicates;


