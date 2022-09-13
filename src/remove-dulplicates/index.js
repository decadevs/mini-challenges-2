function removeDuplicates(obj) {
    let objectKeys = Object.keys(obj)
    let sortedKeys = objectKeys.sort((a,b) => b-a);
    let removeDuplicatesObj = {};
    let letterCheck = {};
    
    for(let i =0; i < sortedKeys.length; i++) {
        let letterArr = [];
        
        for(let j=0; j < obj[sortedKeys[i]].length; j++) {
            if(!letterCheck[obj[sortedKeys[i]][j]]){
                letterCheck[obj[sortedKeys[i]][j]] = true;
                letterArr.push(obj[sortedKeys[i]][j])
            }
        }
        removeDuplicatesObj[sortedKeys[i]] = letterArr;
    }

    return removeDuplicatesObj;
}
  

module.exports = removeDuplicates;
