function removeDuplicates(obj) {
    const objSort = {};
    let arrayOfSingleLetters=[];
    let totalString= "";
    let arrayOfDupLetters=[];
    let arrayOfIndexes= [];
    let str;
    //sort the objects according to the keys(numerically)
    //array of keys of he obj
    let arrayOfKeys= Object.keys(obj);
    //convert to string
    arrayOfKeys.forEach((x)=> {
        objSort[x]=obj[x].join("");
    })
    // loop through and replace the duplicates chars in each strings of the object
    for (let j=0; j<arrayOfKeys.length; j++){
        arrayOfSingleLetters=[];
        str= objSort[arrayOfKeys[j]];
        for (let i=0; i<objSort[arrayOfKeys[j]].length; i++){
            if (!arrayOfSingleLetters.includes(objSort[arrayOfKeys[j]][i])){
                arrayOfSingleLetters.push(str[i]);
            }
            else{
                //remove all occurences except the first for each strings
                str= (str.slice(0,str.indexOf(str[i])+1) + str.slice(str.indexOf(str[i])+1,str.length).replaceAll(str[i],"")) ;
                objSort[arrayOfKeys[j]]=str;
                // return str
            }
        }
        //array of all the strings left
        totalString+=objSort[arrayOfKeys[j]];
    }
    //for each value in the strings
    arrayOfSingleLetters=[];
    for (let j=0; j<arrayOfKeys.length; j++){
        for(let i=0; i<objSort[arrayOfKeys[j]].length; i++){
            //add letter to arrayofsingleletters if it hasnt been seen
            if(!arrayOfSingleLetters.includes(objSort[arrayOfKeys[j]][i])){
                arrayOfSingleLetters.push(objSort[arrayOfKeys[j]][i]);
                //keep the index of the array containing the letters in this array
                arrayOfIndexes.push(j)
            }
            //if the letter has been seen before, 
            else{
                arrayOfDupLetters.push(objSort[arrayOfKeys[j]][i])
                //index of elem in singleletter
                objSort[arrayOfKeys[arrayOfIndexes[arrayOfSingleLetters.indexOf(objSort[arrayOfKeys[j]][i])]]]= objSort[arrayOfKeys[arrayOfIndexes[arrayOfSingleLetters.indexOf(objSort[arrayOfKeys[j]][i])]]].replace(objSort[arrayOfKeys[j]][i],"") 
                //update the index of the array containing the duplicate letter to the last occurence
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
