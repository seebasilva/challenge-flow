import { actionsType } from "../actions/geolocation";

export default function geolocationReducer(state = {loading: false}, action) {
    switch(action.type) {
        case actionsType.GEOLOCATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionsType.GEOLOCATION_SUSSESS:
            return {
                ...state,
                position: action.position,
                loading: false
            }
        case actionsType.GEOLOCATION_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
            default:
                return state
    }
}