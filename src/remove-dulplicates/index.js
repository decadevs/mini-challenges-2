function removeDuplicates(obj) {
    for(let key in obj){
        let newObj = {}
        let value =obj[key]
    let newarray = []
    for(let i =0; i<value.length; i++){
        if(value.includes(value[i])){
            newarray.push(value[i])
          newObj= {newarray}
   
        }
    }
    return  newObj
    }
    
}
console.log( removeDuplicates({"1": ["A", "B", "C"],
"2": ["A", "B", "D", "A"],
}
))
//module.exports = removeDuplicates;
