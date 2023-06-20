let userInput = document.querySelector("#userValue");
let submit = document.querySelector(".submit");
let guessValues = document.querySelector(".guess-values");
let balAttempts = document.querySelector(".attempts");
let sugMessage = document.querySelector(".suggestion");
let gameMessage = document.querySelector(".game");
let introDiv = document.querySelector(".intro-msg");
let startBtn = document.querySelector(".close-btn");
let arrGuessValue = [];

let randomNumber = Math.floor(Math.random() * 100);
// console.log(randomNumber);
startBtn.addEventListener("click", () => {
  introDiv.classList.add("hide-intro");
});
submit.addEventListener("click", (e) => {
  e.preventDefault();

  validate(randomNumber, Number(userInput.value));
  if (userInput.value == 0 || isNaN(userInput.value) || userInput.value > 100) {
    alert("Enter valid Number (or) enter value between 1 to 100.");
  } else {
    storeValue();
  }

  function validate(ranNum, userNum) {
    if (ranNum == userNum) {
      sugMessage.textContent = `You find the correct value!`;
      sugMessage.classList.add("show-gameSug");
      gameMessage.textContent = `Start new Game !`;
      gameMessage.classList.add("show-gameSug");
      //   console.log(ranNum, userNum);
    }
    if (ranNum < userNum) {
      sugMessage.textContent = `Value is too high!Try again!`;
      sugMessage.classList.add("show-gameSug");
    }
    if (ranNum > userNum) {
      sugMessage.textContent = `Value is too low ! try again!`;
      sugMessage.classList.add("show-gameSug");
    }
  }

  function storeValue() {
    arrGuessValue.push(Number(userInput.value));
    guessValues.textContent = `[${arrGuessValue}]`;
    let balanceAttempts = 10 - arrGuessValue.length;
    // console.log(balanceAttempts);
    balAttempts.textContent = balanceAttempts;
    gameOver(balanceAttempts);
  }

  function gameOver(number) {
    if (number === 0) {
      sugMessage.classList.remove("show-gameSug");
      sugMessage.textContent = `You attempts is over!The number is ${randomNumber}`;
      sugMessage.classList.add("show-gameSug");
      gameMessage.textContent = `GameOver`;
      gameMessage.classList.add("show-gameSug");
      userInput.classList.add("stop");
      submit.disabled = true;
    }
  }
  gameMessage.addEventListener("click", () => {
    window.location.reload();
  });
  userInput.value = "";
});
