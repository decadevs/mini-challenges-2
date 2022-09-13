function isolateDuplicates(text) {
    let outcome = [];
    let status = false;
    let count = 0
    for(let i=0; i<text.length; i++){
        if(outcome[outcome.length-1] === outcome[outcome.length-2] && text[i] === outcome[outcome.length-1] && status === false){
            outcome.push('[');
            status = true;
        }
        outcome.push(text[i])
        if(status && text[i] !== text[i+1]){
            outcome.push(']');
            count++
            status = false
        }
       
    }

    let output =[]
    output.push(outcome.join(''),count)
    return output




}


module.exports = isolateDuplicates;
