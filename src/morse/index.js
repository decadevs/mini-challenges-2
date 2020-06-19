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
/*
function morse(text) {
  // let textArr = text.split(' ');textArr
  


  let spaceCord
  let splitWord
  let textCopy = text.slice(); textCopy
  let splitWordArr = []
  // let decodedLetterArr = []
  let decodedArr = []
  let singleSpacedCharacters = []

  // "...-..- ..... .-.-.- ----- --...   .--. . .-.    -... --- - - .-.. ."

  if(textCopy.indexOf('   ')>=0){
    // spaceCord = textCopy.indexOf('   ');spaceCord
    splitWord = textCopy.split('  '); splitWord

    for (char in splitWord) {
      if(splitWord[char] == "") splitWord.splice(char, 1)
    }
    console.log(splitWord.indexOf(''));

    for(let i=0; i <splitWord.length; i++){
      splitWordArr.push(splitWord[i].split(' '));
    }

    console.log(splitWordArr);

      for (let i = 0; i < splitWordArr.length; i++){
      console.log(splitWordArr[i]);
        for (let j = 0; j < splitWord[i].length; j++){
          console.log(splitWordArr[i][j]);

          if(splitWordArr[i][j]!=='') {
            singleSpacedCharacters.push(MORSE_CODE[splitWordArr[i][j]]); singleSpacedCharacters
          }
          decodedArr.push(singleSpacedCharacters);decodedArr
        }
      }






    console.log(decodedArr.join(''))


    //   splitWord[i]=splitWord[i].split(' ');
    //   // console.log(splitWord[i);

    //   for(let char of splitWord[i]){
    //    singleSpacedCharacters = char.split(' ');singleSpacedCharacters
    //   for(let letter of singleSpacedCharacters){
    //     decodedArr.push(MORSE_CODE[letter]);decodedArr

    //   }
    // }
    // }


    // for(let i=0; i < splitWord.length; i++){
    //   console.log(splitWord[i] = splitWord[i].split(' '));
    //   splitWordArr.push(splitWord[i]); splitWordArr
      // for (char of splitWord[i]) {
      //   decodedArr.push(MORSE_CODE[char]);decodedArr

      // }
    // }
    // console.log(splitWord[0] = splitWord[0].split(' '));
    // for(char of splitWord[0]){
    //   decodedArr.push(MORSE_CODE[char]);

    // }
    // console.log(decodedArr.join(''));

  }


}

console.log(morse(".-   -...   -.-. "))
  // "...-..- ..... .-.-.- ----- --...   .--. . .-.    -... --- - - .-.. .")); //should return "$5.07 PER BOTTLE"

*/



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
