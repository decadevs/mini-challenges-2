function removeDuplicates(obj) {
    let result = {}; // object will store the filtered arrays for each key.
    let accumulator = [] // array will keep track of all unique values encountered across the arrays in the object keys
    let objKey = Object.keys(obj); //Gets an array of all the keys sorted in ascending order


   for(let i = objKey.length -1; i >= 0; i--){ //iterate over the keys of the object in reverse order to ensure numerically higher keys hold most occuring values
        let keyValues = obj[objKey[i]]; // gets values associated with the current key
        let filteredVals= []; // array to temporarily hold filtered values of current key

        for(let j = 0; j < keyValues.length;j++){ // loop iterates over each value in the keys array
            if(!accumulator.includes(keyValues[j])){ //Checks if the current value is not already present in the accumulator array.
                accumulator.push(keyValues[j]); // If the value is unique, it is pushed into the accumulator array 
                filteredVals.push(keyValues[j]); // The unique value is also pushed into the filteredVals array for the current key.
            }
        }

        result[objKey[i]] = filteredVals; // Assigns the filteredVals array to the current key in the result object. then empties filterdVals
    }
    return result;
}

module.exports = removeDuplicates;
