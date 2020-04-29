function isolateDuplicates(text) {
  if (typeof text === "string") {
    const uniqueText = String.prototype.concat(...new Set(text));

    function addingBrackets(str) {
      let output = [str.slice(0, 2), "[", str.slice(2), "]"].join("");
      return output;
    }

    let newText = text.replace(/\w{3, }/g, function (letters) {
      return [letters.slice(0, 2), "[", letters.slice(2), "]"].join("");
    });

    console.log(newText);
    // let numberOfDuplicatedLetters = 0;

    // let arrayOfletters = [];

    // let charMap = {};

    // for (let letter of text) {
    //   if (!charMap[letter]) {
    //     charMap[letter] = 1;
    //   } else {
    //     charMap[letter]++;
    //   }
    // }

    // for (let key in charMap) {
    //   let number = charMap[key];
    //   if (number > 2) {
    //     numberOfDuplicatedLetters += 1;
    //   }
    // }

    // return [JSON.stringify(arrayOfletters), numberOfDuplicatedLetters];
  } else {
    throw "Please enter a valid string";
  }
}

module.exports = isolateDuplicates;
