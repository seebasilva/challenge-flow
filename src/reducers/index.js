import { combineReducers } from 'redux';

import climate from './climate';
import geolocation from './geolocation';

export default combineReducers({
    climate,
    geolocation
})