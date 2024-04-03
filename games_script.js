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

function updateScore(playerScore, computerScore)
{
    const PLAYER = document.querySelector("#player");
    const COMPUTER = document.querySelector("#computer");
    const CHOICE = document.querySelector("#playerChoice");

    if((playerScore >=5 || computerScore >= 5) && playerScore > computerScore)
    {
        CHOICE.innerHTML = "<h1>Player WON</h1>";

    } else if ((playerScore >=5 || computerScore >= 5) && playerScore > computerScore)
    {
        CHOICE.innerHTML = "<h1>Computer WON</h1>";
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

    ROCK.addEventListener('click', () => {
        try {
            let res = playGame("ROCK");
            if (res === 1) win++;
            if (res === -1) fail++;
            updateScore(win, fail);
            console.log(`Your Score: ${win}, Computer Score: ${fail}`);
        } catch (error) {
            console.log(error.message);
            // index--; // Decrement index to repeat the round
        }
    })

    PAPER.addEventListener('click', ()=>{
        try {
            let res = playGame("PAPER");
            if (res === 1) win++;
            if (res === -1) fail++;
            updateScore(win, fail);
            console.log(`Your Score: ${win}, Computer Score: ${fail}`);
        } catch (error) {
            console.log(error.message);
           // index--; // Decrement index to repeat the round
        }
    })

    SCISSOR.addEventListener('click', ()=>{
        try {
            let res = playGame("SCISSOR");
            if (res === 1) win++;
            if (res === -1) fail++;
            updateScore(win, fail);
            console.log(`Your Score: ${win}, Computer Score: ${fail}`);
        } catch (error) {
            console.log(error.message);
            //index--; // Decrement index to repeat the round
        }
    })

    // while (win < 5 && fail < 5) {
    //     // let yourSelection = prompt("Choose ROCK, PAPER, or SCISSOR:");

    //     console.log(yourSelection);
    //     try {
    //         let res = playGame(yourSelection);
    //         if (res === 1) win++;
    //         if (res === -1) fail++;
    //         console.log(`Your Score: ${win}, Computer Score: ${fail}`);
    //     } catch (error) {
    //         console.log(error.message);
    //         index--; // Decrement index to repeat the round
    //     }
    // }

    // Determine the winner of the game
    if (win > fail) {
        console.log("Congratulations! You WON the game.");
    } else if (win < fail) {
        console.log("You Lost The Game.");
    } else {
        console.log("It's a TIE.");
    }
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
