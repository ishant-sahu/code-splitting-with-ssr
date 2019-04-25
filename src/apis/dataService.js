import axios from 'axios';

export function get (url, apiParams, queryParam, headers ) {
    return axios.get(url);
    
}