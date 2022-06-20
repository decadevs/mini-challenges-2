function removeDuplicates(obj) {
  //Convert the object to array
  const arr = Object.entries(obj);
  const len = arr.length;
  //Use variables to initialize arrays
  const result = [];
  const usedStrings = [];
  //Loop through
  for (let i = len - 1; i >= 0; i--) {
    const current = arr[i];
    const key = current[0];
    const vals = current[1];

    const sortedVals = [];
  //Loop again
  for (let j = 0; j < vals.length; j++) {
      const str = vals[j];

      if (!sortedVals.includes(str) && !usedStrings.includes(str)) {
      sortedVals.push(str);
      usedStrings.push(str);
      }
  }

  const newCurrent = [key, sortedVals];
  result.push(newCurrent);
  }

  const removed = Object.fromEntries(result);
  return removed;
}

module.exports = removeDuplicates;
