function isolateDuplicates(text) {
  if (!text || text.length === 0) {
    throw Error("Please enter a valid string");
  }
  let str = "";
  const splitText = text.toLowerCase().split("");

  var count = 0;
  var next = 1;
  var prev = 0;
  var position = 0;
  for (let i = 0; i < splitText.length; i++) {
    if (splitText[prev] !== splitText[next]) {
      const index = text.toLowerCase().indexOf(splitText[prev], position);
      const lastIndex = text.toLowerCase().lastIndexOf(splitText[prev], next);

      const data = text.slice(index, lastIndex + 1);

      position += data.length;
      if (data.length > 2) {
        const firstTwo = data.split("").splice(0, 2).join("");
        const remainingSTR = data.split("").splice(2).join("");
        str += firstTwo + `[${remainingSTR}]`;
        count++;
      } else {
        str += data;
      }
    }
    next++;
    prev++;
  }
  return [str, count];
}

module.exports = isolateDuplicates;
