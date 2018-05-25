import {
  SET_DIRECTION,
} from '../types';

export default function selectedDirection(state = "No", action) {
  switch (action.type) {
    case SET_DIRECTION:
      return state = action;
    default:  
      return state;
  }
}