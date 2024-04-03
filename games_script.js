// Function to get computer's choice
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    // Convert player's selection to uppercase
    playerSelection = playerSelection.toUpperCase();

    // Validate player's selection
    if (!["ROCK", "PAPER", "SCISSOR"].includes(playerSelection)) {
        throw new Error("Please provide a valid selection.");
    }

    // Determine the winner
    if (playerSelection === computerSelection) {
        return { "msg": "TIE", "score": 0 };
    } else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSOR" && computerSelection === "PAPER")
    ) {
        return { "msg": `You Win! ${playerSelection} beats ${computerSelection}`, "score": 1 };
    } else {
        return { "msg": `You Lose! ${computerSelection} beats ${playerSelection}`, "score": -1 };
    }
}

// Function to update score display
function updateScore(playerScore, computerScore) {
    const PLAYER = document.querySelector("#player");
    const COMPUTER = document.querySelector("#computer");
    const CHOICE = document.querySelector("#playerChoice");

    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            CHOICE.innerHTML = "<h1>Player WON</h1>";
        } else {
            CHOICE.innerHTML = "<h1>Computer WON</h1>";
        }
    }

    PLAYER.innerHTML = playerScore;
    COMPUTER.innerHTML = computerScore;
}

// Function to start the game
function startGame() {
    let win = 0;
    let fail = 0;
    
    const ROCK = document.querySelector('#rock');
    const PAPER = document.querySelector('#paper');
    const SCISSOR = document.querySelector('#scissor');

    function handleClick(playerSelection) {
        try {
            let res = playGame(playerSelection);
            if (res === 1) win++;
            if (res === -1) fail++;
            updateScore(win, fail);
            console.log(`Your Score: ${win}, Computer Score: ${fail}`);
        } catch (error) {
            console.log(error.message);
        }
    }

    ROCK.addEventListener('click', () => handleClick("ROCK"));
    PAPER.addEventListener('click', () => handleClick("PAPER"));
    SCISSOR.addEventListener('click', () => handleClick("SCISSOR"));

    // Determine the winner of the game
    // This block seems to be unnecessary because the game ends when either player reaches 5 points
}

// Function to play a single game round
function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result.msg);
    return result.score;
}

// Starting the game
startGame();
