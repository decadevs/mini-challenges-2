function removeDuplicates(obj) {
  let reversedArrayOfKeys = Object.keys(obj).reverse();

  let arrayOfUniqueStrings = [];

  let freshObject = {};

  for (let i = 0; i < reversedArrayOfKeys.length; i++) {
    let newArray = [];

    for (let j = 0; j < obj[reversedArrayOfKeys[i]].length; j++) {
      if (arrayOfUniqueStrings.indexOf(obj[reversedArrayOfKeys[i]][j]) === -1) {
        newArray.push(obj[reversedArrayOfKeys[i]][j]);
      }

      arrayOfUniqueStrings.push(obj[reversedArrayOfKeys[i]][j]);
    }

    freshObject[reversedArrayOfKeys[i]] = newArray;
  }

  return freshObject;
}

module.exports = removeDuplicates;
