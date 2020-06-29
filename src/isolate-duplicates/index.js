function isolateDuplicates(text) {
  if (typeof text !== "string") {
    throw "Please enter a valid string";
  }

  let duplicates = text.match(/(.)\1{0,}/gi);
  let res = "";
  let count = 0;
  for (let i = 0; i < duplicates.length; i++) {
    let text = duplicates[i];
    if (text.length > 2) {
      count++;
      res += `${text.slice(0, 2)}[${text.slice(2)}]`;
    } else {
      res += text;
    }
  }

  return [res, count];
}

module.exports = isolateDuplicates;
