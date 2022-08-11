import { all } from 'redux-saga/effects';

import locationSaga from './geoLocationSaga'
import climateSaga from './climateSaga'

export function* rootSaga() {
    yield all([
        locationSaga(),
        climateSaga()
    ]);
}


