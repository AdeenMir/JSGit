const choices = ["rock", "paper", "scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const cdisplay = document.getElementById("cdisplay");
const rdisplay = document.getElementById("rdisplay");
const pscoreElement = document.getElementById("pscore");
const cscoreElement = document.getElementById("cscore");

let playerScore = 0;
let computerScore = 0;

function playgame(playerchoice) {
    const cchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerchoice === cchoice) {
        result = "It's a tie!";
    } else if (
        (playerchoice === "rock" && cchoice === "scissors") ||
        (playerchoice === "paper" && cchoice === "rock") ||
        (playerchoice === "scissors" && cchoice === "paper")
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "You lose!";
        computerScore++;
    }

    playerdisplay.textContent = `You chose: ${playerchoice}`;
    cdisplay.textContent = `Computer chose: ${cchoice}`;
    rdisplay.textContent = result;

    rdisplay.classList.remove("greentext", "redtext");

    switch(result){
        case "You win!":
            rdisplay.style.color = "green";
            break;
        case "You lose!":
            rdisplay.style.color = "red";
            break;
        default:
            rdisplay.style.color = "black";
    }

    pscoreElement.textContent = playerScore;
    cscoreElement.textContent = computerScore;
}
