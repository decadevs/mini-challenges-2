function removeDuplicates(obj) {
  let strings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let keys = Object.keys(obj);

  for (let i = 0; i < strings.length; i++) {
    let count = 0;
    for (let j = keys.length - 1; j >= 0; j--) {
      let k = 0;
      while ( k < obj[keys[j]].length) {
        if (obj[keys[j]][k] === strings[i] && count === 0) {
          count++;
        } else if (obj[keys[j]][k] === strings[i] && count > 0) {
          obj[keys[j]].splice(k, 1);
          k--;
        }
        k++;
      }
    }
  }
  return obj;
}

module.exports = removeDuplicates;
