// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const li = document.createElement('li');

  // Add task text
  li.textContent = taskText;

  // Add delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.onclick = () => li.remove();

  // Add toggle complete functionality
  li.onclick = () => {
    li.classList.toggle('completed');
  };

  // Append delete button to list item
  li.appendChild(deleteButton);

  // Append list item to task list
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = '';
}

// Add event listener to the button
addTaskButton.addEventListener('click', addTask);

// Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
