function isolateDuplicates(text) {
    // let textStr = text.split('')
    // let newText = []
    // console.log(textStr)
    // for(let i = 0; i < textStr.length; i++){
    //     console.log(textStr[i].match(/a/g))

    let newText = []
    let arrayFromstr = text.split("");
    let unique = Array.from(new Set(arrayFromstr));
        console.log(unique)

        for(let i = 2; i < unique.length; i++){
            console.log(unique[i])

            if(unique.length > 2){
                newText.push(unique[i])
                console.log(newText)
            }
        }
return `${unique} ${newText}`
   }


console.log(isolateDuplicates("aaaaaabbcdefffffg"))
module.exports = isolateDuplicates;
