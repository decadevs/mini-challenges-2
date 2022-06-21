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
  // check parameter is a valid string
  if (text === undefined || typeof text !== "string") {
    throw new Error("Please provide a morse string");
  } else {

    let splittedText = text.split(/(\s+)/);
    let result = "";

    // loop through string
    for (let index = 0; index < splittedText.length; index++) {

      // check if unit string is in MORSE OBJECT
      if (splittedText[index] in MORSE_CODE) {
        result += MORSE_CODE[splittedText[index]];

        // check for white space
      } else if (/\s/g.test(splittedText[index]) == true) {

        // loop through white space
        for (let i = 0; i < splittedText[index].length; i++) {

          // reduce double or more whitespace to singe character white space
          if (i > 0) {
            result += " ";
            break;
          }
        }
      } else {
        result += splittedText[index];
      }
    }
    return result.trim();
  }
}
module.exports = morse;
