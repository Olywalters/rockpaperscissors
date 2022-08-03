//Create Array for choice options
let choices = ["ROCK", "PAPER", "SCISSORS"];

//Create random number which returns a choice from the array
function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

//Get user to input their choice and turn it into a string
let userInput = window.prompt("Select Rock, Paper or Scissors", "");
let playerSelection = userInput.toUpperCase();

//Store the results of the function into a variable
let computerSelection = getComputerChoice();

//Display the players' choices
console.log("Computer: " + computerSelection);
console.log("Player: " + playerSelection);


//Declare score counter to zero
let playerScore = 0;
let computerScore = 0;

//Create function that displays messages depending on the players'choice
//Add to the score counter
function playRound(playerSelection, computerSelection) {

    if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {

        playerScore++;
        return `Congratulations, You Win The Round! ${playerSelection} beats ${computerSelection}.`;
        
    } else if ((playerSelection === computerSelection)) {

        return "It's a draw, Play Again.";

    } else {

        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

//Display the winner of the round
console.log(playRound(playerSelection, computerSelection));


//Loop for five rounds
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);

        if (playerScore === 5) {
            return "You Win The Game";
        } else if (computerScore === 5) {
            return "The Computer Wins The Game"
        }
    }
}

//Display scores
console.log("Player Score: " + playerScore);
console.log("Computer Score: " + computerScore);