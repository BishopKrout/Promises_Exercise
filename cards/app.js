let deckId = '';

// This function gets a new deck from the API and stores the deck id
async function getDeck() {
  const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  const data = await response.json();
  deckId = data.deck_id;
}

// This function gets a card from the deck with the deck id stored earlier
async function drawCard() {
  const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  const data = await response.json();
  const card = data.cards[0];
  console.log(`${card.value} of ${card.suit}`);
}

// When the page loads, get a new deck
window.addEventListener('load', () => {
  getDeck().then(() => {
    console.log('New deck of cards ready!');
  });
});

// When the button is clicked, draw a card
document.querySelector('#draw').addEventListener('click', () => {
  drawCard().then(() => {
    console.log('Card drawn!');
  });
});
