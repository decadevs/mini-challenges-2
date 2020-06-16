function removeDuplicates(obj) {
  const collection = [];

  const keys = Object.keys(obj).reverse();
  const result = {};

  for (const [, value] of Object.entries(obj)) {
    collection.push([...new Set([...value])]);
  }
  collection.reverse();
  const differenceSet = new Set();
  let unionSet = [];
  let i = 0;
  let next = 1;
  let count = 0;
  while (i < collection.length - 1) {
    const setA = new Set(collection[i]);
    for (const elem of collection[next]) {
      if (!setA.has(elem) && !unionSet.includes(elem)) {
        differenceSet.add(elem);
        count++;
      } else {
        count++;
        unionSet.push(elem);
      }
    }
    if (count === collection[next].length) {
      const uniqueSet = [...new Set([...collection[i], ...collection[next]])];

      unionSet = [...new Set([...unionSet, ...uniqueSet])];

      const convertSetToArr = [...differenceSet];
      collection.splice(next, 1, convertSetToArr);
      count = 0;
      differenceSet.clear();
      i++;
      next++;
    }
  }

  collection.forEach((arr, index) => {
    result[keys[index]] = arr;
  });

  return result;
}

module.exports = removeDuplicates;
