function isolateDuplicates(text) {
  if (typeof text === "string") {
    let strToArr = Array.from(text);
    let strUpperCase = Array.from(text.toUpperCase());
    let output = [];
    let duplicates = 0;
    let finalOutput = [];

    for (let i = 0; i < text.length; i++) {
      if (
        strUpperCase[i] !== strUpperCase[i - 1] ||
        strUpperCase[i] !== strUpperCase[i - 2]
      ) {
        output.push(strToArr[i]);
        if (
          strUpperCase[i] === strUpperCase[i - 1] &&
          strUpperCase[i] === strUpperCase[i + 1]
        ) {
          output.push("[");
          duplicates++;
        }
      } else {
        output.push(strToArr[i]);
        if (strUpperCase[i + 1] !== strUpperCase[i]) {
          output.push("]");
        }
      }
    }
    finalOutput.push(output.join(""), duplicates);

    return finalOutput;
  }
  if (typeof text === "object") {
    return "Please enter a valid string";
  } else {
    return null;
  }
}

console.log(isolateDuplicates());

//   HelllllooooooDeeeecadevvsss")to give  "Hell[lll]oo[oooo]Dee[ee]cadevvss[s]" 4
// iiijjjjooooppppp to Give "ii[i]jj[jj]oo[oo]pp[ppp]",4
// helloookat to give "helloo[o]kat", 1
