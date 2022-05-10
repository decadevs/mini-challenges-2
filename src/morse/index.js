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

function morse(text) 
{
  // Array of characters
  let convertedWordArray = [];
  // Temporary array to store characters
  let temp = [];
  
  for (let i = 0; i < text.length; i++)
  {

    // Identify word spaces
    if (text[i] == " " && text[i + 1] == " " && text[i + 2] == " ")
    {
      convertedWordArray.push(" ");  
      // Skip the word space identifier
      i = i + 2;
    }
    else if (text[i] !== " " && text[i] !== "\0") 
    {

        temp.push(text[i]);
        console.log(temp)
     
    }
    else 
    {

        // Push identified characters in
        console.log(temp)
        console.log(i)
        convertedWordArray.push(MORSE_CODE[temp[i]]);
        // for (let j = 0; j < temp.length; j++){
        //   temp = temp.concat(temp[i])
        // }
        // temp.length = 0
        console.log(temp)
     
        console.log(convertedWordArray.join(""));
    }
  
  }
  return convertedWordArray.join("");
}

console.log(morse("-.. . -.-. .-   -.. . ...-") );

module.exports = morse;


