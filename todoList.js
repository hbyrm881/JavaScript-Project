const taskInput  = document.getElementById("task-input"); //kebab-case to camel case here
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete-btn");
const clearBtn = document.getElementById("clear-btn");
const taskBox = document.getElementById("task-box");

function add() {
    const task = taskInput.value.trim();
    if (task === "") {
        alert("Please enter a task");
        return;
    }
    const liste = document.createElement("li");
    liste.textContent = task;
    document.getElementById("taskList").appendChild(liste);
    document.getElementById("taskInput").value = "";
}


taskInput.addEventListener("click", add);