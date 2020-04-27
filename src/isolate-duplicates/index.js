function isolateDuplicates(text) {

    // if (typeof text !== "string") {
    //   return "Please enter a valid string";
    // }

    try {
         let count = 0;
         let indexString = "";
         let duplicateCount = 0;
         let returned = [];
         let textCopy = text.toUpperCase();

         textCopy.split('').forEach((element, index, array) => {
           let prev = array[index - 1];
           let next = array[index + 1];
           let toClose = false;

           duplicateCount += 1;

           if (duplicateCount > 2) {
             if (element == prev) {
               if (duplicateCount == 3) {
                 indexString += "[";
                 count += 1;
               }
               if (element !== next) {
                 toClose = true;
               }
             }
           }

           if (element !== next) {
             duplicateCount = 0;
           }

           indexString += text[index];

           if (toClose == true) {
             indexString += "]"
             duplicateCount = 0;
             toClose = false;
           }

         });

         returned.push(indexString, count);
         return returned;
         
    } catch (error) {
        //return "Please enter a valid string";
        throw ("Please enter a valid string");
    }
   
}

module.exports = isolateDuplicates;
