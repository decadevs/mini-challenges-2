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
  //handles non-string characters
  if (typeof text !== "string"){
    throw new Error("Please provide a morse string")
  }
  //split text to get invidual character
  text = text.trim();
  text = text.split(" ");
  //create a variable to hold decoded text
  let decodedText = "";
  //loop through object to check corresponding human-readable-character
  for (let i = 0, n = text.length; i < n ; i++){
    let pos = text[i], nextPos = text[i + 1];
    if (MORSE_CODE[pos]){
      decodedText += MORSE_CODE[pos]
    }
    //handle spaces between words
    else if (pos == "" && nextPos == ""){
      decodedText += " ";
    }
  }
  return decodedText;
}

module.exports = morse;
