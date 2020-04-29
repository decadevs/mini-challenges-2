function isolateDuplicates(text) {

  // storing input in str
  let str = text;

  // checking if not string then throws error else continues
  if (typeof str !== "string") {
    throw "Please enter a valid string";
  } else {

    // making string uppercase to deal with case sensitivity
    let strUpper = str.toUpperCase();
    let arr = [];
    let subStr = "";

    // for loop for grouping similar characters as string words
    for (let i = 0; i < str.length; i++) {
      if (strUpper[i] !== strUpper[i + 1]) {
        subStr += str[i];
        arr.push(subStr);
        subStr = "";
      } else if (strUpper[i] === strUpper[i + 1]) {
        subStr += str[i];
      }
    }

    // code for keeping first two letters of each word and bracket the rest
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
