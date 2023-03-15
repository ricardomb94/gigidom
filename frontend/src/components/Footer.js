import React from 'react'
import { Box, Container, IconButton, Link, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import FavoriteIcon from '@mui/icons-material/Favorite';


const useStyles = makeStyles((theme)=> ({
    root:{
        backgroundColor: theme.palette.primary.main,
        color:theme.palette.white,
        padding:theme.spacing(3),
        marginTop: theme.spacing(6)
    },
    link:{
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}))


const Footer = () => {

    const classes = useStyles()

  return (
    <Box 
        sx={{
            height:"10vh",        
            background:"rgb(0 17 37)",
        } }    
    >
        <Container maxWidth="lg" >
            <Typography 

                variant="body2" 
                align="center"
                color="secondary"
                >
                &copy; {new Date().getFullYear()} 
            </Typography>
            <Typography 
                color="secondary"
                display="flex"
                justifyContent="center"
                align="center"
                marginTop={2}
                variant="body2"
                >
                Made with <FavoriteIcon sx={{color: '#f50057'}}/> by Ricardo
            </Typography>
        </Container>
    </Box>
    )
}

export default Footer