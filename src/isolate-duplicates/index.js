function isolateDuplicates(str) {
  if (typeof str !== "string") {
    throw new Error("Please enter a valid string");
  }
  let text = str;
  let obj = {};
  let newArr = [];
  let count = 0;

  for (let i of text) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }
  for (let i in obj) {
    if (obj[i] >= 2) {
      count++;

      newArr.push(i);
    } else if (obj[i] > 2) {
      count++;
    }
  }
  return [str, count];
}

module.exports = isolateDuplicates;
console.log(isolateDuplicates("aabbccddeeeefffggg"));
