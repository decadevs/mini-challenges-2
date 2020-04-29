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
  if (typeof text === "string") {
    let convertedArr = [];
    // Create an Array from the Morse String and Split by the spaces
    let arrFromMorse = Array.from(text.split(" "));

    for (let i = 0; i < arrFromMorse.length; i++) {
      // Check and delete empty string from the array
      if (arrFromMorse[i] !== "") {
        convertedArr.push(MORSE_CODE[arrFromMorse[i]]);
        // Check if there's more than one empty string and add a space if true.
        if (arrFromMorse[i + 1] === "" && arrFromMorse[i + 2] === "") {
          convertedArr.push(" ");
        }
      }
    }
    // Remove extra space at the end of the converted array
    if (convertedArr[convertedArr.length - 1] === " ") {
      convertedArr.pop();
    }
    return convertedArr.join("");
  } else {
    throw "Please provide a morse string";
  }
}

module.exports = morse;
