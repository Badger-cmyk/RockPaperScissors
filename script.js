// console.log("Hello World")

//computer choice
//the function getComputerChoice to randomly return rock, paper or scissors

function getComputerChoice(){
    let number = Math.random();

    if(number <= 0.3){
        return "rock"
    }
    else if(number > 0.3 && number <= 0.6){
        return "paper"
    }
    else {
        return "scissors"
    }
}



//function to get human choice
function getHumanChoice(){
    let choice = prompt("Enter Your Choice:")
    return choice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You Win! Rock beats Scissors";
    }   
    else if(humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You Lose! Paper Beats Rock"
    }
    else if(humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You Win! Paper Beats Rock"
    }
    else if(humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You Lose! Scissors Beats Paper"
    }
    else if(humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You Lose! Rock Beats Scissors"
    }
    else if(humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You Win! Scissors Beats Paper"
    }
    else {
        return "It is a tie"
    }

    
}

// console.log(humanScore)
// console.log(computerScore)

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

console.log(humanScore)
console.log(computerScore)