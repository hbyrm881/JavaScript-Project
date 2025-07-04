//Todo list

const taskInput  = document.getElementById("task-input"); //kebab-case to camel case here
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const taskBox = document.getElementById("task-box");
const taskList = document.getElementById("task-list");

//just in case - if there is an error 
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

const display = () => {

    taskList.innerHTML = "";
    const currentList = JSON.parse(localStorage.getItem("tasksToDo"));
    console.log(currentList);

    if(tasks.length > 0){
        for(let i = 0; i < currentList.length ; i++){
            taskList.innerHTML += `<li id="task${i}">${currentList[i].task} -> ${currentList[i].date}
            <button type="button" id="task${i}-done-btn" onclick="markDone(this)" title="mark done">✔️</button><button type="button" id="task${i}-delete-btn" onclick="deleteThis(${currentList[i].id})" title="mark delete">❌</button></li>`;
        }

        taskInput.value = "";
        dateInput.value = "";
    }

};

//main functions
function add() {
    
    let currentTask;
    const taskTitle = cleanInput(taskInput.value);
    const taskDate = dateInput.value; 
    if (taskTitle === "") {
        alert("Please enter a task");
        return;
    }
    else {
        //saving values to program
        currentTask = {id:(tasks.length), task: taskTitle, date: taskDate};
        console.log(currentTask);//test
        tasks.push(currentTask);
        console.log(tasks);//test
        //saving to memory
        localStorage.setItem("tasksToDo", JSON.stringify(tasks));
        display();
    }

}


const deleteThis = (id) => {
    
    const newTasks = tasks.filter((task)=> 
        task.id !== id
    );
    tasks = newTasks
    localStorage.setItem("tasksToDo", JSON.stringify(tasks));
    display();
};

const clear = () => {
    localStorage.removeItem("tasksToDo");
    tasks = [];
    display();
};

const markDone = (btnElement)=> {
    btnElement.parentElement.style.textDecoration = "line-through";
};

//event Listeners for buttons
addBtn.addEventListener("click", add);
clearBtn.addEventListener("click", clear);

