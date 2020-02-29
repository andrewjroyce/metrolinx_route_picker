import { SET_CURRENT_STOP } from "../types";
import axios from "axios";

export const setStop = (route, stop) => {
  const request = axios.get(
    `http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=ttc&r=${route}&s=${stop}`
  );
  return {
    type: SET_CURRENT_STOP,
    payload: request
  };
};
