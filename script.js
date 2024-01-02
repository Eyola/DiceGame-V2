let player = "One";
let dice = document.querySelector(".game .dé");
let score = document.querySelector(".player" + player + " .score");
let tempCore = 0;
let total = document.querySelector(".playerOne .total");

const newGame = document.getElementById('new-game'); 
newGame.addEventListener('click', () => {
    let playerOne = prompt("Nom du premier joueur ?");
    let playerTwo = prompt("Nom du deuxieme joueur ?");
    const nameOne = document.querySelector(".playerOne .name");
    nameOne.innerText = playerOne;
    const nameTwo = document.querySelector(".playerTwo .name");
    nameTwo.innerText = playerTwo;
    score.innerText = 0;
    total.innerText = 0;
});

const play = document.getElementById('launch');
play.addEventListener('click', () => {
    tempScore();
});

function rollDice() {
    let diceResult = Math.floor(Math.random() * (7 - 1) + 1);
    dice.innerText = diceResult;
    if (diceResult == 1 ) {
        alert("Vous avez fais 1 : VOUS PASSEZ VOTRE TOUR ET PERDEZ TOUS VOS POINTS!");
        tempCore = 0;
    } else {
        tempCore += parseInt(dice.innerText);    
    return diceResult;
}
};

function tempScore() {
    rollDice();
    score.innerText = tempCore;
};

const saveGame = document.getElementById('save');
saveGame.addEventListener('click', () => {
    save();
});

function save() {
    total.innerText = parseInt(score.innerText) + parseInt(total.innerText); 
};

