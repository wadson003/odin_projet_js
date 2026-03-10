console.log("Hello World");
function getComptuterChoice(){

    let randomValue = Math.random();

    if(randomValue <0.33){
        return "Pierre";
    } else if (randomValue <0.66){
        return "Papier";
    }else{
        return "Ciseaux"
    }
}
console.log("computer choice:",getComptuterChoice());


function getHumanChoice(){
    let choice = prompt("Veuillez choisir entre: Pierre, Papier ou Ciseaux");
    return choice;
}

console.log ("le choix est:",getHumanChoice());

let humanScore =0;
let computerScore =0;

function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();

if (humanChoice === computerChoice){
    console.log("Egalite entre les camps" + humanChoice);
}

else if (
    (humanChoice==="pierre" && computerChoice==="ciseaux") ||
    (humanChoice==="papier" && computerChoice==="pierre") ||
    (humanChoice==="ciseaux" && computerChoice==="papier")
){
    humanScore++;
    console.log("l'humain a gagner!" + humanChoice + "bat" + humanChoice);
}
else{
    computerScore++;
    console.log("le computer a gagne!" + computerChoice + "bat" + humanChoice);
}
}
function playGame(){
const humanSelection = getHumanChoice();
const computerSelection = getComptuterChoice();

playRound(humanSelection, computerSelection);

console.log("Scores ->Human:" + humanScore + " Computer"+ computerScore);

console.log("1er manche");
playRound(getHumanChoice(),getComptuterChoice());

console.log("2eme manche");
playRound(getHumanChoice(),getComptuterChoice());

console.log("3eme manche");
playRound(getHumanChoice(),getComptuterChoice());

console.log("4eme manche");
playRound(getHumanChoice(),getComptuterChoice());

console.log("5eme manche");
playRound(getHumanChoice(),getComptuterChoice());

console.log("resultat final");
console.log("score Human :" + humanScore);
console.log("score  Computer:" + computerScore);

if (humanScore > computerScore){
    console.log("congrats! Vous avez gagner");
}else if (humanScore < computerScore){
    console.log("poor computer a gagner");
}else{
    console.log("score null");
}
}


playGame();

