function removeDuplicates(obj) {

  const mainKey = Object.keys(obj);
  mainKey.sort((a, b) => a - b);
  const objContainer = {};

  for (let i = mainKey.length - 1; i >= 0; i--) {
    let arr = [];

    for (let j = 0; j < obj[mainKey[i]].length; j++) {

      if (objContainer.hasOwnProperty(obj[mainKey[i]][j])) {
        continue;
      }
      arr.push(obj[mainKey[i]][j]);
      objContainer[obj[mainKey[i]][j]] = 0;
    }
    obj[mainKey[i]] = arr;
  }
  return obj;

}
module.exports = removeDuplicates;
