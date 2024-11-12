export function taskElement(task) {
  const { displayName, segments, priority } = task;
  const taskElement = `
    <tr>
       <td>Task: ${displayName}</td>
       <td>Segments: ${segments}</td>
       <td>Priority: ${priority}</td>
    </tr>`;
  return taskElement;
}
