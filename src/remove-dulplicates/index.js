function removeDuplicates(obj) {

    let arrayOfKeys = Object.keys(obj).slice();
    let valueDetector = []
    const result = {};
    let objKey = arrayOfKeys.sort((a,b) => a + b).reverse();
    
    objKey.map(key => {
    let arr = [];
    obj[key].map(currentValue => {
        if(!valueDetector.includes(currentValue)){
            arr.push(currentValue);
        }
        valueDetector.push(currentValue)
    });
    result[key] = arr
});
   return result
}

module.exports = removeDuplicates;
