import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './App.css';
import CurrentClimate from './components/currentClimate';
import ExtendsClimate from './components/extendsClimate';
import SelectorCapital from './components/selectorCapital';

import { requestGeolocation } from "./actions/geolocation";
import {Container, Grid} from '@mui/material';
import Loading from './components/loading'

function App({loading, error, requestGeolocationn}) {

  useEffect(() => {
    requestGeolocationn()
  }, []);
  
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
          <Loading loading={loading}/>
      </Container>
    
    </div>
  );
}
const mapStateToProps = state => ({
  loading: state.geolocation.loading,
  error: state.geolocation.error
});
const mapDispatchToProps = dispatch => ({
  requestGeolocationn: () => dispatch(requestGeolocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
