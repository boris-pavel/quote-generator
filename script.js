const quoteContainer = document.getElementById('quote-container');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const xBtn = document.getElementById('x-social');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = []

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}



// Show new quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quoteRandom = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    author.textContent = quoteRandom.author || 'Unknown';

    // Set quote text
    quote.textContent = quoteRandom.text;

    // Check the  quote length to determine the styling
    if (quoteRandom.text.length > 120) {
        quote.classList.add('long-quote');
    } else {
        quote.classList.remove('long-quote');
    }

    complete();
}

// Get quotes from the API
async function getQuotes() {
    loading();
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

// Share quote
function shareQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`;
    window.open(twitterUrl, '_blank');
}

// On Load
getQuotes();

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
xBtn.addEventListener('click', shareQuote);

