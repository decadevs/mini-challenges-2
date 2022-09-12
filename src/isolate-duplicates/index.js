function isolateDuplicates(text) {
    if (typeof text !== "string") return "Please enter a valid string";
    let arr = [];
    let str = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i - 1] === text[i]) {
        str += text[i];
      } else {
        arr.push(str);
        str = text[i];
      }
      if (i === text.length - 1) {
        arr.push(str);
      }
    }
    return arr.map(v =>v.length > 2 ? v.slice(0, 2) + "[" + v.slice(2) + "]" : v).join``;
}


console.log(isolateDuplicates(`"aaaabbcdefffffffg"`))


module.exports = isolateDuplicates;
