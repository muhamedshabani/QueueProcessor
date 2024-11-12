import { status } from "../../models/enums/status.js";
import { settings } from "../settings.js";

export function attachStatus(task, newStatus) {
  if (Object.values(status).includes(newStatus)) {
    task.status = newStatus;
  } else {
    console.error("Invalid status provided");
  }
}

export function attachFlag(task, newFlag) {
  if (Object.values(status).includes(newFlag)) {
    task.flag = newFlag;
    task.delay = task.segments * settings.segmentTime;
  }
}
