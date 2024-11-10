export function taskElement(task) {
  const { taskName, segments, priority } = task;
  const taskElement = `
    <div class="row border-bottom border-dark border-2">
            <p>Task: ${taskName} | Segments: ${segments} | Priority: ${priority}</p>
    </div>`;
  return taskElement;
}
