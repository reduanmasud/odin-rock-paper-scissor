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
            return "You Lose! Paper beats Rock";
        if(computerSelection == "ROCK")
            return "TIE";
        if(computerSelection == "SCISSOR")
            return "You Win! Rock breaks the Scissor";

    } else if(playerSelection == "PAPER" )
    {
        if(computerSelection == "ROCK")
            return "You Win! Paper beats Rock";
        if(computerSelection == "PAPER")
            return "TIE";
        if(computerSelection == "SCISSOR")
            return "You Lose! Scissor cuts the Paper";

    } else {
        if(computerSelection == "ROCK")
            return "You Lose! Rock breaks the Scissor";
        if(computerSelection == "SCISSOR")
            return "TIE";
        if(computerSelection == "PAPER")
            return "You Win! Scissor cuts the Paper";
    }
    
}
  
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
  