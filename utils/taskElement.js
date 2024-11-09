import { status } from "../models/enums/status.js";

export function taskElement(task) {
  const { taskName, segments, priority, delay, flag } = task;
  const taskElement = `
    <div class="row border-bottom border-dark border-2">
            <p>Task: ${taskName} | Segments: ${segments} | Priority: ${priority} | 
            Delay: ${delay ?? "Processing..."} | Flag: ${
    flag ?? status.Idle
  }</p>
    </div>`;
  return taskElement;
}
