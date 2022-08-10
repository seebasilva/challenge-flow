import React from 'react';
import {Box, Card,CardHeader,CardContent} from '@mui/material';

const CarDay = () => {
    return (
        <Box>
            <Card>
                <CardHeader title="Jueves" avatar="A"/>
                <CardContent>
                    <p className='temp-max-min'>Min:</p>
                    <p className='temp-max-min'>Max:</p>
                </CardContent>
            </Card>
        </Box>
    )
}

export default CarDay;