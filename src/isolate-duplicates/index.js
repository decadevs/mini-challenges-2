function isolateDuplicates(text) {
    if(typeof(text) !== 'string'){
        throw 'Please enter a valid string'
    }


let res = [];
let counter = 0; 
let total = 0;
text = text.split('');

for (let i = 0; i < text.length; i++) {
    res.push(text[i])
    if(text[i+1] != undefined &&  text[i].toLowerCase() === text[i+1].toLowerCase() ){
        counter ++
        if(counter == 2){
            res.push('[')
            total++
        }
    }else if(text[i+1] != undefined &&  text[i].toLowerCase() !== text[i+1].toLowerCase() || i == text.length-1){
        if(counter > 1){
            res.push(']')
        }
        counter = 0;
    }
    
}

   return [res.join(''), total]
}


module.exports = isolateDuplicates;
