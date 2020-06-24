function isolateDuplicates(text) {
  if (typeof text !== "string") {
    return "Please enter a valid string";
  }
  // let text = text.split("");
  let letters = [];
  let count = 1;
  let freq = [];
  let res = "";

  for (let i = 0; i <= text.length; i++) {
    if (text[i] === text[i + 1]) {
      count++;
    } else {
      let value = `${text[i]}`;
      letters = [...letters, value];
      freq.push(count);
      count = 1;
    }
  }
  for (let i = 0; i < freq.length; i++) {
    let text = "";
    for (let j = 0; j < freq[i]; j++) {
      text += letters[i];
    }
    if (text.length > 2) {
      res += `${text.slice(0, 2)}[${text.slice(2)}]`;
    } else {
      res += text;
    }
  }
  return new Array(res, freq.filter((num) => num > 2).length);
}

module.exports = isolateDuplicates;
