// Function to get computer's choice
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    // Convert player's selection to uppercase
    playerSelection = playerSelection.toUpperCase();

    // Validate player's selection
    if (!["ROCK", "PAPER", "SCISSORS"].includes(playerSelection)) {
        throw new Error("Please provide a valid selection.");
    }

    // Determine the winner
    if (playerSelection === computerSelection) {
        return { "msg": "TIE", "score": 0 };
    } else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        return { "msg": `You Win! ${playerSelection} beats ${computerSelection}`, "score": 1 };
    } else {
        return { "msg": `You Lose! ${computerSelection} beats ${playerSelection}`, "score": -1 };
    }
}

// Function to update score display
function updateScore(playerScore, computerScore) {
    const playerScoreElement = document.getElementById("playerScore");
    const computerScoreElement = document.getElementById("computerScore");

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

// Function to start the game
function startGame() {
    let playerScore = 0;
    let computerScore = 0;

    // Event listeners for player's choices
    document.getElementById("rock").addEventListener('click', () => {
        playGame("ROCK");
    });
    document.getElementById("paper").addEventListener('click', () => {
        playGame("PAPER");
    });
    document.getElementById("scissor").addEventListener('click', () => {
        playGame("SCISSORS");
    });

    // Function to play a single game round
    function playGame(playerSelection) {
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result.msg);
        
        // Update scores and check for game end
        playerScore += result.score === 1 ? 1 : 0;
        computerScore += result.score === -1 ? 1 : 0;
        updateScore(playerScore, computerScore);

        // Check if either player has reached 5 points
        if (playerScore === 5 || computerScore === 5) {
            endGame();
        }
    }

    // Function to end the game
    function endGame() {
        if (playerScore > computerScore) {
            alert("Congratulations! You WON the game.");
        } else if (playerScore < computerScore) {
            alert("You Lost The Game.");
        } else {
            alert("It's a TIE.");
        }
        // Reset scores for a new game
        playerScore = 0;
        computerScore = 0;
        updateScore(playerScore, computerScore);
    }
}

// Starting the game when the page loads
document.addEventListener("DOMContentLoaded", startGame);
