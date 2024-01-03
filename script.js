let player = '.one';

let playerOne = "";
let playerTwo = "";
let score = document.querySelector(player + ' .score' );
let total = document.querySelector(player + ' .total');
let dice = document.querySelector('.game .dé');
let tempScore = [0, 0];
let totalScore = [0, 0];
let initGameButton = document.querySelectorAll(".disable");
let resetScoreAll = document.querySelectorAll(".score");
let resetTotalAll = document.querySelectorAll('.total');
let diceResult = 0;

const newGame = document.querySelector('#new-game'); 
newGame.addEventListener('click', () => {
    player = '.one';
    playerOne = prompt("Nom du premier joueur ?").toUpperCase();
    playerTwo = prompt("Nom du deuxieme joueur ?").toUpperCase();
    const nameOne = document.querySelector(".one .name");
    nameOne.innerText = playerOne;
    const nameTwo = document.querySelector(".two .name");
    nameTwo.innerText = playerTwo;
    resetAll();
    initGameButton.forEach(element => {
        element.disabled = false;
    })});

const play = document.querySelector('#launch');
play.addEventListener('click', () => {
    console.log(player + ' doit jouer.')
    roll();
    if (diceResult == 1) {
        alert('"Vous avez fais 1 : VOUS PASSEZ VOTRE TOUR ET PERDEZ VOS POINTS !');
        resetScore();
        changePlayer();
    } else {
        addTempScore();
    }
});

const saveGame = document.querySelector('#save');
saveGame.addEventListener('click', () => {
    addTotalScore();
        if (totalScore[0] >= 20) {
            alert (playerOne + " a gagné !");
            resetGame();
        } else if (totalScore[1] >= 20){
            alert (playerTwo + " a gagné !");
            resetGame();
        } else {
        changePlayer();    
    }
});

function roll() {
    diceResult = Math.floor(Math.random() * (7 - 1) + 1);
    dice.innerText = diceResult;
    return diceResult;
}

function addTempScore() {
    if (player == '.one') {
        score = document.querySelector(player + ' .score');
        tempScore[0] += diceResult;
        score.innerText = tempScore[0];
        return tempScore[0];  
    } else {
        score = document.querySelector(player + ' .score' );
        tempScore[1] += diceResult;
        score.innerText = tempScore[1];
        return tempScore[1]; 
    }
}

function addTotalScore() {
    if (player == '.one') {
        total = document.querySelector(player + ' .total');
        totalScore[0] += tempScore[0];
        total.innerText = totalScore[0];
    } else {
        total = document.querySelector(player + ' .total');
        totalScore[1] += tempScore[1];
        total.innerText = totalScore[1];
    }
    resetScore();
}

function changePlayer() {
    if (player == '.one') {
        player = '.two';
    } else {
        player = '.one';
    }
};

function resetGame() {
    for (let i = 0; i < initGameButton.length; i++) {
        initGameButton[i].disabled = true;
    }
    dice.innerText = 0;
};

function resetScore() {
    tempScore = [0, 0];
    resetScoreAll.forEach(element => {
        element.innerText = 0;
    });
};

function resetTotal() {
    totalScore = [0, 0];
    resetTotalAll.forEach(element => {
        element.innerText = 0;
    })
};

function resetAll() {
    resetScore();
    resetTotal();
};