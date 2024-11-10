const executionMethods = Object.freeze({
  FCFS: "FCFS",
  PRIORITY: "Priority",
  RR: "Round-Robin",
});

const config = {
  executionMethod: executionMethods.PRIORITY,
  valuationAllowance: 0,
  segmentTime: 1,
};

export const settings = Object.freeze({
  executionMethod: config.executionMethod,
  valuationAllowance: config.valuationAllowance,
  segmentTime: config.segmentTime,
});
