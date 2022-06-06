function computerPlay {
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

console.log(computerPlay());