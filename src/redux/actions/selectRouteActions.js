import {SET_CURRENT_ROUTE} from '../types';

export const selectedRoute = (text) =>{
    return {
        type: SET_CURRENT_ROUTE,
        payload: text
    };
};