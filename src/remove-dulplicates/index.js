function removeDuplicates(obj) {
    let arrayOfKeys = [];
    let objeDuplicates = {};

    let sortedArr = [];
    for(let key in obj){
        arrayOfKeys.push(key);
    }
    arrayOfKeys.reverse().forEach((key) => {
        obj[key] =[... new Set (obj[key])];    
        obj [key].forEach((char)=>{
            if(!objeDuplicates[char]){
             objeDuplicates[char] = true;
            sortedArr.push(char);
            }
        })
        obj[key] = sortedArr;
        sortedArr = [];
    })
    return obj;
}

module.exports = removeDuplicates;
