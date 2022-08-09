import { actionsType } from "../actions/climate";
import { currentLocation } from "../services/geolocation";

export default function climateReducer(state = {loading: false}, action) {
    switch(action.type) {
        case actionsType.TEST:
            return {
                ...state
            }
            default:
                return state
    }
}