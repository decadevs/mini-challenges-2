function isolateDuplicates(text) {
    if (typeof text !== 'string'){
      throw new Error("Please enter a valid string");
    }
    let tracker  = 0;
    let array = []
    let array2 = []
    let newText = text.toUpperCase()
    
    for(let i = 0; i < newText.length; i++){
      if(newText[i] === newText[i-1] && newText[i] === newText[i+1] && newText[i-2] !== newText[i]){
        
        
        array.push('[');
        array.push(text[i]);
        tracker += 1;
      } else if (newText[i] === newText[i -1] && newText[i] === newText[i-2] && newText[i+1] !== newText[i]){
        array.push(text[i]);
        array.push(']')
        tracker += 1;
      } else  {
        array.push(text[i])
      }
    }
    let stringOut = array.join('')
    array2.push(stringOut, tracker)
    return array2
  }
  console.log(isolateDuplicates("aaaabbcccadehhh"))
  module.exports = isolateDuplicates;