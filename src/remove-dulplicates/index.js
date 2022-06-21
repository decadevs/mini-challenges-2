function removeDuplicates(obj) {
for(const key in obj){
    let length = obj[key].length;
    let arr = [];
    for(let i=0; i<length; i++){
        if(!arr.includes(obj[key][i])) arr.push(obj[key][i])
    }
    obj[key] = arr;
    //console.log(obj[key]);
}

const keyArray = Object.keys(obj).sort((a,b)=>{a-b});
//console.log(keyArray);
//console.log(obj);


//This place is not yet fixed
let keyArrayLength = keyArray.length;
for(let i=keyArrayLength-1; i>0; i--){
    let arr1 = obj[keyArray[i]];

    let counter = 0;
    let arr2 = obj[keyArray[counter]];
    let arr3 =[];
    while(counter<i){
        if(!arr1.includes(arr2[i])) arr3.push(arr2[i]);
        // obj[keyArray[counter]] = arr1.filter(x=>!obj[keyArray[counter]].includes(x));
        counter++;
    }
    // for(let j = keyArrayLength -2; j>0; j--){
    //     let arr2 = obj[keyArray[j]];

    //     obj[keyArray[i]]= arr1.filter(x =>!arr2.includes(x));
    // }
}
console.log(obj[3])
console.log(obj[2])
console.log(obj[1])
}

module.exports = removeDuplicates;
