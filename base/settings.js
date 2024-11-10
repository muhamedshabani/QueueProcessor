const config = {
  executionMethod: "FCFS",
  valuationAllowance: 30,
  segmentTime: 1,
};

export const settings = Object.freeze({
  executionMethod: config.executionMethod,
  valuationAllowance: config.valuationAllowance,
  segmentTime: config.segmentTime,
});
