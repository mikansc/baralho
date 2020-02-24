const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suits: ['espadas', 'ouro', 'paus', 'copas'],
        values: 'A,2,3,4,5,6,7,8,9,10,J,Q,K',
        // ------------METHODS ----------------//
        // create a deck
        initializeDeck() {
            const { suits, values, deck } = this;
            for (let value of values.split(',')) {
                for (let suit of suits) {
                    deck.push({ value, suit });
                }
            }
        },
        //draw a single card
        drawCard() {
            const card = this.deck.pop();
            this.drawnCards.push(card);
            return card;
        },
        //draw multiple (n) cards
        drawMultiple(n) {
            const cards = [];
            for (let i = 0; i < n; i++) {
                cards.push(this.drawCard());
            }
            return cards;
        },
        //shuffle a deck
        shuffle() {
            const { deck } = this;
            for (let i = deck.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
        }
    };
};

// const deck1 = makeDeck();
// const deck2 = makeDeck();

// deck1.initializeDeck();
// deck1.shuffle();
// const hand1 = deck1.drawMultiple(7);

// deck2.initializeDeck();
// const hand2 = deck2.drawMultiple(9);