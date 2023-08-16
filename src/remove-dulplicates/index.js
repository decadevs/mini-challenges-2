

function removeDuplicates(obj) {
    
    let compare = [],
     newObject = {},
     k = obj.keys(obj);
    
    for(let i = k.length-1; i >= 0; i--){
        let val = obj[k[i]],
         newVal = [];
         
         for(j = 0; j < val.length; j++){
            if(!compare.includes(val[j])){
                compare.push(val[j]);
            newVal.push(val[j]);
            
              } 
          }
          newObj[key[i]] = newVal;
        }
       return newObject;
      }
    

module.exports = removeDuplicates;
