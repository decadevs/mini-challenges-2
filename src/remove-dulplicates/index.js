function removeDuplicates(obj) {
        let arrOfString = [];
        let finalObj = {};
        const newObjKeys = Object.keys(obj)
        
     for (let key = newObjKeys.length - 1; key >= 0; key--) {
       let valueArr = obj[newObjKeys[key]]
            let finalObject = [];
         for(let value = 0; value < valueArr.length; value++) {
              if(!arrOfString.includes(valueArr[value])) {
                  arrOfString.push(valueArr[value])
                  finalObject.push(valueArr[value])
              }
          }
                   finalObj[newObjKeys[key]] = finalObject
               }
             return finalObj;
}

module.exports = removeDuplicates;
