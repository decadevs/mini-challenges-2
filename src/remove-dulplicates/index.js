function removeDuplicates(obj) {
    let newArr = {};
      for (i in obj) {
        newArr[i] = Array.from(new Set(obj[i])); 
      }
  
      let objKeys = Object.keys(newArr);
      let sortedObjKeys = objKeys.sort((a, b) => a - b).reverse();
      let controlArray = [];
      const outputObj = {};
  
      sortedObjKeys.forEach((key) => {
          let array = [];
          newArr[key].forEach((value) => {
              if (controlArray.indexOf(value) === -1) {
                  array.push(value);
              }
              controlArray.push(value);
          });
          outputObj[key] = array;
      });
      return outputObj;
  }
  
  module.exports = removeDuplicates;