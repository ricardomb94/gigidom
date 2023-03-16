import React from 'react'
import { FormControl, FormHelperText, MenuItem, Select, InputLabel } from '@mui/material';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';

const AgeSelect = (props) => {
    return (
      <div>
        <FormControl sx={{ m: 1, minWidth: 50 }}>
          <InputLabel ><ChildFriendlyIcon/></InputLabel>
          <Select
            name="baby"
            value={props.inputs.baby}
            label="baby"
            onChange={(e) => props.setInputs({ ...props.inputs, [e.target.name]: e.target.value })}
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
          <InputLabel id="demo-simple-select-helper-label">< EscalatorWarningIcon/></InputLabel>
          <Select
            name='teenager'
            value={props.inputs.teenager}
            label="Age"
            onChange={(e) => props.setInputs({ ...props.inputs, [e.target.name]: e.target.value })}
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
        </FormControl>
      </div>
    );
}

export default AgeSelect