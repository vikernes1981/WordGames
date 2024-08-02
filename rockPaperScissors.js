//     Rock Paper Scissors
//         Description: Implement a basic Rock Paper Scissors game.
//         Requirements:
//             The program should take the player’s move as an input from process.argv.
//             The program should randomly generate a move for the computer.
//             Determine the winner based on the rules of Rock Paper Scissors.
//             Output the result (win, lose, or draw) to the console.

// Extract the arguments passed to the script, excluding the first two elements (node and script path)
const firstArg = process.argv.slice(2);

// Check if exactly one argument is provided
if (firstArg.length !== 1) {
    // Output an error message if the argument is not one of the three expected values
    console.error('Enter one of three: "paper", "rock", or "scissors"');
    // Exit the function
    return;
}

// Convert the player's move to lowercase
const playerMove = firstArg[0].toLowerCase();

// Generate a random number between 1 and 3 to determine the computer's move
let randomMove = Math.ceil(Math.random() * 3);

// Assign the computer's move based on the random number
switch (randomMove) {
    case 1:
        randomMove = "rock";
        break;
    case 2:
        randomMove = "paper";
        break;
    case 3:
        randomMove = "scissors";
        break;
}

// Determine the result of the game
if (playerMove === randomMove) {
    // If both moves are the same, it's a draw
    console.log(`You chose ${playerMove}. Computer chose ${randomMove}. It's a draw!`);
} else if (
    (playerMove === "paper" && randomMove === "rock") || 
    (playerMove === "rock" && randomMove === "scissors") ||
    (playerMove === "scissors" && randomMove === "paper")
) {
    // Check if the player wins based on the rules of the game
    console.log(`You chose ${playerMove}. Computer chose ${randomMove}. You win!`);
} else {
    // Otherwise, the player loses
    console.log(`You chose ${playerMove}. Computer chose ${randomMove}. You lose!`);
}



