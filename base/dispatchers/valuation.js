class Valuation {
  static valuate(current, next) {
    if (current instanceof Task && next instanceof Task) {
      if (passesAllowance(current, next, 0)) {
        return true;
      }
    }
  }
}

const passesAllowance = (current, next, allowance) =>
  current.priority > next.priority &&
  current.segments / next.segments / 100 > allowance;
