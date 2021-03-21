function removeDuplicates(obj) {
  let uniqueArray = [];

  let objKeys = Object.keys(obj);

  let sortedKeys = objKeys.map((item) => Number(item)).sort((a, b) => b - a);

  for (const key of sortedKeys) {

    let uniqueValues = obj[key].filter((item, index, arr) => arr.indexOf(item) === index && uniqueArray.indexOf(item) === -1
    );

    uniqueArray = uniqueArray.concat(uniqueValues);
    
    obj[key] = uniqueValues;
  }

  return obj;
}

module.exports = removeDuplicates;
