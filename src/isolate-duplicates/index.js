function isolateDuplicates(text) { 
    let result = ""; 
    let count = 0; 
    if (typeof text !== "string") return "Please enter a valid string"; 
    //A FOR loop that will run until the end of the input "text". 
    for (let i = 0; i < text.length; i++) { 
    //Appending the current character in "text" to the "result" string. 
        result += text[i]; 
    //Checking if the current character is the same as the next character 
    //in "text". If they are the same, the "count" is incremented by 1. 
    if (text[i] === text[i + 1]) { 
        count++; 
    } 
    //Checking if "count" is equal to 2. If so, it adds "[" to the "result" string. 
    if (count === 2) { result += "["; } 
    //Checking if the current character is different from the next character 
    //and the "count" is greater than 1. If so, it adds "]" to the "result" 
    //string and resets the "count" to 0. 
    if (text[i] !== text[i + 1] && count > 1) { 
        result += "]"; 
        count = 0; 
    } 
    //Checking if the current character is different from the next character. 
    //If so, it resets the "count" to 0. 
    if (text[i] !== text[i + 1]) { 
        count = 0; } 
} 
return [result, count]; 
}
isolateDuplicates();

module.exports = isolateDuplicates;
