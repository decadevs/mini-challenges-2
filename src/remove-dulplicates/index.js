function removeDuplicates(obj) {
    
        let result = {};
        let keyArr =[];
        let valueArr=[];
        
        for(let key in obj){
            keyArr.push(key);
            valueArr.push(obj[key])
        }
         const valueArrFiltered = valueArr.map(value=>{
        
                let unique = new Set(value);
                unique= [...unique]
                return unique
                })
        for(let i=valueArrFiltered.length-1; i>=0; i--){
         for(let j=valueArrFiltered[i].length-1; j>=0; j--){
                for(let k = i-1; k>=0; k--){
                    if(valueArrFiltered[k].includes(valueArrFiltered[i][j])){
                        let index = valueArrFiltered[k].indexOf(valueArrFiltered[i][j]);
                        valueArrFiltered[k].splice(index,1)
                    }
                }
              
            }
        
        }
        keyArr.forEach((key, index)=>{
            result[key]=valueArrFiltered[index];
        })
        
        return result
        
        
        }
        
        


module.exports = removeDuplicates;
