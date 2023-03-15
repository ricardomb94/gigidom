import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react'

const CheckConfirmation = () => {
  return (
    <FormGroup >
      <FormControlLabel control={<Checkbox defaultUnChecked />} label="Je confirme" />
    </FormGroup>
  );
}

export default CheckConfirmation