// Get a random choice of Computer
function getComputerChoice() {
    const choiceArray = ["rock", "paper", "scissors"]
    let randomChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)];
    return randomChoice;
}

// Play Rock-Paper-Scissors game for just one round
function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case "rock":
            switch (computerSelection) {
                case "scissors":
                    return "You win! Rock breaks Scissors.";
                case "paper":
                    return "You lose! Paper covers Rock.";
                default:
                    return "It's a Tie!";
            }
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "You win! Paper covers Rock.";
                case "scissors":
                    return "You lose! Scissors tears Paper.";
                default:
                    return "It's a Tie!";
            }
        case "scissors":
            switch (computerSelection) {
                case "paper":
                    return "You win! Scissors tears Paper.";
                case "rock":
                    return "You lose! Rock breaks Scissors.";
                default:
                    return "It's a Tie!";
            }
        default:
            return "Please type correctly!";
    }
}

// Play the game for 5 rounds
function game() {
    let pScore = 0;
    let cScore = 0;
    for (let i=0; i<5; i++) {
        const playerSelection = prompt("What's Your Choice?");
        const computerSelection = getComputerChoice();
        const play = playRound(playerSelection, computerSelection);
        console.log(play);
        if (play.match("win")) {
            pScore++;
        } else if (play.match("lose")) {
            cScore++;
        } else {
            i--;
        }
    }
    console.log(`Player Score: ${pScore}`);
    console.log(`Computer Score: ${cScore}`);
    
    if (pScore > cScore) {
        console.log("Yeah! You win the games.");
    } else {
        console.log("Ah! You lose the games.")
    }
}

game();