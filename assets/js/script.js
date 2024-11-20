// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || []
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1
renderTaskList();
// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })

// Todo: create a function to generate a unique task id
function generateTaskId() {
    nextId++;
    // TODO: save this to the localstorage ?
    // localStorage.setItem('nextId', JSON.stringify(nextId));
    // return nextId;
}  

// Todo: create a function to create a task card
function createTaskCard(task) {
    const card = $("<div></div>")
    const title = $("<p></p>").text(task.title)
    const dueDate = $("<p></p>").text(task.dueDate)
    const description = $("<p></p>").text(task.description)
     card.append([title, dueDate, description])
     return card;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    let taskList = JSON.parse(localStorage.getItem("tasks")) || []
    $("#todo-cards").empty();
    $("#in-progress-cards").empty();
    $("#done-cards").empty();
    for (let i = 0; i < taskList.length; i++) {
        const card = createTaskCard(taskList[i])
        if (taskList[i].status === "To Do") {
            $("#todo-cards").append(card)
        }
        if (taskList[i].status === "In Progress") {
            $("#in-progress-cards").append(card)
        }    
        if (taskList[i].status === "Done") {
            $("#done-cards").append(card)
        }
    }
}


// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    const taskTitle = $("#task-title").val(); 
    const taskDueDate = $("#task-due-date").val(); 
    const taskDescription = $("#task-description").val();
    let task = {
        title: taskTitle,
        dueDate: taskDueDate,
        description: taskDescription,
        id: nextId,
        status: "To Do"
    }
    generateTaskId()
    taskList.push(task)
    console.log(taskList);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTaskList()
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    $("#save-task").click(handleAddTask);
});
