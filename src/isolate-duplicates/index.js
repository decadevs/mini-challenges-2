function isolateDuplicates(text) {

    if (typeof text === 'string' || text instanceof String){
        answer = [];
        count = 0;
        let stringReformed = text.replace(/(([a-zA-Z])\2)(\2+)/gi, "$1[$3]");

        for (let char of stringReformed) {
            if (char === "[" || char === "]") {
            count++;
            }
        }
        answer.push(stringReformed);
        answer.push(count / 2);
        return answer;
    }else {
        throw "Please enter a valid string"
    }
}

module.exports = isolateDuplicates;
