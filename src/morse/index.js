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
  // create exceptions for when an empty string or an invalid argument is passed into the function
  if (typeof (text) != 'string') {
    throw Error("Please provide a morse string");
  }

  if (text == '') {
    return text;
  }
  
  // method for instances of multiple words arguments seperated by 3 spaces between eachother

  //create and array of each word by splitting each word by the 3 spaces in between them
  let bigArr = text.split('   ');
  let answer = [];
  for (let i = 0; i < bigArr.length; i++) {

    // call the decryption function on each sub-array in bigArr
    answer.push(decryption(bigArr[i]).join(''));

  }
  answer = answer.join(' ').trim();

  // decrypt function for single words passed in as argument
  function decryption(arr) {
    arr = arr.split(' ')
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      res.push(MORSE_CODE[arr[i].trim()])
    }
    return res;
  }

  return answer;
}

module.exports = morse;
