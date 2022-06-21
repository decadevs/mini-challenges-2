function removeDuplicates(obj) {
  const newArray = Object.keys(obj);
  newArray.sort((a, b) => a - b);
  const newObject = {};

  for (let i = newArray.length - 1; i >= 0; i--) {
    let result = [];

    for (let j = 0; j < obj[newArray[i]].length; j++) {
      if (newObject.hasOwnProperty(obj[newArray[i]][j])) {
        continue;
      }
      result.push(obj[newArray[i]][j]);
      newObject[obj[newArray[i]][j]] = 0;
    }
    obj[newArray[i]] = result;
  }
  return obj;
}
module.exports = removeDuplicates;
