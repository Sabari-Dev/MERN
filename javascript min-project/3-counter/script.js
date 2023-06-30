let value = 0;
let result = document.querySelector(".count-value");
let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let target = e.currentTarget.classList;
    if (target.contains("decrease")) {
      value--;
      result.textContent = value;
    }
    if (target.contains("increase")) {
      value++;
      result.textContent = value;
    }
    if (target.contains("reset")) {
      value = 0;
      result.textContent = value;
    }
    if (value > 0) {
      result.style.color = "green";
    } else if (value < 0) {
      result.style.color = "red";
    } else {
      result.style.color = "black";
    }
  });
});
