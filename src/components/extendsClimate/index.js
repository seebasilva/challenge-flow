import React from 'react';
import {Box, Card, CardHeader, Grid} from '@mui/material';
import CarDay from './cardDay';

const ExtendsClimate = () => {
    return (
    <Box>
        <Card  variant="outlined">
            <CardHeader title="Clima extendido"/>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={1}>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <CarDay/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <CarDay/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <CarDay/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <CarDay/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <CarDay/>
                </Grid>
                <Grid item xs={12} sm={1}>
                </Grid>
            </Grid>
        </Card>
    </Box>
    )
}

export default ExtendsClimate;