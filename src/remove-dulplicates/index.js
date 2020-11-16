function removeDuplicates(obj) {
    let keyA = Object.keys(obj);
    for (let i = keyA.length-1; i >= 0; i--) {
        let item = obj[keyA[i]];
        let checkArr = [];
        for (let j = 0; j < item.length; j++) {
            if(checkArr.includes(item[j]) === true) {
                item.splice(j, 1);
                checkArr.push(item.join(","))
            }else {
                checkArr.push(item.join(","));
            }
        }
    }
    return obj;

}

module.exports = removeDuplicates;
