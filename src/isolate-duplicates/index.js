function isolateDuplicates(text) {
    if(typeof text === "string") {
        let textArray = text.split('');
        let textCopy = text.toLowerCase().split('');
        let count = 0;
        let array = [];
 
        for (let i = 0; i<textCopy.length; i++) {
            let letter = textCopy[i];
            let nextLetter = textCopy[i+1];
            let prev = textCopy[i-1];
            let bprev = textCopy[i-2];

            if (i === 0) {
                array.push(textArray[i]);
            }
            else if ((letter!==nextLetter) && (letter === prev) && (letter === bprev)) {
                array.push(textArray[i]);
                array.push("]");
                count++;
            } 
            else {
                array.push(textArray[i]);
            }    
        }
      
        let strg = array.toString().replace(/,/g,'');
        console.log(strg);
        let sCopy = array.toString().replace(/,/g,'').toLowerCase();
        let letterCount = 1;
        let str = "";
        for(let j=0; j<sCopy.length; j++) { 
            let letter = sCopy[j];
            let nxt = sCopy[j + 1];
        
            if((letter === nxt) ) { 
                letterCount++;
                str+=strg[j];
                if((letterCount === 3)) {
                   str += ("[");
                } 
            } 
            else {
                str+=strg[j]
                letterCount=1;
            }
        }
        const val = [str, count];
        return val;
    }
    else {
        throw Error("Please enter a valid string");
    }
}

module.exports = isolateDuplicates;
