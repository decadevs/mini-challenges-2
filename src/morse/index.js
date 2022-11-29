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
  if (!text) {
    return '';
  }
  var arr = [];
  if (typeof(text) != 'string') {
    return "Please provide a morse string";
  }
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

  //console.log(arr)
  //console.log('air'+arr[0]+arr[1]+arr[2]+"e")
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] === ' ' && (arr[k+1] === ' ')) {
      arr.splice(k,1);
      //console.log('hhj')
    }else{
      //console.log(arr[k]+arr[k+1])
    }
    
  }
  return arr.join('').trim().replace('  ',' ');
  }
    
}
//var num = '...---...';

module.exports = morse;


//console.log(morse(".-"));
//SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
//SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.