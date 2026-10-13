document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");

  function buildToDo(description) {
    const li = document.createElement("li");
    li.textContent = description;
    document.getElementById("tasks").append(li);
  }

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    buildToDo(taskInput.value);  
    taskForm.reset();            
  });
});
