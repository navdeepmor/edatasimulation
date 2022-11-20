import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

// import useStyles from './styles.css';
import { createService } from '../../actions/services'

const Form = () => {
    const [serviceData, setServiceData] = useState({
        name: '',
        heading: '',
        image: '',
        description: ''
    });
    // const classes = useStyles(); 
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createService(serviceData));
    }

    const clear = () => {

    }

    return (
        // <h1> YOU ARE INSIDE FORM </h1>
        <Box sx={{ '& > :not(style)': { m: 1, width: 328, height: 428,},}}>
            <Paper variant='outlined'>
                <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                    <Typography variant='h6'> CONTECT US </Typography>
                    <TextField id='outlined-basic' label='Name' name='name' variant='outlined' fullWidth value={serviceData.name} onChange={(e) => setServiceData({ ...serviceData, name: e.target.value })} />
                    <TextField id='outlined-basic' label='Heading' name='heading' variant='outlined' fullWidth value={serviceData.heading} onChange={(e) => setServiceData({ ...serviceData, heading: e.target.value })} />
                    <TextField id='outlined-basic' label='Description' name='description' variant='outlined' fullWidth value={serviceData.description} onChange={(e) => setServiceData({ ...serviceData, description: e.target.value })} />
                    <div >
                        <FileBase type='file' multiple={false} onDone={({base64}) => setServiceData({ ...serviceData, image: base64 })} />
                    </div>
                    <Button  variant='contained' color='primary' size='large' type='submit' fullWidth> Save </Button>
                    <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth> Clear </Button>
                </form>
            </Paper>
        </Box>
    )
}

export default Form;