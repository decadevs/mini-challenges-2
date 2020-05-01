function removeDuplicates(obj) {
  // collecting keys together in an array
  let keyArr = [];
  for (let keys in obj) {
    keyArr.push(keys);
  }

  // sort the array in reverse order, Higher first
  let sortedArr = keyArr.reverse();

  // initializing helper variables
  let checker = [];
  let newObj = {};
  let objArr = [];

  // nested for loop for sorting object values against checker
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < obj[sortedArr[i]].length; j++) {
      if (!checker.includes(obj[sortedArr[i]][j])) {
        checker.push(obj[sortedArr[i]][j]);
        objArr.push(obj[sortedArr[i]][j]);
      }
    }
    newObj[sortedArr[i]] = objArr;
    objArr = [];
  }

  return newObj;
}

module.exports = removeDuplicates;
