import { SET_CURRENT_STOP } from "../types";

export default function selectedStop(state = "", action) {
  switch (action.type) {
    case SET_CURRENT_STOP:
      return action.payload.data.predictions;
    default:
      return state;
  }
}
