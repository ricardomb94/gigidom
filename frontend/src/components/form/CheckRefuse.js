import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'

const CheckRefuse = () => {
  return (
    <FormGroup >
    <FormControlLabel control={<Checkbox defaultUnChecked />} label="Je serais pas disponible" />
  </FormGroup>
  )
}

export default CheckRefuse