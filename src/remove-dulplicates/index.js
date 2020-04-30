function removeDuplicates(obj) {

    let keys = Object.keys(obj);
    let sorted = keys.sort((a, b) => a - b);
    let values = Object.values(obj);
    control = [];
    
    for (let i = values.length-1; i > -1; i--){
        
        let temp = [];
        let uniqArr = getUnique(values[i])
        values[i] = uniqArr;
        let len = values[i].length;
        for (let j = 0; j < len; j++){

            let string = checkControl(values[i][j], control)
            if (string != ''){
                temp.push(string);
            }

        }

        values[i] = temp;
        for (let x = 0; x < temp.length; x++){
            control.push(temp[x]);
        }

    }
    
    let result = {};
    for (let i = 0; i < values.length; i++){
        result[sorted[i]] = values[i];
    }

    return result;
}

function getUnique(arr){
    let unique = [...new Set(arr)];
    return unique;
}

function checkControl(string, controlArr){
    let check = false;
    for (let k = 0; k < controlArr.length; k++){
        if (string == controlArr[k]){
            check = true;
            break;
        }
        else {
            check = false
        }
    }
    if (check == false){
        return string;
    }
    else {
        return '';
    }
}


module.exports = removeDuplicates;
