document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskInput.value;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete-button';
    completeButton.onclick = function() {
        listItem.classList.toggle('completed');
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
});
