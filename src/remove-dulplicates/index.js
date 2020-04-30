function removeDuplicates(obj) {
  // Create an array from the object values and create a copy also.
  let arrFromObj = Object.values(obj);
  let arrFromObjCopy = arrFromObj.map((x) => x);
  //   Create a new array with the sub arrays equal to the object value sub arrays
  let newArr = new Array(arrFromObj.length);
  let flattenedArr;
  let outputObject = {};

  for (let i = 0; i < arrFromObj.length; i++) {
    //   Insert empty strings equal to the number of strings in object value array strings
    newArr[i] = new Array(arrFromObj[i].length);
    arrFromObjCopy.shift();
    flattenedArr = arrFromObjCopy.flat();
    for (let j = 0; j < arrFromObj[i].length; j++) {
      // Check of current item is not in other arrays.
      if (!flattenedArr.includes(arrFromObj[i][j])) {
        //   Replace empty strings with current strings
        newArr[i][j] = arrFromObj[i][j];
      }
    }
    // filter empty strings away
    let removeEmptyString = newArr[i].filter((el) => el != "");
    // Remove duplicates
    let duplicateRemoved = Array.from(new Set(removeEmptyString));
    newArr[i] = Array.from(new Set(duplicateRemoved));

    // Push object keys and corresponding value in a new object.
    outputObject[Object.keys(obj)[i]] = newArr[i];
  }
  return outputObject;
}

module.exports = removeDuplicates;
