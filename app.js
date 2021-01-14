
// const allChoices = ['rock','paper','scissors']

// function computerPlay(){
//     return allChoices[Math.floor(Math.random() * allChoices.length)];
// }


// let pp = 0
// let cp = 0

// function playRound(playerchoice,computerChoice){
//     playerchoice = playerchoice.toLowerCase()

//     if (playerchoice == computerChoice){
//         return "Its a tie haha!"
//     }

//     if( playerchoice == allChoices[0]){
//         if(computerChoice == allChoices[1]){
//             cp = cp + 1
//             return "You Lose! Paper beats Rock!"
//         }else{
//             pp = pp + 1
//             return "You Won! rock beats scissors"
//         }
//     }
    
//     if(playerchoice == allChoices[1]){
//         if(computerChoice == allChoices[0]){
//             pp = pp + 1
//             return "You won! paper beats rock!"
//         }else{
//             cp = cp + 1
//             return "You Lose! scissors beats paper"
//         }
//     }
//     // const allChoices = ['rock','paper','scissors']
//     if(playerchoice == allChoices[2]){
//         if(computerChoice == allChoices[0]){
//             cp = cp + 1
//             return "You Lose! rock beats scissors!"
//         }else if(computerChoice == allChoices[1]){
//             pp = pp + 1
//             return "You won! Scissors beats paper"
//         }
//     }
// }


// function game(){
//     for(let i =0;i<5;i++){
//         let computerSelection = computerPlay()
//         // const playerSelection = prompt("Enter Your Choice(Rock, Paper or Scissors?) This game is Best of Five!");
        
//         if (allChoices.includes(playerSelection)){
//             console.log(`Player Selection : ${playerSelection}`);
//             console.log(`Computer Selection : ${computerSelection}`);
//             console.info(playRound(playerSelection,computerSelection));
//         }else{
//             alert("Enter a valid choice pls!")
//         }
//     }
// }

// game()

// function winner(){
//     if (pp > cp){
//         return `You won! you have ${pp} points`
//     }
//     if (cp > pp){
//         return `You Lost! computer have ${cp} points`
//     }
//     if(pp == cp){
//         return `The game has tied Both have ${pp} points`
//     }
// }
// function myFunction() {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
//   }

// console.info(winner())

//new one
let playerChoice = document.querySelectorAll('.player-board button')
let playerBoard = document.querySelector('.player-board')
// let choiceButtons = document.querySelector('.choice button')
let computerBoard = document.querySelector('.computer-board')
let scoreBoard = document.querySelector('.scoreBoard')
let resultBoard = document.querySelector('.results')

function printBtn(e){
    // console.log(e.target)
    tarr = e.target.cloneNode('true')
    tarr.classList.add("Button")
    // console.log(tarr)
    playerBoard.appendChild(tarr)
    // console.log(tarr)
    // playerChoice.forEach(cho => cho.disabled = true)
    // console.log(computerPlay())
    decideSymbol()
    updateScore(tarr.id,compChoice.id)
    addScoreToScreen()
    updateResult()
    // determineWinner()

}

compChoice = document.createElement('button')
compChoice.classList.add('ButtonComp')

function decideSymbol(){
    compChoice.setAttribute('id', computerPlay())
    // console.log(compChoice)
    if (compChoice.id == "rock"){
        compChoice.textContent = "🗿";
    }
    else if(compChoice.id == "paper"){
        compChoice.textContent = "📃";
    }else if (compChoice.id == "scissors"){
        compChoice.textContent = "✂️";
    }
    // console.log("AI choice: " + compChoice.id)
    computerBoard.appendChild(compChoice)
}

let ScoreDisplayYou = document.createElement('h1')
let ScoreDisplayAi = document.createElement('h1')


let pp = 0;
let cp = 0;




function addScoreToScreen(){
    // console.log(scoreBoard)
    ScoreDisplayYou.textContent = pp
    ScoreDisplayAi.textContent = cp
    ScoreDisplayYou.classList.add('scoreDisplay')
    ScoreDisplayAi.classList.add('scoreDisplayAi')
    // console.log(ScoreDisplayYou)
    scoreBoard.appendChild(ScoreDisplayYou)
    scoreBoard.appendChild(ScoreDisplayAi)
    
}
let result = ""
let res = document.createElement('p')

function updateResult(){
    res.classList.add('resText')
    res.textContent = result
    // console.log(res.textContent)
    resultBoard.appendChild(res)
}

let refreshBtn = document.createElement('button')
refreshBtn.textContent = 'PLAY AGAIN'
refreshBtn.classList.add('refreshBtn')
refreshBtn.onclick = () => window.location.reload();

function updateScore(playerchoice,computerChoice){
    // playerchoice = playerchoice.toLowerCase()

    if (pp == 5){
        res.setAttribute('id','winner')
        result = "You Won yay! 🤩"
        resultBoard.appendChild(refreshBtn)
        playerChoice.forEach(cho => cho.disabled = true)
    }else if (cp == 5){
        res.setAttribute('id','winner')
        result = "Dumb human, You lost! 😭"
        resultBoard.appendChild(refreshBtn)
        playerChoice.forEach(cho => cho.disabled = true)
    } else{

        if (playerchoice == computerChoice){
            result =  "Its a tie haha!"
            return result
        }
    
        if( playerchoice == allChoices[0]){
            if(computerChoice == allChoices[1]){
                cp = cp + 1
                result =  "You Lose! Paper beats Rock!"
            }else{
                pp = pp + 1
                result =  "You Won! rock beats scissors"
            }
        }
        
        if(playerchoice == allChoices[1]){
            if(computerChoice == allChoices[0]){
                pp = pp + 1
                result =  "You won! paper beats rock!"
            }else{
                cp = cp + 1
                result =  "You Lose! scissors beats paper"
            }
        }
        // const allChoices = ['rock','paper','scissors']
        if(playerchoice == allChoices[2]){
            if(computerChoice == allChoices[0]){
                cp = cp + 1
                result =  "You Lose! rock beats scissors!"
            }else if(computerChoice == allChoices[1]){
                pp = pp + 1
                result =  "You won! Scissors beats paper"
            }
        }
    }



}

// function determineWinner(){
//     res.setAttribute('id','winner')
//     console.log(res)
//     if (pp == 5){
//         result = "You Won yay!"
//     }else if (cp == 5){
//         result = "Dumb human, You loose today!"
//     }
// }

//determine winner of 1 game
//add the score to the screen
//first to score 5 points wins



const allChoices = ['rock','paper','scissors']

function computerPlay(){
    return allChoices[Math.floor(Math.random() * allChoices.length)];
}

playerChoice.forEach(choice =>choice.addEventListener('click',printBtn));
addScoreToScreen()
