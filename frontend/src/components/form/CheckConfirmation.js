import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { useState } from 'react'

const CheckConfirmation = () => {

  const[isBoolean,  setIsBoolean] = useState(false)

  const  handleChange = (e) => {
    setIsBoolean(e.target.value)
  }

  return (
    <FormGroup >
      <FormControlLabel 
       checked={isBoolean}
       onChange={handleChange}
        control={<Checkbox />} 
        label="Je confirme" 
        />
    </FormGroup>
  );
}

export default CheckConfirmation