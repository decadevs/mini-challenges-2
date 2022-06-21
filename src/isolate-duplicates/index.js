function isolateDuplicates(text) {
    let strNew = "";
    let mult = {};
    let counter = 0;

    if (typeof text !== "string") {
        throw new Error("Please enter a valid strings")
    } else {
        const str = text.toUpperCase();

        for (let i = 0; i < text.length; i++) {
            if (str[i].repeat(2) === str[i - 2] + str[i - 1]) {

                if (!mult[str[i]]) {
                    mult[str[i]] = text[i];
                } else {
                    mult[str[i]] += text[i]
                }

                if (str[i] !== str[i + 1]) {
                    strNew += "[" + mult[str[i]] + "]";
                    counter += 1;
                    mult = {};
                }
            } else { strNew += text[i]; }
        }
        return [strNew, counter]
    }
}
module.exports = isolateDuplicates;