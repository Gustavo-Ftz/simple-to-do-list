const taskList = document.getElementById("taskList");

function manageTask() {
  const task = document.getElementById("task").value;
  const newTask = document.createElement("li");
  const btDelTask = document.createElement("button");
  const btDoneTask = document.createElement("input");

  btDoneTask.type = "checkbox";
  newTask.className = "clTasks";
  btDelTask.className = "clDelTask";
  btDoneTask.className = "clDoneTask";
  btDelTask.textContent = "Deletar";
  newTask.textContent = task;

  if (task === "") {
    alert("Não é possível adicionar uma tarefa vazia!");
  } else {
    newTask.appendChild(btDelTask);
    newTask.appendChild(btDoneTask);
    taskList.appendChild(newTask);
  }

  btDelTask.addEventListener("click", () => {
    taskList.removeChild(newTask);
  });
}
