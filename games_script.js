function getComputerChoice()
{
    let choice = ["ROCK", "PAPER", "SCISSOR"];
    return choice[Math.floor(Math.random() * 10)%3];
}