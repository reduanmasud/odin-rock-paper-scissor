# Rock Paper Scissors Game

This console-based Rock Paper Scissors game is implemented in JavaScript. 

## How to Play

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in your preferred code editor.
3. Open the console in your browser or code editor.
4. Run the `startGame()` function in the console to start the game.
5. Follow the on-screen instructions to play the game.
6. Enter your choice (rock, paper, or scissors) when prompted.
7. See the result of each round displayed in the console.
8. Play five rounds against the computer.
9. After five rounds, the game will display the final scores and declare the winner.

## Features

- Simple and intuitive console-based gameplay.
- Randomized computer choices for added challenge.
- Real-time display of game results.
- Easy to understand gameplay suitable for all ages.

## Technologies Used

- JavaScript
- HTML

## How the Game Works

The game consists of two main functions:

### `getComputerChoice()`

This function randomly selects one of three choices: "ROCK", "PAPER", or "SCISSOR" for the computer.

### `playRound(playerSelection, computerSelection)`

This function takes the player's selection and the computer's selection as arguments and determines the winner for that round based on the rules of Rock Paper Scissors. It returns an object containing a message indicating the result of the round ("You Win!", "You Lose!", or "TIE") and a score (-1 for loss, 0 for tie, 1 for win).

## How to Start the Game

To start the game, simply run the `startGame()` function in your browser's console. This will prompt you to enter your choice for each round and display the results in the console.

## Contributing

Contributions are welcome! If you have any suggestions, enhancements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
