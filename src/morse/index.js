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

decodeMorse = function(morseCode) {
  
    if (typeof text !== "string"){
      throw "Please provide a morse string"
    } else if (text.length === 0){
      return ""
    }
    let text2 = text.trim()
   let morArr = text2.split(" ")
    //
    //console.log(morArr)
  
    let strArr = []
    let count = 0;
    for (let i = 0; i < morArr.length; i++){
      //console.log(MORSE_CODE[morArr[i]])
      //console.log(morArr[i].trim())
  
      let char = morArr[i]
       if(char == ""){
         count++
        }else{
          if(count>=2) strArr.push(" ");
          //console.log(strArr)
  
          strArr.push(MORSE_CODE[char]);
          count = 0;
  
         }
    //console.log(strArr)
    }
  
    return strArr.join('')
  }
  
console.log(morseCode("..- .-... .."))

module.exports = morse;
