import React from 'react'
import { Box } from '@mui/material'
import Form from './Form'
import backgroundImage from '../../assets/images/background-img.jpg'

const FormBackground = () => {
  return (
    <Box 
        sx={{
            backgroundImage: `url(${'../../assets/images/background-img.jpg'})`,
            backgroundSize: 'cover',
            height: '100vh ',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Box sx={{backgroundColor:'rgba(255, 255, 255, 0.7)', padding:4}}>
            <Form/>
        </Box>
    </Box>
  )
}

export default FormBackground