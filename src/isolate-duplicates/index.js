function isolateDuplicates(text) {
  let similarLetters = [];
  let arrayOfDuplicates = [];

    if (typeof text !== "string") {
      throw new Error("Please enter a valid string");
    } else {

        let finalValues = [];
        let totalDuplicates = 0;

      for (let i = 0; i < text.length; i++) {
        let oneIndexBack = text[i - 1 ]
        let anIndexForward = text[i + 1]
        if (String(text[i]).toUpperCase() == String(anIndexForward).toUpperCase()
        || String(text[i]).toUpperCase() == String(oneIndexBack).toUpperCase()
        ) {
          if (arrayOfDuplicates.length < 2) {
            arrayOfDuplicates.push(text[i]);
            if (arrayOfDuplicates.length == 2)
            {
              finalValues += arrayOfDuplicates[0];
              finalValues += arrayOfDuplicates[1];
           }
        } else if (String(text[i]).toUpperCase() != String (oneIndexBack).toUpperCase() &&
          String(text[i]).toUpperCase() ==  String(anIndexForward).toUpperCase())
        {
          arrayOfDuplicates = [];
          arrayOfDuplicates.push(text[i]);
        } else if (String(text[i]).toUpperCase() == String(oneIndexBack).toUpperCase() &&
        String(text[i]).toUpperCase() != String(anIndexForward).toUpperCase())
        {
          similarLetters += text[i];
          finalValues += "[" + similarLetters + "]";
          totalDuplicates++;
          similarLetters= "";
        } else {
          similarLetters += text[i];
        }
        }else{
          finalValues += text[i];
        }
    }
   return [finalValues, totalDuplicates];
  }
}



module.exports = isolateDuplicates;
