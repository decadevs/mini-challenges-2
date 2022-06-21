function isolateDuplicates(text) {

	let counter = 0;
	let closeCounter = 0;
	let stringChar = '';
	let totalDuplicate = 0;
	let result = []

	if (typeof text === 'string') {
		// console.log("it is a string")
		for (let i = 0; i < text.length; i++) {
			stringChar += text[i];
			if (text[i] == text[i + 1]) {
				// console.log(text[i+1]);
				counter++;
			}

			if (counter > 1 && closeCounter == 0) {
				stringChar += '[';
				closeCounter = 1
			}

			if (text[i] != text[i + 1] && closeCounter == 1) {
				stringChar += "]";
				closeCounter = 0;

			}

			if (text[i] !== text[i + 1]) {
				counter = 0
			}




		}

		for (const char of stringChar) {
			// console.log(char);
			if (char == '[') {
				totalDuplicate++
			}
		}


		result = [stringChar, totalDuplicate]

		// console.log(result);

		return result




	}

}

// isolateDuplicates("aabbccddeeffgg")
// isolateDuplicates("TttTTTTttttTTTTTTIIIIIiiiiiiiSSSSSSSSSTTTTAAAAAAAAAaaaaaaaaaSSSSSSSSSSKKKKKkkkkkk")

module.exports = isolateDuplicates;
