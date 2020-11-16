function removeDuplicates(obj) {
    let arr = Object.entries(obj);
    let checkArr = [];
    for (let i = arr.length-1; i >= 0; i--) {
        for (let j = 0; j < arr[i][1].length; j++) {
        let item = arr[i][1];
            if (checkArr.includes(item[j]) === true) {
            item = item.splice(j, 1);
            checkArr = checkArr.concat(item);
            }else {
            checkArr = checkArr.concat(item);
        }
    }
}
    return arr;

}

module.exports = removeDuplicates;
