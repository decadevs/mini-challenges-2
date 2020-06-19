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

function morse (text) {
  let translated;
  if (typeof text !== "string") {
    throw new Error("Please provide a morse string");
  }
  if (text === "") translated = "";
  text = text.split(" ");
  translated = [];
  for (let i = 0; i < text.length; ++i) {
    if (text[0] === "") text.shift();
    if (text[text.length - 1] === "") text.pop();
  }
  for (let i = 0; i < text.length; ++i) {
    if (text[i] !== "") {
      translated.push(MORSE_CODE[text[i]]);
    } else if (text[i] === "" && text[i + 1] === "") {
      if (text[i + 2] === "") {
        continue;
      }
      text[i] = " ";
      translated.push(text[i]);
      continue;
    }
  }
  return translated.join("");
};

module.exports = morse;
