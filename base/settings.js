export const executionMethods = Object.freeze({
  FCFS: "FCFS",
  PRIORITY: "Priority",
  SPRIORITY: "S-Priority",
  ALLOWANCE: "Allowance",
});

const config = {
  executionMethod: executionMethods.PRIORITY,
  valuationAllowance: 20,
  segmentTime: 100,
  roundRobinSegments: 4,
};

export const settings = Object.freeze({
  executionMethod: config.executionMethod,
  valuationAllowance: config.valuationAllowance,
  segmentTime: config.segmentTime,
});
