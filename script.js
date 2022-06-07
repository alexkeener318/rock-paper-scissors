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

function game(e) {
    playerSelection = e.target.className;
    computerSelection = computerPlay();

    let result = playRound(playerSelection, computerSelection);
    if(result === "The computer wins!"){
        computerScore++;
    }
    else if(result === "The player wins!"){
        playerScore++;
    }

    if(computerScore >= 5 ){
        changeResults.textContent = "COMPUTER WINS";
        return;
    }else if(playerScore >= 5){
        changeResults.textContent = "PLAYER WINS";
        return;
    }
    changeResults.textContent = "Player: " + playerScore + " Computer: " + computerScore;
}


let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const changeResults = document.querySelector(".results");
const buttonSelection = document.querySelectorAll("button");

buttonSelection.forEach(button => {
    button.addEventListener("click", game);
});







