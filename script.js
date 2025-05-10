const quoteContainer = document.getElementById('quote-container');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const xBtn = document.getElementById('x-social');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = []

// Show new quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quoteRandom = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    author.textContent = quoteRandom.author || 'Unknown';
    quote.textContent = quoteRandom.text;
}

// Get quotes from the API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote()
    }
    catch (error) {
        // Catch error here
    }
}

getQuotes();