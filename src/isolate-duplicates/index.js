function isolateDuplicates(text) {
    if (typeof text !== "string") {
        return "Please enter a valid string"
    }
    let arr = text.split("");
    let newArr = [...new Set(arr)];
    
    let newArr1 = newArr.map(txt => txt.repeat(count(txt))); 
    let newArr2 = [];

    for (let i = 0; i < newArr1.length; i++) {
        if (newArr1[i].length > 2) {
            newArr2.push(newArr1[i].substring(0, 2) + "[" + newArr1[i].substring(2, newArr1[i].length) + "]")
        }else {
            newArr2.push(newArr1[i]);
        }
}
    function count(chr) {
        let str = text;
        let strl = str.length;
        for (i = l = 0; i < strl; i++) {
            if (str[i] === chr) {
                l++;
            }
        }
        
        return l;
    }
     let newStr = newArr2.join('')
     let counts =  newStr.match(/]/g).length;

    let newArr3 = [];
    newArr3.push(newStr);
    newArr3.push(counts);
    return newArr3;
    
     }

module.exports = isolateDuplicates;
