function getComputerChoice()
{
    let choice = ["ROCK", "PAPER", "SCISSOR"];
    return choice[Math.floor(Math.random() * 10)%3];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();
    if(["ROCK", "PAPER", "SCISSOR"].indexOf(playerSelection) == -1)
    {
        throw new Error("Please provide a valid string.");
        return;
    }

    if(playerSelection == "ROCK")
    {
        if(computerSelection == "PAPER")
            return {"msg": "You Lose! Paper beats Rock", "score": -1};
        if(computerSelection == "ROCK")
            return {"msg": "TIE", "score": 0};
        if(computerSelection == "SCISSOR")
            return {"msg": "You Win! Rock breaks the Scissor", "score": 1};

    } else if(playerSelection == "PAPER" )
    {
        if(computerSelection == "ROCK")
            return {"msg": "You Win! Paper beats Rock", "score": 1};
        if(computerSelection == "PAPER")
            return {"msg": "TIE", "score": 0};
        if(computerSelection == "SCISSOR")
            return {"msg": "You Lose! Scissor cuts the Paper", "score": -1};

    } else {
        if(computerSelection == "ROCK")
            return {"msg": "You Lose! Rock breaks the Scissor", "score": -1};
        if(computerSelection == "SCISSOR")
            return {"msg": "TIE", "score": 0};
        if(computerSelection == "PAPER")
            return {"msg": "You Win! Scissor cuts the Paper", "score": 1};
    }
    
}
function startGame()
{
    let win = 0;
    let fail = 0;

    for (let index = 0; index < 5; index++) {
        let yourSelection = prompt("Write what you choose!?");
        console.log(yourSelection);
        let res = playGame(yourSelection);
        if(res == 1) win++;
        if(res == -1) fail++;
        console.log(`Your Score ${win} Computer Score ${fail}`);
    }
    
    if(win > fail) console.log("Hurra! you WON");
    if(win < fail) console.log("You Lost The Game");
    if(win == fail) console.log("TIE")
        
}


function playGame(yourSelection){
    const computerSelection = getComputerChoice();
    const res = playRound(yourSelection, computerSelection);
    console.log(res.msg);
    return res.score;
}


//Starting the game
startGame();