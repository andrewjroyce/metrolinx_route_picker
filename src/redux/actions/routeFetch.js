import {ROUTES_FETCH} from '../types';
import axios from 'axios';

export const routeFetch = (route) => {
    const request = axios.get(`http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=ttc&r=${route}`);
    
    return {
        type: ROUTES_FETCH,
        payload: request
    };
};