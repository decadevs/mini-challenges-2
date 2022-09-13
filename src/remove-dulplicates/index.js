function removeDuplicates(obj) {
  let sortedObjKeys = Object.keys(obj).sort((a, b) => b - a);
  let indexOfSortedKeys = 0;
  // console.log(sortedObjKeys);

  let checkedChar = {};
  let returnedObj = {};

  for (let key in obj) {
    let keyArr = [];
    for (let i = 0; i < obj[sortedObjKeys[indexOfSortedKeys]].length; i++) {
      if (!checkedChar[obj[sortedObjKeys[indexOfSortedKeys]][i]]) {
        checkedChar[obj[sortedObjKeys[indexOfSortedKeys]][i]] = true;
        keyArr.push(obj[sortedObjKeys[indexOfSortedKeys]][i]);
      }
    }
    returnedObj[sortedObjKeys[indexOfSortedKeys]] = keyArr;
    indexOfSortedKeys++;
  }

  return returnedObj;
}

module.exports = removeDuplicates;
