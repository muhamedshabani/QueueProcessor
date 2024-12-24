export function taskElement(task, displayAll, isProcessing) {
  const { displayName, segments, priority, flag, delay } = task;
  const taskElement = `
    <tr class="taskRow">
       <td>${displayName}</td>
       <td>${segments}</td>
       <td>${priority}</td>
       ${
         displayAll
           ? `<td>${
               isProcessing != true ? flag : '<span class="loader"></span>'
             }</td><td>${delay}</td>`
           : ""
       }
    </tr>`;
  return taskElement;
}
