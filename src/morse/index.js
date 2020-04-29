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
  if(typeof text==="string"&&text.length>0){
    let readableStr=""
    let arrText=text.trim().split(' ')
    let arrTextMultipleSpacesRemoved=[arrText[0]]
    let arrOfDisplacedSpaceChar=[]
    for(var i=1;i<arrText.length;i++){
      if(arrText[i]==""&&arrTextMultipleSpacesRemoved[arrTextMultipleSpacesRemoved.length-1]==""&&arrText[i]===
      arrTextMultipleSpacesRemoved[arrTextMultipleSpacesRemoved.length-1]){
        arrOfDisplacedSpaceChar.push(arrText[i])
      }
      else{
        arrTextMultipleSpacesRemoved.push(arrText[i])
      }
    }
    for(var i=0;i<arrTextMultipleSpacesRemoved.length;i++){
      if(MORSE_CODE.hasOwnProperty(arrTextMultipleSpacesRemoved[i])===true){
        readableStr+=MORSE_CODE[arrTextMultipleSpacesRemoved[i]]
      }
      else{
        readableStr+=" "
      }
    }
    return  readableStr
  }
  else if(typeof text==="string"&&text.length==0){
    return ""
  }
  else{
    throw "Please provide a morse string"
  }
}

module.exports = morse;
