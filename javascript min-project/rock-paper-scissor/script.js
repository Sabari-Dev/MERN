let userScore = 0;
let compScore = 0;
const userPoint = document.getElementById("userpoint");
const compPoint = document.getElementById("comppoint");
const result = document.querySelector(".result h3");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");

// get the choice from user
function play(userSelection) {
  let computerSelection = getComputerSelection();
  // console.log(`${userSelection}  , ${computerSelection}`);
  switch (userSelection + computerSelection) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      userWin(userSelection, computerSelection);
      break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      userLose(userSelection, computerSelection);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      draw(userSelection, computerSelection);
      break;
  }
}

//get the choice from computer
function getComputerSelection() {
  let options = ["rock", "paper", "scissor"];
  let randomValue = Math.floor(Math.random() * 3);
  return options[randomValue];
}
getComputerSelection();
// add eventlistener to the buttons
rockBtn.addEventListener("click", () => play("rock"));
paperBtn.addEventListener("click", () => play("paper"));
scissorBtn.addEventListener("click", () => play("scissor"));

//function for the result
function userWin(userSelection, computerSelection) {
  userScore++;
  userPoint.innerHTML = userScore;
  compPoint.innerHTML = compScore;
  result.innerHTML = `User's ${userSelection} defeat computer's ${computerSelection}.So,User Win !!!`;
  let color = document.getElementById(userSelection);
  color.classList.add("green");
  userPoint.classList.add("greenLetter");
  setTimeout(() => {
    color.classList.remove("green");
    userPoint.classList.remove("greenLetter");
  }, 400);
}
function userLose(userSelection, computerSelection) {
  compScore++;
  compPoint.innerHTML = compScore;
  userPoint.innerHTML = userScore;
  result.innerHTML = `User's ${userSelection} get attacked by computer's ${computerSelection}.So,User Lose !!!`;
  let color = document.getElementById(userSelection);
  color.classList.add("red");
  compPoint.classList.add("greenLetter");
  setTimeout(() => {
    color.classList.remove("red");
    compPoint.classList.remove("greenLetter");
  }, 400);
}
function draw(userSelection, computerSelection) {
  result.innerHTML = `User is ${userSelection} , computer is ${computerSelection}.so,It's draw !!!`;
  let color = document.getElementById(userSelection);
  color.classList.add("yellow");
  setTimeout(() => color.classList.remove("yellow"), 400);
}
