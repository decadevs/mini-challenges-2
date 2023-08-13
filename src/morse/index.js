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
  let arr;
  if(typeof text == "string" && typeof text != 'object'){ 
    arr = text.split(' ')
    let result = []
    let gap = 0
    for (let i=0;i<arr.length;i++){
      let letter = MORSE_CODE[arr[i]]
      arr[i] == '' ? gap++ : gap = 0;
      if(arr[i] =='' && arr[i-1] == '' & gap ==2){
        result.push(' ')
      }else{
        result.push(letter)
      }
      
    }
    return result.join('').trim()
   }else if(text === ""){
    return "";
   }else {
    throw Error("Please provide a morse string");
   }
  // let arr;
  // if(typeof text == "string"){ 
  //   arr = text.split(' ')
  //   let result = []
  //   let gap = 0
  // for (let i=0;i<arr.length;i++){
  //   let letter = MORSE_CODE[arr[i]]
  //   arr[i] == '' ? gap++ : gap = 0;
  //   if(arr[i] =='' && arr[i-1] == '' & gap ==2){
  //     result.push(' ')
  //   }else{
  //     result.push(letter)
  //   }
    
  // }
  //   return result.join('').trim()
  //  }else if(typeof text == 'undefined'){return}
  //  else{return "Please provide a morse string"}
  
}

module.exports = morse;
