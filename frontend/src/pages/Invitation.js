import React from 'react'
import { Box} from '@mui/material'
import CustomCard from '../components/CustomCard'
import Guest from '../components/form/Guest';

// import Lottie from "lottie-react";
// import groovyWalkAnimation from "../components/groovyWalk.json";

const Accueil = () => {
  return (
    <Box >
        <CustomCard/>
        {/* <Lottie animationData={groovyWalkAnimation} style={style}/> */}
        <Guest/>
    </Box>
  )
}

export default Accueil