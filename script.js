let player = '.one';

let score = document.querySelector(player + ' .score' );
let dice = document.querySelector('.game .dé');
let total = document.querySelector(player + ' .total');
let tempScore = 0;
let initGame = document.getElementsByClassName("disable");

const newGame = document.getElementById('new-game'); 
newGame.addEventListener('click', () => {
    player = '.one';
    let playerOne = prompt("Nom du premier joueur ?").toUpperCase();
    let playerTwo = prompt("Nom du deuxieme joueur ?").toUpperCase();
    const nameOne = document.querySelector(".one .name");
    nameOne.innerText = playerOne;
    const nameTwo = document.querySelector(".two .name");
    nameTwo.innerText = playerTwo;
    resetTotal();
    resetScore();
    resetTotal();
    for (let i = 0; i < initGame.length; i++) {
        initGame[i].disabled = false;
    }

const play = document.getElementById('launch');
play.addEventListener('click', () => {
    score = document.querySelector(player + ' .score');
    total = document.querySelector(player + ' .total');
    let diceResult = Math.floor(Math.random() * (7 - 1) + 1);
    dice.innerText = diceResult;
    /*if (diceResult == 1) {
        alert('"Vous avez fais 1 : VOUS PASSEZ VOTRE TOUR ET PERDEZ VOS POINTS !');
        resetScore();
    } else */{
        tempScore += parseInt(dice.innerText);    
        score.innerText = tempScore;
    }
});

const saveGame = document.getElementById('save');
saveGame.addEventListener('click', () => {
    total.innerText = parseInt(score.innerText) + parseInt(total.innerText);
    score.innerText = 0;
    if (total.innerText >= 10) {
        if (player == '.one') {
            alert (playerOne + " a gagné !");
            resetGame();
        } else {
            alert (playerTwo + " a gagné !");
            resetGame();
        }
    } else {
        changePlayer();

    }
})});

function changePlayer() {
    tempScore = 0;
    if (player == '.one') {
        player = '.two';
    } else {
        player = '.one';
    }
};

function resetGame() {
    for (let i = 0; i < initGame.length; i++) {
        initGame[i].disabled = true;
    }
}

function resetScore() {
    score.innerText = 0;
    console.log('score ' + player + ' : ' + score.innerText );
    changePlayer();
}

function resetTotal() {
    total.innerText = 0;
    changePlayer();
}

function resetAll() {
    resetScore();
    resetTotal();
}


