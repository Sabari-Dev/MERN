// Profile page
let userDetails = sessionStorage;
console.log(userDetails);
let username = document.querySelector("#username");
let displayname = document.querySelector("#displayname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let gender = document.querySelector("#gender");
let city = document.querySelector("#city");
let key = sessionStorage.key(1);
let details = JSON.parse(sessionStorage.getItem(key));
console.log(details);
username.textContent = details.username;
displayname.textContent = details.username;
email.textContent = details.email;
password.textContent = details.password;
gender.textContent = details.gender;
city.textContent = details.city;
let logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
  let idUrl = new URLSearchParams(location.search);
  console.log(idUrl.values());
  const [id] = idUrl.values();
  console.log(id);
  sessionStorage.removeItem(id);
  alert("User logged-out successfully");
  window.location.href = "./login.html";
});
