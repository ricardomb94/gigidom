import React, { useState } from 'react'
import { Box, Button, FormControl, FormGroup, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Snackbar, TextField, Typography } from '@mui/material'
// import imageSrc from '../../assets/images/reservation.jpg'
// import decoImg from '../../assets/images/decoration.png'
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import theme from './theme'
import AgeSelect from './AgeSelect';
import GuestStatus from './GuestStatus';
import {IconFlagFR} from 'material-ui-flags';




const Guest = () => {

  // const [values, setValues] = React.useState({
  //   lastname:'',
  //   firstname:'',
  //   tel: '',
  //   password: '',
  // });
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [tel, setTel] = useState('')

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  //  };

  const handleSubmit = (event) => {
    event.preventDefault()
  }


  const onSnackbarClose = (e, reason) => {
    if (reason === 'clickaway') {
    return;
    }

    setSnackbarOpen(false);
    setSnackbarMessage('');
  };

  const onCreate = () => {
  setSnackbarOpen(true);
  setSnackbarMessage(`Merci ${firstname} ${lastname}. Votre réservation est prise en compte `);

  };

  return (
   <Box 
    backgroundColor="blue"
    padding={2}
    // height="90vh"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent:"center",
      alignItems: "center",
      background:"radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
      height:"100%"
    }}
    >
      <Grid display="flex">
        <Typography 
        variant="h5" 
        textAlign="center"
        marginBottom={5}
        color="secondary"
        >
          Cher/es invité/es<br/> Veuillez confirmer votre présence avant le 26 juin
      </Typography>
      </Grid>
     <Paper sx={{
       border:"1px solid grey",
       borderRadius:5,
       width: "75%"
      }}>
    <Grid>
    </Grid>
    <FormGroup
      style ={{width: '80%', margin:'2rem auto', paddingTop:'2rem' }}
      onSubmit={handleSubmit}
      >
    <Grid item  sx={{
      display:"flex"
    }}>
      <GuestStatus/>
    </Grid>
    <TextField
        required
        style ={{marginBottom:'20px', marginTop:'10px'}}
        label='Nom'
        placeholder='Votre Nom'
        value={lastname}
        InputProps={{ name: 'lastname' }}
        onChange={e => setLastname(e.target.value)}
        variant="outlined"
       />
    <TextField
        required
        style ={{marginBottom:'20px'}}
        label='Prénom'
        placeholder='Votre prénom'
        InputProps={{ name: 'firstname' }}
        value={firstname}
        onChange={e => setFirstname(e.target.value)}
        variant="outlined"
       />
      <FormControl 
        variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-flag">Téléphone</InputLabel>
          <OutlinedInput
            required
            label="telephone"
            id="outlined-adornment-flag"
            name='tel'
            inputProps={{name:tel}}   
            value={tel}
            onChange={e => setTel(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                  <IconButton>
                    <IconFlagFR />
                  </IconButton> +33
              </InputAdornment>}
            width={205}
          />
       </FormControl>     
      <AgeSelect/>
      <Grid item>
          <Button
            onClick={onCreate}
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              marginTop:2,
              marginBottom:2
            }}
          >
            Envoyez
          </Button>
        </Grid>
      </FormGroup>
      <Snackbar
        open={snackbarOpen}
        message={snackbarMessage}
         onClose={onSnackbarClose} 
        autoHideDuration={4000}
      />
  </Paper>
   </Box>
  )
}

export default Guest