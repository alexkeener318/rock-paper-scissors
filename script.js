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
        if(playerSelection.toLower() === "rock"){
            return "The computer wins!";
        }
        else if(playerSelection.toLower === "paper"){
            return "Its a tie!";
        }
        else{
            return "The player wins!";
        }
    }
    else if(computerSelection === "Rock"){
        if(playerSelection.toLower() === "rock"){
            return "Its a tie!";
        }
        else if(playerSelection.toLower === "paper"){
            return "The player wins!";
        }
        else{
            return "The computer wins!";
        }
    }
    else{
        if(playerSelection.toLower() === "rock"){
            return "The player wins!";
        }
        else if(playerSelection.toLower === "paper"){
            return "The computer wins!";
        }
        else{
            return "It's a tie!";
        }
    }
}