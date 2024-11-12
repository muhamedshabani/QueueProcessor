const passesPriority = (current, next, allowance) => {
  if (allowance == undefined) {
    return +current.priority > +next.priority;
  } else {
    return +current.priority > +next.priority &&
      next.segments / current.segments < 1 - allowance / 100
      ? true
      : false;
  }
};

// This function is used to valuate tasks based on their priority
export function valuate(current, next) {
  if (passesPriority(current, next)) {
    return true;
  }

  return false;
}

// This function is used to valuate tasks based on priority and allowance
export function valuateAllowance(current, next, allowance) {
  if (passesPriority(current, next, allowance)) {
    return true;
  }

  return false;
}
