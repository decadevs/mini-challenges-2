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
  if (text === "") {
    return "";
  }
  if (text === undefined) {
    throw Error();
  }
  if (text.length === 0) {
    throw Error("Please provide a morse string");
  }
  let data = text.split(" ");
  let output = [];

  for (let i = 0; i < data.length; i++) {
    output.push(MORSE_CODE[data[i]]);
  }
  let newArr = output;

  for (let i = 0; i < output.length; i++) {
    if (newArr[0] === undefined) {
      newArr.shift();
    }
    if (newArr[output.length - 1] === undefined) {
      newArr.pop();
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === 0 && newArr[i] === undefined) {
      newArr[i] = newArr[i + 1];
    }
    if (newArr[i] === undefined && newArr[i + 1] === undefined) {
      newArr[i] = " ";
      i++;
    } else if (newArr[i] === undefined) {
      newArr[i] = "";
    } else {
      newArr[i] = newArr[i];
    }
  }

  return newArr.join("");
}

module.exports = morse;
