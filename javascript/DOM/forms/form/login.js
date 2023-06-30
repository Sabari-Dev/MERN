let form = document.querySelector("#formLog");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let signInBtn = document.querySelector("#signBtn");
signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let allUsers = Object.entries(localStorage);
  let user = allUsers.find(
    (u) =>
      JSON.parse(u[1]).email === email.value &&
      JSON.parse(u[1]).password === password.value
  );
  if (user) {
    let userObj = JSON.parse(user[1]);
    sessionStorage.setItem(user[0], user[1]);
    window.location.href = `./products.html?id=${userObj.id}`;
  } else {
    alert("Enter Valid Email-Id or Password");
  }
});
