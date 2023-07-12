const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December",
];
const weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let birthDay = document.querySelector(".my-day");
let deadLine = document.querySelector(".deadline");
let boxes = document.querySelectorAll(".format h3");

let date = new Date(2024, 0, 21, 8, 30, 0);

birthDay.textContent = `My birthday is on ${
  weeks[date.getDay()]
} , ${date.getDate()} ${
  months[date.getMonth()]
} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} am`;

let time = date.getTime();
console.log(time);

function getRemainingTime() {
  let today = new Date().getTime();
  let t = time - today;

  //time values
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  //find all values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let Min = Math.floor((t % oneHour) / oneMin);
  let sec = Math.floor((t % oneMin) / 1000);

  const value = [days, hours, Min, sec];
  function format(values) {
    if (values < 10) {
      return (values = `0${values}`);
    }
    return values;
  }
  boxes.forEach((item, index) => {
    item.innerHTML = format(value[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadLine.innerHTML = `<h3>Hey buddy , it's your birthday .let's celebrate.</h3>`;
  }
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

let pause = document.querySelector(".pause-btn");
let video = document.querySelector(".video-div");

// play.style.display = "none";
pause.addEventListener("click", () => {
  video.pause();
});
let play = document.querySelector(".play-btn");
play.addEventListener("click", () => {
  video.play();
});
