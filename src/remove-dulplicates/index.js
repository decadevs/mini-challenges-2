function removeDuplicates(obj) {
    const result = {};
  const seen = new Set();

  Object.keys(obj)
    .sort((a, b) => a - b)
    .forEach((key) => {
      result[key] = obj[key].filter((str) => {
        if (seen.has(str)) return false;
        seen.add(str);
        return true;
      });
    });

  return result;
}

module.exports = removeDuplicates;
