//Helper function to fetch number fact
function fetchNumberFact(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => data.text)
    .catch(err => console.error('An error occurred:', err));
}

// Get facts about multiple numbers
let numbers = [7, 11, 42];
let multipleNumbersPromises = numbers.map(number => fetchNumberFact(`http://numbersapi.com/${number}?json`));

Promise.all(multipleNumbersPromises)
  .then(facts => {
    console.log('Facts about multiple numbers:');
    facts.forEach(fact => console.log(fact));
  });

// Get 4 facts about a favorite number
let favoriteNumber = 7;
let favoriteNumberPromises = Array(4).fill().map(() => fetchNumberFact(`http://numbersapi.com/${favoriteNumber}?json`));

Promise.all(favoriteNumberPromises)
  .then(facts => {
    console.log('\n4 facts about favorite number:');
    facts.forEach(fact => console.log(fact));
  });