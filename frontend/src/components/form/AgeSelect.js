import React from 'react'
import { FormControl, FormHelperText, MenuItem, Select, InputLabel } from '@mui/material';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';

const AgeSelect = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          {/* <InputLabel id="demo-simple-select-helper-label"><BabyChangingStationIcon/></InputLabel> */}
          <InputLabel id="demo-simple-select-helper-label"><ChildFriendlyIcon/></InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Age"
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
          {/* <InputLabel id="demo-simple-select-helper-label"><BabyChangingStationIcon/></InputLabel> */}
          <InputLabel id="demo-simple-select-helper-label">< EscalatorWarningIcon/></InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Age"
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
        </FormControl>
      </div>
    );
}

export default AgeSelect