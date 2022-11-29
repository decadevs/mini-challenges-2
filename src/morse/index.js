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
  var arr = [];
  var newText = text.replace('   ',' ** ');
  //console.log(newText)
  var useText = newText.split(' ');
  //console.log(useText)
  if (useText == '') {
    return '';
  }else{
    for (let i = 0; i < useText.length; i++) {
      if (MORSE_CODE[useText[i]]) {
          arr.push(MORSE_CODE[useText[i]]);
      }else if(useText[i] == '**'){
        arr.push(' ');
      }else if(useText[i] == ''){
        arr.push(' ');
      }else{
        return "Please provide a morse string";
      }
    
  }
  return arr.join('').trim().replace('  ',' ');
  }
    
}
var num = '...---...';

module.exports = morse;


console.log(morse(""));
