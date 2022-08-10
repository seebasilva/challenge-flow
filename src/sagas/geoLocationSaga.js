import {call, put, takeEvery, all} from 'redux-saga/effects';
import * as actions from '../actions/geolocation';

import {currentLocation} from '../services/geolocation'

function* fetchGeoLocation() {
    try {
        const response = yield call(currentLocation);
        if(!response.error){
            yield put(actions.sussessGeolocation(response.coords))
        } else {
            yield put(actions.errorGeolocation(response.error))
        }
    } catch (error) {
        yield put(actions.errorGeolocation(error))
    }
}

function* locationSaga() {
    yield all([
        takeEvery(actions.actionsType.GEOLOCATION_REQUEST, fetchGeoLocation)
    ]);
}

export default locationSaga;