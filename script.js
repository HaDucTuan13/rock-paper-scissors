console.log("Welcome to the game!");

function getComputerChoice(){
    const min=Math.ceil(1);
    const max=Math.floor(4);
    const random = Math.floor(Math.random() * (max - min)+ min);//ramdom tu 0 den 1 * 0-3 + 1 thanh 1-4 lam tron thanh 1 2 3
    if(random===1){
        return "rock";
    }else if(random===2){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors? What is your choice?")
    if(choice ==null){
        return "okay";
    }
    choice= choice.toLowerCase();
    if (choice =="rock"){
        console.log("So you choose rock");
        return "rock";
    }else if(choice =="paper") {
        console.log("So you choose paper");
        return "paper"
    }else if (choice =="scissors"){
        console.log("So you choose scissors");
        return "scissors";
    }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

function playRound (humanChoice,computerChoice) {
    if(humanChoice === computerChoice){
        console.log("It's a draw, reset page to try again!");
        return "draw";
    }else if(humanChoice =="rock" && computerChoice =="paper") {
        console.log("You lose, paper beats rock");
        return "computer";
    }else if(humanChoice =="rock" && computerChoice =="scissors") {
        console.log("You win, rock beat scissors");
        return "human";
    }else if(humanChoice =="paper" && computerChoice =="scissors") {
        console.log("You lose, scissors beats paper");
        return "computer";
    }else if(humanChoice =="paper" && computerChoice =="rock") {
        console.log("You win, paper beat rock");
        return "human";
    }else if(humanChoice =="scissors" && computerChoice =="rock") {
        console.log("You lose, rock beats scissors");
        return "computer";
    }else if(humanChoice =="scissors" && computerChoice =="paper") {
        console.log("You win, scissors beat paper");
        return "human";
    }
}

// playRound(humanSelection,computerSelection);

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i=0;i<5;i++){
        const humanSelection=getHumanChoice();
        const computerSelection= getComputerChoice();
        const result=playRound(humanSelection,computerSelection);
        if (result == "human"){
            humanScore++;
        }else if(result =="computer"){
            computerScore++;
        }
    }
    console.log("Human Score: "+ humanScore);
    console.log(`Computer Score: ${computerScore}`);
    if(humanScore>computerScore){
        console.log("You win, Congratz");
    }else if(humanScore<computerScore){
        console.log("You lose, too bad");
    }else if(humanScore==computerScore){
        console.log("it is a draw");
    }
}
playGame();