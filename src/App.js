import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './App.css';
import CurrentClimate from './components/currentClimate';
import ExtendsClimate from './components/extendsClimate';
import SelectorCapital from './components/selectorCapital';
import Loading from './components/loading';

import { requestGeolocation } from "./actions/geolocation";
import { requestClimateByPosition } from "./actions/climate";
import {Container, Grid} from '@mui/material';

function App({loading,loadingClimate, position, requestGeolocationn, requestClimateByPosition}) {

  useEffect(() => {
    requestGeolocationn()
  }, []);
  useEffect(() => {
    requestClimateByPosition(position)
  }, [position]);
  
  return (
    <div className="App">
      <Container>
        <SelectorCapital/>
        <div className="tarjetas-clima"> 
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <CurrentClimate/>
            </Grid>
            <Grid item xs={12} sm={8}>
                <ExtendsClimate/>              
            </Grid>
          </Grid>
          </div>
          <Loading loading={loading || loadingClimate}/>
      </Container>
    
    </div>
  );
}
const mapStateToProps = state => ({
  position: state.geolocation.position,
  loading: state.geolocation.loading,
  error: state.geolocation.error,
  loadingClimate: state.climate.loading
});
const mapDispatchToProps = dispatch => ({
  requestGeolocationn: () => dispatch(requestGeolocation()),
  requestClimateByPosition: position => dispatch(requestClimateByPosition(position)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
