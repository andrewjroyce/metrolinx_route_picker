import { SET_DIRECTION } from "../types";

export const setDirection = action => {
  return {
    type: SET_DIRECTION,
    payload: action
  };
};
