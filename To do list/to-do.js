const bigDiv = document.getElementById('background');
const add = document.getElementById('add');
const enter = document.getElementById('enter');
const search = document.getElementById('search');

const obj = [
  { id: "task1", name: "Task 1" },
  { id: "task2", name: "Task 2" },
  { id: "task3", name: "Task 3" }
];

add.addEventListener('click', () => {
  const value = enter.value;
  if (value.trim() !== '') {
    // Add a new task to the 'obj' array
    obj.push({ id: value, name: enter.value });

    // Create the new task container and display it
    const container = document.createElement("div");
    container.className = "tasksContainer";
    container.id = value;
    bigDiv.appendChild(container);

    const card = document.createElement("p");
    card.className = "p";
    card.textContent = value;
    container.appendChild(card);

    const button = document.createElement("button");
    button.className = "del";
    button.textContent = "Delete";
    container.appendChild(button);

    const upbutton = document.createElement("button");
    upbutton.className = "del";
    upbutton.textContent = "Update";
    container.appendChild(upbutton);

    const br = document.createElement("br");
    container.appendChild(br);

    button.addEventListener('click', () => {
      const container = button.parentNode;
      container.parentNode.removeChild(container);
    });

    upbutton.addEventListener('click', () => {
      const updatedTaskName = prompt("Please Update the task");
      if (updatedTaskName === "") {
        return;
      }
      card.textContent = updatedTaskName; // Update the task name in the paragraph
    });

    enter.value = ''; // Clear the input field after adding the task

    console.log(obj); // Log the updated 'obj' array to the console after adding the task
  }
});

// Loop through the 'obj' array to create paragraph elements for each task
obj.forEach(task => {
  const container = document.createElement("div");
  container.className = "tasksContainer";
  container.id = task.id;
  bigDiv.appendChild(container);

  const card = document.createElement("p");
  card.className = "p";
  card.textContent = task.name;
  container.appendChild(card);

  const button = document.createElement("button");
  button.className = "del";
  button.textContent = "Delete";
  container.appendChild(button);

  const upbutton = document.createElement("button");
  upbutton.className = "del";
  upbutton.textContent = "Update";
  container.appendChild(upbutton);

  const br = document.createElement("br");
  container.appendChild(br);

  button.addEventListener('click', () => {
    const container = button.parentNode;
    container.parentNode.removeChild(container);
  });

  upbutton.addEventListener('click', () => {
    const updatedTaskName = prompt("Please Update the task");
    if (updatedTaskName === "") {
      return;
    }
    card.textContent = updatedTaskName; // Update the task name in the paragraph
  });
});

// Function to filter tasks based on the search input
function filterTasks() {
  const searchTerm = search.value.toLowerCase();

  obj.forEach(task => {
    const container = document.getElementById(task.id);
    if (task.name.toLowerCase().includes(searchTerm)) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  });
}

// Event listener for the search input
search.addEventListener('input', filterTasks);
