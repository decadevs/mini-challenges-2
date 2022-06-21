function isolateDuplicates(text) {
  if(typeof text !== "string") throw new Error("Please enter a valid string")
    let store= [];
    let count = 0;
    let duplicate = 0;
    let newText= text.toLowerCase();
    for(let i = 0; i< newText.length; i++)
    {
      store.push(text[i]);

      if(newText[i] == newText[i+1])
      {
        if(count === 1)
        {
          store.push("[")
          duplicate++
        }
        count++;
      }else if(newText[i] !== newText[i+1] && count>1|| i == newText.length -1 && count > 1)
      {
        count = 0;
        store.push("]");
      }
      else{
        count =0;
    }
  }
  return [store.join(""), duplicate]
}


module.exports = isolateDuplicates;
