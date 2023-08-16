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
  let result = "";
  let fittingArr = [];

  if(typeof text === 'string' && typeof text !== 'object') {

  let wordArr = text.split('   ');

      for(let i = 0; i < wordArr.length; i++) {
           let charArr = wordArr[i].split(' ');

           for(let k = 0; k < charArr.length; k++){
              let ketchUp = charArr[k].trim();
                        if(MORSE_CODE[ketchUp]) {
                              fittingArr.push(MORSE_CODE[ketchUp])
             }
          }
              fittingArr.push(' ')
          }
            return  result = fittingArr.join('').trim();
  }else if (text === "") {
    return "";
  }else {
    throw Error("Please provide a morse string");
  }
}

module.exports = morse;
