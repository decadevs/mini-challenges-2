function removeDuplicates(obj) {
  let objKeys = Object.keys(obj);
  objKeys.sort(function (a, b) { return a - b });
  let outputObject = {};
  for (key in obj) {
    let keyValue = obj[key].slice(0);
    var unique = [...new Set(obj[key])];
    obj[key] = unique;
  }
  let objValues = Object.values(obj).reverse();
  let objValuesCopy = objValues.slice(0);
  let collector = [];

  for (let i = 0; i < objValuesCopy.length; i++) {
    for (let j = 0; j < objValuesCopy[i].length; j++) {
      if (!(collector.includes(objValues[i][j]))) {
        collector.push(objValues[i][j]);
      } else {
        objValues[i][j] = "";
      }
    }
  }
  objValues.reverse();
  for (let i = 0; i < objKeys.length; i++) {
    objValues[i] = objValues[i].filter(function (str) {
      return /\S/.test(str)
    });
    outputObject[objKeys[i]] = objValues[i];
  }

  return outputObject;
}

module.exports = removeDuplicates;
