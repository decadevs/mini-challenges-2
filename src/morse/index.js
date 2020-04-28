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
  let outCome = '';
  let start = 0;

  if(text === ''){return('')}
  if(typeof text != 'string'){return('Please provide a morse string')}
  else{
    text = text.trim(); // Remove all white spaces before and after strings

    //Single letter or word
    if(text.indexOf(' ') === -1){return(MORSE_CODE[text]);}

    if(text.indexOf(' ') > 0){
      for(let i = 0; i < text.length; i++){

        if(text[i] === ' ' && text[i - 1] === ' ' && text[i + 1] !== ' '){
          outCome += MORSE_CODE[text.slice(start, i - 2)];
          start = i + 1;
          outCome += ' ';
        }
        else if(text[i] === ' ' && text[i + 1] !== ' '){

          outCome += MORSE_CODE[text.slice(start, i)];
          start = i + 1;
        }



        if(i === text.lastIndexOf(' ')){
          outCome += MORSE_CODE[text.slice(i + 1)];
        }

      }

      return(outCome);

    }

  }

}


module.exports = morse;
