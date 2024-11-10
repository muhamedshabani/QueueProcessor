export function taskElement(task) {
  const { displayName, segments, priority } = task;
  const taskElement = `
    <div class="row border-bottom border-dark border-2">
       <p>Task: ${displayName} | Segments: ${segments} | Priority: ${priority}</p>
    </div>`;
  return taskElement;
}
