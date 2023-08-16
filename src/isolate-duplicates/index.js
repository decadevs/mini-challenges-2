function isolateDuplicates(text) {
    if (text === undefined) {
        throw new Error("Input is undefined");
    }
    if (text.length === 0) {
        throw new Error("Please enter a valid string");
    }

    let newArr = [];
    let dupArr = [];
    let count = 0;
    let lower = text.toLowerCase();
    
    for (let i = 0; i < lower.length; i++) {
        if (lower[i - 1] === lower[i] && lower[i - 2] === lower[i]) {
            dupArr.push(text[i]);
        } else {
            if (dupArr.length !== 0) {
                count += 1;
                dupArr = dupArr.join("");
                newArr.push(`[${dupArr}]`);
            }
            if (text[i] !== undefined) {
                newArr.push(text[i]);
            }
            dupArr = [];
        }
    }

    if (dupArr.length !== 0) {
        count += 1;
        dupArr = dupArr.join("");
        newArr.push(`[${dupArr}]`);
    }

    return [newArr.join(""), count];
}
    
module.exports = isolateDuplicates;
