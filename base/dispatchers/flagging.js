import { status } from "../../models/enums/status";

export function attachStatus(task, newStatus) {
  if (Object.values(status).includes(newStatus)) {
    task.status = newStatus;
  } else {
    console.error("Invalid status provided");
  }
}
