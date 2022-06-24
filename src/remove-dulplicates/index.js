function removeDuplicates(obj) {
  const unique = [];
  const allSeen = [];
  const output = {};

  const keys = Object.keys(obj)
    .map(Number)
    .sort((a, b) => b - a);

  while (unique.length < keys.length) {
    unique.push([]);
  }

  let latter = 0;
  for (let arr of keys) {
    const array = obj[arr];

    array.forEach((e) => {
      if (!allSeen.includes(e)) {
        unique[latter].push(e);
        allSeen.push(e);
      }
    });

    latter += 1;
  }

  for (let i = 0; i < keys.length; i++) {
    output[keys[i]] = unique[i];
  }
  return output;
}
module.exports = removeDuplicates;
