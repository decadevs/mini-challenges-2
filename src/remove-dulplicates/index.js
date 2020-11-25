function removeDuplicates(obj) {
  var keys = Object.keys(obj);

  keys.forEach(key => {
    obj[key] = [...new Set(obj[key])];
  });

  for (var i = 0; i < keys.length; i++) {
    for (var j = 1 + i; j < keys.length; j++) {
      obj[keys[i]] = obj[keys[i]]
        .filter(el => !(obj[keys[j]].includes(el)));
    }
  }
  return obj;
}

module.exports = removeDuplicates;
