const addbutton = document.querySelectorAll(".addButton")[0];
const input = document.querySelectorAll(".input")[0];
const listItem = document.getElementById("divUnChecked");
const checkbox = document.querySelectorAll(".checkbox");
const main = document.querySelector(".main");

console.log(listItem);
console.log(checkbox);
console.log(main);

addbutton.addEventListener("click", () => {
  const e = document.createElement("div");
  if (input.value === "") {
    alert("You must write something to add !!!");
  } else {
    e.innerHTML = `<input onclick="updateStatus(this)" class="checkbox" type="checkbox" />
        <p>${input.value}</p>
        <button onclick="deleteThis(this)"  class="deleteButton">
        <img src="img/delete-48.ico" alt="delete" height="24px" />
        </button>`;
    console.log(e);
    e.id = "divUnChecked";
    main.appendChild(e);
    input.value = "";
  }
});

function updateStatus(selectedTask) {
  console.log(selectedTask.parentElement);
  if (selectedTask.checked) {
    selectedTask.parentElement.id = "divChecked";
  } else {
    selectedTask.parentElement.id = "divUnChecked";
  }
}

function deleteThis(selectedTask) {
  console.log(selectedTask.parentElement);
  selectedTask.parentElement.id = "none";
}
