// function isolateDuplicates(text) {
// if (typeof text !== "string") {
//     return "Please enter a valid string"
// }
//     let arr = text.split("");
//     let newArr = [...new Set(arr)];

//     let newArr1 = newArr.map(txt => txt.repeat(count(txt))); 
//     let newArr2 = [];

//     for (let i = 0; i < newArr1.length; i++) {
//         if (newArr1[i].length > 2) {
//             newArr2.push(newArr1[i].substring(0, 2) + "[" + newArr1[i].substring(2, newArr1[i].length) + "]")
//         }else {
//             newArr2.push(newArr1[i]);
//         }
// }
//     function count(chr) {
//         let str = text;
//         let strl = str.length;
//         for (i = l = 0; i < strl; i++) {
//             if (str[i] === chr) {
//                 l++;
//             }
//         }

//         return l;
//     }
//      let newStr = newArr2.join('')
//      let counts =  newStr.match(/]/g).length;

//     let newArr3 = [];
//     newArr3.push(newStr);
//     newArr3.push(counts);
//     return newArr3;

//      }


function isolateDuplicates(text) {
    if (typeof text !== "string") throw Error("Please enter a valid string")
    let newText = text[0];
    let prev = text[0];
    let totalCount = 0;
    let count = 1;
    for (let l of text.slice(1)) {
        if (l.toLowerCase() !== prev.toLowerCase()) {


            //   newText += count < 3 ? "l" : `]${l}`;
            if (count < 3) {
                newText += l;
            } else {
                newText += `]${l}`;
            }

            //   } if (count < 2) {

            count = 1;
        } else {
            count += 1;
            if (count === 3) {
                newText += `[${l}`;
                totalCount += 1;
            }

            else {
                newText += l
            }
        }
        prev = l;
    }

    if (count > 2) newText += "]"

    return [newText, totalCount]
}


module.exports = isolateDuplicates;
