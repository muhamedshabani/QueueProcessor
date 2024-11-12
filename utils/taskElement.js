export function taskElement(task, displayAll) {
  const { displayName, segments, priority } = task;
  const taskElement = `
    <tr>
       <td>Task: ${displayName}</td>
       <td>Segments: ${segments}</td>
       <td>Priority: ${priority}</td>
       ${
         displayAll ? `<td>Flag: ${task.flag}</td><td>Delay: ${task.delay}` : ""
       }
    </tr>`;
  return taskElement;
}
