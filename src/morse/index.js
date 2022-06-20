/**
 * @param {string} text The morse code.
 * @returns {string[]} The decoded string.
 */


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

 
    if(typeof(text) !== "string"){
        throw ('Please provide a morse string');
    }
    if(text == ""){
        return text;
    }
    //check if string includes morse code characters
    if(text.indexOf('.') === -1 && text.indexOf('-')=== -1){ 
        throw ("Invalid morse code");
    }

    const morseArr = text.split(' ');
    const decodedArr = [];
    let countSpaces = 0;

    //decode morse code and keep track of whitespaces 
    for(let i=0; i < morseArr.length; i++){       
          decodedArr.push(MORSE_CODE[morseArr[i]])
          if(morseArr[i] === ''){
              countSpaces++;
          }
          if(countSpaces === 2 && text.length > 1){
              decodedArr.push(' ');
              countSpaces = 0;
          }   
    }
    return decodedArr.join('').trim();

} 

module.exports = morse;
