import { valuation } from "valuation.js";

function executeValuatedQueue(tasks) {}

function enableQueueExecution(queueIsReady) {
  if (typeof queueIsReady == "boolean" && queueIsReady) {
    const button = document.getElementById("executeQueueButton");
    button.classList.remove("btn-outline-warning");
    button.classList.add("btn-success");
  }
}
