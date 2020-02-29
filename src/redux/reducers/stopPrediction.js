import { SET_CURRENT_STOP } from "../types";

export default function stopPrediction(state = null, action) {
  switch (action.type) {
    case SET_CURRENT_STOP:
      return state;
    default:
      return state;
  }
}
