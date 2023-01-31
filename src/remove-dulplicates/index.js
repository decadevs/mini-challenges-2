function removeDuplicates(obj) {
  let n = [];
  let sub = (a, b) => [...new Set([...a].filter((y) => !b.includes(y)))];
  return Object.entries(obj)
    .reverse()
    .map((entry) => {
      const subCollector = n;
      n = [...new Set([...n, ...entry[1]])];
      return [entry[0], [...new Set(sub(entry[1], subCollector))]];
    })
    .reduce((arrays, array) => ((arrays[array[0]] = array[1]), arrays), {});
}

module.exports = removeDuplicates;
