import {call, put, takeEvery, all} from 'redux-saga/effects';
import * as actions from '../actions/climate';

import {getCurrentClimateByPosition, getCoordinatesByLocationName} from '../services/climate'

function* fetchCurrentClimateByPosition({position}) {
    try {
        const response = yield call(getCurrentClimateByPosition, position);
        if(response.status === 200) {
            yield put(actions.sussessClimateByPosition(response.data))
        } else {
            yield put(actions.errorClimateByPosition(response))
        }
    } catch (error) {
        yield put(actions.errorClimateByPosition(error))
    }
}

function* fetchCurrentClimateByNameCapital({name}) {
    try {
        const responseGeo = yield call(getCoordinatesByLocationName, name);
        const geoLocation = responseGeo.data.find(r => {return r.name=name})
        const position = {
            latitude: geoLocation.lat,
            longitude: geoLocation.lon
        }
        const response = yield call(getCurrentClimateByPosition, position);
        if(response.status === 200) {
            yield put(actions.sussessClimateByPosition(response.data))
        } else {
            yield put(actions.errorClimateByPosition(response))
        }
    } catch (error) {
        yield put(actions.errorClimateByPosition(error))
    }
}

function* locationSaga() {
    yield all([
        takeEvery(actions.actionsType.CLIMATE_BY_POSITION_REQUEST, fetchCurrentClimateByPosition),
        takeEvery(actions.actionsType.CLIMATE_BY_CAPITAL_NAME_REQUEST, fetchCurrentClimateByNameCapital)
    ]);
}

export default locationSaga;