function removeDuplicates(obj) {
    let rev = Object.keys(obj).reverse();

    let result = [];

    let newobj = {};

    for (let i = 0; i < rev.length; i++) {
        let newArray = [];

        for (let j = 0; j < obj[rev[i]].length; j++) {
            if (result.indexOf(obj[rev[i]][j]) === -1) {
                newArray.push(obj[rev[i]][j]);
            }

            result.push(obj[rev[i]][j]);
        }

        newobj[rev[i]] = newArray;
    }

    return newobj;

}

module.exports = removeDuplicates;