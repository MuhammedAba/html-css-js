let score = JSON.parse(localStorage.getItem('score'))  || {wins: 0, ties: 0, losses: 0}
showScore();
/*
if (!score) {
    score = {
        wins: 0,
        ties:0,
        losses: 0
    };
};
*/

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    alert('Score is reset. Start Playing');
    localStorage.removeItem('score')
    showScore();
}
function playGame(playerMove) {
    const computerMove = computerSelection();
    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') result = 'Tie.';
        else if (computerMove === 'Paper') result = 'You lost.';
        else result = 'You win.';

    } else if (playerMove === 'Paper') {
        if (computerMove === 'Paper') result = 'Tie.';
        else if (computerMove === 'Scissors') result = 'You lost.';
        else result = 'You win.';

    } else if (playerMove === 'Scissors') {
        if (computerMove === 'Scissors')
            result = 'Tie.';
        else if (computerMove === 'Rock') result = 'You lost.';
        else result = 'You win.';
    }

    if (result === 'You win.') {
        score.wins++;
    }
    else if (result === 'You lost.' ) {
        score.losses++;
    }
    else {
        score.ties++;
    }

    document.querySelector('.js-result').innerText = `${result}`
    document.querySelector('.js-moves').innerHTML = `You
    <img src="img/${playerMove}-emoji.png" class="move-icon">
    <img src="img/${computerMove}-emoji.png" class="move-icon">
    Computer`;
    showScore();
    //Without Function with DOM
    /*
    document.querySelector('.js-score').innerText = `Wins: ${score.wins}  Ties: ${score.ties}  Losses: ${score.losses} `;
    If we dont use a function we have to use this line 3 times. (Where we use showScore function.)
    */

    // With Function with DOM

    localStorage.setItem('score', JSON.stringify(score));
    // changed score object to string with JSON.stringify() method
}

function showScore() {
        document.querySelector('.js-score').innerText = `Wins: ${score.wins}  Ties: ${score.ties}  Losses: ${score.losses} `;
    }

function computerSelection() {
    const randomNumber = Math.random();
let computerChoose = '';

if(randomNumber < 1/3)
    computerMove = 'Rock'
else if (randomNumber > 1/3 && randomNumber < 2/3)
    computerMove = 'Paper';
else
    computerMove = 'Scissors';
return computerMove;
}