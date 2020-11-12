function isolateDuplicates(text) {
    let arr = text.split("");
    let newArr = [...new Set(arr)];
    
    return newArr.map(txt => txt.repeat(count(txt)));
    
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

}

    


module.exports = isolateDuplicates;
