import {SET_DIRECTION} from '../types';

export const selectDirection = (action) =>{
    return {
        type: SET_DIRECTION,
        payload: action
    };
};