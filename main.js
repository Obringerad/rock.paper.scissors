let rand = Math.floor(Math.random()*3);
let computerSelection = '';
let playerSelection = '';
document.getElementById("playerSelectionID").value = playerSelection;
let roundResult='';
document.getElementById('roundResult').value = roundResult;
    if(rand == 0){
        computerSelection = 'Rock';
    } else if (rand == 1){
        computerSelection = 'Paper';
    } else{
        computerSelection = 'Scissors';
    }

    function displayMessage(){
        let playerSelection = document.getElementById("playerSelectionID").value;
        if (playerSelection){
            document.getElementById("display").innerHTML = playerSelection;
        }
        else{
            document.getElementById("display").innerHTML = "No message set";
        }
        return playerSelection;
    };

    function round(){
        let playerSelection = document.getElementById("playerSelectionID").value;
        if (playerSelection==='Rock' && computerSelection==='Rock'){
            roundResult='It\'s a tie!';
        }else if (playerSelection==='Paper' && computerSelection==='Rock'){
            roundResult='You win!';
        }else if(playerSelection==='Scissors' && computerSelection==='Rock'){
            roundResult='You lose.';
        }else if(playerSelection==='Rock' && computerSelection==='Paper'){
            roundResult='You lose.';
        }else if(playerSelection==='Paper' && computerSelection==='Paper'){
            roundResult='It\'s a tie!';
        }else if(playerSelection==='Scissors' && computerSelection==='Paper'){
            roundResult='You win!';
        }else if(playerSelection==='Rock' && computerSelection==='Scissors'){
            roundResult='You win!';
        }else if(playerSelection==='Paper' && computerSelection==='Scissors'){
            roundResult='You lose.';
        }else{
            roundResult='It\'s a tie!';
        }
        console.log(roundResult);
    } 

console.log(rand);
console.log(computerSelection);
console.log(playerSelection);
console.log(roundResult);
document.getElementById('playerSelectionID').innerHTML=playerSelection;
document.getElementById('computerChoice').innerHTML=computerSelection
document.getElementById('roundResult').innerHTML=roundResult;