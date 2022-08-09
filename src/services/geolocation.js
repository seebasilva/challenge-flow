export const currentLocation = () => {
    let location = {
        status: {
            available: null,
            errorText: ''
        },
        latitude: '',
        longitude: ''
    }
    if ("geolocation" in navigator) {
        location.status.available = true;
        const geolocation = navigator.geolocation.getCurrentPosition(
            function(position) {
                location.latitude = position.coords.latitude
                location.longitude = position.coords.longitude
            }
        );
        location = {...location, geolocation}
        } else {
            location.status.available = false;
            location.status.errorText = 'Debe activar la ubicacion en el navegador para el correcto funcionamiento de la app.'
        }
    return location;
}
