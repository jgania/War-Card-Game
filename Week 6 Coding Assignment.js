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

//Assign value to cards
const CARD_VALUE_MAP = {"2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 11, "Q": 12, "K": 13, "A": 14}

class Player {
    constructor(name){
        this.name = name;
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
            let randomIndex = Math.floor(Math.random() * 52);
            let oldIndex = this.cards[randomIndex]
            this.cards[randomIndex] = cards[i];
            this.cards[i] = oldIndex;             
        }
    }
}

//create a deck of cards
function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value);
        })
    })
}

var deck = new Deck;
console.log(deck);

//deal shuffled cards equally to players
function dealCards() {
    let player1, player2
    player1= new Deck(deck.cards.slice(0, 25))
    player2= new Deck(deck.cards.slice(26, 51))
}



function startGame() {
    //chose card from each player in each player deck
    //create loop to subtract card from player deck and 
    //assign point to the larger card value
}

//build out point system

function isWinner(playerOneCard, playerTwoCard) {
    if(CARD_VALUE_MAP[playerOneCard, value] > CARD_VALUE_MAP[playerTwoCard, value]) {
        
    } else if (CARD_VALUE_MAP[playerOneCard, value] < CARD_VALUE_MAP[playerTwoCard, value]) {
        
    } else {

    }

}

// Menu class 
// Prompt user to rename player 1 and player 2
// Create new shuffled deck
// divide shuffled cards between two players
// start game
// enterate thsou the game 26 rounds and assign points
// display winner
// prompt to exit or start new game