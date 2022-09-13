function removeDuplicates(obj) {
    let objKeys = Object.keys(obj)
    let sortedKeys = objKeys.sort((a,b) => b-a);
    let removeDuplicatesObj = {};
    let letterChecked = {};
    //This loop through the input object
    for(let i =0; i < sortedKeys.length; i++) {
        let letterArr = [];
        // This loops through the value of the object i.e arrays
        for(let j=0; j < obj[sortedKeys[i]].length; j++) {
            if(!letterChecked[obj[sortedKeys[i]][j]]){
                letterChecked[obj[sortedKeys[i]][j]] = true;
                letterArr.push(obj[sortedKeys[i]][j])
            }
        }
        removeDuplicatesObj[sortedKeys[i]] = letterArr;
    }

    return removeDuplicatesObj;
}

module.exports = removeDuplicates;
