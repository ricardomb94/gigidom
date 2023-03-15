import styled from '@emotion/styled';
import { Box, Card, CardContent, CardMedia, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import bague from '../assets/images/couple-2.jpg'
import decoImg from '../assets/images/decoration.png'
import theme from '../theme'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgb(230 230 230)"',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    fontFamily: theme.palette.text.fontFamily
  }));

  const StyledGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("xs")]: {
        direction:"column",
        backgroundColor:"green",
        columnSpacing:1,
        mx:0
    }
 }))
//   const StyledBox = styled(Box)(({ theme }) => ({
//     [theme.breakpoints.down("sm")]: {
//         mx:5,
//         backgroundColor: "yellow", 
//     }
//  }))
 

const ImageCard = () => {
    return (
       <Box sx={{ 
            flexGrow: 1, 
            backgroundColor:"rgb(230 230 230)", 
            marginBottom:2, 
            mx:8,
            [theme.breakpoints.down("xs")]:{
                marginLeft:"10px",
                marginRight:"10px"
            }
        }} 
            >
        <Grid 
            container 
            direction="row"
            columnSpacing={3} 
            mt={10}
            sx={{
                flexDirection: { xs: "column", sm: "row"},
                [theme.breakpoints.down("xs")]:{
                    backgroundColor:"red",
                    
                   
                }
            }}
            >
            <Grid item xs={6}>
                    <Card sx={{
                        
                        [theme.breakpoints.down('xs')]: {
                            backgroundColor:"cyan",
                          },
                        }}>
                        <CardMedia
                            component="img"
                            alt="mariage"
                            height="550"
                            image={bague}
                            sx={{
                                maxWidth: 1400 ,
                                [theme.breakpoints.down('sm')]: {
                                    height:"550"
                                  },  
                            }}
                        />
                    </Card>
            </Grid>
            <Grid 
                item xs={6} 
                sx={{
                    marginTop:"6rem",
                    padding:1,
                    [theme.breakpoints.down('sm')]: {
                       padding: 0,
                       marginTop:"1rem",
                      },  
                }}>
                    <img src={decoImg} alt="decoration" />
                    <CardContent 
                        mt={3}
                        // sx={{
                        //     [theme.breakpoints.up('xs')]: {
                        //         fontSize:"20"
                        //       },  
                        // }} 
                        >
                        <Typography 
                            noWrap 
                            variant="h3" 
                            component="div" 
                            sx={{
                                [theme.breakpoints.down("xs")]:{
                                    typography:{
                                        h3:{fontSize:"0.8"}
                                    }
                                }
                            }}
                            >
                            Notre histoire
                        </Typography>
                        <Typography 
                            fontFamily="'Montserrat', sans-serif" 
                            variant="paragraph" 
                            color="text.secondary" 
                            sx={{
                                textAlign:'match-parent', 
                                marginTop:5, 
                                // fontSize:"1.5em",
                                [theme.breakpoints.down('sx')]: {
                                    fontSize:"0.95em",
                                    height:200
                                  },  
                                }}>
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
            </Grid>
        </Grid>
    </Box>
    )
}

export default ImageCard



