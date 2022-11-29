function removeDuplicates(obj) {
    
    var newObject = Object.entries(obj);
    console.log(newObject)
    for (let i = 0; i < newObject.length; i++) {
        
        for (let k = 0; k < newObject[i][1].length; k++) {
            //var indexArr = [];
            var num = newObject[i][1].filter(function(value,index){
                //if(value == newObject[i][1][k]){
                    //indexArr.push(newObject[i][1].indexOf(newObject[i][1][k]))
                    return value == newObject[i][1][k];
                
            })
            if (num.length > 1) {
                while (num.length > 1) {
                    if (newObject[i][1].includes(num[0])) {
                        num.shift();
                        newObject[i][1].splice(newObject[i][1].indexOf(num[0]),1);
                    }
                }
            }else{
                for (let s = 0; s < newObject.length; s++) {
                    if (s !== i && s > i) {
                        // if (newObject[s][1].includes(newObject[i][1][k])) {
                        //     newObject[i][1].splice(k,1);
                        // }
                        if (newObject[s][1].includes(newObject[i][1][k]) && s > i) {
                            newObject[i][1].splice(k,1);
                        }
                        //console.log('1'+newObject);
                    }else{
                        //console.log('2'+newObject);
                        //s == i
                        for (let index = 0; index < newObject.length; index++) {
                            if (s == index) {
                                continue;
                            }else if(newObject[index][1].includes(newObject[i][1][k]) && s > i){
                                newObject[i][1].splice(k,1);
                            }
                            
                        }
                        
                    }
                    
                }
            }
            //console.log(indexArr)
        
        }
        
    }
    return Object.fromEntries(newObject);
}

module.exports = removeDuplicates;

