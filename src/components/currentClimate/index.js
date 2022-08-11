import React from 'react';
import {connect} from 'react-redux';
import {Box, Card,CardHeader,CardContent, CardMedia, Avatar} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { getStringDateNow } from '../../util/fechas';

const CurrentClimate = ({climate, timezone, loadingClimate, errorGeo}) => {
    let zona
    let pais
    let provincia

    if(timezone) {
        zona = timezone.split('/');
        pais = zona[1];
        provincia = zona[2].replace('_', ' ')
    }

    return (
        <Box >
            <Card >
                {(climate && !loadingClimate) ?
                    <>
                        <CardHeader title={`${provincia}, ${pais}`} titleTypographyProps={{variant:'h5' }} avatar={<Avatar ><LocationOnIcon /></Avatar>}/>
                        <CardContent>
                            <p className="primera-mayuscula">{getStringDateNow()}</p>
                            <CardMedia
                                component="img"
                                height="194"
                                image={`https://openweathermap.org/img/wn/${climate.weather[0].icon}.png`}
                                alt="Icono del clima"
                                title="Icono del clima"
                            />
                            <p>Temperatura:</p>
                            <p className="temp-actual">{Math.round(climate.temp)}°</p>
                            <p>Sensacion termica: {Math.round(climate.feels_like)}°</p>
                            <p>Humedad: {climate.humidity}%</p>
                            <p>Presion: {climate.pressure} hPa</p>
                        </CardContent>
                    </>
                    
                :
                    <>
                        {!errorGeo ? <CardHeader title="Cargando..."/> 
                        :
                        <CardContent>
                            <p>Habilitar geolocalización o seleccionar una capital para mostrar el clima.</p>
                            <p>Si ya tiene habilitada la geolocalización, intente recargar la pagina.</p>
                        </CardContent>}
                    
                    </>

                }
            </Card>
        </Box>
    )
}

const mapStateToProps = state => ({
    climate: state.climate.currentClimate?.current,
    timezone: state.climate.currentClimate?.timezone,
    loadingClimate: state.climate.loadin,
    errorGeo: state.geolocation.error
});

export default connect(mapStateToProps)(CurrentClimate);