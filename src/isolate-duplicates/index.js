function isolateDuplicates(text) {
  if (typeof text === "string") {
    let strToArr = Array.from(text);
    // Convert to upper string for case coersion
    let strUpperCase = Array.from(text.toUpperCase());
    let output = [];
    // Number of Duplicates
    let duplicates = 0;
    let finalOutput = [];

    for (let i = 0; i < text.length; i++) {
      // Check if current element and the next two elements are the same
      if (
        strUpperCase[i] !== strUpperCase[i - 1] ||
        strUpperCase[i] !== strUpperCase[i - 2]
      ) {
        output.push(strToArr[i]);
        // If the next two elements are the same push an open bracket
        if (
          strUpperCase[i] === strUpperCase[i - 1] &&
          strUpperCase[i] === strUpperCase[i + 1]
        ) {
          output.push("[");
          duplicates++;
        }
      } else {
        output.push(strToArr[i]);
        // If the next element is different from the previous element, then push a closing bracket
        if (strUpperCase[i + 1] !== strUpperCase[i]) {
          output.push("]");
        }
      }
    }

    // Join the array into a string and push it together with the number of duplicates into the final output array
    finalOutput.push(output.join(""), duplicates);

    return finalOutput;
  } else {
    throw "Please enter a valid string";
  }
}

module.exports = isolateDuplicates;
