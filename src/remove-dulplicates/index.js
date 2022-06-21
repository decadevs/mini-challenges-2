function removeDuplicates(obj){
    var keys = Object.keys(obj)

    keys.sort(( a, b ) => b - a ); // Sort obj in decending by keys in decending order

    const duplicates = new Set(); // create a new object to store unique values 
    sortedObj = {};
    
    for(let i = 0; i < keys.length; i++){

        for(let j = 0; j< obj[keys[i]].length; j++){ 
            
            if(sortedObj[keys[i]] === undefined){ 
                sortedObj[keys[i]]  = []; // Create an empty array of value
            }
            
            if(!duplicates.has(obj[keys[i]][j])){ // If property doesn't exist in new object
                duplicates.add(obj[keys[i]][j]); // Add property to object
                
                sortedObj[keys[i]][j] = obj[keys[i]][j]; // Copy keys and property into new Object
            }
        }
        
        filterEmptySpaceValues = sortedObj[keys[i]].filter(value => {
            return value != undefined
        })
        
        sortedObj[keys[i]] = filterEmptySpaceValues
    }
    return sortedObj
}

module.exports = removeDuplicates;
