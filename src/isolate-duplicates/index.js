function isolateDuplicates(text) {
  
    let copyString = text
    
    if (typeof(text) != 'string') {
      throw new Error("Please enter a valid string")
    }
    let obj = {}
    
    for (let i = 0; i < text.length; i++) {
      let char = text[i]
      
      if (!obj[char]) {
        obj[char] = 1
      } else {
        obj[char]++
      }
    } 
    obj
    console.log(obj);
    let b = ""
    
    let keys = Object.keys(obj)
    let splitCopyStr = copyString.split('')
    for (let i = 0; i < keys.length; i++) {
      if (i > 0) {
      
      }
        let key = keys[i]
        let nextKey = keys[i + 1]
        console.log(nextKey);
        
        if (obj[key] > 2) {
          b += key
          let pos1 = splitCopyStr.indexOf(key) + 2
          splitCopyStr.splice(pos1, 0, '[')

          if (obj[nextKey] != obj[key]) {
            let pos2 = splitCopyStr.indexOf(nextKey)
            pos2
            splitCopyStr.splice(pos2, 0, ']')
            pos2 = splitCopyStr.indexOf()
          }
        }
        let lit = splitCopyStr
        console.log(splitCopyStr.join(''));
    }
    splitCopyStr
    
    return [splitCopyStr.join(''), b.length]
  
}


// console.log(isolateDuplicates("hellllloooooodeeeecadevvsss"));
console.log(isolateDuplicates("aaaabccccaddd"));




module.exports = isolateDuplicates;
