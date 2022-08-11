import React, {useState} from 'react';
import {connect} from 'react-redux';
import { requestClimateByCapitalName } from "../../actions/climate";

import { Select, FormControl, MenuItem, InputLabel, Box} from '@mui/material';

const SelectorCapital = ({requestClimateByCapitalName}) => {
    const [city, setCity] = useState('');
    const handleChange = (event) => {
        const v = event.target.value
        setCity(v);
        requestClimateByCapitalName(v)
      };
    return (
        <Box className="selector-capital">
            <FormControl fullWidth>
                <InputLabel id="label-city">Ciudad</InputLabel>
                <Select
                    labelId="label-city"
                    id="city"
                    value={city}
                    label="Ciudad"
                    onChange={handleChange}
                    style={{backgroundColor:'#fff'}}
                >
                    <MenuItem value="capital-federal">Capital federal</MenuItem>
                    <MenuItem value="cordoba">Cordoba</MenuItem>
                    <MenuItem value="salta">Salta</MenuItem>
                    <MenuItem value="neuquen">Neuquen</MenuItem>
                    <MenuItem value="mendoza">Mendoza</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
    
}

const mapStateToProps = state => ({
  });
  const mapDispatchToProps = dispatch => ({
    requestClimateByCapitalName: name => dispatch(requestClimateByCapitalName(name)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(SelectorCapital);