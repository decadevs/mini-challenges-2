function removeDuplicates(obj) {

    const newObj = {}; 
    let tempArrOfKeys = Object.keys(obj).reverse();
    let uniqueValue = [];
    
    for(let key of tempArrOfKeys){
       let tempArr = [];
       obj[key].forEach(value => {
          if(!uniqueValue.includes(value)){
                tempArr.push(value);
          }
          uniqueValue.push(value);
       });
       newObj[key] = tempArr;
    }
    return newObj;
 }
 
 module.exports = removeDuplicates;