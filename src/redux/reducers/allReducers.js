import { combineReducers } from 'redux';
import selectedStop from './selectedStop';
import {routeData} from './routeData';
import currentRouteReducer from './currentRouteReducer';
import stopPrediction from './stopPrediction';
import selectDirection from './selectDirection';

const allReducers =  combineReducers({
  selectDirection,
  selectedStop,
  routeData,
  currentRouteReducer,
  stopPrediction
});

export default allReducers;

