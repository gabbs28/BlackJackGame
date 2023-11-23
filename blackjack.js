let dealerSum = 0;
let playerSum = 0;

let dealerAceCount = 0;
let playerAceCount = 0; 

let hidden;
let deck;


let canHit = true; 

//addEventListener("load", (event) => {});
window.onload = function(){
    makeDeck();
    getShuffledDeck();
    startBlackJackGame()
}

function makeDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]); 
        }
    }
    console.log(deck);
}

function getShuffledDeck(count = 1) {
    for (let i = 0; i < count; i++) {
        deck = deck.map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }
    console.log(deck);
}

function startBlackJackGame() {

}

function hit() {


}

function stay() {

    canHit = false;
    document.getElementById("hidden").src = "./CARDS/" + hidden + ".png";

    let message = "";
    if (playerSum > 21) {
        message = "You Lose!";
    }
    else if (dealerSum > 21) {
        message = "You win!";
    }
    else if (playerSum == dealerSum) {
        message = "Tie!";
    }
    else if (playerSum > dealerSum) {
        message = "You Win!";
    }
    else if (playerSum < dealerSum) {
        message = "You Lose!";
    }

    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("player-sum").innerText = playerSum;
    document.getElementById("results").innerText = message;
}
