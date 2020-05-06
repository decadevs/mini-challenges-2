function isolateDuplicates(text) 
{
    //if the parameter type is not a valid string throw an error 
    if(typeof text !== "string" || text === undefined)
    {
        return `Please enter a valid string`;
    }

    //variable to match any letter of alphabet
    const regexToValidateText = /[a-z]/i; //flag 'i' to ignore case
    
    //loop through the input text to check valid input
    for (let letter of text)
    {
        /*if you test any letter of the text and its not an alphabeth, throw 
        *an error prompting the user to enter a valid input to the function */
        if (!regexToValidateText.test(letter))
        {
            return `Please enter a valid string`;
        }
    }

    /*variable to match any zero or more group of sequential character 
    * using the wild card operator(i.e dot) */
    const regexRepeatedGroup = /(.)\1*/gi //flag 'i','g' to make it global and ignore case
    
    //initialized this array that will hold duplicate characters that will be isolated
    let duplicatesIsolate = [];
    
    //variable to hold number of character duplicates during isolation
    let counter = 0;

    //capture each letter group in the text uniquely
    let repeatedCharGroup = text.match(regexRepeatedGroup);

    //loop through the group of characters and do the following
    for (let letters of repeatedCharGroup)
    {
        if (letters.length > 2)
        {
            //split the letters
            splitLetters = letters.split("");

            //at index position 2, remove no(i.e 0) item, add an opening sqare bracket
            splitLetters.splice(2, 0, "[");

            //add closing square brackets to the end of the letters
            splitLetters.push("]");

            //add joined splitedLetters to the array of isolated duplicates
            duplicatesIsolate.push(splitLetters.join(""));

            //increment the counter to keep track of any change made.
            counter++;
        }
        else
        {
            //if the letters length is not upto three, add it like that to the array
            duplicatesIsolate.push(letters);
        }
    }

    /*the return format of the isolates duplicates as indicated 
     *in the README.md must be ["string", numOfDuplicates] */
    return  [duplicatesIsolate.join(""), counter];
}

module.exports = isolateDuplicates;