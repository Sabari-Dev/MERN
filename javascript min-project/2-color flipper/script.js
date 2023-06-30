const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.querySelector(".btn");
let color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hexClr = "#";
  for (i = 0; i < 6; i++) {
    hexClr += hex[getRandom()];
  }
  color.textContent = hexClr;
  document.body.style.backgroundColor = hexClr;
});
function getRandom() {
  return Math.floor(Math.random() * hex.length);
}
