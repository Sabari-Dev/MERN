let form = document.querySelector("#form1");
let firstName = document.forms[0][0];
let lastName = document.forms[0][1];
let email = document.forms[0][2];
let password = document.forms[0][3];
let confirmPassword = document.forms[0][4];
let gender = document.querySelector(".radio");
let address = document.forms[0][9];
let state = document.forms[0][10];
let city = document.forms[0][11];
let checkBox = document.forms[0][12];
let submit = document.forms[0][13];
let resetBtn = document.forms[0][14];

console.log(form);

form.addEventListener("submit", (eve) => {
  eve.preventDefault();
  for (const values of form) {
    // console.log(values);
    if (values.value) {
      let message = values.nextElementSibling;
      message.className = "success";
      message.textContent = `${values.name} added`;
    } else {
      let message = values.nextElementSibling;
      message.className = "error";
      message.textContent = `${values.name} is required`;
    }
  }
  //gender
  let genders = document.querySelectorAll("[type='radio']");
  let para = document.querySelector("#para");
  let selectedOption;
  for (let selectedGenders of genders) {
    if (selectedGenders.checked) {
      let selectedOption = selectedGenders.value;
    }
  }
  if (selectedOption == null) {
    para.textContent = "select something";
    para.style.color = "red";
  } else {
    para.textContent = selectedOption;
    para.style.color = "green";
  }
});
resetBtn.addEventListener("click", () => {
  window.location.reload();
});
