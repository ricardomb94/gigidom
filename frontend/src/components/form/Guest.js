import React, { useState } from 'react'
import { Box, Button, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
// import { Visibility, VisibilityOff } from '@mui/icons-material';
import {IconFlagFR} from 'material-ui-flags';
import AgeSelect from './AgeSelect';




const Guest = () => {


  const [inputs, setInputs] = useState({
    firstname: " ",
    lastname: " ",
    tel:" ",
    baby:" ",
    teenager:" "
  });

const handleChange = (e) =>{
  setInputs((prevState) => ({
    ...prevState,
     [e.target.name]: e.target.value
  }))
}

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputs)
  }


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
    <form
      onSubmit={handleSubmit} 
      style ={{width: '80%', margin:'2rem auto', paddingTop:'2rem' }}
      >
        <FormGroup>
    <Grid item  sx={{
      display:"flex"
    }}>
    <FormControl >
      <FormLabel id="demo-controlled-radio-buttons-group">
          <Typography style={{color:"grey", fontStyle:"italic"}}>
              Serez-vous présent ?
          </Typography>
      </FormLabel>
    <RadioGroup
      row
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={inputs.guestStatus}
      onChange={handleChange}
    >
      <FormControlLabel value="Je serai présent" control={<Radio />} label="Oui je serai présent" />
      <FormControlLabel value="Je serai absent" control={<Radio />} label="Non je serai absent" />
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
            // inputProps={{name:tel}}
            value={inputs.tel}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                  <IconButton>
                    <IconFlagFR />
                  </IconButton> +33
              </InputAdornment>}
            width={205}
          />
       </FormControl>
       {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label"><ChildFriendlyIcon/></InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="1"
            name="baby"
            value={inputs.baby }
            label="-10ans"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Ajouter</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
          <FormHelperText>Enfant - de 10 ans</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="2">< EscalatorWarningIcon/></InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="teenager"
            value={inputs.teenager}
            label="Adolescent"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Ajouter</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
          <FormHelperText>Adolescent</FormHelperText>
        </FormControl> */}
        <AgeSelect 
          inputs={inputs}
          setInputs={setInputs}
          baby={inputs.baby}
          teenager={inputs.teenager}
          />
      <Grid item>
          <Button
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