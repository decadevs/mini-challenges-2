function isolateDuplicates(text) {
    let count = 0;
    let newArr = [];
    let duplicatesArr = [];

    // check if argument is a string and length more than zero
    if (text.length === 0) {
        throw Error("Please enter a valid string");
    }
     if (typeof text !== 'string'){
        throw Error('Please enter a valid string')
     }

    let capArr = text.toLowerCase(); // check case sensitivity

    let textArr = capArr.split(''); // convert string to array

    for(let i = 0; i < textArr.length + 1; i++){
      
        if(textArr[i -1] === textArr[i] && textArr[i -2] === textArr[i]){ 
            duplicatesArr.push(text[i]);   //check if occurrence of character is more than two in a sequence then push >2 into duplicate array
        }else{
            if(duplicatesArr.length !== 0){
                count +=1; // for every duplicate array increase count
                duplicatesArr = duplicatesArr.join(''); // convert entire array to string
                duplicatesArr = `[${duplicatesArr}]`;  //group strings as an array
                newArr.push(duplicatesArr); // push duplicate array into next index of new array
            }
            newArr.push(text[i]); // if item is unique or first character push directly into new array
            duplicatesArr = []; // empty duplicates array, until another occurence of more than two characters in a sequence
        }
    }

    let strLength = newArr.length
    if(newArr[strLength - 1] === undefined){
        newArr.splice(strLength, 1);  // if last character in new array is equal to undefined, remove from array.
    }
    
    newArr = newArr.join(''); // convert final array to string
    return [newArr, count];
  }


module.exports = isolateDuplicates;
