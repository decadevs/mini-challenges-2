function removeDuplicates(obj) {
        const newObj = {};
        const arrKeys = Object.keys(obj);
        arrKeys.sort((a, b) => a - b);
       
    
        for (let i = arrKeys.length - 1; i >= 0; i--) {
          let arr = [];
    
          for (let j = 0; j < obj[arrKeys[i]].length; j++) {
            if (newObj.hasOwnProperty(obj[arrKeys[i]][j])) {
              continue;
            }
            arr.push(obj[arrKeys[i]][j]);
            newObj[obj[arrKeys[i]][j]] = 0;
          }
          obj[arrKeys[i]] = arr;
        }
        return obj;
    
}

module.exports = removeDuplicates;
