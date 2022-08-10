import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectorCapital = () => {
    const [city, setCity] = React.useState('');
    const handleChange = (event) => {
        setCity(event.target.value);
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
                <MenuItem value={10}>Capital federal</MenuItem>
                <MenuItem value={30}>Cordoba</MenuItem>
                <MenuItem value={30}>Mar del plata</MenuItem>
                <MenuItem value={20}>Bariloche</MenuItem>
                <MenuItem value={30}>Mendoza</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
    
}

export default SelectorCapital;