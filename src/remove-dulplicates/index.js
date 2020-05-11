function removeDuplicates(obj) {
  const collection = [];
  const keys = Object.keys(obj).reverse();
  const result = {};
  for (const [, value] of Object.entries(obj)) {
    collection.push([...new Set([...value])]);
  }
  collection.reverse();

  let prev = 0;
  let next = 1;
  let count = 0;
  let index = 0;

  while (prev < collection.length - 1) {
    const arr = collection[prev];
    const nextArr = collection[next];

    if (arr.includes(nextArr[index])) {
      count--;
      nextArr.splice(index, 1);
    }
    if (!arr.includes(nextArr[index])) {
      index++;
      count++;
    }

    if (count === nextArr.length) {
      index = 0;
      count = 0;
      next++;
    }
    if (next === collection.length) {
      if (nextArr.length === 0) {
        break;
      }
      index = 0;
      count = 0;
      prev++;
      next = prev + 1;
    }
  }
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = collection[i];
  }
  return result;
}

module.exports = removeDuplicates;
