import { all } from 'redux-saga/effects';

import locationSaga from './geoLocationSaga'

export function* rootSaga() {
    yield all([
        locationSaga()
    ]);
}


