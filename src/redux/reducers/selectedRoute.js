import { SET_CURRENT_ROUTE } from "../types";

export default function selectedRoute(state = "", action) {
  switch (action.type) {
    case SET_CURRENT_ROUTE:
      return (state = action.payload);
    default:
      return state;
  }
}
