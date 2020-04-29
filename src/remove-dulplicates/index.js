function removeDuplicates(obj) {
    const keys = Object.keys(obj).sort((a,b)=>{return a- b})
    const values = Object.values(obj)
   
    for(let value of values){
        for(let i in value){
        let duplicate = value.filter(element => element == value[i]).length
          if(duplicate > 1) {let removeDuplicate = value.splice(value.lastIndexOf(value[i]),1)}
        }
        
    }
  
for(key of keys){
    for(item of keys){
        // if(obj[key].some(v => obj[item].includes(v)) && item > key)
      let p = obj[key].filter(element => obj[item].includes(element) && parseInt(item) > parseInt(key))
         if(p.length > 0) {p.forEach(element => obj[key].splice(obj[key].indexOf(element),1))}
       
    }
}


 return obj
    
}

module.exports = removeDuplicates;
