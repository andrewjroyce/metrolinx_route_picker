import {
  ROUTES_FETCH
} from '../types';

export default function currentRouteReducer(state = null, action) {

  switch (action.type) {
    case ROUTES_FETCH:
      return state = action.payload.data.route;
    default:
      return state;
  }
}

