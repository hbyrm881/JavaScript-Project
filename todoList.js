function add() {
    const taskInput = document.getElementById("taskInput").value;
    const task = taskInput.trim();
    if (task === "") {
        alert("Please enter a task");
        return;
    }
    const liste = document.createElement("li");
    liste.textContent = task;
    document.getElementById("taskList").appendChild(liste);
    document.getElementById("taskInput").value = "";
}
