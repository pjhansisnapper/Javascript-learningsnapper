// Selecting elements
const taskInput = document.getElementById('task');
const taskList = document.getElementById('tasks');
const addTaskBtn = document.querySelector('button');
const filterAll = document.getElementById('all');
const filterCompleted = document.getElementById('completed');
const filterPending = document.getElementById('pending');

// Event Listener for adding a task
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    // Create a new <li> element
    const li = document.createElement('li');

    // Create a checkbox for completion
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    });

    // Create a span to hold the task text
    const span = document.createElement('span');
    span.textContent = taskText;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // Append elements inside <li>
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add the task to the task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
}

// Function to filter tasks
function filterTasks(filterType) {
    const tasks = taskList.querySelectorAll('li');

    tasks.forEach(task => {
        const isCompleted = task.classList.contains('completed');
        
        if (filterType === 'all') {
            task.style.display = 'flex';
        } else if (filterType === 'completed' && isCompleted) {
            task.style.display = 'flex';
        } else if (filterType === 'pending' && !isCompleted) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}

// Event Listeners for filter buttons
filterAll.addEventListener('click', () => filterTasks('all'));
filterCompleted.addEventListener('click', () => filterTasks('completed'));
filterPending.addEventListener('click', () => filterTasks('pending'));


// fetching 
// Selecting the fetch button
const randomTaskBtn = document.getElementById('randomTaskBtn');

// Event listener for fetching a random task
randomTaskBtn.addEventListener('click', fetchRandomTask);

// Function to fetch a random task
function fetchRandomTask() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            // Get a random task from the response
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomTask = data[randomIndex].title;

            // Display the fetched task in the input field (optional)
            taskInput.value = randomTask;
        })
        .catch(error => {
            console.error('Error fetching task:', error);
            alert('Failed to fetch a task. Try again later.');
        });
}
