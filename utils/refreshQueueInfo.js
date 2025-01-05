export function refreshQueueInfo(tasks, segmentTime) {
  const numberOfTasksElement = document.getElementById("numberOfTasks");
  const estimatedExecutionTimeElement = document.getElementById(
    "estimatedExecutionTime"
  );
  const totalNumberOfSegmentsElement = document.getElementById(
    "totalNumberOfSegments"
  );
  const medianSegmentsPerTaskElement = document.getElementById(
    "medianSegmentsPerTask"
  );

  const numberOfTasks = tasks.length;
  const totalNumberOfSegments = tasks.reduce(
    (total, task) => total + +task.segments,
    0
  );
  const estimatedExecutionTime = totalNumberOfSegments * segmentTime;
  const medianSegmentsPerTask = calculateAverageWaitingTime(tasks);

  numberOfTasksElement.innerHTML = numberOfTasks;
  estimatedExecutionTimeElement.innerHTML = estimatedExecutionTime;
  totalNumberOfSegmentsElement.innerHTML = totalNumberOfSegments;
  medianSegmentsPerTaskElement.innerHTML = medianSegmentsPerTask;
}

// DEPRECATED
function calculateMedian(numbers) {
  numbers.sort((a, b) => a - b);
  const middle = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 0) {
    return (numbers[middle - 1] + numbers[middle]) / 2;
  } else {
    return numbers[middle];
  }
}

function calculateAverageWaitingTime(tasks) {
  if (tasks.length === 0) return 0;

  let totalWaitingTime = 0;
  let currentWaitingTime = 0;

  for (let i = 0; i < tasks.length; i++) {
    tasks[i].waitingTime = currentWaitingTime;
    totalWaitingTime += currentWaitingTime;
    currentWaitingTime += tasks[i].segments;
  }

  return totalWaitingTime / tasks.length;
}
