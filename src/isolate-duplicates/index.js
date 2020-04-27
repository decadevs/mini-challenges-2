function isolateDuplicates(str) {
  let tempArr = str.split("");
  let letters = [];
  let count = 1;
  let freq = [];
  let text = "";
  for (let i = 0; i <= tempArr.length; i++) {
    if (tempArr[i] === tempArr[i + 1]) {
      count++;
    } else {
      let value = `${tempArr[i]}`;
      letters = [...letters, value];
      freq.push(count);
      count = 1;
    }
  }
  for (let i = 0; i < freq.length; i++) {
    let str = "";
    for (let j = 0; j < freq[i]; j++) {
      str += letters[i];
    }
    if (str.length > 2) {
      text += `${str.slice(0, 2)}[${str.slice(2)}]`;
    } else {
      text += str;
    }
  }
  return new Array(text, freq.filter((num) => num > 2).length);
}
module.exports = isolateDuplicates;
