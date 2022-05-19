// Think about how you would build this project and write your plan down. 
// Consider classes such as Card, Deck, and Player and what fields and 
// methods they might each have. You can implement the game however you’d 
// like (i.e. printing to the console, using alert, or some other way). 
// The completed project should, when ran, do the following:
// -	Deal 26 Cards to two Players from a Deck. 
// -	Iterate through the turns where each Player plays a Card
// -	The Player who played the higher card is awarded a point
// -	Ties result in zero points for either Player
// -	After all cards have been played, display the score.


//Create card class, deck, class and player class

const SUITS = ["♥", "♦", "♣", "♠"];
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const CARD_VALUE_MAP = {"2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 11, "Q": 12, "K": 13, "A": 14}

class Player {
    constructor(name){
        this.name = name;
        this.score = 0;
        this.playerDeck = [];
    }
    addNewDeck(deck) {
        this.playerDeck = deck;
    }
}

class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor(cards = freshDeck()){
        this.cards = cards;
    }
    //create a function for shuffling cards
    shuffle() {
        for (let i = 0; i < 52; i++){
            //Math.floor creates an integer
            let randomIndex = Math.floor(Math.random() * 52);
            let oldIndex = this.cards[randomIndex]
            this.cards[randomIndex] = this.cards[i];
            this.cards[i] = oldIndex;             
        }
    }
}

//create a deck of cards
function freshDeck() {
    //using a flat map makes a nice and neat array rather than just map that will give you 4 seperate arrays
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value);
        })
    })
}

function dealCards() {
    let deck1= new Deck(deck.cards.slice(0, 25));
    let deck2= new Deck(deck.cards.slice(26, 51));
    return deck1, deck2;
}   

function startGame(player1, player2) {
    const deck = new Deck();
    deck.shuffle();
    deck.dealCards();
    player1.addNewDeck(deck1);
    player2.addNewDeck(deck2);
}

function displayRoundResults(player1, player2, roundNum) {
    console.log(`${player1.name} plays: ${player1.playerDeck[roundNum].value} of ${player1.playerDeck[roundNum].suit}
    `);
    console.log(`${player2.name} plays: ${player2.playerDeck[roundNum].value} of ${player2.playerDeck[roundNum].suit}
    `);
}

function executeRound(player1, player2) {
        for (let i = 0; i < player1.playerDeck.length; i++) {
        displayRoundResults(player1, player2, i);
        if (CARD_VALUE_MAP[player1.playerDeck[i].value] > CARD_VALUE_MAP[player2.playerDeck[i].value]) {
            player1.score += 1;
            console.log(`${player1.name} has won this round`);
      } else if (CARD_VALUE_MAP[player1.playerDeck[i].value] < CARD_VALUE_MAP[player2.playerDeck[i].value]) {
            player2.score += 1;
            console.log(`${player2.name} has won this round`);
      } else {
            console.log(`Both ${player1} and ${player2} have tied. No points rewarded`);
      }
    }
}

function declareWinner(player1, player2) {
    if (player1.score > player2.score) {
        console.log(`${player1.name} has won with a final score of: ${player1.score}`);
    } else if (player1.score < player2.score) {
        console.log(`${player2.name} has won with a final score of: ${player2.score}`);
    } else {
        console.log(`${player1.name} and ${player2.name} have tied!`);
    }
} 

