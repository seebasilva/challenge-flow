import axios from "axios";

export const httpGet = (uri, options) => axios.get( uri, options);
export const httpPost = (uri, params, options) => axios.post (uri, params, options);