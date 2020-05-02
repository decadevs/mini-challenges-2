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

function morseToText(text) {
  if (text === undefined) {
    throw '';
  } else if (typeof(text) != "string") {
    throw "Please provide a morse string";
  }
  let newText = text.trim();
  let textArray = newText.split(' ');
  let output = "";
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] === '' && textArray[i + 1] === '') {
      if (textArray[i + 2] === '') {
        delete textArray[i];
      } else {
        output += " ";
      }
    }else if (textArray[i] === '') {
      output += "";
    } else if (textArray[i] !== '') {
      output += MORSE_CODE[textArray[i]];
    }
  }
  return output;
}

module.exports = morseToText;
