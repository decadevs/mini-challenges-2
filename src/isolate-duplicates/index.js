function isolateDuplicates(text) {
  let textCopy = text;
  let textCopySplit = textCopy.split("");

  if (typeof text != "string") {
    throw new Error("Please enter a valid string");
  }
  let obj = {};
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }
  let b = "";
  for (let key in obj) {
    if (obj[key] > 2) {
      b += key;
      let pos1 = textCopySplit.indexOf(key) + 2;
      let pos2 = textCopySplit.indexOf(key) + obj[key] + 1;
      textCopySplit.splice(pos1, 0, "[");
      textCopySplit.splice(pos2, 0, "]");
    }
  }
  return [textCopySplit.join(""), b.length];
}

module.exports = isolateDuplicates;
