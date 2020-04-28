function removeDuplicates(obj) {
    if (typeof obj !== "object") {
        throw "Please provide valid object";
    }

    if (obj === {}) {
        return {};
    }

    let objKeys = Object.keys(obj).sort(function(a, b){return b - a}); // Array of all the object keys in descending order
    const OBJ_VALUES_SET = new Set(Object.values(obj).join()); // Set of all the object values
    let objValuesSet = Array.from(OBJ_VALUES_SET);

    // variables to be used later
    let key;
    let newObj = {};
    let index;

    while (objKeys.length > 0) {
        key = objKeys[0];
        objKeys.shift();
        newObj[key] = [];

        for (let i = 0; i < obj[key].length; i++) {

            // check if object values is in the setValue array
            if (objValuesSet.includes(obj[key][i])) {

                newObj[key].push(obj[key][i]);
                index = objValuesSet.indexOf(obj[key][i]);
                objValuesSet.splice(index, 1);  // remove the object value from setValue to ensure it appears once
            }
        }

    }
    return newObj;
}

module.exports = removeDuplicates;
