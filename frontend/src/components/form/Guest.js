import React, { useState} from 'react'
import { Box, Button, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
// import { Visibility, VisibilityOff } from '@mui/icons-material';
import {IconFlagFR} from 'material-ui-flags';
import AgeSelect from './AgeSelect';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.min.css';


const Guest = () => {

  const [inputs, setInputs] = useState({
    statut: '',
    firstname: '',
    lastname: '',
    tel:'',
    baby:'',
    teenager:''
  });

 
const handleChange = (e) =>{
  setInputs((prevState) => ({
    ...prevState,
     [e.target.name]: e.target.value
  }))
}

  const handleSubmit = async(e) => {
    e.preventDefault()
  
    console.log("---INPUTS---", inputs)
   
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(inputs)
    }
    const response = await fetch('/api/guest', requestOptions)
    const data = await response.json();
    console.log('DATA :', data)
    setInputs({...inputs, statut: '', firstname: '', lastname: '', tel: '', baby: '', teenager: ''});
    if(!response.ok){
        toast.error(data.error)
      }
    toast.success(data.message)
  };

  // const notify = () => toast("Invitation confirmée, merci!")

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
          <ToastContainer/>
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
    <form
      onSubmit={handleSubmit} 
      style ={{width: '80%', margin:'2rem auto', paddingTop:'2rem' }}
      >
    <FormGroup>
    <Grid item  sx={{
      display:"flex"
    }}>
    <FormControl >
      <FormLabel >
          <Typography style={{color:"grey", fontStyle:"italic"}}>
              Serez-vous présent ?
          </Typography>
      </FormLabel>
    <RadioGroup
      row
      name="statut"
      value={inputs.guestStatus}
      onChange={handleChange}
    >
      <FormControlLabel value="présent" control={<Radio />} label="présent" />
      <FormControlLabel value="absent" control={<Radio />} label="absent" />
    </RadioGroup>
  </FormControl>
    </Grid>
    <TextField
        required
        style ={{marginBottom:'20px', marginTop:'10px'}}
        label="Nom"
        placeholder="Votre Nom"
        value={inputs.lastname}
        name="lastname"
        onChange={handleChange}
        variant="outlined"
       />
    <TextField
        required
        style ={{marginBottom:'20px'}}
        label="Prénom"
        placeholder='Votre prénom'
        name= "firstname"
        value={inputs.firstname}
        onChange={handleChange}
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
            name="tel"
            value={inputs.tel}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                  <IconButton>
                    <IconFlagFR />
                  </IconButton> 
              </InputAdornment>}
            width={205}
          />
       </FormControl>
        <AgeSelect 
          inputs={inputs}
          setInputs={setInputs}
          baby={inputs.baby}
          teenager={inputs.teenager}
          />
      <Grid item>
          <Button
            // onClick={notify}
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
      </form>
  </Paper>
   </Box>
  )
}

export default Guest