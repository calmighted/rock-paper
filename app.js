
const allChoices = ['rock','paper','scissors']

function computerPlay(){
    return allChoices[Math.floor(Math.random() * allChoices.length)];
}


let pp = 0
let cp = 0

function playRound(playerchoice,computerChoice){
    playerchoice = playerchoice.toLowerCase()

    if (playerchoice == computerChoice){
        return "Its a tie haha!"
    }

    if( playerchoice == allChoices[0]){
        if(computerChoice == allChoices[1]){
            cp = cp + 1
            return "You Lose! Paper beats Rock!"
        }else{
            pp = pp + 1
            return "You Won! rock beats scissors"
        }
    }
    
    if(playerchoice == allChoices[1]){
        if(computerChoice == allChoices[0]){
            pp = pp + 1
            return "You won! paper beats rock!"
        }else{
            cp = cp + 1
            return "You Lose! scissors beats paper"
        }
    }
    // const allChoices = ['rock','paper','scissors']
    if(playerchoice == allChoices[2]){
        if(computerChoice == allChoices[0]){
            cp = cp + 1
            return "You Lose! rock beats scissors!"
        }else if(computerChoice == allChoices[1]){
            pp = pp + 1
            return "You won! Scissors beats paper"
        }
    }
}


function game(){
    for(let i =0;i<5;i++){
        let computerSelection = computerPlay()
        const playerSelection = prompt("Enter Your Choice(Rock, Paper or Scissors?) This game is Best of Five!");
        
        if (allChoices.includes(playerSelection)){
            console.log(`Player Selection : ${playerSelection}`);
            console.log(`Computer Selection : ${computerSelection}`);
            console.info(playRound(playerSelection,computerSelection));
        }else{
            alert("Enter a valid choice pls!")
        }
    }
}

game()

function winner(){
    if (pp > cp){
        return `You won! you have ${pp} points`
    }
    if (cp > pp){
        return `You Lost! computer have ${cp} points`
    }
    if(pp == cp){
        return `The game has tied Both have ${pp} points`
    }
}

console.info(winner())

