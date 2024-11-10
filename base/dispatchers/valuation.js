import { settings } from "../settings.js";

// This function is used to valuate tasks based on their priority
export function valuate(current, next) {
  console.log(typeof current.priority);
  if (passesPriority(current, next)) {
    return true;
  }

  return false;
}

const passesPriority = (current, next) => +current.priority > +next.priority;

const passesAllowance = (current, next, allowance) =>
  +current.priority > +next.priority &&
  +current.segments / +next.segments / 100 > allowance;
