function removeDuplicates(obj) {
  let arrFromObj = Object.values(obj);
  let arrFromObj2 = arrFromObj.map((x) => x);
  let newArr = new Array(arrFromObj.length);
  let flattenedArr;
  let outputObject = {};

  for (let i = 0; i < arrFromObj.length; i++) {
    newArr[i] = new Array(arrFromObj[i].length);
    arrFromObj2.shift();
    flattenedArr = arrFromObj2.flat();
    for (let j = 0; j < arrFromObj[i].length; j++) {
      if (!flattenedArr.includes(arrFromObj[i][j])) {
        newArr[i][j] = arrFromObj[i][j];
      }
    }
    let removeEmptyString = newArr[i].filter((el) => el != "");
    let duplicateRemoved = Array.from(new Set(removeEmptyString));
    newArr[i] = Array.from(new Set(duplicateRemoved));

    outputObject[Object.keys(obj)[i]] = newArr[i];
  }
  return outputObject;
}

module.exports = removeDuplicates;
