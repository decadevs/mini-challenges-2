
function isolateDuplicates(text) {
  let identical = [];
  let arrDuplicates = [];

    if (typeof text !== "string") {
      throw new Error("Please enter a valid string");
    } else {

        let currentValues = [];
        let totalDuplicates = 0;

      for (let i = 0; i < text.length; i++) {
        let suffix = text[i - 1 ]
        let prefix = text[i + 1]
        if (String(text[i]).toUpperCase() == String(prefix).toUpperCase()
        || String(text[i]).toUpperCase() == String(suffix).toUpperCase()
        ) {
          if (arrDuplicates.length < 2) {
            arrDuplicates.push(text[i]);
            if (arrDuplicates.length == 2)
            {
              currentValues += arrDuplicates[0];
              currentValues += arrDuplicates[1];
           }
        } else if (String(text[i]).toUpperCase() != String (suffix).toUpperCase() &&
          String(text[i]).toUpperCase() ==  String(prefix).toUpperCase())
        {
          arrDuplicates = [];
          arrDuplicates.push(text[i]);
        } else if (String(text[i]).toUpperCase() == String(suffix).toUpperCase() &&
        String(text[i]).toUpperCase() != String(prefix).toUpperCase())
        {
          identical += text[i];
          currentValues += "[" + identical + "]";
          totalDuplicates++;
          identical= "";
        } else {
          identical += text[i];
        }
        }else{
          currentValues += text[i];
        }
    }
   return [currentValues, totalDuplicates];
  }
}

module.exports = isolateDuplicates;