function removeDuplicates(obj) {

    const newObj = {};
    const objKeys = Object.keys(obj).reverse();

    const prev = [];

    for(let i= 0; i < objKeys.length; i++){
        let newArr = [];
        let curr = obj[objKeys[i]];
        
        for(let j = 0; j < curr.length; j++){
            if(i === 0){
                newArr.push(curr[j]);
                prev.push(curr[j]);
            }
            if(i > 0 && !prev.includes(curr[j])){
                newArr.push(curr[j]);
                prev.push(curr[j]);
            }
        }

        // Remove the duplicate and assign to object key
        newObj[objKeys[i]] = newArr.reduce((a, b) => !a.includes(b) ? [...a, b] : a, []);

    }

    return newObj
}

module.exports = removeDuplicates;
