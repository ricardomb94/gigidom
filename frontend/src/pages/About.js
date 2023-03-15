import React from 'react'
import { Box} from '@mui/material'
import CustomCard from '../components/CustomCard'
import Guest from '../components/form/Guest';

// import Lottie from "lottie-react";
// import groovyWalkAnimation from "../components/groovyWalk.json";


const style = {
  height: 150,
};

const About = () => {
  return (
    <Box >
        <CustomCard/>
        {/* <Lottie animationData={groovyWalkAnimation} style={style}/> */}
        <Guest/>
    </Box>
  )
}

export default About