import React from 'react';
import {connect} from 'react-redux';
import {Box, Card,CardHeader,CardContent, CardMedia} from '@mui/material';

const CurrentClimate = ({climate}) => {
    console.log(climate)
    return (
        <Box >
            <Card >
                <CardHeader title="Clima actual en: "/>
                <CardContent>
                    <CardMedia
                        component="img"
                        height="194"
                        image={`http://openweathermap.org/img/wn/${climate?.weather[0].icon}.png`}
                        alt="Icono del clima"
                        title="Icono del clima"
                    />
                    <p>Temperatura:</p>
                    <p className="temp-actual">{climate?.temp}°</p>
                    <p>Sensacion termica: {climate?.feels_like}°</p>
                    <p>Humedad: {climate?.humidity}%</p>
                    <p>Presion: {climate?.pressure} hPa</p>

                </CardContent>
            </Card>
        </Box>
    )
}

const mapStateToProps = state => ({
    climate: state.climate?.currentClimate?.current
});

export default connect(mapStateToProps)(CurrentClimate);