function removeDuplicates(obj) {
  let keys = (Object.keys(obj));

  let keysNumeric = [];
  for (let i = 0; i < keys.length; i++) {
    keysNumeric.push(parseInt(keys[i]));
  }

  let values = Object.values(obj);

  let invertValues = [];
  for (let q = values.length - 1; q >= 0; q--) {
    invertValues.push(values[q]);
  }

  let spreadValues = [].concat(...invertValues);

  let uniqueValues = [... new Set(spreadValues)];
  let valuesLength = [];
  let emptyValue = [];
  for (let j = 0; j < invertValues.length; j++) {
    valuesLength.push(invertValues[j].length)
    emptyValue.push([]);
  }

  let cumValuesLength = [];
  valuesLength.reduce(function(a,b,i) {return cumValuesLength[i] = a+b; }, 0)

  for (let k = 0; k < uniqueValues.length; k++) {
    let valueFirstIndex = spreadValues.indexOf(uniqueValues[k]);
    let allIndex = [];
    for (let m = 0; m < cumValuesLength.length; m++) {

      if (valueFirstIndex < cumValuesLength[m]) {
        allIndex.push(m);
      }
    }
    let myIndex = allIndex.shift();
    emptyValue[myIndex].push(uniqueValues[k]);
  }

  let finalValue = [];
  for (let n = values.length - 1; n >= 0; n--) {
    finalValue.push(emptyValue[n]);
  }

  let removeDuplicate = {};
  keys.forEach((key, i) => removeDuplicate[key] = finalValue[i]);

  return removeDuplicate;
}

module.exports = removeDuplicates;
