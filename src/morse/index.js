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
  if(text === ""){
    //console.log(text)
    return "";
  }
   if(text === undefined) {
    //console.log(text)
    throw Error ()
  }
  if (text.length === 0){
    throw Error('Please provide a morse string')
  }
  if (typeof text == "string" ) {
    console.log(text)
    if (text.includes('-') || text.includes('.')) {
      // Input is Morse code, decode to text
      const words = text.trim().split('   ');

      const decodedMorse = words.map(word => {
        const sequences = word.split(' ');

        const decodedCharacters = sequences.map(sequence => {
          return MORSE_CODE[sequence];
        });
        //console.log(decodedCharacters)
        return decodedCharacters.join('');
      });
//console.log(decodedMorse)
      return decodedMorse.join(' ');
    // } else {
    //   throw new Error('Please provide a Morse code string.');
    }
    
  } 
}

  const morseCode = "-.. . -.-. .- -.. . ...-";
  const decodedMessage = morse(morseCode); // Pass the morseCode as input to the function
  console.log(decodedMessage);
  console.log(morse(''))

    console.log(typeof [])


module.exports = morse;
