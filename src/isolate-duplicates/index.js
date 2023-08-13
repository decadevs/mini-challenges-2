function isolateDuplicates(text) {
    let general= []
    let arr = []
    let acc = []
    let count = 0
    let op = []
    let cl = []
    let lower;
    if(typeof text === "string"){lower = text.toLowerCase()}
    else{ throw Error("Please enter a valid string")}
    for(let i=0;i<text.length;i++){
      if(!acc.includes(lower[i])){
        acc = []
        acc.push(lower[i])
        general.push(text[i])
      }
      else if(acc.includes(lower[i])){
        acc.push(lower[i])
        if(acc.length <= 2){
          general.push(text[i])
        }
        else if(acc.length == 3){
            if(lower[i] != lower[i+1]){
              general.push('[')
              op++
              general.push(text[i])
              general.push(']')
              cl++
              count++
            }else if(lower[i] == lower[i+1]){
            general.push('[')
            general.push(text[i])
            op++
            count++
          }
          }
        else if(acc.length > 3){
          if(lower[i] == lower[i+1]){
          general.push(text[i])
          }else if(lower[i] != lower[i+1]){
            general.push(text[i])
            general.push(']')
            cl++
          }
        }
        }  }
    if(op.length>cl.length){general.push(']')}
    arr.push(general.join(''))
    arr.push(count)
    return arr
}

module.exports = isolateDuplicates;
