// import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
// import React, { useState } from 'react'

// const GuestStatus = () => {

//     const [value, setValue] = useState('');
//     const handleChange = (e) => {
//       setValue(e.target.value);  

//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()
        
//     }

//   return (
//     <FormControl onSubmit={handleSubmit}>
//     <FormLabel id="demo-controlled-radio-buttons-group">
//         <Typography>
//             Serez-vous présent ?
//         </Typography>
//     </FormLabel>
//     <RadioGroup
//       row
//       aria-labelledby="demo-controlled-radio-buttons-group"
//       name="statut"
//       value={value}
//       onChange={handleChange}
//     >
//       <FormControlLabel value="Je serai présent" control={<Radio />} label="Oui je serai présent" />
//       <FormControlLabel value="Je serai absent" control={<Radio />} label="Non je serai absent" />
//     </RadioGroup>
//   </FormControl>
//   )
// }

// export default GuestStatus