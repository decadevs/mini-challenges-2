let diff = (arr1,arr2) =>  arr1.filter(el=> !arr2.includes(el));
 
function removeDuplicates(obj) {
    const KEYS = Object.keys(obj);
    const SIZE = Object.keys(obj).length;

    //sanitize : remove duplicate from individual arrays
    for(let key of Object.keys(obj)){
        obj[key] = [...new Set(obj[key])]
    }
    // difference between current and other array
    for(let i = 0 ; i < SIZE; i++){
        for(let j = i + 1 ; j < SIZE; j++){
            obj[KEYS[i]] = (diff(obj[KEYS[i]],obj[KEYS[j]]))
        }
    }
    return obj;

}

 
module.exports = removeDuplicates;
