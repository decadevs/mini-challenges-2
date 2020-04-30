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

  
  /* 
    Steps to appraoching Morse code translation to readable words
    1. Split morse text in words using the split method
    2. Loop through splitted morse, pushing into a morseToWordArray
    3. replace undefined and null embedded with any word
  */


  try{
    if(typeof(text)!=='string'){
      throw "Please provide a morse string"
    }
    if(text==='undefined'){
      throw ""
    }
    if(text===""){
      return ""
    }

    let splittedMorse = text.split(' ')
    let morseToWordArray = []

    for (let i = 0; i < splittedMorse.length; i++) {
      morseToWordArray.push(MORSE_CODE[splittedMorse[i]])
    }

    let combinedLetters = morseToWordArray.reduce((accumulator, current) => accumulator + current)
    let noNullUndefinedInWord = combinedLetters.replace(/undefined|NAN/gi, " ")

    //remove empty strings and replace with single space

    let removedEmptyString = noNullUndefinedInWord.split(' ').filter(a => a).join(' ')

    return removedEmptyString

  }
  catch(err){
    throw err
  }
  

}


module.exports = morse;
