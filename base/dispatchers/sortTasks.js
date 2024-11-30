import { executionMethods } from "../settings.js";
import {
  valuate,
  valuateAllowance,
  valuateSPriority,
} from "../dispatchers/valuation.js";

// Process: Sort tasks by execution method
export const sortTasks = (tasks, method) => {
  if (method == executionMethods.PRIORITY) {
    tasks.sort((a, b) => valuate(a, b));
  } else if (method == executionMethods.SPRIORITY) {
    tasks.sort((a, b) => valuateSPriority(a, b));
  } else if (method == executionMethods.ALLOWANCE) {
    tasks.sort((a, b) => valuateAllowance(a, b, settings.valuationAllowance));
  }

  return tasks;
};
