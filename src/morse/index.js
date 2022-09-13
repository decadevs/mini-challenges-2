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
  let output = ''
  // let splitText = text.trim().split('')
  // console.log(splitText)
if(text.length === 0){
  output = "Please provide a morse string"

}else{
  let textStr = text.split(' ')
  for(let i = 0; i < textStr.length; i++){
    console.log(textStr[i])

    if(textStr[i] !== ''){

      // output += MORSE_CODE[text[i]]
      output += MORSE_CODE[textStr[i]]
    }

  }
}
 
  return output
}
console.log(morse(("..- .-... ..")))
console.log(morse(("-.. . -.-. .- -.. . ...-")))
console.log(morse(([])))
console.log(morse(("...---...")))
module.exports = morse;
