const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS",
};

Object.freeze(MORSE_CODE);

function morse(text) {
  //bail if text ain't morse
  if (!text.includes(".") && text !== "") {
    throw "Please provide a morse string";
  }
  //trim white spaces
  let trim = text.trim();
  //get the words
  let words = trim.split("   ");
  let output = [];
  //iterate the words for letters
  for (let i = 0; i < words.length; i++) {
    //get the letters in words
    let word = words[i].split(" ");
    // declare string for conversion
    let string = "";
    //convert the morse to English
    for (let j = 0; j < word.length; j++) {
      //take care of that empty exception
      if (word[j] === "") {
        continue;
      }
      //make the conversion
      let letter = MORSE_CODE[word[j]];
      //increment the word string
      string += letter;
    }
    //add words to output array
    output.push(string);
  }
  //turn array to string delimited by spaces
  ret = output.join(" ");
  return ret;
}

module.exports = morse;
