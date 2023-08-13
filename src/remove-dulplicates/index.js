function removeDuplicates(obj) {
  let compare = [],
    newObject = {},
    k = Object.keys(obj);

  for (let i = k.length - 1; i >= 0; i--) {
    let val = obj[k[i]],
      newVal = [];

    for (let j = 0; j < val.length; j++) {
      if (!compare.includes(val[j])) {
        compare.push(val[j]);
        newVal.push(val[j]);
      }
    }

    newObject[k[i]] = newVal;
  }
  return newObject;
}

module.exports = removeDuplicates;
