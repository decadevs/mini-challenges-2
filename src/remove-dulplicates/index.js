function removeDuplicates(obj) {
	let arrKey = Object.keys(obj).sort((a, b) => b - a);
	const seen = [];
	const returnObj = {};

	for (let i = 0; i < arrKey.length; i++) {
		for (let j = 0; j < obj[arrKey[i]].length; j++) {

			if (!returnObj.hasOwnProperty(arrKey[i])) {
				returnObj[arrKey[i]] = [];
			}
			if (!seen.includes(obj[arrKey[i]][j])) {
				// console.log(returnObj[arrKey[i]].filter(e=> e))
				returnObj[arrKey[i]][j] = obj[arrKey[i]][j];
				seen.push(obj[arrKey[i]][j]);
			}
		}
	}

	//this filters empty array item
	for (let a in returnObj) {
		let newArr = returnObj[a].filter(a => a)

		returnObj[a] = newArr
	}

	// console.log(returnObj)
	return returnObj
}

// removeDuplicates({
// 	"1": ["C", "F", "G"],
// 	"2": ["A", "B", "C"],
// 	"3": ["A", "B", "D"],
// });

module.exports = removeDuplicates;
