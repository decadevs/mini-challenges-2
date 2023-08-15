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
  let result = '';  // initialize final string
  let resultArr = []; // initialize holding array

  
  if(typeof text == 'string' && typeof text != 'object'){
    const words = text.split('   '); // split array into words and push into words array, using 3 spaces

    for(const word of words){ // iterate through words array, containing each word
        const chars = word.split(' ');  // split each word into individual characters and push into chars array using 1 space
  
        for(const char of chars){  // iterate through each character in chars array
            const trimmedChar = char.trim();
          if(MORSE_CODE[trimmedChar]){ // check if character matches object value in MORSE_CODE Object
                resultArr.push(MORSE_CODE[char]); // if it does push into holding array
          }
         
        }
  
        resultArr.push(' '); // add a space charcter after a characters of a word has been pushed into holding array
    }
  
    result = resultArr.join('').trim(''); // convert holding array to string, join all characters to make words and spaces. the trim leading and trailing white spaces 
    return result; //return final sentence as a string
  }else if(text === ''){
    return '';
  }else{
    throw Error("Please provide a morse string");
  }

}

module.exports = morse;
