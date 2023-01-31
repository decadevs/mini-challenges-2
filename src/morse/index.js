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
  if (Array.isArray(text)) {
    throw new Error("Please provide a morse string");
    return "Please provide a morse string";
  }

  if (typeof text === "undefined") {
    throw new Error("Please provide a morse string");
    return;
  }

  // split text by 3 spaces to break them into an array of words
  let _morseArr = text.trim().split("   ");

  let _arrOfDecodedWords = _morseArr.map((item) => {
  let getMorseCodeFromItem = item.split(" ");

  let getWordsFromItemArray = getMorseCodeFromItem.map((value) => {
  let decodedLetter = MORSE_CODE[value];
      return decodedLetter;
    });

    return getWordsFromItemArray.join("");
  });

  return _arrOfDecodedWords.join(" ");
}

module.exports = morse;
