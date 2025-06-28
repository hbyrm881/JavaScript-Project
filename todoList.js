const taskInput  = document.getElementById("task-input"); //kebab-case to camel case here
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete-btn");
const clearBtn = document.getElementById("clear-btn");
const taskBox = document.getElementById("task-box");
const taskList = document.getElementById("task-list");

//just in case
// localStorage.removeItem("tasksToDo");
// localStorage.clear();

let tasks = JSON.parse(localStorage.getItem("tasksToDo")) || [];

//helper functions

const cleanInput = (text) => {
    const regex = /[^a-zA-Z\d\s-]/gi;
    const cleanedText = text.trim().replace(regex, "");
    console.log(cleanedText); //testing
    return cleanedText;
};

// cleanInput("           Bj(ereO%$ 1f8df2er1g?? g   ");

const display = () => {

    // const liste = document.createElement("li");
    // liste.textContent = task;
    // taskList.appendChild(liste);

    const currentList = JSON.parse(localStorage.getItem("tasksToDo"));

    for(let one in currentList){
        taskList.innerHTML = `<li>${one.task} -> ${one.date}</li>`;
    }

    taskInput.value = "";
    dateInput.value = "";

};



//main functions
function add() {
    
    let currentTask;
    const taskTitle = cleanInput(taskInput.value);
    const TaskDate = dateInput.value;
    if (taskTitle === "") {
        alert("Please enter a task");
        return;
    }
    else {
        //saving values to program
        currentTask = {task: taskTitle, date: TaskDate};
        tasks.push(currentTask);
        //saving to memory
        localStorage.setItem("tasksToDo", JSON.stringify(tasks));
        display();
    }

}


const deleteTask = () => {

};

const clear = () => {

};

//event Listeners for buttons
addBtn.addEventListener("click", add);
deleteBtn.addEventListener("click", deleteTask);
clearBtn.addEventListener("click", clear);
