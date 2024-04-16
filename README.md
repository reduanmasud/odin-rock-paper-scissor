# Rock Paper Scissors Game

This is a simple implementation of the classic Rock Paper Scissors game using HTML, CSS, and JavaScript.

## HTML Structures

The HTML structure of the game consists of the following elements:

- `h1`: Heading displaying the game title.
- `p`: Paragraph providing instructions to the player.
- `section#playerChoice`: Section containing buttons for the player to choose from (ROCK, PAPER, SCISSORS).
- `section#score`: Section displaying the scores of the player and the computer.

## JavaScript Functionality

The JavaScript code provides the functionality to the game:

### `getComputerChoice()`

- Function to randomly select one of ROCK, PAPER, or SCISSORS as the computer's choice.

### `playRound(playerSelection, computerSelection)`

- Function to play a single round of the game.
- Determines the winner based on the player's and computer's selections.
- Returns an object containing the result message and the score.

### `updateScore(playerScore, computerScore)`

- Function to update the score displayed on the webpage.

### `startGame()`

- Function to start the game.
- Initializes player and computer scores.
- Adds event listeners to the buttons for player's choices.
- Calls `playGame(playerSelection)` when a player makes a choice.

### `playGame(playerSelection)`

- Function to play a single game round.
- Calls `getComputerChoice()` to get the computer's choice.
- Calls `playRound(playerSelection, computerSelection)` to determine the result.
- Updates scores and checks for game end.
- Calls `endGame()` if either player reaches 5 points.

### `endGame()`

- Function to end the game.
- Displays an alert message indicating the game result.
- Resets scores for a new game.

## Usage

- Clone this repository.
- Open `index.html` in a web browser to play the game.


## Contributing

Contributions are welcome! If you have any suggestions, enhancements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
