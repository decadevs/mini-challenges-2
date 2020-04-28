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
  let result = ''
  if (typeof(text) !== 'string'){
    throw "Please provide a morse string";
  }
  else{
    let sentence = text.split('   ');
    let words = [];
    for (let i = 0; i < sentence.length; i++){
      words.push(sentence[i].split(' '));
    }
    let letter = ''
    let word = ''
    for (let i = 0; i < words.length; i++){
      for (let j = 0; j < words[i].length; j++){
        letter = MORSE_CODE[words[i][j]];
        if (letter != undefined){
          word += letter;
        }
      }
      if (i < sentence.length - 1){
        result += word;
        result += ' ';
        word = ''
      }
      else{
        result += word;
        word = '';
      }
    }
    result = result.replace(/^\s*|\s*$/g, '')
    return result;
  }
}

module.exports = morse;
