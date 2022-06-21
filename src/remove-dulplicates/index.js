function removeDuplicates(obj) {
  for(let prop in obj) {
    obj[prop] = [...new Set(obj[prop])]
  }
  let newObj = obj;
  for(let objprop in obj) {
    obj[objprop].forEach((firstArr) => {

      for (let objprop2 in newObj) {
        newObj[objprop2].forEach((secondArr) => {
          if(firstArr === secondArr && objprop != objprop2) {
            newObj[objprop] = newObj[objprop].filter((value) => value !== firstArr)
          }
        });
      }
    });
  }
  return newObj;
}

module.exports = removeDuplicates;
