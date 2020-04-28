function removeDuplicates(obj) {
  let strings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let keys = Object.keys(obj);
  
  let sortedObj = {};
  keys.forEach(key => sortedObj[key] = obj[key])

  for (let i = 0; i < strings.length; i++) {
    let count = 0;
    for (let j = keys.length - 1; j >= 0; j--) {
      let k = 0;
      while ( k < sortedObj[keys[j]].length) {
        if (sortedObj[keys[j]][k] === strings[i] && count === 0) {
          count++;
        } else if (sortedObj[keys[j]][k] === strings[i] && count > 0) {
          sortedObj[keys[j]].splice(k, 1);
          k--;
        }
        k++;
      }
    }
  }
  return sortedObj;
}

module.exports = removeDuplicates;
