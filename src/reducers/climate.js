import { actionsType } from "../actions/climate";

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