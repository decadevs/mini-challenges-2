const removeDuplicates = (obj) => {
  const arrayOfObj = Object.entries(obj);
  for (let i = arrayOfObj.length - 1; i >= 0; --i) {
    arrayOfObj[i][1] = [...new Set(arrayOfObj[i][1])];
  }
  for (let i = 0; i < arrayOfObj.length - 1; ++i) {
    for (let j = i; j < arrayOfObj.length - 1; ++j) {
      for (let val of arrayOfObj[j + 1][1]) {
        if (arrayOfObj[i][1].includes(val)) {
          arrayOfObj[i][1].splice(arrayOfObj[i][1].indexOf(val), 1);
        }
      }
    }
  }
  const newObject = {};
  for (let [key, value] of arrayOfObj) {
    newObject[key] = value;
  }
  return newObject;
};

module.exports = removeDuplicates;
