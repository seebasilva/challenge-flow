export const actionsType = {
    CLIMATE_BY_CAPITAL_NAME_REQUEST: 'GET_CLIMATE_BY_CAPITAL_NAME',
    CLIMATE_BY_POSITION_REQUEST: 'GET_CLIMATE_BY_POSITION',
    CLIMATE_BY_POSITION_SUSSESS: 'CLIMATE_BY_POSITION_SUSSESS',
    CLIMATE_BY_POSITION_ERROR: 'CLIMATE_BY_POSITION_ERROR'
}

export const requestClimateByCapitalName = name => ({type: actionsType.CLIMATE_BY_CAPITAL_NAME_REQUEST, name})
export const requestClimateByPosition = position => ({type: actionsType.CLIMATE_BY_POSITION_REQUEST, position})
export const sussessClimateByPosition = climate => ({type: actionsType.CLIMATE_BY_POSITION_SUSSESS, climate})
export const errorClimateByPosition = error => ({type: actionsType.CLIMATE_BY_POSITION_ERROR, error})
