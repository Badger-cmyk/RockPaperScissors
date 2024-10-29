const getComputerChoice = () => {
    let choice;
    const number = Math.floor(Math.random() * 3 + 1)

    if(number === 1){
        choice = "rock"
    }
    else if(number === 2){
        choice = "paper"
    }
    else{
        choice = "scissors"
    }
    return choice
}

const getHumanChoice = () => {
    const choice = prompt("rock, paper or scissors?")
    return choice.toLowerCase()
}

let humanScore = 0
let computerScore = 0

const playGame = () => {
    const playRound = (humanChoice, computerChoice) => {  
       let result = ''
     
        if(humanChoice === computerChoice){
            result = "It's a tie!"
        }
        else {
            switch(humanChoice){
                case 'rock':
                    result = (computerChoice === 'scissors') ? "You win! Rock beats Scissors" : "You lose! Paper beats Rock."
                    break;
                case 'paper':
                    result = (computerChoice === 'rock') ? "You win! Paper beats Rock" : "You lose! Scissors beats Paper."
                    break;
                case 'scissors':
                    result = (computerChoice === 'paper') ? "You win! Scissors beats Paper" : "You lose! Rock beats Scissors."
                    break;
                default:
                    result = `Invalid option "${humanChoice.toUpperCase()}". Kindly try again.`
            }
        }
     
        console.log(`You: ${humanChoice}`)
        console.log(`Computer: ${computerChoice}`)
        console.log(result)
     
        if(result.includes('win')) humanScore++;
        if(result.includes('lose')) computerScore++;
        if(result.includes('tie')) {
            humanScore++;
            computerScore++;
        } 
     
        console.log(`You: ${humanScore}`)
        console.log(`Computer: ${computerScore}`)    
    }
    
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())

    if(humanScore > computerScore){
        console.log(`Final Score: You: ${humanScore} | Computer: ${computerScore}`)
        console.log('You Win The Game!')
    }
    else{
        console.log(`Final Score: You: ${humanScore} | Computer: ${computerScore}`)
        console.log('You Lose The Game!')
    }
}

playGame()