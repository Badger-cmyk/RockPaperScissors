function getComputerChoice(){
    let number = Math.random();

    if(number <= 0.3){
        console.log('Computer: rock')
        return 'rock'
    }
    else if(number > 0.3 && number <= 0.6){
        console.log('Computer: paper');
        return 'paper';
    }
    else {
        console.log('Computer: scissors')
        return 'scissors'
    }
}

function getHumanChoice(){
    let choice = prompt("rock, paper or scissors?").toLowerCase();
    console.log(`You: ${choice}`)
    return choice; 
}

//play a single round
function playRound(humanChoice, computerChoice){
    if(humanChoice === 'rock' && computerChoice === 'paper'){
        return 'You lose! Paper beats Rock'
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        return 'You win! Rock beats Scissors'
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        return 'You win! Paper beats Rock'
    }
    else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        return 'You lose! Scissors beats Paper'
    }
    else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        return 'You lose! Rock beats Scissors'
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        return 'You win! Scissors beats Paper'
    }
    else {
        return "It's a tie!"
    }
}

//play the game with consist of five rounds
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 1; i <=5; i++){

        const result = playRound(getHumanChoice(), getComputerChoice());
        console.log(result)   
        if(result.includes('win')){
            humanScore++;
            console.log(`Computer: ${computerScore} | Player: ${humanScore}`)
        }
        else if(result.includes('lose')){
            computerScore++;
            console.log(`Computer: ${computerScore} | Player: ${humanScore}`)
        }
    }

    console.log(
        `Final Results: Player: ${humanScore} Computer: ${computerScore}`
    )

    if(humanScore > computerScore){
        console.log('You win the game!')
    }
    else if(humanScore < computerScore){
        console.log('You lose the game!')
    }
    else {
        console.log('The game was a tie!')
    }
}

playGame();
