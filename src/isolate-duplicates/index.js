function isolateDuplicates(text) {
    if(typeof text != "string" && !(text.hasOwnProperty("substr"))){
        return "Please enter a string";
    }

    let no_of_duplicates = 0;

    for(let i = 0; i < text.length; i++){
        let char = text[i];
        let char_string = "";
        for(let j = i; j < text.length; j++){
            if(text.substr((j+1),2) == text.substr((j+3),2)){
            //found a duplicate of more than one
                no_of_duplicates++;
                let following_chars = "";
                let k = 0;
                while(text[k] != char){
                    following_chars += text[k];
                }
            }

        }
        if(following_chars != "["){
            t += text.substr(i,3) + "[" + following_chars + "]";
            char_string += t;
            //jump all the following duplicates
            i += following_chars.length;
        }else{
            char_string += text[i];
        }

        return [char_string, no_of_duplicates];
    }

}

module.exports = isolateDuplicates;
