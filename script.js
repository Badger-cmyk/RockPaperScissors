// console.log("Hello World")

//computer choice
//the function getComputerChoice to randomly return rock, paper or scissors

function getComputerChoice(){
    let number = Math.random();

    if(number <= 0.3){
        console.log(number)
        return "rock"
    }
    else if(number > 0.3 && number <= 0.6){
        console.log(number)
        return "paper"
    }
    else {
        console.log(number)
        return "scissors"
    }
}


console.log(getComputerChoice())