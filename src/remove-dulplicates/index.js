function removeDuplicates(obj) {
    const arrKeys = Object.keys(obj)
    .map(Number)
    .sort((a,b)=>b-a)
      
      const sortedObj = {}
      const sortedArrs = []
      const eleContained = []
      while(sortedArrs.length < arrKeys.length){
        sortedArrs.push([])
      }
      
      let count = 0
      for(let arrays of arrKeys){
        const arr = obj[arrays]
        arr.forEach(ele => {
          if(!eleContained.includes(ele)){
            sortedArrs[count].push(ele);
            eleContained.push(ele)
          }
        })
        count += 1
      }

      for(let k = 0; k < arrKeys.length; k++){
        sortedObj[arrKeys[k]] = sortedArrs[k]
      }
      return sortedObj
}

module.exports = removeDuplicates;
