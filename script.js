let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
updateScore();

let userChoice1 = '';
let computerChoice = '';
// function to get the user's choice, computer's choice, and display the result
function Display(userChoice) {
    computerChoice = getChoice();
    alert('You chose ' + userChoice + ' and computer chose ' + computerChoice);
    choice();
    if (
        (computerChoice === 'Rock' && userChoice === 'Rock') ||
        (computerChoice === 'Paper' && userChoice === 'Paper') ||
        (computerChoice === 'Scissors' && userChoice === 'Scissors')
    ) {
        winner('It\'s a tie!');
        score.ties++;
    } else if (
        (computerChoice === 'Paper' && userChoice === 'Rock') ||
        (computerChoice === 'Rock' && userChoice === 'Scissors') ||
        (computerChoice === 'Scissors' && userChoice === 'Paper')
    ) {
        winner('Computer wins!');
        score.losses++;
    } else {
        winner('You win!');
        score.wins++;
    }
    // Update the score in local storage
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
}
// randomize computer choice
function getChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = 'Rock';
    } else if (computerChoice === 1) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

function choice() {
    document.querySelector('.js-choice').innerHTML = `You chose ${userChoice} and computer chose ${computerChoice}`;
}

function winner(message) {
    document.querySelector('.js-result').innerHTML = message;
}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Losses: ${score.losses} Wins: ${score.wins} Ties: ${score.ties}`;
}
