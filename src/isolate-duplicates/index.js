function isolateDuplicates(text) {
/*
    1.  put in a try block to catch unexpected error
        2.  loop through str and seperate according to similar characters not minding cases
        3.  define finalStr as empty str
        4.  define countDuplicate as 0
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

}
catch(err){
    return "Please enter a valid string"


}


                                 
}

module.exports = isolateDuplicates;
