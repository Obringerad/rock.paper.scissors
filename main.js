let rand = Math.floor(Math.random()*3);
let computerSelection = '';
let playerSelection='';
document.getElementById('playerSelectionID').value=playerSelection;

    if(rand == 0){
        computerSelection = 'Rock';
    } else if (rand == 1){
        computerSelection = 'Paper';
    } else{
        computerSelection = 'Scissors';
    }


console.log(rand);
console.log(computerSelection);
