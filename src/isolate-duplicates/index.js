function isolateDuplicates(text) {
    let arr = text.split(''); 
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.length === 0) {
            newArr.push(arr[0]);
        } else if (newArr[newArr.length-1] !== arr[i]) {
            newArr.push(arr[i]);
        } else if (newArr[newArr.length-1] === arr[i]) {

        }
    } 
}

    


module.exports = isolateDuplicates;
