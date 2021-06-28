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

  if( typeof(text) !== "string"){ throw new Error('Please provide a morse string') }

  let word_converter = morse_word =>{
    let wordArray = morse_word.split(' '), word = ''
    for(items of wordArray){
      if(MORSE_CODE.hasOwnProperty(items)){
        word += MORSE_CODE[items]
      }else{
        word += items
      }
      
    }
    return word
  }

  let codeArray = text.split('   ')

  console.log(codeArray)

  console.log(codeArray.map(word => {return word_converter(word.trim())}).join(' '))

  let decodedWord = codeArray.map(word => {return word_converter(word.trim())}).join(' ').trim()
  /* for(keys of Object.keys(MORSE_CODE)){
    console.log(keys)
    if(text.match(keys)){console.log(keys)}
  } */

/*   let words = text.split(' ')
  console.log(words)
  let letters = words.map(w => w.split('  '))
  console.log(letters)
  let decoded = []

  for (let i = 0; i< letters.length; i++){
    decoded[i] = [];
    for(let j = 0; j< letters[i].length; j++){
      decoded[i].push(MORSE_CODE[letters[i][j]])
    }
  }

  return decoded.map(arr => arr.join('')).join('') */

  return decodedWord

}

console.log(morse("-.. . -.-. .- -.. . ...-    -.. . -.-. .- -.. . ...-"))
module.exports = morse;
