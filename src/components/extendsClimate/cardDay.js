import React from 'react';
import {Box, Card,CardHeader,CardContent, Avatar} from '@mui/material';
import { getDayByMoreDays } from '../../util/fechas';

const CarDay = ({climate, index}) => {
    return (
        <Box>
            <Card>
                <CardHeader title={getDayByMoreDays(index+1)} avatar={
                    <Avatar
                        alt={climate.weather[0].description}
                        title={climate.weather[0].description}
                        src={`https://openweathermap.org/img/wn/${climate.weather[0].icon}.png`}
                    />}
                 />
                <CardContent>
                    <p className='temp-max-min'>Min: {Math.round(climate.temp.min)}°</p>
                    <p className='temp-max-min'>Max: {Math.round(climate.temp.max)}°</p>
                </CardContent>
            </Card>
        </Box>
    )
}

export default CarDay;