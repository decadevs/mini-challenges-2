function removeDuplicates(obj) 
{
    // Sort the obj
    obj = sortFunction(obj);
    // Duplicate the object
    let duplicateObject = Object.assign({}, obj)
    // Iterate over obj
    for (let element in obj)
    {
        // Intialise my temporary arrays for storing object key values
        let tempArray = [];
        let duplicateTempArray = [];
        // Iterate over duplicateObject
        for ( duplicateElement in duplicateObject)
        {        
            // Compare the element with a succeeding duplicateElement
            if ( ( element !== duplicateElement ) && ( element !== Object.keys(obj).pop() ) )
            {   
                // Store object value 
                tempArray = obj[element];
                // Store duplicateObject value
                duplicateTempArray = duplicateObject[duplicateElement];
                // Iterate over tempArray
                for (let i = 0; i < tempArray.length; i++)
                {
                    // Iterate over duplicateTempArray
                    for (let j = 0; j < duplicateTempArray.length; j++)
                    {   
                        // Check if tempArray element matches duplicateTempArray elememnt
                        if( tempArray[i] == duplicateTempArray[j])
                        {   

                            tempArray.splice(i,1);
                            // Recheck if there are any further duplicates
                            for ( let i = 0; i < tempArray.length; i++ )
                            {
                                // Delete all further duplicates
                                if( tempArray[i] == duplicateTempArray[j])
                                {
                                    tempArray.splice(i, 1);
                                }
                            }
                        
                        }
                    }
                    obj[element] = tempArray;
                }
            }
        }

    }
    // Remove all repeating items in a key value
    for ( let element in  obj)
    {
        // Initialize temporary data stores 
        const arr = obj[element];
        const duplicateArr = arr; 
        // Iterate over arr
        for (let i = 0; i < arr.length; i++)
        {
            // Iterate over duplicateArr
            for (let j = 0; j < duplicateArr.length; j++)
            {
                // Remove duplicates from arr
                if ( (arr[i] == duplicateArr[j]) && ( i !== j) )
                {
                    // Delete duplicate at that index
                    duplicateArr.splice(j, 1);
                    
                }
                
            }
        }
        //  Remove duplicates in key value
        obj[element] = duplicateArr;
    }





    return obj; 
}



// My sort function
const sortFunction = (obj)=>{
return Object.keys(obj).sort().reduce((result, key)=>{
    result[key] = obj[key];
    return result;
}, {});
}



module.exports = removeDuplicates;
