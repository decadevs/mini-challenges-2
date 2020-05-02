function isolateDuplicates(text) {
    let str = "";
    let fullStr = "";
    let count = 0;
    array2 = [];
    if (!(typeof text === 'string')){
        throw("Please enter a valid string");
    }
    for (let i = 0; i < text.length; i++) {
        if(i + 1 < text.length) {
            if ( ( text.indexOf((text[i]).toUpperCase()) === text.indexOf((text[i+1]).toUpperCase())  ) && ( text.indexOf((text[i]).toLowerCase()) === text.indexOf((text[i+1]).toLowerCase()) ) ){
                str += text[i];
            } else{
                str += text[i];
                str += " ";    
            }
        }else{
            str += text[i];
        } 
    }
    let array = str.split(" ");
    for (let i = 0; i < array.length; i++) {
        str = array[i];
        if (str.length > 2) {
            count++;
            let str1 = str.substr(0,2);
            let str2 = "[" + str.substr(2) + "]" ;
            let newStr = (str1 + str2);
            fullStr += newStr;
        } else {
            fullStr += str;
        }
    }
    array2 = [fullStr, count];
    return array2;
}

module.exports = isolateDuplicates;
