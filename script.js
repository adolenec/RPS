let playerScore = document.querySelector('.player-score p');
let computerScore = document.querySelector('.computer-score p');
let playerImage = document.querySelector('.player-image');
let computerImage = document.querySelector('.computer-image');
let narator = document.querySelector('.main-section h1');
const choicesBtn = document.querySelectorAll('.buttons button');
let playerPoints = 0;
let computerPoints = 0;

let computerWeapon;

function computerChoice(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if(randomNumber == 1){
        computerWeapon = "rock";
    }else if(randomNumber == 2){
        computerWeapon = "paper";
    }else{
        computerWeapon ="scissors";
    }
    return computerWeapon;
}

let playerChoice;

choicesBtn.forEach((choice) => {
    choice.addEventListener('click', () => {
        computerWeapon = computerChoice();
        if(choice.className == "rockBtn"){
            playerChoice = "rock";
        }else if(choice.className == "paperBtn"){
            playerChoice = "paper";
        }else{
            playerChoice = "scissors";
        }
        playRound(playerChoice, computerWeapon);
    })
})

function playRound(playerChoice, computerChoice){
    if(playerChoice == "rock" && computerChoice == "scissors"){
        playerPoints++;
        playerScore.textContent = playerPoints;
        narator.textContent="You Win! Rock beats Scissors";
        playerImage.setAttribute('src', 'img/rock.png');
        computerImage.setAttribute('src', 'img/scissors.png');
    } else if(playerChoice == "rock" && computerChoice == "paper"){
        computerPoints++;
        computerScore.textContent = computerPoints;
        narator.textContent="You Lose! Paper beats Rock";
        playerImage.setAttribute('src', 'img/rock.png');
        computerImage.setAttribute('src', 'img/paper.png');
    } else if(playerChoice == "paper" && computerChoice == "rock"){
        playerPoints++;
        playerScore.textContent = playerPoints;
        narator.textContent="You Win! Paper beats Rock";
        playerImage.setAttribute('src', 'img/paper.png');
        computerImage.setAttribute('src', 'img/rock.png');
    } else if(playerChoice == "paper" && computerChoice == "scissors"){
        computerPoints++;
        computerScore.textContent = computerPoints;
        narator.textContent="You Lose! Scissors beat Paper";
        playerImage.setAttribute('src', 'img/paper.png');
        computerImage.setAttribute('src', 'img/scissors.png');
    } else if(playerChoice == "scissors" && computerChoice == "rock"){
        computerPoints++;
        computerScore.textContent = computerPoints;
        narator.textContent="You Lose! Scissors beat Rock";
        playerImage.setAttribute('src', 'img/scissors.png');
        computerImage.setAttribute('src', 'img/rock.png');
    }else if(playerChoice == "scissors" && computerChoice == "paper"){
        playerPoints++;
        playerScore.textContent = playerPoints;
        narator.textContent="You Win! Scissors beat Paper";
        playerImage.setAttribute('src', 'img/scissors.png');
        computerImage.setAttribute('src', 'img/paper.png');
    } else if(playerChoice == "scissors" && computerChoice == "scissors"){
        playerScore.textContent = playerPoints;
        computerScore.textContent = computerPoints;
        narator.textContent="It's a tie!";
        playerImage.setAttribute('src', 'img/scissors.png');
        computerImage.setAttribute('src', 'img/scissors.png');
    } else if(playerChoice == "rock" && computerChoice == "rock"){
        playerScore.textContent = playerPoints;
        computerScore.textContent = computerPoints;
        narator.textContent="It's a tie!";
        playerImage.setAttribute('src', 'img/rock.png');
        computerImage.setAttribute('src', 'img/rock.png');
    } else if(playerChoice == "paper" && computerChoice == "paper"){
        playerScore.textContent = playerPoints;
        computerScore.textContent = computerPoints;
        narator.textContent="It's a tie!";
        playerImage.setAttribute('src', 'img/paper.png');
        computerImage.setAttribute('src', 'img/paper.png');
    }
}


