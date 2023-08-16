function removeDuplicates(obj) {

  let compare = []
  let result = {}
  let key = Object.keys(obj)
  let value = Object.values(obj)
  console.log(value)


  
  for(let i = key.length-1 ; i>= 0; i--){
      let value = obj[key[i]]
      let newVal = []
          value.forEach(item =>{
              if(!compare.includes(item)){
                  compare.push(item)
                  newVal.push(item)
  
              }
          })
          result[key[i]] = newVal
  
   
  }
  return result
}  
  
module.exports = removeDuplicates;
