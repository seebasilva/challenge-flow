export const actionsType = {
    GEOLOCATION_REQUEST: 'GET_GEOLOCATION',
    GEOLOCATION_SUSSESS: 'GEOLOCATION_SUSSESS',
    GEOLOCATION_ERROR: 'GEOLOCATION_ERROR'
}

export const requestGeolocation = () => ({type: actionsType.GEOLOCATION_REQUEST})
export const sussessGeolocation = position => ({type: actionsType.GEOLOCATION_SUSSESS, position})
export const errorGeolocation = error => ({type: actionsType.GEOLOCATION_ERROR, error})
