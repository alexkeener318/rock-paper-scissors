function computerPlay() {
    let computerNum = Math.floor(Math.random() *3);
    
    if(computerNum === 0){
        return "Rock";
    }
    else if(computerNum === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(computerSelection === "Paper"){
        if(playerSelection.toLowerCase() === "rock"){
            return "The computer wins!";
        }
        else if(playerSelection.toLowerCase() === "paper"){
            return "Its a tie!";
        }
        else{
            return "The player wins!";
        }
    }
    else if(computerSelection === "Rock"){
        if(playerSelection.toLowerCase() === "rock"){
            return "Its a tie!";
        }
        else if(playerSelection.toLowerCase() === "paper"){
            return "The player wins!";
        }
        else{
            return "The computer wins!";
        }
    }
    else{
        if(playerSelection.toLowerCase() === "rock"){
            return "The player wins!";
        }
        else if(playerSelection.toLowerCase() === "paper"){
            return "The computer wins!";
        }
        else{
            return "It's a tie!";
        }
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let result;
    for(let i = 0; i < 5; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt("Choose rock paper or scissors: ");
        result = playRound(playerSelection, computerSelection);
        console.log(result);

        if(result === "The computer wins!"){
            computerScore++;
        }
        else if(result === "The player wins!"){
            playerScore++;
        }
    }
    if(computerScore > playerScore){
        console.log("Sorry brother, but you've been beaten by the machine");
    }
    else if( playerScore > computerScore){
        console.log("Congrats! You did the impossible and beat the machine");
    }
    else {
        console.log("Looks like no one was able to pull ahead. You tied!");
    }
}




