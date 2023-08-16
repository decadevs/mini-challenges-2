function isolateDuplicates(text) {
    
    if (text === undefined){
        throw Error();
       }   
       if (text.length === 0) {
        throw Error ("Please enter a valid string");
       }
       let firstArr = [];
       let secondArr = [];
       let count = 0;
       let str = text.toLowerCase();
      
       for (let i = 0; i < str.length + 1; i++) {
        if (str[i - 1] === str[i] && str[i - 2] === str[i]) {
          secondArr.push(text[i]);
        }
        else {
          if (secondArr.length !== 0) {
            count += 1;
            secondArr = secondArr.join("");
            //secondArr.push
            firstArr.push(`[${secondArr}]`);
          }
          if (secondArr.length !== undefined){
            firstArr.push(text[i]);
          }
          secondArr = [];
        }
      }
      if (secondArr.length !== 0){
        count += 1;
        secondArr = secondArr.join("");
        firstArr.push(`[${secondArr}]`)
      }
      return [firstArr.join(""), count]
      }
    
let userInput = "hellllloooooodeeeecadevvsss" //prompt("Enter a string:");
    let result = isolateDuplicates(userInput);
    
    console.log(result);


module.exports = isolateDuplicates;
