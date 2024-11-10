//#region Imports
import Queue from "../models/queue.js";
import Task from "../models/task.js";
import { generateGUID } from "../utils/guidGenerator.js";
import { clearValues } from "../utils/clearValues.js";
import { taskElement } from "../utils/taskElement.js";
import { refreshQueueInfo } from "../utils/refreshQueueInfo.js";
import { settings } from "../base/settings.js";
//#endregion

//#region: Initial state variables
var tasks = [];
const segmentTime = settings.segmentTime;
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
  task.displayName =
    taskDisplayName.value !== undefined && taskDisplayName.value !== ""
      ? taskDisplayName.value
      : "Task " + guid.slice(0, 5);
  task.segments = taskSegments.value;
  task.priority = taskPriority.value;
  tasks.push(task);

  queueOverviewTasks.innerHTML = queueOverviewTasks.innerHTML.includes(
    "No tasks in queue"
  )
    ? ""
    : queueOverviewTasks.innerHTML;
  queueOverviewTasks.innerHTML += taskElement(task);
  clearValues(taskDisplayName, taskSegments, taskPriority);
  refreshQueueInfo(tasks, segmentTime ?? 1);
});

// Process: Queue clearing
const clearQueueButton = document.getElementById("clearQueueButton");
clearQueueButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Clearing queue");
  tasks = [];
  queueOverviewTasks.innerHTML = "No tasks in queue";
});

const executionMethodInput = document.getElementById("executionMethodInput");
const executionMethod = executionMethodInput.value;
