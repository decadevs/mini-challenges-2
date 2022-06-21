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
  if(text == ''){
      return 'empty';
  }
  if(typeof text !== MORSE_CODE){
      return 'Provide a morse string';
  }
  let words = text.split(' ');
  let letters = words.map((w)=> w.split(' '));
  let result = [];

  for(let i = 0; i < letters.length; i++){
    result[i] = [];
    for(let j = 0; j < letters[i].length; j++){
      if(MORSE_CODE[letters[i][j]]){
        result[i].push(MORSE_CODE[letters[i][j]]);
      }
    }
  }
  return result.map(arr => arr.join('')).join(' ')
}


console.log(morse("-.. . -.-. .- -.. . ...-"));
module.exports = morse;
