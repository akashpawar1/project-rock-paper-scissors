function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "rock";
  if (choice === 1) return "paper";
  if (choice === 2) return "scissor";
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection)
    return `Game tie! both have ${computerSelection}`;
  if (playerSelection === "rock" && computerSelection === "paper")
    return "you lose! paper beats rock";
  if (playerSelection === "rock" && computerSelection === "scissor")
    return "you win! rock beats scissor";
  if (playerSelection === "paper" && computerSelection === "scissor")
    return "you lose! scissor beats paper";
  if (playerSelection === "paper" && computerSelection === "rock")
    return "you win! paper beats rock";
  if (playerSelection === "scissor" && computerSelection === "rock")
    return "you lose! rock beats scissor";
  if (playerSelection === "scissor" && computerSelection === "paper")
    return "you win! scissor beats rock";
  else return `${playerSelection} is not valid`;
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("rock,paper , scissor").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));
  }
}

game();
