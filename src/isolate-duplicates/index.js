function isolateDuplicates(dup) {
  if (dup === undefined) {
    throw Error();
  }
  if (dup.length === 0) {
    throw Error("Please enter a valid string");
  }
  let newArr = [];
  let dupArr = [];
  let count = 0;
  let lower = dup.toLowerCase();
  for (let i = 0; i < lower.length + 1; i++) {
    if (lower[i - 1] === lower[i] && lower[i - 2] === lower[i]) {
      dupArr.push(dup[i]);
    } else {
      if (dupArr.length !== 0) {
        count += 1;
        dupArr = dupArr.join("");
        dupArr = `[${dupArr}]`;

        newArr.push(dupArr);
      }
      newArr.push(dup[i]);
      dupArr = [];
    }
  }
  if (newArr[newArr.length - 1] === undefined) {
    newArr.splice(newArr.length - 1, 1);
  }

  return [newArr.join("").toString(), count];
}

module.exports = isolateDuplicates;
