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
  const regex = new RegExp(/^[-. ]/)
  
  if(text === ""){
    return "";
  }
   else if(regex.test(text) === false){
    throw new Error ('Please provide a morse string')
  } else {
    /*
    1. use 3 spaces to seperate words with space
    2. then use 1 space to separate words without space
    3. then loop through the morse dictionary with morse codes for converstion
    4. use join to convert from array to spring also inserting right spacing
    5. trim removes spaces from the edges
    */

    return text.split("   ")
                .map(text => text
                .split(" ") 
                .map(character => MORSE_CODE[character]) 
                .join('')
        ).join(' ') 
         .trim()
  }
}


morse("");
module.exports = morse;
