function removeDuplicates(obj) {

    let arrayOfKeys = Object.keys(obj).slice(); // copy all the keys in the input object

    let referenceKey = []; 

    const output = {};

    let sortedKeys = arrayOfKeys.sort((a,b) => a + b).reverse(); // sort the copied keys and reverse the order
    
    sortedKeys.map(key => {

    let arr = [];

    obj[key].map(Value => {//access the value of each key in the input object

        if(!referenceKey.includes(Value)){//look up each value in referenceKey

            arr.push(Value);//store the obj key values not in referenceKey
        }
        referenceKey.push(Value) // update referenceKey array
    });
    output[key] = arr
});
   return output;
}

module.exports = removeDuplicates;

