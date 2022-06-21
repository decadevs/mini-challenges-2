function removeDuplicates(obj) {
    const keys = Object.keys(obj);
    const isDuplicate = {};
    let dummy = [];

    keys.reverse().forEach((key) => {

        obj[key] = [...new Set(obj[key])];
        obj[key].forEach((char) => {
            if (!isDuplicate[char]) {
                isDuplicate[char] = true;
                dummy.push(char);
            }
        });
        obj[key] = dummy;
        dummy = [];
    });
    return obj;
}
module.exports = removeDuplicates;