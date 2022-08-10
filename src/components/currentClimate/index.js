import React from 'react';
import {Box, Card,CardHeader,CardContent} from '@mui/material';

const CurrentClimate = () => {
    return (
        <Box >
            <Card >
                <CardHeader title="Clima actual en: "/>
                <CardContent>
                    <p>Temperatura:</p>
                    <p className="temp-actual">25°</p>
                    <p>Sensacion termica:</p>
                    <p>Humedad:</p>
                </CardContent>
            </Card>
        </Box>
    )
}

export default CurrentClimate;