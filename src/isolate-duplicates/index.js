function isolateDuplicates(text) {
  if (typeof text !== "string") {
    return "Please enter a valid string";
  }
  let identical = "";
  let countIdentical = 0;
  for (let i = 0; i < text.length; i++) {
    let j = i + 1;
    let count = 0;
    while (j < text.length && text[i] === text[j]) {
      j++;
      count++;
    }
    if (count > 2) {
      identical += text[i] + "[" + text.slice(i + 1, j) + "]";
      countIdentical++;
      i = j - 1;
    } else {
      identical += text.slice(i, j);
    }
  }
  return [identical, countIdentical];
}

module.exports = isolateDuplicates;
