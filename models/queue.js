export default class Queue {
  constructor(id, displayName) {
    this.id = id;
    this.displayName = displayName;
    this.tasks = [];
  }

  addTask(task) {
    if (task instanceof Task) {
      this.tasks.push(task);
    } else {
      console.log("Only instances of Task can be added.");
    }
  }

  removeTask(taskId) {
    const index = this.tasks.findIndex((task) => task.Id === taskId);
    if (index !== -1) {
      const removedTask = this.tasks.splice(index, 1)[0];
      console.log(
        `Removed Task: ${removedTask.displayName} (ID: ${removedTask.Id})`
      );
    } else {
      console.log(`No task found with ID: ${taskId}`);
    }
  }

  displayTasks() {
    if (this.tasks.length == 0) {
      console.log("No tasks in the queue.");
    } else {
      console.log(`Queue: ${this.displayName} (ID: ${this.id})`);
      this.tasks.forEach((task) => console.log(task.getTaskDetails()));
    }
  }
}
