export const executionMethods = Object.freeze({
  FCFS: "FCFS",
  PRIORITY: "Priority",
  ALLOWANCE: "Allowance",
});

const config = {
  executionMethod: executionMethods.PRIORITY,
  valuationAllowance: 20,
  segmentTime: 1,
  roundRobinSegments: 4,
};

export const settings = Object.freeze({
  executionMethod: config.executionMethod,
  valuationAllowance: config.valuationAllowance,
  segmentTime: config.segmentTime,
});
