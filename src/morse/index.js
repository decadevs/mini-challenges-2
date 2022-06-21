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
    throw new Error("Please provide a morse string");
  }

  let morseArr = text.split("   ")
  let decipher = morseArr.map(word => word.split(" ").map(char => MORSE_CODE[char]).join(''))

  return decipher.join(' ').trim();;
}



  //text += ' ';
  //let mtext = '';
  /*let arrText = text.split("   ")
  let decrypt = '';
  let space = ' ';
  for (let word of arrText ) {
    let decipher = '';
    let arrChar = word.split(" ")

    for (let i in arrChar) {
      decipher += (Object.values(MORSE_CODE)[Object.keys(MORSE_CODE).indexOf(arrChar[i])]);
    }
    decrypt += decipher + space;
  }
  return decrypt.trim();*/

  /*for (let dot_dash of text) {
    if (dot_dash != ' ') {
      space = 0;
      mtext += dot_dash;
    } else {
        space++
        if (space == 2) {
          decipher += ' ';
        } else {
            decipher += Object.values(MORSE_CODE)[Object.keys(MORSE_CODE).indexOf(mtext)];
            mtext = '';
        }
      }
  }
  return dechipher.trim();*/

/*console.log(morse("-.. . -.-. .- -.. . ...-"));
console.log(morse("-.. . -.-. .-   -.. . ...-"));
console.log(morse("...   ---   ..."));*/
module.exports = morse;
