function isolateDuplicates(text) {
  if (typeof text !== 'string') throw "Please enter a valid string";

  let convertedText = text.toLowerCase() // convert string into lowercase
  let newText = ""; // initialize an empty string to append results to
  let duplicateCount = 0; // to lookout for number of duplicates
  let bracketStack = 0 // to monitor open brackets and prevent another bracket while one is still open

  for (let i = 0; i < text.length; i++) {
    let nextText = "";

    if (
      bracketStack === 0 && convertedText[i - 2] === convertedText[i]
      && convertedText[i - 1] === convertedText[i]
      && i !== text.length - 1
      && convertedText[i + 1] === convertedText[i]
    ) {
      nextText = `[${text[i]}`;
      newText += nextText;
      bracketStack++;
      duplicateCount++
    }
    else if (
      (
        bracketStack === 0
        && convertedText[i - 2] === convertedText[i]
        && convertedText[i - 1] === convertedText[i]
        && i === text.length - 1
      )
      || (
        bracketStack === 0
        && convertedText[i - 2] === convertedText[i]
        && convertedText[i - 1] === convertedText[i]
        && convertedText[i + 1] !== convertedText[i]
      )
    ) {
      nextText = `[${text[i]}]`;
      newText += nextText;
      duplicateCount++
    }

    else if (
      bracketStack !== 0
      && convertedText[i + 1] !== convertedText[i]
    ) {
      nextText = `${text[i]}]`;
      newText += nextText;
      bracketStack--
    }

    else {
      nextText = text[i];
      newText += nextText
    }
  }

  return [newText, duplicateCount];
}

module.exports = isolateDuplicates;
