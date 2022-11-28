function isolateDuplicates(text) {
  const num = String(text).split("");
  let input = text;
  let str = "";

  if (typeof text != "string") throw "Please enter a valid string";

  for (let i = 0; i < input.length; i++) {
    if (typeof num[i] == "string") {
      let current = String(input).charAt(i).toLowerCase();
      let next = String(input)
        .charAt(i + 1)
        .toLowerCase();
      if (current != next) {
        str += num[i] + "<";
      } else {
        str += num[i];
      }
    } else {
      throw "Please enter a valid string";
    }
  }

  let arrOfChar = str.split("<");
  let splitLength = 0;
  let formatStr = "";

  arrOfChar.forEach((ar) => {
    if (ar.length > 2) {
      splitLength += 1;
    }
    let excess = ar.slice(2, ar.length);
    if (excess.length > 0) {
      let first = ar.slice(o, 2);
      return (formatStr += `${first}[${excess}]`);
    } else {
      return (formatStr += ar);
    }
  });
  return [formatStr, splitLength];
}

module.exports = isolateDuplicates;
