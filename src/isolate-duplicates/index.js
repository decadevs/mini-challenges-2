function isolateDuplicates(text) {
	if (text === '' || typeof(text) !== 'string') {
		throw new Error("Please enter a valid string");
	}
	let str = ''
	let count = 0
	let copyText = text.slice()
	for (let i = 0; i < text.length;) {
		let pattern = '['+text[i]+']+'
		let regex = new RegExp(pattern, 'i');
		let match = copyText.match(regex)[0]
		let matchLen = match.length
		if(matchLen < 3) {
			str += match
		} else {
			++count
			str += match.slice(0,2)
			str += `[${match.slice(2,)}]`
		}
		i += match.length
		copyText = copyText.slice(match.length)
	}
	return [str, count]
}

module.exports = isolateDuplicates;