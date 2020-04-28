function isolateDuplicates(text) {
  let str = text;
  if (typeof str !== "string") {
    throw "Please enter a valid string";
  } else {
    let strUpper = str.toUpperCase()
    let arr = [];
    let subStr = "";

    for (let i = 0; i < str.length; i++) {
      if (strUpper[i] !== strUpper[i+1]) {
        subStr += str[i];
        arr.push(subStr);
        subStr = "";
      } else if (strUpper[i] === strUpper[i + 1]) {
        subStr += str[i];
      }
    }


    let counter = 0;
    let container = [];
    let main = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 2) {
        let items =
          arr[i].slice(0, 2) + "[" + arr[i].slice(2, arr[i].length) + "]";
        counter++;
        container.push(items);
      } else {
        container.push(arr[i]);
      }
    }

    main.push(container.join(""));
    main.push(counter);
    return main;
  }
}


module.exports = isolateDuplicates;
