import React from 'react'
import { Box, Card, CardContent, CardMedia, createTheme, Grid, Typography } from '@mui/material'
import bague from '../assets/images/couple-2.jpg'
import decoImg from '../assets/images/decoration.png'
// import theme from '../theme'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const CustomCard = () => {
  return (
    <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignContent="center"
        marginBottom="8rem"
        sx={{
          flexDirection: { xs: "column", sm: "row"},
          [theme.breakpoints.down("xs")]:{
            flexDirection: "column",
        }
        }}
    >
        <Card
          sx={{ 
            display: "flex",
            flexDirection: { xs: "column", sm: "row"},
            marginBottom:"1rem",
            marginLeft:"5rem",
            marginRight:"5rem",
            backgroundColor: "rgb(230 230 230)",
            [theme.breakpoints.between("sm", "xs")]:{
              display:"flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "1%",
              // height: "100vh"
          }
            }}>
          <Box sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ maxWidth:"100%"}}
            image={bague}
            alt="alliance"
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <CardContent
            sx={{ width: 320 }}
          >
            <img src={decoImg} alt="decoration" />
                <Typography gutterBottom variant="h3" component="div">
                    Our Story
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize:"1.2em", textAlign:"justify"}}>
                        La vie est un sommeil et l'amour en est le rêve. 
                        Vous aurez vécu si vous avez aimé. 
                        Dans cette belle perspective poétique 
                        Ogilvie et Dominique se sont d'un commun
                        accord engagé de s'unir devant Dieu et devant les
                        Hommes par le lien du mariage. Que dire 
                        sinon vous souhaiter toute les belles choses que
                        ce monde peut offrire.
                </Typography>
            </CardContent>
          </Box>
        </Card>
    </Grid>
  )
}

export default CustomCard