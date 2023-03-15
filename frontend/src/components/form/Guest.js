import React, { useState } from 'react'
import { Box, Button, Card, CardContent, CardMedia, createTheme, FormControl, FormGroup, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Snackbar, TextField, Typography } from '@mui/material'
import imageSrc from '../../assets/images/reservation.jpg'
import decoImg from '../../assets/images/decoration.png'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import theme from './theme'
import AgeSelect from './AgeSelect';
import CheckConfirmation from './CheckConfirmation';




const Guest = () => {

  // const classes = useStyles();
  const [values, setValues] = React.useState({
    // lastname:'',
    // firstname:'',
    // tel: '',
    // password: '',
  });
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };


  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
    height="90vh"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent:"center",
      alignItems: "center",
      background:"radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
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
      style ={{width: '80%', margin:'0 auto', paddingTop:'2rem' }}
      onSubmit={handleSubmit}
      >
    <CheckConfirmation marginBottom={5}/>    
    <TextField
        style ={{marginBottom:'20px', marginTop:'10px'}}
        label='Nom'
        placeholder='Votre nom'
        value={lastname}
        InputProps={{ name: 'lastname' }}
        onChange={e => setLastname(e.target.value)}
        variant="outlined"
        required
       />
    <TextField
        style ={{marginBottom:'20px'}}
        label='Prénom'
        placeholder='Votre prénom'
        InputProps={{ name: 'firstname' }}
        value={firstname}
        onChange={e => setFirstname(e.target.value)}
        variant="outlined"
       />
        {/* <br></br> */}
     <TextField
        style ={{marginBottom:'20px', marginTop:'2px'}}
        label='E-mail'
        placeholder='Votre e-mail'
        value={email}
        inputProps={{name:'email'}}
        onChange={e => setEmail(e.target.value)}
        variant="outlined"
       />
     <FormControl 
        // className={classes.margin} 
        variant="outlined"
        >
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
            // className={classes.submit}
          >
            Réserver
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