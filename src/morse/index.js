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

// function is used to return a count of 1 when two or more consecutive spaces are encountered
function spaceOccurencesCounter(string, word) {
  let count = 0;
  for(let i = 0; i < string.length; i++){
    if(string[i] === word && string[i + 1] === word){
      count ++
    }
  }
  return count
}

// Function decrypts Morse code to readable text
function decryptedMorseCode(encryptedText){
  let decryptedTextArr = [];
  let encryptedTextLength = encryptedText.length

  for(let i = 0; i < encryptedTextLength; i++){
    decryptedTextArr.push(MORSE_CODE[encryptedText[i]])
  }
  return decryptedTextArr
}


function morse(text) {

  if(text === ''){ // checks for empty string
    return ''
  }else if (typeof(text) != 'string'){ // checks for non string characters
    throw 'Please provide a morse string'
  }
  else{
    
    if(spaceOccurencesCounter(text, ' ') > 0 ){ //If two or more consecutive spaces is seen
      textWith2Spaces = text.toString().trim() // Trim text

      let stringifyArr = textWith2Spaces.split(' ')
   
      let result = decryptedMorseCode(stringifyArr).map(value => { //Map through readable text and replace undefined with empty string
        if(value === undefined){
          value = ''
        }
        return value
      })

      let morseMessage = []
      for (k = 0; k < result.length; k++){
        
        if(!(result[k] === result[k + 1] && result[k] === '')){
          morseMessage.push(result[k])
          if(result[k] === ''){
            morseMessage.push(' ') // Convert empty string to single space
          }
        }
      }
  
      return morseMessage.join('') //return morse message

    }else{ // if single space is seen
      text = text.toString() // Process text without trimming
      
      let textWith3Spaces = text.split(' ')
      
      let newResult = decryptedMorseCode(textWith3Spaces).map(value => {
        if(value === undefined){
          value = ''
        }
        
        return value
      })
      
      let messageOutput = newResult.join('').trim()

      return messageOutput
    }
  }
    
}

module.exports = morse;


