import { actionsType } from "../actions/climate";

export default function climateReducer(state = {loading: false}, action) {
    switch(action.type) {
        case actionsType.CLIMATE_BY_CAPITAL_NAME_REQUEST:
            return {
                ...state,
                loading:true
            }
        case actionsType.CLIMATE_BY_POSITION_REQUEST:
            return {
                ...state,
                loading:true
            }
        case actionsType.CLIMATE_BY_POSITION_SUSSESS:
            return {
                ...state,
                currentClimate: action.climate,
                loading:false
            }
        case actionsType.CLIMATE_BY_POSITION_ERROR:
        return {
            ...state,
            error: action.error,
            loading:false
        }
        default:
            return state
    }
}