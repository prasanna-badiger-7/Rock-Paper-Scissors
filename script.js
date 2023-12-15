const options = document.querySelectorAll(".playerSelect");
let pScore = 0;
let cScore = 0;
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const result = document.querySelector(".result");
const finalResult = document.querySelector(".finalResult");


// Each button press by user
options.forEach((select) => {
    select.addEventListener("click", function() {
        finalResult.textContent = null;
        const playerSelection = this.textContent.toLowerCase();
        

        const choiceArray = ["rock", "paper", "scissors"]
        const computerSelection = choiceArray[Math.floor(Math.random() * choiceArray.length)];

        playRound(playerSelection, computerSelection);
        updateScore(pScore, cScore);

        soundEffect(playerSelection);

        if (checkWinner()) {
            pScore = cScore = 0;
            updateScore(pScore, cScore);
            result.textContent = null;
        } 

    });
});


// The whole logic of the game 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = "It's a Tie!";

    } else if (playerSelection === "rock") {

        if (computerSelection === "scissors") {
            result.textContent = "You win! Rock breaks Scissors." ;
            pScore++ ;

        } else if (computerSelection === "paper") {
            result.textContent = "You lose! Paper covers Rock." ;
            cScore++ ;
        }

    } else if (playerSelection === "paper") {

        if (computerSelection === "rock") {
            result.textContent = "You win! Paper cover Rock." ;
            pScore++ ;

        } else if (computerSelection === "scissors") {
            result.textContent = "You lose! Scissors tear Paper." ;
            cScore++ ;
        }

    } else if (playerSelection === "scissors") {

        if (computerSelection === "paper") {
            result.textContent = "You win! Scissor tears Paper." ;
            pScore++ ;

        } else if (computerSelection === "rock") {
            result.textContent = "You lose! Rock breaks Scissors." ;
            cScore++ ;
        }
    }
}

function updateScore(pScore, cScore) {
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}

function checkWinner() {
    if (pScore === 5) {
        const message = "Congratulations! You win! Here's the pie 🥧.";
        const winnerCheer = new Audio("./sound-effects/winnerCheer.mp3");
        winnerCheer.play();
        finalResult.textContent = message;
        return true;

    } else if (cScore === 5) {
        const message = "Uh-oh! You lose! Maybe, next time.";
        const loseSound = new Audio("./sound-effects/loseSound.mp3");
        loseSound.play();
        finalResult.textContent = message;
        return true;

    } else {
        return false;
    }       

}

function soundEffect(playerSelection) {
    if (playerSelection === "rock") {
        let rockSound = new Audio("./sound-effects/Rock.mp3");
        rockSound.play();
    } else if (playerSelection === "paper") {
        let paperSound = new Audio("./sound-effects/Paper.mp3");
        paperSound.play();
    } else if (playerSelection === "scissors") {
        let scissorsSound = new Audio("./sound-effects/Scissors.mp3");
        scissorsSound.play();
    } 

}