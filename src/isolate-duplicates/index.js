<<<<<<< Updated upstream
function isolateDuplicates(text) {}
=======
const { testResultsProcessor } = require("../../jest.config");
function isolateDuplicates(text) {
//loop through and check if a[i]==a[i+1]==a[i+2]
//if so push[a[i]+a[i+1]+"["+a[i+2]] i+=2
if(typeof(text)!="string"){
    throw "Please enter a valid string"
}
let result="";
let dupletters="";
let finalResult="";
let count=0;

    
    for (let i=2; i<text.length-1; i++){
        if( text[i].toLowerCase()!=text[i+1].toLowerCase() && text[i].toLowerCase()==text[i-1].toLowerCase() && text[i-1].toLowerCase()==text[i-2].toLowerCase()){
            finalResult+= text[i]+ "]";
        }
        else{
            finalResult+= text[i];
        }
    }
    finalResult= text[0] +text[1]+ finalResult + text[text.length-1]

    for (let i=1; i<finalResult.length-1; i++){
        if( finalResult[i].toLowerCase()==finalResult[i+1].toLowerCase() && finalResult[i+1].toLowerCase()==finalResult[i-1].toLowerCase() && finalResult[i].toLowerCase()!=dupletters[dupletters.length-1]){
            result+= finalResult[i]+ "["
            dupletters+=finalResult[i].toLowerCase();
            // i+=2;
            count++;
        }
        else{
            result+= finalResult[i]
        }
    }
    result= text[0]+ result + text[text.length-1]
    if (text[text.length-1]== text[text.length-2] && text[text.length-2]==text[text.length-3]){
        result+= "]";
    }
    // result= result.slice(1,result.length);
    return [result, count]
}
>>>>>>> Stashed changes

module.exports = isolateDuplicates;
