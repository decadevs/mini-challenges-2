function isolateDuplicates(text) {
  if (typeof text !== "string") {
    throw new Error("Please enter a valid string");
  }

  let textLength = text.length;
  let reOccurArray = [];
  let indexCheck = -1;
  let initializeMinusOne = -1;
  let count = 0;
  let finalString = "";

  for (let i = 0; i < textLength; i++) {
    let textIndex = text[i];

    if (
      indexCheck == textIndex ||
      indexCheck == textIndex.toLowerCase() ||
      indexCheck == textIndex.toUpperCase()
    ) {
      reOccurArray[initializeMinusOne] += textIndex;
    } else {
      reOccurArray[++initializeMinusOne] = textIndex;
    }

    indexCheck = textIndex;
  }

  let reOccurArrayLength = reOccurArray.length;

  for (let m = 0; m < reOccurArrayLength; m++) {
    if (reOccurArray[m].length > 2) {
      count++;

      let initialTwoLetters = reOccurArray[m].substring(0, 2);

      let remainingLetters = reOccurArray[m].substring(2);

      finalString += `${initialTwoLetters}[${remainingLetters}]`;
    } else {
      finalString += reOccurArray[m];
    }
  }

  return [finalString, count];
}
module.exports = isolateDuplicates;
