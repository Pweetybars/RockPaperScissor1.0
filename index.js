const score = JSON.parse(localStorage.getItem('score')) || {
    Win: 0,
    Lose: 0,
    Ties: 0
};
updateScoreboard();


/*
if(!score)
    score ={
        Win: 0,
        Lose: 0,
        Ties: 0
    }
}*/

let computerMove = '';

function updateScoreboard(){
    document.querySelector('.js-scoreboard')
    .innerHTML = `Wins : ${score.Win}. Loses: ${score.Lose}. Ties: ${score.Ties}`;
}

function pickaComputerMoves(){
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock'; 
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors'; 
    }
    
    return computerMove;
}
function playGame(playerMove){

    const computerMove = pickaComputerMoves();
    if (playerMove === 'scissors'){
        if (computerMove === 'paper'){
            result = 'You Win';
        } else if (computerMove === 'scissors'){
            result = 'Ties';
        } else if (computerMove === 'rock'){
            result = 'You Lose';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock'){
            result = 'Ties';
        } else if (computerMove === 'paper'){
            result = 'You Lose';
        } else if (computerMove === 'scissors'){
            result = 'You Win';
        }
    } else if (playerMove === 'paper'){
        if (computerMove === 'rock'){
            result = 'You Win';
        } else if (computerMove === 'scissor'){
            result = 'You Lose';
        } else if (computerMove === 'paper'){
            result = 'Ties';
        }
    }
    
    if (result === 'You Win'){
        score.Win++;
    } else if (result === 'Ties'){
        score.Ties++;
    } else if (result === 'You Lose'){
        score.Lose++;
    }


    localStorage.setItem('score', JSON.stringify(score)); //local storage only spp string

    updateScoreboard();

    document.querySelector('.js-results')
        .innerHTML = result;
    document.querySelector('.js-moves')
        .innerHTML = `You
<img src="${playerMove}-emoji.png" alt="" class="move-emoji">
<img src="${computerMove}-emoji.png" alt="" class="move-emoji">
Computer`;


}
