function removeDuplicates(obj) {
    let x = [];
  let diff = (a, b) => [...new Set([...a].filter((x) => !b.includes(x)))];
  return Object.entries(obj)
    .reverse()
    .map((entry) => {
      const subCollector = x;
      x = [...new Set([...x, ...entry[1]])];
      return [entry[0], [...new Set(diff(entry[1], subCollector))]];
    })
    .reduce((arrays, array) => ((arrays[array[0]] = array[1]), arrays), {});

}

module.exports = removeDuplicates;
