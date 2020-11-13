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
  let arr = text.split(' ');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(MORSE_CODE[arr[i]]);    
  }
  let newStr = newArr.join(' ').trim();
  let newArr1 = newStr.split('');
  
  for (let i = 0; i < newArr1.length; i++) {
      if(newArr1[i] === " " && newArr1[i-1] === " " && newArr1[i+1] === " ") {
          newArr1.splice(i, 1);
          newArr1.splice(i-1, 1)
      }else if (newArr1[i] === " " && newArr1[i-1] !== " " && newArr1[i+1] !== " ") {
          newArr1.splice(i, 1)
      }
  }
let newStr1 = newArr1.join('');
return newStr1;
}

module.exports = morse;
