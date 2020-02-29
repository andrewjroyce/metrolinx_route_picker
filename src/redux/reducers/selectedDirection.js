import { SET_DIRECTION } from "../types";

export default function selectedDirection(state = "", action) {
  switch (action.type) {
    case SET_DIRECTION:
      return (state = action.payload);
    default:
      return state;
  }
}
