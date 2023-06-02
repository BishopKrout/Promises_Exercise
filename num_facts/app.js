async function getNumberFacts() {
	const favoriteNumber = 7;
	const numbersToGet = [1, 2, 3, 4, favoriteNumber, favoriteNumber, favoriteNumber, favoriteNumber];
	const factsElement = document.getElementById('facts')

	for(let num of numbersToGet) {
		try {
			const res = await fetch(`http://numbersapi.com/${num}?json`);
			const data = await res.json();

			const factsPara = document.createElement('p');
			factsPara.textContent = `Fact about ${num}: ${data.text}`;
			factsElement.appendChild(factsPara);
		} catch (error) {
			console.log('Error', error)
		}
	}
}

getNumberFacts();