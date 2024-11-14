//#region Imports
import Queue from "../models/queue.js";
import Task from "../models/task.js";
import { generateGUID } from "../utils/guidGenerator.js";
import { clearValues } from "../utils/clearValues.js";
import { taskElement } from "../utils/taskElement.js";
import { valuate, valuateAllowance } from "../base/dispatchers/valuation.js";
import { refreshQueueInfo } from "../utils/refreshQueueInfo.js";
import { settings } from "../base/settings.js";
import { executionMethods } from "../base/settings.js";
import { attachFlag } from "../base/dispatchers/flagging.js";
import { status } from "../models/enums/status.js";
//#endregion

//#region: Initial state
var tasks = [];
const segmentTime = settings.segmentTime;
const queueOverviewTasks = document.getElementById("queueOverviewTasks");
const queueValuatedTasks = document.getElementById("queueValuatedTasks");
const executionMethod = settings.executionMethod;
document.getElementById("currentAlgorithm").innerHTML = executionMethod;
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
  task.segments = +taskSegments.value > 0 ? +taskSegments.value : 1;
  task.priority = taskPriority.value;
  tasks.push(task);

  queueOverviewTasks.innerHTML = queueOverviewTasks.innerHTML.includes(
    "No tasks"
  )
    ? ""
    : queueOverviewTasks.innerHTML;
  queueOverviewTasks.innerHTML += taskElement(task, false, false);
  clearValues(taskDisplayName, taskSegments);
  refreshQueueInfo(tasks, segmentTime ?? 1);
});

// Process: Queue clearing
const clearQueueButton = document.getElementById("clearQueueButton");
clearQueueButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Clearing queue");
  tasks = [];
  queueOverviewTasks.innerHTML = "No tasks in queue";
  refreshQueueInfo(tasks, segmentTime ?? 1);
});

// Process: Valuate queue
const valuateQueueButton = document.getElementById("valuateQueueButton");
valuateQueueButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (tasks.length == 0) {
    return;
  }

  sortTasks(tasks, executionMethod);

  queue.clearTasks();
  queue.addBulkTasks(tasks);
  addBulkTasksElement(queue.tasks);
});

// Process: Sort tasks by execution method
const sortTasks = (tasks, method) => {
  if (method == executionMethods.PRIORITY) {
    tasks.sort((a, b) => valuate(a, b));
  } else if (method == executionMethods.ALLOWANCE) {
    tasks.sort((a, b) => valuateAllowance(a, b, settings.valuationAllowance));
  } else {
    return;
  }
};

// Process: Add bulk tasks to queue
const addBulkTasksElement = async (tasks) => {
  const executeQueueButton = document.getElementById("executeQueueButton");

  executeQueueButton.innerHTML = "Valuating";
  executeQueueButton.disabled = true;

  queueValuatedTasks.innerHTML = "";
  for (const task of tasks) {
    attachFlag(task, status.Idle);
    queueValuatedTasks.innerHTML += taskElement(task, true, false);
    if (tasks.indexOf(task) !== tasks.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 100 * task.segments));
    }
  }

  executeQueueButton.innerHTML = "Execute";
  executeQueueButton.disabled = false;
};

// Process: Execute tasks
const executeQueueButton = document.getElementById("executeQueueButton");
executeQueueButton.addEventListener("click", (event) => {
  event.preventDefault();
  executeQueueButtonState(true);

  if (queue.tasks.length == 0) {
    return;
  }

  let valuatedTasks = [
    ...document.getElementById("queueValuatedTasks").children,
  ];
  valuatedTasks.forEach((row) => {
    if (row.children != null) {
      row.children[3].innerHTML = '<span class="loader"></span>';
    }
  });

  (async () => {
    for (const task of queue.tasks) {
      attachFlag(task, status.Processing);
      await new Promise((resolve) => {
        setTimeout(() => {
          updateFlag(task, valuatedTasks);
          attachFlag(task, status.Completed);
          resolve();
        }, task.segments * segmentTime);
      });
    }

    executeQueueButtonState(false);
  })();
});

// Process: Update flag
function updateFlag(task, valuatedTasks) {
  valuatedTasks.forEach((row) => {
    if (row.children != null) {
      if (row.children[0].innerHTML == task.displayName) {
        row.children[3].innerHTML =
          '<i class="fa-solid fa-circle-check text-success"></i>';
      }
    }
  });
}

// Process: Execute queue button state change
function executeQueueButtonState(executing) {
  executeQueueButton.disabled = executing;
  executeQueueButton.classList.toggle("btn-warning", executing);
  executeQueueButton.classList.toggle("btn-outline-warning", !executing);
  executeQueueButton.innerHTML = executing ? "Executing..." : "Execute";
}
