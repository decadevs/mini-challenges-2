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
  if (typeof text !== 'string') {
    throw ('Please provide a morse string');
  }
  else {
    let morseWords = text.trim().split('   ');
    let morseChar = [];
    for (let i = 0; i < morseWords.length; i++) {
      morseChar.push(morseWords[i].split(' '));
    }

    let eachWord = [];
    for (let i = 0; i < morseChar.length; i++) {
      let eachChar = '';
      for (let j = 0; j < morseChar[i].length; j++) {
        let char = morseChar[i][j];
        if (char in MORSE_CODE) {
          eachChar += (MORSE_CODE[char]);
        }
      }
      eachWord.push(eachChar);
    }

    let textLength = text.length;
    let finalWord = eachWord.join(' ');

    let validMorse = morseWords[0][0] in MORSE_CODE;

      if (textLength === 0) {
        return "";
      }
      else if (validMorse == true) {
        return finalWord;
      }
  }

}

module.exports = morse;
