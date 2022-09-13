function isolateDuplicates(text) {
    if(typeof text != "string" && !(text.hasOwnProperty("substr"))){
        return "Please enter a string";
    }

    let no_of_duplicates = 0;
    let charString = "";
        
    for(let i = 0; i < text.length; i++){
        let str_ = "";
            
           
        if(text.substr(i,2) == text.substr((i+2),2)){
            //found a duplicate of more than one
                no_of_duplicates++;
                let no_of_repeats = 0; 
                let k = i; 
                let repeat_chars = "";
                while(text[k] == text[i]){
                    no_of_repeats++;
                    k++;
                    repeat_chars += text[k];
                }
                no_of_repeats -= 2; // removes first two
                i += no_of_repeats + 1; // jump to the next iteration after all repeats
                
                
                str_ = text[i].repeat(2)+"["+ text[i].repeat(no_of_repeats)+"]";
                
        }else{
            str_ = text[i];
        }
        charString += str_;

    }
    console.log(charString + " and "+ no_of_duplicates);
    return [charString, no_of_duplicates];
}

console.log(isolateDuplicates)
module.exports = isolateDuplicates;
