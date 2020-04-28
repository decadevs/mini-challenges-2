function isolateDuplicates(text) {
  let strToArr = Array.from(text);
  let output = [];
  let duplicates = 0;
  let finalOutput = [];

  for (let i = 0; i < text.length; i++) {
    if (strToArr[i] !== strToArr[i - 1] || strToArr[i] !== strToArr[i - 2]) {
      output.push(strToArr[i]);
      if (strToArr[i] === strToArr[i - 1] && strToArr[i] === strToArr[i + 1]) {
        output.push("[");
        duplicates++;
      }
    } else {
      output.push(strToArr[i]);
      if (strToArr[i + 1] !== strToArr[i]) {
        output.push("]");
      }
    }
  }

  finalOutput.push(output.join(""), duplicates);

  if (typeof text !== "string") {
    return "Please enter a valid string";
  }
  return finalOutput;
}

console.log(isolateDuplicates([]));

//   HelllllooooooDeeeecadevvsss")to give  "Hell[lll]oo[oooo]Dee[ee]cadevvss[s]" 4
// iiijjjjooooppppp to Give "ii[i]jj[jj]oo[oo]pp[ppp]",4
// helloookat to give "helloo[o]kat", 1
