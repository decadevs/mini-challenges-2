function isolateDuplicates(text) {
/*
    1.  put in a try block to catch unexpected error
        2.  loop through str and seperate according to similar characters not minding cases
        3.  define finalStr as empty str
        4.  define countDuplicate as 0, pair as empty str, evaluator as empty str
        5.  loop through seperated sequence
        6.  for each sequence of similar characters
            1.  if the length of the characters in the sequence > 1
                computer pair as first item and second item 
                computer duplicate as substring of sequence after second item to the length of the current sequence

                if computed duplicate? concatenate pair and computed duplicate to final str
                increment countDuplicate
                else concatenate pair to final str

            2. if length of the characters < 1
                concatenate the character with final str
        
            continue next sequence
        7. return finalStr,countDuplicate
    2. Catch error        
*/

try{
    let similarStr = "";
    let similarStrSequence = [];
    let firstItem = "";
    let secondItem = "";
    let finalStr="";
    let countDuplicate=0
    let duplicate=""
    let pair=""
     for (let i = 0; i < str.length; i++) {
       firstItem = str[i].toLowerCase();
       if (str[i + 1]) {
         secondItem = str[i + 1].toLowerCase();
       } else {
         secondItem = "";
       }
       if (firstItem === secondItem) {
         similarStr += str[i];
       } else {
         similarStr += str[i];
         similarStrSequence.push(similarStr);
         similarStr = "";
       }
     }

     let i=0;
     let j=0;
     while(i<similarStrSequence.length){
         if(similarStrSequence[i].length>1){
             duplicate=similarStrSequence[i].substr(2,similarStrSequence[i].length)
             pair=similarStrSequence[i][0]+similarStrSequence[i][1]

             if(duplicate.length===0){
                 //this means no duplicate found
                 finalStr=finalStr+ pair
             }
             else{
                 //duplicate was found
                 finalStr=finalStr + pair + "[" + duplicate + "]"
                 countDuplicate+=1
             }
         }

     }






}
catch(err){
    return "Please enter a valid string"


}


                                 
}

module.exports = isolateDuplicates;
