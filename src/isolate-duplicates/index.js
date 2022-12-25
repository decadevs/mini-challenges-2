function isolateDuplicates(text) {


        if(typeof text != "string" && !(text.hasOwnProperty("substr"))){
            return "Please enter a string";
        }
    
            let no_of_dup = 0;
        let chr_str = "";
            
        for(let i = 0; i < text.length; i++){
            let str_ = "";
                
               
            if(text.substr(i,2) == text.substr((i+2),2)){
                //found a duplicate of more than one
                    no_of_dup++;
                    let cycle_of_repeats = 0; 
                    let k = i; 
                    let repeat_chr = "";
                    while(text[k] == text[i]){
                        cycle_of_repeats++;
                        k++;
                        repeat_chr += text[k];
                    }
                    cycle_of_repeats -= 2; // removes first two
                        i += cycle_of_repeats + 1; // jump to the next iteration after all repeats
                    
                    
                    str_ = text[i].repeat(2)+"["+ text[i].repeat(cycle_of_repeats)+"]";
                    
            }
            else{
                str_ = text[i];
            }
            chr_str += str_;
    
        }
        console.log(chr_str + " and "+ no_of_dup);
        return [chr_str, no_of_dup];
    }
    
    console.log(isolateDuplicates("iiijjjjooooppppp"));
    
module.exports = isolateDuplicates;
