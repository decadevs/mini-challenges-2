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

// let txt = "";
// for (let x in MORSE_CODE) {
//   txt += MORSE_CODE[x] ;
//   console.log(txt)
// };

// document.getElementById(txt);
// com

// Object.freeze(MORSE_CODE);

// function morse(text) {}

// module.exports = morse;


// let text = "5";
// text = text.padStart(3,"0");

// document.getElementById("demo").innerHTML = text;
// console.log()

function morse(text) {
    
  if(typeof text === 'string'){

    const arr = text.split('   ');
    const result = [];

    for(let i of arr){
        let currInnerArr = i.split(' ');
        let currChar = [];
        for(let j of currInnerArr){
          currChar.push(MORSE_CODE[j])
        }
        result.push(currChar.join(''));
    }

    return result.join(' ').trim();

  }else if(text === ""){
    return "";
  }
  else {
    throw Error("Please provide a morse string");
  }
}