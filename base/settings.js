export const executionMethods = Object.freeze({
  FCFS: "FCFS",
  PRIORITY: "Priority",
  SPRIORITY: "S-Priority",
  ALLOWANCE: "Allowance",
});

const config = {
  executionMethod: executionMethods.SPRIORITY,
  segmentTime: 100,
};

export const settings = Object.freeze({
  executionMethod: config.executionMethod,
  segmentTime: config.segmentTime,
});
