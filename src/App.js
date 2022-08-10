import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './App.css';
import CurrentClimate from './components/currentClimate';
import ExtendsClimate from './components/extendsClimate';
import SelectorCapital from './components/selectorCapital';

import { requestGeolocation } from "./actions/geolocation";

function App({loading, error, requestGeolocationn}) {

  useEffect(() => {
    requestGeolocationn()
  }, []);

  if(loading) {
    return (<p>Cargando....</p>)
  }
  return (
    <div className="App">
        <SelectorCapital/>
        <CurrentClimate/>
        <ExtendsClimate/>
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
