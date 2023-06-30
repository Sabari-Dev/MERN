//get the element from html
let addTask = document.getElementById("Add_new");
let addBtn = document.getElementById("Add_btn");
let taskArea = document.querySelector("#task_area");
let currentTasks = document.querySelectorAll(".task_items");
let completedTask = document.querySelector("#completed_area");
//Function for adding an task
function addingTask(tasks) {
  //declaring an elements
  let li = document.createElement("li");
  let checkBox = document.createElement("input");
  let editBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");
  let labelTxt = document.createElement("label");
  //adding the class/id name & text value
  li.className = "task_items";
  labelTxt.textContent = tasks.value;
  tasks.value = "";
  checkBox.type = "checkbox";
  editBtn.textContent = "Edit";
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "deleteBtn";
  //append the elements into li

  li.appendChild(checkBox);
  li.appendChild(labelTxt);
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  taskArea.appendChild(li);
  //complete option using Checkbox
  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      labelTxt.style.textDecoration = " line-through";
      completedTask.appendChild(li);
    } else {
      labelTxt.style.textDecoration = "none";
      taskArea.appendChild(li);
    }
  });
  // delete button
  deleteBtn.addEventListener("click", () => {
    let liParent = labelTxt.parentNode;
    liParent.remove();
    alert("Task deleted successfully");
  });
  //edit button
  editBtn.addEventListener("click", (e) => {
    e.preventDefault;
    let editInput = prompt("Enter the Task");
    if (editInput != "") {
      alert("Task changed successfully");
      labelTxt.textContent = editInput;
    } else {
      alert("You edit nothing");
    }
  });
}
//adding the value from input using btn
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask.value ? addingTask(addTask) : alert("Enter any task!");
});
