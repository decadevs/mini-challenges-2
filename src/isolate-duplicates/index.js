function isolateDuplicates(text) {
    if (typeof(text) !== 'string') {
        return "Please enter a valid string";
    }else{
        var arr = [];
        var str = '';
        var answer = [];
        var textArray = text.split('');
        while (textArray.length > 0) {
            var i = 0;
            var testString = textArray[i];
            var regex = new RegExp(`${testString}{3,}`,'gi');
            var result = regex.test(text);
            if (result === true && textArray[i] == textArray[i+1] && (textArray[i] == textArray[i+2])) {
                var result2 = textArray.join('').match(regex);
                var num = result2[0].length;
                str += textArray[i].repeat(2);
                str += '[';
                str += textArray[i].repeat(num - 2);
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

//module.exports = isolateDuplicates;

console.log(isolateDuplicates('TttTTTTttttTTTTTTIIIIIiiiiiiiSSSSSSSSSTTTTAAAAAAAAAaaaaaaaaaSSSSSSSSSSKKKKKkkkkkk'))//boooopdedp
