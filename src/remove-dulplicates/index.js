function removeDuplicates(obj) {
    let compare = [];
    let newObj = {};
    let key = Object.keys(obj);
    for (let i = key.length-1; i >= 0; i--){
        let value = obj[key[i]];
        let newArr = [];
        for (let j = 0; j<value.length; j++){
            if (!compare.includes(value[j])){
                compare.push(value[j]);
                newArr.push(value[j]);
            }
        }
        newObj[key[i]] = newArr;
    }
return newObj
}
module.exports = removeDuplicates;
