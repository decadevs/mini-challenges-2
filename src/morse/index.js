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

function morse(text){
  //Input text is split into words using split(' '), where three spaces
  //represent a space between words in the original message.
    let words = text.split('   ');
  //Each word is split into individual letters using split(' ') and
  //stored in the letters array.
    let letters = words.map((w) => w.split(' '));
  //The decoded array is used to store the decoded message, character by character
    let decoded = [];
  //The outer for loop iterates over each word,
  //while the inner for loop iterates over each letter within a word.
    for(let index1 = 0; index1 < letters.length; index1++){
      decoded[index1] = [];
      for(let index2 = 0; index2 < letters[index1].length; index2++){
  //For each letter, the MORSE_CODE object is queried to get the corresponding
  //character or character string, and this value is then pushed into the decoded array.
          if(MORSE_CODE[letters[index1][index2]]){
              decoded[index1].push( MORSE_CODE[letters[index1][index2]] );
          }
      }
    }
  //The decoded message is joined and returned as a string, using map and join.
    return decoded.map(arr => arr.join('')).join(' ');
  }
  
  console.log(morse("-.. . -.-. .- -.. . ...-"));

module.exports = morse;
