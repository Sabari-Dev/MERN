let form = document.querySelector("#forms");
let userName = document.forms[0][0];
let email = document.forms[0][1];
let password = document.forms[0][2];
let confirmPassword = document.forms[0][3];
let gender = document.querySelector(".radio");
let city = document.forms[0][5];
let checkBox = document.querySelector("#checkbox");
let submit = document.querySelector("#regBtn");
let clear = document.querySelector("#clrBtn");
let inputs = document.querySelectorAll(".one");
let selectedOption;
let selectedValue;
//checkBox
checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    submit.removeAttribute("disabled");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (const ele of inputs) {
    // console.log(ele.value);
    if (ele.value) {
      let para = ele.nextElementSibling;
      if (para.tagName === "P") {
        para.className = "success";
        para.textContent = `${ele.name} is added`;
      }
    } else {
      let para = ele.nextElementSibling;
      if (para?.tagName === "P") {
        para.className = "error";
        para.textContent = `${ele.name} is Required`;
      }
    }
  }
  //gender
  let radioBtn = document.querySelectorAll(".genValue");
  //   console.log(radioBtn);
  let paraGen = document.querySelector("#result");

  for (const gen of radioBtn) {
    console.log(gen);
    if (gen.checked) {
      selectedOption = gen.value;
      //   console.log(selectedOption);
    }
  }
  paraGen.className = selectedOption ? "success" : "error";
  paraGen.textContent = selectedOption
    ? `${selectedOption} selected`
    : "Select any gender";
  //city
  let optionsEle = document.querySelector("#city");
  //   console.log(optionsEle.options);

  if (optionsEle.selected) {
    selectedValue = optionsEle.value;
  }

  //   console.log(selectedValue);

  let valueCity = document.querySelector("#cityResult");

  valueCity.className = selectedValue != "" ? "success" : "error";
  valueCity.textContent =
    selectedValue != ""
      ? `User selected options: ${selectedValue}`
      : "User not selected any option";

  //sent to local storage
  let userObj = {
    id: email.value,
    username: username.value,
    email: email.value,
    password: password.value,
    gender: selectedOption,
    city: selectedValue,
  };
  localStorage.setItem(userObj.id, JSON.stringify(userObj));
  alert("User created successfully");
  window.location.href = "./login.html";
  selectedValue = "";
});
