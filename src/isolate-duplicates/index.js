function isolateDuplicates(text) {

    let arr = text.split('')
    let result = ""
    let alphabet = ""
    let count = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === arr[i + 1] && arr[i] !== arr[i - 1]) {
            result += arr[i]
            result += arr[i + 1]
            if (arr[i] === arr[i + 2]) {
                alphabet = arr[i]

                let hold = []
                for (let j = (i+2); j < arr.length; j++) {
                    if (arr[j] === alphabet) {
                        hold.push(arr[j])
                    }
                }
                result += `[${hold.join('')}]`
                count++

            }
        } else if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
            result += arr[i]
        }
    }

    return [result, count]

}

console.log(isolateDuplicates("aaaabbcdefffffffg"));

module.exports = isolateDuplicates;
