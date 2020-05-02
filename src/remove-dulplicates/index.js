function removeDuplicates(obj) {
    let arrayCheck = [];
    let newObject = {};
    let keyArray = Object.keys(obj).reverse();
    for (let i = 0; i < keyArray.length; i++) {
        const element = keyArray[i];
        let container = obj[element];
        let anotherArray = []
        for (let j = 0; j < container.length; j++) {
            const ele = container[j];
            if (arrayCheck.indexOf(ele) === -1) {
                
                anotherArray.push(ele);
                arrayCheck.push(ele);
            }
                        
        }
        newObject[element] =  anotherArray;
        
    }   
    return newObject;
        
}

module.exports = removeDuplicates;
