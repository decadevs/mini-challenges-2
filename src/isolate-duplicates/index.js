function isolateDuplicates(text) 
{
    if(typeof text !== "string")
    {
        return "Please enter a valid string";

    }
    // Initialise an object to hold array data
    const dataStore = {};
    // Array to hold sorted duplicates
    let newArray = [];
    // Sort the elements of the array
    console.log(text);
    text = Array.from(text);
    text.sort();
    console.log(text);
    // Initialise the array duplicate
    let duplicate = text.map((element)=> element);
    // Iterate over original array
    for (let i = 0; i < text.length; i++)
    {
        let dataStoreKeyCounter = 0;
        if ((Object.hasOwn(dataStore, text[i])) !== true)
        {
            for (let j = 0; j < duplicate.length; j++)
            {
                if (text[i] == duplicate[j])
                {
                    dataStoreKeyCounter++;
                }
            }
            dataStore[text[i]] = dataStoreKeyCounter;
            
        }
        
    }

    // Intialize a duplicate counter
    let duplicateCounter = 0;
    // Count the number of duplicates
    for(data in dataStore)
    {
        if (dataStore[data] > 2)
        {
            duplicateCounter++; 
            
        }
    }

    // Iterate over dataStore
    for (data in dataStore)
    {
        // Push in data that does not duplicate
        if(dataStore[data] < 2)
        {
           newArray.push(data);
           console.log(newArray)
            
        }
        // Push in data that duplicates
        else if (dataStore[data] > 2 ) 
        {
            newArray.push(data);
            // Reduce property value
            dataStore[data]--;
            newArray.push(data);
            dataStore[data]--;
            // Push in an open square bracket after two iterations
            newArray.push('[');
            while(dataStore[data] !== 0)
            {
                newArray.push(data);
                dataStore[data]--;
            }
            // Close with a closing square bracket after successful iteration 
            newArray.push(']');
        }
    }

    console.log(dataStore)
    console.log(newArray)
    newArray = newArray.join('');
    newArray = newArray.split();

    newArray.push(duplicateCounter);

    
    console.log( newArray);
    // let newArr = [];
    // for ( )
    // newArray = newArray.replace(/[' "]+g/, ' ')
    // newArray = JSON.parse("[" + newArray.join() + "]");
    return newArray;
}


isolateDuplicates("hellllloooooodeeeecadevvsss");
isolateDuplicates("TttTTTTttttTTTTTTIIIIIiiiiiiiSSSSSSSSSTTTTAAAAAAAAAaaaaaaaaaSSSSSSSSSSKKKKKkkkkkk");
isolateDuplicates('HEEEELLLLLOOOOOOOTHHHHHEEEEERRRREEE');

module.exports = isolateDuplicates;
