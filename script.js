let player = 0;
let tempScore = [0, 0];
let totalScore = [0, 0];

let players = {
    player0 : {
        nom   : document.querySelector(".one .name"),
        score : document.querySelector(".one .score"),
        total : document.querySelector(".one .total")
    },
    player1 : {
        nom   : document.querySelector(".two .name"),
        score : document.querySelector(".two .score"),
        total : document.querySelector(".two .total") 
    }
};
let dice = document.querySelector('.game .dé');
let initGameButton = document.querySelectorAll(".disable");
let resetScoreAll = document.querySelectorAll(".score");
let resetTotalAll = document.querySelectorAll('.total');
let diceResult = 0;

const newGame = document.querySelector('#new-game'); 
newGame.addEventListener('click', () => {
    players.player0.nom.innerText = prompt("Nom du premier joueur ?").toUpperCase();
    players.player1.nom.innerText = prompt("Nom du deuxieme joueur ?").toUpperCase();
    resetAll();
    initGameButton.forEach(element => {
        element.disabled = false;
    })});

const play = document.querySelector('#launch');
play.addEventListener('click', () => {
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
            alert (players.player0.nom.innerText + " a gagné !");
            resetGame();
        } else if (totalScore[1] >= 20){
            alert (players.player1.nom.innerText + " a gagné !");
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
    let playerNumber = (player == 0) ? 0 : 1;
    tempScore[playerNumber] += diceResult;
    players['player' + playerNumber].score.innerText = tempScore[player];
    return tempScore[playerNumber];  
}

function addTotalScore() {
    let playerNumber = (player == 0) ? 0 : 1;
    totalScore[playerNumber] += tempScore[playerNumber];
    players['player' + playerNumber].total.innerText = totalScore[player];
        resetScore();
    }

function changePlayer() {
    let playerNumber = (player == 0) ? 1 : 0;
    player = playerNumber;
}

function resetGame() {    
    initGameButton.forEach(element => {
        element.disabled = true;
    });
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
    player = 0;
}