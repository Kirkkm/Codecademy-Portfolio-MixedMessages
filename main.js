function selectRandomQuote() {
    const quotesList = require('./quotes.json').quotes;
    const randomIndex = Math.floor(Math.random() * quotesList.length);
    const quoteObject = quotesList[randomIndex];
    return `"${quoteObject.message}" -${quoteObject.author}`
}

function selectRandomPrefix() {
    const prefixList = require('./quotes.json').prefixes;
    const randomIndex = Math.floor(Math.random() * prefixList.length);
    return prefixList[randomIndex].prompt;
}

function buildMessage() {
    const prefix = selectRandomPrefix();
    const quote = selectRandomQuote();
    return `${prefix} ${quote}`;
}

console.log(buildMessage());