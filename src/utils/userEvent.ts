import { createNanoEvents } from "nanoevents";
import { UserData } from "../models/userData";

const emitter = createNanoEvents();

export function sendUserDataEvent(key: string, data: UserData) {
  emitter.emit(key, data);
}
