// Get the modal element
var modal = document.getElementById('add-task-modal');

// Get the button that opens the modal
var btn = document.getElementById('add-task-btn');

// Get the close button
var closeBtn = document.getElementById('close-modal');

// Get the task container
var taskContainer = document.querySelector('.task-container');

// Get the task count element
var taskCountElement = document.getElementById('task-count');
var taskCount = 0; // Initialize task count
var completedTasks = 0; // Initialize completed tasks count

// Function to initialize sample task
function initializeSampleTask() {
    var sampleTask = document.createElement('div');
    sampleTask.classList.add('task', 'sample');
    sampleTask.innerHTML = `
        <h4>Sample Task</h4>
        <p>Date: June 19, 2024</p>
        <p>Time: 9:00 AM to 10:00 AM</p>
        <p>Description: This is a sample task to demonstrate the layout.</p>
        <button class="complete-task-btn" style="display: none;">Complete</button>
        <button class="remove-task-btn" style="display: none;">Remove</button>
    `;
    return sampleTask;
}

// Initialize sample task when the page loads
taskContainer.appendChild(initializeSampleTask());

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = 'block';
}

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Prevent form submission and handle task addition
var form = document.getElementById('task-form');
form.onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var taskName = document.getElementById('task-name').value;
    var taskDate = document.getElementById('task-date').value;
    var startTime = document.getElementById('start-time').value;
    var endTime = document.getElementById('end-time').value;
    var startPeriod = document.getElementById('start-period').value;
    var endPeriod = document.getElementById('end-period').value;
    var taskDescription = document.getElementById('task-description').value;

    // Format time with period
    startTime = startTime + ' ' + startPeriod;
    endTime = endTime + ' ' + endPeriod;

    // Create task HTML elements
    var taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
        <h4>${taskName}</h4>
        <p>Date: ${taskDate}</p>
        <p>Time: ${startTime} to ${endTime}</p>
        <p>Description: ${taskDescription}</p>
        <button class="complete-task-btn">Complete</button>
        <button class="remove-task-btn">Remove</button>
    `;

    // Increment task count and update display
    taskCount++;
    taskCountElement.textContent = taskCount;

    // Remove the sample task if it exists
    var sampleTask = taskContainer.querySelector('.task.sample');
    if (sampleTask) {
        sampleTask.remove();
    }

    // Append task to task container
    taskContainer.appendChild(taskElement);

    // Close the modal after adding task
    modal.style.display = 'none';

    // Clear form inputs for next task
    form.reset();

    // Attach remove and complete task event listeners
    attachTaskHandlers(taskElement);
    updateProgress(); // Update progress after adding task
}

// Function to attach remove and complete task event handlers
function attachTaskHandlers(taskElement) {
    var removeBtn = taskElement.querySelector('.remove-task-btn');
    removeBtn.onclick = function() {
        taskElement.remove();
        taskCount--; // Decrement task count
        taskCountElement.textContent = taskCount; // Update display
        updateProgress(); // Update progress after removing task

        // If all tasks are removed, reinitialize sample task
        if (taskCount === 0) {
            taskContainer.appendChild(initializeSampleTask());
        }
    }

    var completeBtn = taskElement.querySelector('.complete-task-btn');
    completeBtn.onclick = function() {
        taskElement.classList.toggle('completed');
        if (taskElement.classList.contains('completed')) {
            completedTasks++;
            completeBtn.textContent = 'Completed';
            completeBtn.style.backgroundColor = '#4CAF50'; // Change button color to green
        } else {
            completedTasks--;
            completeBtn.textContent = 'Complete';
            completeBtn.style.backgroundColor = '#007bff'; // Change button color to blue
        }
        updateProgress(); // Update progress after completing task
    }
}

// Function to update progress percentage
function updateProgress() {
    var progress = 0;
    if (taskCount > 0) {
        progress = (completedTasks / taskCount) * 100;
    }
    var progressElement = document.querySelector('.progress');
    progressElement.textContent = `Progress ${Math.round(progress)}%`;

    // Adjust progress text position based on progress percentage
    if (progress > 0) {
        progressElement.style.marginBottom = '20px';
    } else {
        progressElement.style.marginBottom = '0';
    }
}
