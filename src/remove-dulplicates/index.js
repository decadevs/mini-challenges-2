function removeDuplicates(obj) {
    const objSort = {};
    let arrayOfSingleLetters=[];
    let totalString= "";
    let arrayOfDupLetters=[];
    let arrayOfIndexes= [];
    let str;
    
    let arrayOfKeys= Object.keys(obj);
    
    arrayOfKeys.forEach((x)=> {
        objSort[x]=obj[x].join("");
    })
    
    for (let j=0; j<arrayOfKeys.length; j++){
        arrayOfSingleLetters=[];
        str= objSort[arrayOfKeys[j]];
        for (let i=0; i<objSort[arrayOfKeys[j]].length; i++){
            if (!arrayOfSingleLetters.includes(objSort[arrayOfKeys[j]][i])){
                arrayOfSingleLetters.push(str[i]);
            }
            else{
               
                str= (str.slice(0,str.indexOf(str[i])+1) + str.slice(str.indexOf(str[i])+1,str.length).replaceAll(str[i],"")) ;
                objSort[arrayOfKeys[j]]=str;
              
            }
            
            
        }
        
        totalString+=objSort[arrayOfKeys[j]];
    }
    
   
    arrayOfSingleLetters=[];
    for (let j=0; j<arrayOfKeys.length; j++){
        for(let i=0; i<objSort[arrayOfKeys[j]].length; i++){
           
            if(!arrayOfSingleLetters.includes(objSort[arrayOfKeys[j]][i])){
                arrayOfSingleLetters.push(objSort[arrayOfKeys[j]][i]);
              
                arrayOfIndexes.push(j)
            }
            
            else{
                arrayOfDupLetters.push(objSort[arrayOfKeys[j]][i])
              
                objSort[arrayOfKeys[arrayOfIndexes[arrayOfSingleLetters.indexOf(objSort[arrayOfKeys[j]][i])]]]= objSort[arrayOfKeys[arrayOfIndexes[arrayOfSingleLetters.indexOf(objSort[arrayOfKeys[j]][i])]]].replace(objSort[arrayOfKeys[j]][i],"") 
               
                arrayOfIndexes[arrayOfSingleLetters.indexOf(objSort[arrayOfKeys[j]][i])] = j;
            }
        }
    }
    
    //convert back to arrays
    arrayOfKeys.forEach((x)=> {
        objSort[x]=objSort[x].split("");
    })
    
    return(objSort)
}

module.exports = removeDuplicates;
