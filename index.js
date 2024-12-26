
function getComputerChoice() {
    //options in an array
    const options = ['scissors', 'paper', 'rock']

    //Get random value with Math.random
    //use random value to choose from array
    randomValue = Math.floor(Math.random() * 3)
    // console.log(options[randomValue]);

    //return value
    return options[randomValue];
}


function getHumanChoice() {
    // console.log(input);
     input = prompt('Scissors, paper or rock?');

    
    if (input.toLowerCase() === 'scissors' || input.toLowerCase() === 'paper' || input.toLowerCase() === 'rock') {
        // console.log('You have chosen ' + answer)
        return input.toLowerCase();
    }
    else {
        alert('Please choose from the three')
        return getHumanChoice();
    }
}



function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;
   
    
    function playRound() {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log('You: ' + humanSelection);
        console.log('CPU: ' + computerSelection);
        if (humanSelection === computerSelection) {
            alert('This round is a tie!')
        } else if ((humanSelection === 'scissors' && computerSelection === 'rock') || (humanSelection === 'rock' && computerSelection === 'paper') || (humanSelection === 'paper' && computerSelection === 'scissors')) {
            alert('You lost this round!')
            computerScore ++
        } else {
            alert('You won this round!')
            humanScore ++
        }
    }

    for(let i = 0; i < 5; i++) {
        playRound();
    }
    
    console.log('Your score is: ' + humanScore);
    console.log('CPU score is: ' + computerScore);
    
}

playGame();