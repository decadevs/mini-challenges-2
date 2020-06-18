function removeDuplicates(obj) {
  let key = Object.keys(obj);
  sortKey = key.sort((a, b) => parseInt(a) - parseInt(b)); //Sort the keys
  let value = [];
  for (let i = sortKey.length - 1; i >= 0; i--) { //To obtain all the elements in the object
    value.push(...obj[sortKey[i]]);
  }
  let uniqueValue = [... new Set(value)];  //Get unique element
  let noOfArray = key.length;
  //Create empty array of the same size as the key
  let emptyArray = [];
  while (noOfArray > 0) {
    emptyArray.push([]);
    noOfArray--;
  }
  //Add each unique element to the empty array from the higher key to the lower one
  for (let i = 0; i < uniqueValue.length; i++) {
    for (let j = sortKey.length - 1; j >= 0; j--) {
      let char = uniqueValue[i]
      let sample = [].concat(...emptyArray);
      if (sample.indexOf(char) === -1) {
        let presentArray = obj[sortKey[j]]; //Current array and check if the element is present in the obj
        if (presentArray.indexOf(char) !== -1) {
          emptyArray[j].push(char);
        }
      }
    }
  }
  let duplicate = {};
  sortKey.forEach((key, i) => duplicate[key] = emptyArray[i]);
  return duplicate;
}

module.exports = removeDuplicates;
