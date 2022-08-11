import axios from "axios";

export const httpGet = (uri) => axios.get( uri );
export const httpPost = (uri, params) => axios.post (uri, params);