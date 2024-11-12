export function taskElement(task, displayAll) {
  const { displayName, segments, priority, flag, delay } = task;
  const taskElement = `
    <tr>
       <td>${displayName}</td>
       <td>${segments}</td>
       <td>${priority}</td>
       ${displayAll ? `<td>${flag}</td><td>${delay}` : ""}
    </tr>`;
  return taskElement;
}
