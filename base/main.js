//#region Imports
import Queue from "../models/queue.js";
import Task from "../models/task.js";
import { generateGUID } from "../utils/guidGenerator.js";
import { clearValues } from "../utils/clearValues.js";
import { taskElement } from "../utils/taskElement.js";
//#endregion

//#region: Initial state variables
var tasks = [];
const queueOverviewTasks = document.getElementById("queueOverviewTasks");
var queue = new Queue();
//#endregion

// Process: Task creation
const pushToQueueButton = document.getElementById("pushToQueueButton");
pushToQueueButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Pushing to queue");
  let guid = generateGUID();
  let taskDisplayName = document.getElementById("displayName");
  let taskSegments = document.getElementById("segments");
  let taskPriority = document.getElementById("priority");

  let task = new Task();
  task.id = guid;
  task.displayName = taskDisplayName.value;
  task.segments = taskSegments.value;
  task.priority = taskPriority.value;
  tasks.push(task);

  queueOverviewTasks.innerHTML += taskElement(task);
  clearValues(taskDisplayName, taskSegments, taskPriority);
});

const executionMethodInput = document.getElementById("executionMethodInput");
const executionMethod = executionMethodInput.value;
