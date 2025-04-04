function selectRandomQuote() {
    const quotesList = require('./quotes.json').quotes;
    const randomIndex = Math.floor(Math.random() * quotesList.length);
    const quoteObject = quotesList[randomIndex];
    return `${quoteObject.message} -${quoteObject.author}.`
}
console.log(selectRandomQuote());