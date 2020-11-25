function removeDuplicates(obj) {
  let objCopy = {};
  for (i in obj) {
    objCopy[i] = Array.from(new Set(obj[i])); // make each array contain unique elements
  }

  let objKeys = Object.keys(objCopy);
  let sortedObjKeys = objKeys.sort((a, b) => a - b).reverse();
  let controlArray = [];
  const outputObj = {};

  sortedObjKeys.forEach((key) => {
    let array = [];
    objCopy[key].forEach((value) => {
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
