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
                <InputLabel id="label-city">Provincia</InputLabel>
                <Select
                    labelId="label-city"
                    id="city"
                    value={city}
                    label="Provincia"
                    onChange={handleChange}
                    style={{backgroundColor:'#fff'}}
                >
                    <MenuItem value="buenos-aires">Buenos Aires</MenuItem>
                    <MenuItem value="cordoba">Cordoba</MenuItem>
                    <MenuItem value="salta">Salta</MenuItem>
                    <MenuItem value="tucuman">Tucuman</MenuItem>
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