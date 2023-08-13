function removeDuplicates(obj) { 
        let comp = []
        let newObj = {}
        let k = Object.keys(obj)
        for (let i=k.length-1;i>=0;i--){
            let value = obj[k[i]]
            let newVal = []
            for(let j=0;j<value.length;j++){
                if(!comp.includes(value[j])){
                    comp.push(value[j])
                    newVal.push(value[j])
                }
            }
            newObj[k[i]] = newVal
        }
        return newObj
}

module.exports = removeDuplicates;
