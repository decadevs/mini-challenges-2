function removeDuplicates(obj) {
    let keys = Object.keys(obj), newObj = {}, values = Object.values(obj), newValues = []
    for(i in keys){
        values.splice(0,1)
        for(j in values){
            newValues.push(...values[j])
        }
        for(k in obj[keys[i]]){
            if(newValues.includes(obj[keys[i]][k])){
                //obj[keys[i]].splice(k,1)
                delete obj[keys[i]][k]
            }
        }
        newValues = []
        set = new Set(obj[keys[i]])
        let arr = [...set]
        for(z in arr){
            if(arr[z]===undefined){
                arr.splice(z,1)
            }
        }
        newObj[keys[i]] = arr
    }
    return newObj
}

console.log(removeDuplicates({
    "432": ["A", "A", "B", "D"],
    "53": ["L", "G", "B", "C"],
    "236": ["L", "A", "X", "G", "H", "X"],
    "11": ["P", "R", "S", "D"]
  }))
module.exports = removeDuplicates;
