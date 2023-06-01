// let deckId;

// fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
// 	.then(response => response.json())
// 	.then(data => {
// 		deckId = data.deck_id;
// 		let card = data.cards[0];
// 		console.log(`${card.value} of ${card.suit}`);
// 	    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
// 	})
// 	.then(response => response.json())
// 	.then(data => {
// 		let card = data.cards[0];
// 		console.log(`${card.value} of ${card.suit}`)
// 	});
let deckId;

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
	.then(response => response.json())
	.then(data => {
		deckId = data.deck_id;
	});

    function drawCard() {
		fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
		  .then(response => response.json())
		  .then(data => {
			if(data.remaining == 0) {
			  document.getElementById("card").innerHTML = "No more cards in deck";
			} else {
			  let card = data.cards[0];
			  document.getElementById("card").innerHTML = `${card.value} of ${card.suit}`;
			}
		  });
	  }
