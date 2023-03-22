var wins = 0;
var losses = 0
function playGame() {
    var userChoice = document.getElementById("userChoice").value;
    var computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice < 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    var result = "";

    if (userChoice == computerChoice) {
        result = "It's a tie!";
    } else if (userChoice == "rock") {
        if (computerChoice == "scissors") {
            result = "You win!";
            wins++;
        } else {
            result = "Computer wins!";
            losses++;
        }
    } else if (userChoice == "paper") {
        if (computerChoice == "rock") {
            result = "You win!";
            wins++;
        } else {
            result = "Computer wins!";
            losses++;
        }
    } else if (userChoice == "scissors") {
        if (computerChoice == "paper") {
            result = "You win!";
            wins++;
        } else {
            result = "Computer wins!";
            losses++;
        }
    }

    document.getElementById("result").innerHTML = result;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
}