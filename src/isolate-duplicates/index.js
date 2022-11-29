function isolateDuplicates(text) {
  let count = {};
    for (let i = 0; i < str.length; i++) {
        count[str[i]] = 0;
    }

    for (let i = 0; i < str.length; i++) {
        count[str[i]]++;
    }

    for (let it in count) {
        if (count[it] > 1)
            document.write(it + ", count = " + count[it] + "<br>");
    }
}
/* Driver code*/
var str = "test string";
return str;

module.exports = isolateDuplicates;
