function isolateDuplicates(text) {
    if (!text) {
        return '';
    }
    if (typeof(text) !== 'string') {
        return "Please enter a valid string";//Please enter a valid string
    }else{
        var arr = [];
        var str = '';
        var answer = [];
        var textArray = text.split('');
        //console.log(textArray)
        while (textArray.length > 0) {
            var i = 0;
            var testString = textArray[i];
            var regex = new RegExp(`${testString}{3,}`,'gi');
            var result = regex.test(text);
            if (result === true && (textArray[i].toLowerCase() == textArray[i+1].toLowerCase()) && (textArray[i].toLowerCase() == textArray[i+2].toLowerCase())) {
                var result2 = textArray.join('').match(regex);
                var num = result2[0].length;
                str += textArray[i];
                str += textArray[i+1];
                str += '[';
                //str += textArray[i].repeat(num - 2);
                for (let p = 0; p < Number(num - 2); p++) {
                    str += textArray[p+2];
                    
                }
                // while (Number(num - 2) > 0) {
                //     str += textArray[i+2]
                // }
                str += ']';
                textArray.splice(0,num);
            }else{
                str += textArray[i];
                textArray.shift();
            }
            
        }
    
        var counter = 0;
        for (let z = 0; z < str.length; z++) {
            if (str[z] == '[') {
                counter ++;
            }
            
        }
        answer.push(str);
        answer.push(counter);
    
        return answer;
        
    }

}

module.exports = isolateDuplicates;

//console.log(isolateDuplicates('ssssssssssssssssssss'))//boooopdedp

//var regex = new RegExp(`t{3,}`,'gi')
//console.log(regex.test('TttTTTTttttTTTTTTIIIIIiiiiiiiSSSSSSSSSTTTTAAAAAAAAAaaaaaaaaaSSSSSSSSSSKKKKKkkkkkk'))