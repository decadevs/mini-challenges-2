function isolateDuplicates(text) {
    if (typeof(text) != "string"){
        throw "Please enter a valid string";
    }
    else{
        let splittedString = text.split('');
        let frequency = 0;
        let insertions = 0;
        for (let i = 0; i < splittedString.length; i++){
            let letter1 = splittedString[i];
            let letter2 = splittedString[i + 1];
            const string1 = convert(letter1);
            const string2 = convert(letter2);
            if (string1 === string2){
                frequency++;
                if (frequency == 2){
                    splittedString.splice(i + 1, 0, '[');
                    frequency++;
                    i++;
                    insertions++
                }
                
            } 
            else if (frequency > 2 ){
                if (string1 != string2){
                    splittedString.splice(i + 1, 0, ']');
                    i++;
                    insertions++
                    frequency = 0;
                }
            }
            else {
                frequency = 0;
            }
        }
        let result = [splittedString.join(''), insertions /2]
        return result;
    }
}

function convert(str){
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < uppercase.length; i++){
        if (uppercase[i] == str){
            return lowercase[i];
        }
        else if (lowercase[i] == str){
            return str;
        }
    }
}

module.exports = isolateDuplicates;
