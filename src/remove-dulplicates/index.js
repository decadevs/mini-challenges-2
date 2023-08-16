function removeDuplicates(obj) {
  let contrast = [],
    newObject = {},
    k = Object.keys(obj);

  for (let i = k.length - 1; i >= 0; i--) {
    let val = obj[k[i]],
      newVal = [];

    for (let j = 0; j < val.length; j++) {
      if (!contrast.includes(val[j])) {
        contrast.push(val[j]);
        newVal.push(val[j]);
      }
    }

    newObject[k[i]] = newVal;
  }
  return newObject;
}

module.exports = removeDuplicates;

module.exports = removeDuplicates;
