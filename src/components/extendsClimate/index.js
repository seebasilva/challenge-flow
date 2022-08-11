import React from 'react';
import {connect} from 'react-redux';
import {Box, Card, CardHeader, Grid} from '@mui/material';
import CarDay from './cardDay';

const ExtendsClimate = ({climateExtends, loadingClimate, errorGeo, errorClimate}) => {

    if((errorGeo && errorClimate) || loadingClimate) return;
    return (
    <Box>
        <Card variant="outlined">
            <CardHeader title="Clima extendido"/>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {
                            climateExtends?.slice(0, 5).map((climate,index) => (
                                <Grid key={index} item>
                                    <CarDay climate={climate} index={index}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    </Box>
    )
}

const mapStateToProps = state => ({
    climateExtends: state.climate.currentClimate?.daily,
    loadingClimate: state.climate.loading,
    errorGeo: state.geolocation.error,
    errorClimate: state.climate.error
});

export default connect(mapStateToProps)(ExtendsClimate);