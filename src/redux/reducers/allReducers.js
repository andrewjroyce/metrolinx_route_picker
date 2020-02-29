import { combineReducers } from "redux";
import selectedStop from "./selectedStop";
import { routeData } from "./routeData";
import currentRouteReducer from "./currentRouteReducer";
import stopPrediction from "./stopPrediction";
import selectedDirection from "./selectedDirection";
import selectedRoute from "./selectedRoute";

const allReducers = combineReducers({
  selectedDirection,
  selectedStop,
  routeData,
  currentRouteReducer,
  stopPrediction,
  selectedRoute
});

export default allReducers;
