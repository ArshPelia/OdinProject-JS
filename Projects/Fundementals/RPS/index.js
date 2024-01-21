console.log("Script init...")

const dict = {
    1: "Rock",
    2: "Paper",
    3: "Scissors"
  };

function getComputerChoice(){
    var x = Math.floor(Math.random() * 3);
    return dict[x]
}
function playRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        console.log("Tie")
    }
}
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));