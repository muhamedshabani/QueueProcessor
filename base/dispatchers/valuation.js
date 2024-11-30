import { priorities } from "../../models/enums/priority.js";

// This function is used to valuate tasks based on their priority
export function valuate(current, next) {
  return priorities[next.priority] - priorities[current.priority];
}

// This function is used to valuate tasks based on their number of segments
export function valuateSPriority(current, next) {
  return next.segments - current.segments;
}

// DEPRECATED
// This function is used to valuate tasks based on priority and allowance
export function valuateAllowance(current, next, allowance) {
  if (passesPriority(current, next, allowance)) {
    return true;
  }

  return false;
}

// DEPRECATED
// This function is used to valuate tasks based on priority and allowance
const passesPriorityAllowance = (current, next, allowance) => {
  if (allowance == undefined) {
    return +current.priority - +next.priority;
  } else {
    return +current.priority > +next.priority &&
      next.segments / current.segments < 1 - allowance / 100
      ? true
      : false;
  }
};
