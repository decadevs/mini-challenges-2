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
  if (typeof text != 'string') throw new Error ("Please provide a morse string");

  if (text == "") return "";
  let word = "";
  let firstWord = "";
  text = text.trim();

  if (text.includes("   ")) {
    text = text.replace(/   /g, "[[]]");
    text = text.split("[[]]");
    for (let i = 0; i < text.length; i++){
      let firstText = text[i].split(" ");
      word = "";
      for (let j = 0; j < firstText.length; j++){
        if (firstText[j] == "") continue;
        word += MORSE_CODE[firstText[j]];
      }
      if (i == text.length - 1) {
        firstWord += word
      } else {
        firstWord += word + " "
      }
    }
    return firstWord.trim();
  } else {
    text = text.trim();
    if (text[text.length - 1] == " "){
    text = text.replace(" ", "");
    }
    text = text.split(" ");
    for (let i = 0; i < text.length; i++){
      word += MORSE_CODE[text[i]];
    }
    return word;
  }



}

module.exports = morse;
