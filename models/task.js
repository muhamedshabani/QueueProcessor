class Task {
  constructor(id, segments, priority, delay, flag, displayName) {
    this.id = id;
    this.segments = segments;
    this.priority = priority;
    this.delay = delay;
    this.flag = flag;
    this.displayName = displayName;
  }

  getTaskDetails() {
    return `Task (ID: ${this.id}): ${this.displayName}, Priority: ${this.priority}, Flag: (${this.flag})`;
  }
}
