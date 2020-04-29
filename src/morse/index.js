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
  let temp = '';
   if (Array.isArray(text) || text == undefined) {
    throw new Error("Please provide a morse string");
  }

  else if (text.length == 0 || text == '') {
    return text;
  }

  else if (text.length > 0) {
    if (text.length > 1) {
      let textToArray = text.split('   ').map(arr => arr.split(' '));
      for (let i = 0; i < textToArray.length; i++) {
        for (let j = 0; j < textToArray[i].length; j++) {
          if (!MORSE_CODE[textToArray[i][j]]) {
            temp += textToArray[i][j];
          }
          else {
            temp += MORSE_CODE[textToArray[i][j]];
          }
        }
        temp += '@@@';    
      }
      temp = temp.replace(/@@@/g, ' ')
    }
    else {
      if (!MORSE_CODE[text]) {
        temp += text;
      }
      else {
        temp += MORSE_CODE[text];
      }
    }
    return temp.trim();
  }
}

module.exports = morse;