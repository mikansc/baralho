

function makeDeck() {
    const deck = [];
    const suits = ['epadas', 'ouro', 'paus', 'copas'];
    const values = 'A,2,3,4,5,6,7,8,9,10,J,Q,K';
    for (let value of values.split(',')) {
        for (let suit of suits) {
            deck.push({ value, suit });
        }
    }
    return deck;
}

function drawCard(deck) {
    return deck.pop();
}

const myDeck = makeDeck();

const card1 = drawCard(myDeck);