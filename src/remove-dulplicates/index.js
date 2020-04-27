function removeDuplicates(obj) {
    const newObj = {};
    const arrOfKeys = Object.keys(obj).sort((a,b) => a + b).reverse();
    let arrOfUniqueVals = []
     
    arrOfKeys.map((key) => {
      let arr = [];
      obj[key].map((value) => {
        if (!arrOfUniqueVals.includes(value)) {
          arr.push(value);
        }
       arrOfUniqueVals.push(value); 
      });
      newObj[key] = arr;
    });
  return newObj
}

module.exports = removeDuplicates;
