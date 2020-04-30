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
    if((typeof text ) != "string"){
    throw "Please provide a morse string";
  }
  text = text.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  let toArr= text.split(""),
  morseChar="",
  character ="",
  word=[];
  for(let a=0; a<toArr.length; a++){
    if(toArr[a] != " "){
      morseChar += toArr[a];
    }
    if(toArr[a]==" " && toArr[a+1] != " "){
      character += MORSE_CODE[morseChar];
      morseChar = "";
    }
    if(toArr[a]==" " && toArr[a+1]==" " && toArr[a+2]==" " || a==toArr.length-1){
      character += MORSE_CODE[morseChar];
      word.push(character);
      character="";
      morseChar = "";
      a +=2;
    }
  }
  return word.toString().replace(/,/g," ");

}

module.exports = morse;
