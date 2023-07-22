const bigDiv = document.getElementById('background');
const add= document.getElementById('add');
const enter =document.getElementById('enter');
const search =document.getElementById('search');
// const task1 =document.getElementById('task1');
// const task2 =document.getElementById('task2');
// const task3 =document.getElementById('task3');
// const del =document.getElementsByClassName('del');
// const tasks =document.getElementsByClassName('tasks');
// const paragraph =document.getElementsByClassName('p');

const obj=[{id:"task1",name:"Task 1"},{id:"task2",name:"Task 2"},{id:"task3",name:"Task 3"}];

add.addEventListener('click', () => {
    const value = enter.value;
    if (value.trim() !== '') {
      // Add a new task to the 'obj' array
      obj.push({ id: value, name: enter.value });
  
      // Create the new task container and display it

    //   const container = document.createElement("div");
    // container.className = "tasksContainer new-task"; // Add the "new-task" class
    // container.id = value;
    // bigDiv.appendChild(container);

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


// add.addEventListener('click', () => {
//     // Get the value of the "enter" input where the task description is entered
//     const value = enter.value;
    
//     // Add a new task to the 'obj' array
//     obj.push({ id: value, name: enter.value });
    
//     // Log the updated 'obj' array to the console
//     // console.log(obj);
//   });
  
// console.log(obj);

// const tasksContainer = document.querySelector('.tasks');
// add.addEventListener('click',() =>{
//     //  obj.push({id:value,name:enter.value});
//      console.log(obj);
// });
// Loop through the 'obj' array to create paragraph elements for each task
obj.forEach(task => {
  const containar = document.createElement("div");
  containar.className = "tasksContainer";
  containar.id = task.id;
  bigDiv.appendChild(containar);
  const card = document.createElement("p");
  card.className = "p";
  card.textContent = task.name; 
  containar.appendChild(card)
  const button = document.createElement("button");
  button.className = "del";
  button.textContent = "Delete";
  containar.appendChild(button);
  const upbutton = document.createElement("button");
  upbutton.className = "del";
  upbutton.textContent = "Update";
  containar.appendChild(upbutton);
  const br = document.createElement("br");
  containar.appendChild(br);

  button.addEventListener('click', () => {
    const container = button.parentNode;
    container.parentNode.removeChild(container);
  });
  upbutton.addEventListener('click', () => {
    const updatedTaskName =prompt("Please Update the task");
    if (updatedTaskName === "") {
        return;
      }
      card.textContent = updatedTaskName;
  });
});












  
