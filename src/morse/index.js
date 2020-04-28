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
  if (typeof text !== "string") {
    throw "Please provide a morse string";
  }

  if (text === "") {
    return "";
  }

  const TRIM_TEXT = text.trim();
  let spaceCount = 0;
  let characterCode = "";
  let morseCode = "";

  for (let i = 0; i < TRIM_TEXT.length; i++) {
    if (TRIM_TEXT[i] !== " ") {
      morseCode += TRIM_TEXT[i];
      spaceCount = 0;
    } else if ((spaceCount === 2) && (TRIM_TEXT[i] === " ")) {
      characterCode += " ";
      spaceCount = 0;
    } else {
      spaceCount++;
      characterCode += morseCode? MORSE_CODE[morseCode] : "";
      morseCode = "";
    }
  }

  characterCode += MORSE_CODE[morseCode];
  return characterCode;
}

module.exports = morse;
