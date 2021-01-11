const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const keys = Array.from(document.querySelectorAll(".choice"));
const playerSelectionContainer = document.createElement("div");
const computerSelectionContainer = document.createElement("div");
const display = document.querySelector(".display-choices");
const roundMessage = document.querySelector(".round-message");
const container = document.querySelector(".container");
const winningMessage = document.createElement("h2");

const options = ["Rock", "Paper", "Scissors"];

let userCounter = 0;
let computerCounter = 0;
const computerPlay = () => {
  const randomPick = Math.floor(Math.random() * 3);
  return options[randomPick];
};

const play = (playerselection, computerselection) => {
  const playerSelection = playerselection.toLowerCase();
  const computerSelection = computerselection.toLowerCase();
  createElementSelection(playerSelection, computerSelection);
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    userCounter++;
    return `Player win, ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection === computerSelection) {
    return "DRAW";
  } else {
    computerCounter++;
    return `Player lose, ${computerSelection} beats ${playerSelection}.`;
  }
};

const createElementSelection = (playerSelection, computerSelection) => {
  playerSelectionContainer.innerHTML = `<div class='versus'> 
  <div>
    <img class='images' src='images/${playerSelection}.png' alt=${playerSelection} />
  </div>
  VS
  <div class=''>
  <img class='images' src='images/${computerSelection}.png' alt=${computerSelection} />
</div></div>`;

  display.appendChild(playerSelectionContainer);
};

const game = e => {
  console.log(e.target);
  e.target.classList.add("animate-card");
  roundMessage.innerText = play(e.target.alt, computerPlay());
  if (userCounter === 5) {
    winningMessage.innerText = "User Wins the game";
  } else if (computerCounter === 5) {
    winningMessage.innerText = "Computer Wins the game";
  }
  container.insertBefore(winningMessage, roundMessage);
};

// console.log(game());
console.log(keys);
keys.forEach(key => {
  key.addEventListener("click", game);
});

keys.forEach(key =>
  key.addEventListener("transitionend", e => {
    e.target.classList.remove("animate-card");
  })
);
