const isolateDuplicates = (text) => {
  if (typeof text !== 'string') {
    throw new Error("Please enter a valid string");
  }
  let count = 0;
  let arr = [];
  let arr2 = [];
  let iText = text.toUpperCase();
  for (let i = 0; i < iText.length; i++) {
    if (iText[i] === iText[i + 1]) {
      count++;
      if (!arr[arr.length - 1].includes(text[i])) {
        arr.push(text[i] + "[");
      }
      for (let j = i + 1; j < iText.length; j++) {
        if (iText[j] !== iText[i]) {
          i = j - 1;
          arr.push("]");
          break;
        }
        count++;
      }
    } else {
      arr.push(text[i]);
    }
  }
  arr2.push(arr.join(""), count);
  return arr2;
};

module.exports = isolateDuplicates;




//console.log(isolateDuplicates("aaaabbcccadehhh"))

module.exports = isolateDuplicates;



