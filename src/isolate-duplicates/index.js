function isolateDuplicates(text) {
  if (typeof text !== "string") {
    throw  Error("please enter a valid string");
  }

  let itext = text.toLowerCase;

  let index1 = "";
  let index2 = 0;

  for(let i = 0; i < itext.length; i++) {
    index1 += itext[i];
    if(itext[i] === itext[i - 1] && itext[i] === itext[i + 1] && itext[i] !== itext[i - 2]) {
index1 += '['
index2++;
    }

    }
    if(itext[i] === itext[i - 1] && itext[i] !== itext[i + 1] && itext[i] === itext[i -2]) {
index1 += '];'
    }

  
  return [index1, index2];
}

module.exports = isolateDuplicates;
