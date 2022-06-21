function removeDuplicates(obj) {
  const sortedItems = Object.keys(obj);
  const keys = sortedItems.reverse();

  const duplicateKeys = [];
  const noDuplicateKeys = {};

  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < obj[keys[i]].length; j++) {
      if (!duplicateKeys.includes(obj[keys[i]][j])) {
        if (noDuplicateKeys[keys[i]] === undefined) {
          noDuplicateKeys[keys[i]] = [];
        }
        noDuplicateKeys[keys[i]][j] = obj[keys[i]][j];
        duplicateKeys.push(obj[keys[i]][j]);
      }
    }

    if (noDuplicateKeys[keys[i]] === undefined) {
    } else {
      noDuplicateKeys[keys[i]] = noDuplicateKeys[keys[i]].filter(
        (el) => el !== undefined
      );
    }
  }

  return noDuplicateKeys;
}

module.exports = removeDuplicates;
