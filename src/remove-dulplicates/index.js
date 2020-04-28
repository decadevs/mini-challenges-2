function removeDuplicates(obj) {
  let arrayOfKeys = Object.keys(obj);
  arrayOfKeys = arrayOfKeys.map((each) => parseInt(each, 10));
  arrayOfKeys = arrayOfKeys.sort((a, b) => a - b);
  arrayOfKeys = arrayOfKeys.map((each) => each.toString());

  const reverseArrayOfKeys = arrayOfKeys.reverse();

  let result = {};

  // Pushing a Key:[] array to results
  for (let each of arrayOfKeys) {
    result[each] = [];
  }

  const arrayOfValues = [];

  for (let key in obj) {
    let values = obj[key];
    for (let value of values) {
      if (arrayOfValues.indexOf(value) < 0) {
        arrayOfValues.push(value);
      }
    }
  }

  // Pushing each value from the array into the larger key in which it was previously present
  for (let value of arrayOfValues) {
    for (let key of reverseArrayOfKeys) {
      let values = obj[key];
      if (values.indexOf(value) >= 0) {
        result[key].push(value);
        break;
      }
    }
  }

  // Rearranging values to fit
  for (let key in result) {
    let objValues = obj[key];
    let resultValues = result[key];
    for (let index in objValues) {
      if (resultValues.indexOf(objValues[index]) < 0) {
        objValues.splice(index, 1);
      }
    }
    result[key] = objValues;
  }

  return result;
}

module.exports = removeDuplicates;
