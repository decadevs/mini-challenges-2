function isolateDuplicates(text) {
  /*
    Checks if `text` is a string by using the typeof operator,

    else, match the text to a regex to check for repeating characters which will generate an array,

    get the number of repeating characters greater than two and assign it to `count`,

    loop through the repeating characters array and any of them greater than two ...

    ... isolate the first two identical letters from the rest.
    */
  if (typeof text !== "string") {
    return "Please enter a valid string";
  } else {
    let re = /([a-z])\1{0,}/gi;
    let duplicateChars = text.match(re);

    let count = duplicateChars.filter((word) => word.length > 2).length;

    let resultStr = duplicateChars.reduce((outputStr, word) => {
      outputStr +=
        word.length > 2 ? `${word.substr(0, 2)}[${word.substr(2)}]` : word;
      return outputStr;
    }, "");

    return [resultStr, count];
  }
}

module.exports = isolateDuplicates;
