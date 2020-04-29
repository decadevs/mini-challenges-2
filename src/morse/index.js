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
  let str = text;
  if (typeof str !== "string") {
    throw "Please provide a morse string";
  } else {
    let str = text;
    str = str.trim();
    let arrWords = str.split("   ");

      for (let i = 0; i < arrWords.length; i++) {
          arrWords[i] = arrWords[i].split(" ");
      for (let j = 0; j < arrWords[i].length; j++) {
        arrWords[i][j] = MORSE_CODE[arrWords[i][j]];
        console.log(arrWords[i][j]);
        }
      }
      for (let i = 0; i < arrWords.length; i++) {
        arrWords[i] = arrWords[i].join("");
        console.log(arrWords[i]);
        }
        return arrWords.join(" ");
    }
}

module.exports = morse;
