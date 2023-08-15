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
   let morse = [];
  let count = 0;
      if(typeof text === 'string' && typeof text !== 'object') {
      let newMorseCode = text.split(' ')
         for(let i = 0; i < newMorseCode.length; i++) {
            if(newMorseCode[i] == ''){
               count++
               }else {
                  count = 0;
               }
            if(newMorseCode[i] == '' && newMorseCode[i - 1] == '' && count == 2) {
                     morse.push(' ')
               } else {
                     morse.push(MORSE_CODE[newMorseCode[i]])
               }
         }
   return morse.join('').trim();
 
   } else if (text === '') {
      return '';
   }else {
      throw Error("Please provide a morse string");
   }
 
}

module.exports = morse;
