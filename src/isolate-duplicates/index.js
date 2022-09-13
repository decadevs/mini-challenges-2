function isolateDuplicates(text) {
    let wordCount = 0;
    let similarText = []
    let result = ""
    for (let i = 0; i < text.length; i++){
        if(text[i] === text[i + 1] && text[i] !== text[i - 1]){
            result += text[i];
            result += text[i + 1];
            if (text[i] === text[i + 2]){
                for (let j = i + 2; j < text.length; j++){
                    if (text[i] === text[j]){
                        similarText.push(text[j]);
                    }
                }
                wordCount++;
                result += `[${similarText.join()}]`;
            }         
        }
        else if(text[i] !== text[i + 1] && text[i] !== text[i - 1])
        {
            result += text[i];
        }
        return ([result, wordCount]);
}

}

module.exports = isolateDuplicates;
