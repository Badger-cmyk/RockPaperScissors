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

const choices = document.querySelector('.choices')
const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorsBtn = document.querySelector('.scissors')

choices.addEventListener('click', (e) => {
    const target = e.target.id
    let playerSelection;

    switch(target){
        case 'rock':
            playerSelection = 'rock'
            break
        case 'paper':
            playerSelection = 'paper'
            break
        case 'scissors':
            playerSelection = 'scissors'
            break
    }

    
    playRound(playerSelection)
})

const playRound = (playerSelection) => {
    const computerSelection = getComputerChoice()

    let result = ''

    if(playerSelection === computerSelection){
        result = "It's a tie!"
    }
    else {
        switch(playerSelection){
            case 'rock':
                result = (computerSelection === 'scissors') ? "You win! Rock crushes Scissors" : "You lose! Paper covers Rock."
                break;
            case 'paper':
                result = (computerSelection === 'rock') ? "You win! Paper covers Rock" : "You lose! Scissors cuts Paper."
                break;
            case 'scissors':
                result = (computerSelection === 'paper') ? "You win! Scissors cuts Paper" : "You lose! Rock crushes Scissors."
                break;
            }
    }

    if(result.includes('win')) humanScore++;
    if(result.includes('lose')) computerScore++;
    if(result.includes('tie')) {
        humanScore++;
        computerScore++;
    } 

    const displayScore = () => {
        const display = document.querySelector('.score')
        const buttons = document.querySelectorAll('button')

        display.style.height = '300px'
        display.style.backgroundColor = 'burlywood'
        display.style.width = '300px'
        display.style.padding = '10px'
        display.style.marginTop = '10px'
        display.style.borderRadius = '5px'
              
        display.innerText = `
        Player: ${playerSelection}
        Computer: ${computerSelection}

        ${result}

        Score
        Player: ${humanScore}
        Computer: ${computerScore}

        `
        if(humanScore === 5 || computerScore === 5){
            if(humanScore === 5){
                display.innerText += `You Win The Game.Congrats!.


                Kindly Reload The Page To Play Again!
                `
            }
            else {
                display.innerText += `Computer Wins The Game!


                Kindly Reload The Page To Play Again!
                `
            }   
            
            buttons.forEach((button) => button.disabled = true)   
        }    
    }
    displayScore()

}


