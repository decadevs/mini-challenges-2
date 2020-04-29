function isolateDuplicates(text) {
  if (typeof text === "string") {
    // Finding repeated character sequences and inputing [] after the second index
    let newText = text.replace(/(\S)(\1{2,})/gi, function (letters) {
      return [letters.slice(0, 2), "[", letters.slice(2), "]"].join("");
    });

    // Counting the number of duplicates
    const numberOfDuplicates = (newText.match(/\[/g) || []).length;

    return [newText, numberOfDuplicates];
  } else {
    throw "Please enter a valid string";
  }
}

module.exports = isolateDuplicates;
