function isolateDuplicates(text) {
  let strToArr = Array.from(text);
  let output = [];
  let bracketCheck = [];
  let duplicates = 0;
  let finalOutput = [];
  const bracketIsopen = (bracketCheck) => {
    if (bracketCheck.length > 0) {
      return true;
    }

    return false;
  };

  for (let i = 0; i < text.length; i++) {
    if (strToArr[i] !== strToArr[i - 1] || strToArr[i] !== strToArr[i - 2]) {
      output.push(strToArr[i]);
    } else {
      if (!bracketIsopen(bracketCheck)) {
        bracketCheck.push("[");
        output.push("[");
        output.push(strToArr[i]);
      } else {
        output.push(strToArr[i]);
        if (strToArr[i] !== strToArr[i + 1]) {
          duplicates = duplicates + 1;
          output.push("]");
          bracketCheck.pop();
        }
      }
    }
  }

  finalOutput.push(output.join(""), duplicates);

  return finalOutput;
}

module.exports = isolateDuplicates;
