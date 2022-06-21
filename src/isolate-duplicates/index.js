function isolateDuplicates(text) {
    if(typeof text !== "string") throw ("The String is empty")
      let vals= [];            //[a a]
      let counter = 0;
      let duplicateCounter = 0;//0+1+1
      let newText= text.toLowerCase();                
      for(let i = 0; i< newText.length; i++)
      {
        vals.push(text[i]);  
        if(newText[i] == newText[i+1])
        {
          if(counter === 1) 
          {
            vals.push("[")
            duplicateCounter++
          }
          counter++;
        }else if(newText[i] !== newText[i+1] && counter >1|| i == newText.length -1 && counter > 1)
        {
          counter = 0;
          vals.push("]");
        }
        else{
          counter =0;
      }
    }
    return [vals.join(""), duplicateCounter]
  }
console.log(isolateDuplicates("dfghrtrytfkhgggggddccccjjh"))
  
  module.exports = isolateDuplicates;



