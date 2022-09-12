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
  return text.split('  ').map( str => str.split(' ').map( txt => MORSE_CODE[txt]).join('')).join(' ');
}


  // decodeMorse = function (morseCode) {
  //   let result = "";
  //   let tmp = morseCode.trim();
  //   tmp += " "
  //   let stk = ""
  //     let s = tmp[i]
  //     stk += s
  //     switch (stk) {
  //       case "...---... ":
  //         result += "SOS"
  //         stk = ""
  //         break
  //       case " ":
  //         result += " "
  //         stk = ""
  //         break;
  //       case ". ":
  //         result += "E"
  //         stk = ""
  //         break;
  //       case "- ":
  //         result += "T"
  //         stk = ""
  //         break;
  //       case ".. ":
  //         result += "I"
  //         stk = ""
  //         break;
  //       case "... ":
  //         result += "S"
  //         stk = ""
  //         break;
  //       case ".... ":
  //         result += "H"
  //         stk = ""
  //         break;
  //       case "...- ":
  //         result += "V"

  //     }
  //   }
  // }

//}

console.log(morse(".-"));
module.exports = morse;
