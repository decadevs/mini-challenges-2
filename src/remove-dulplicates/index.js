function removeDuplicates(obj) {
  const arrayOfKeys = Object.keys(obj)
    .map((each) => parseInt(each, 10))
    .sort((a, b) => a - b)
    .map((each) => each.toString());

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
    let filteredValues = objValues.filter(function (value) {
      return resultValues.indexOf(value) >= 0;
    });

    result[key] = Array.from(new Set(filteredValues));
  }

  return result;
}

module.exports = removeDuplicates;
