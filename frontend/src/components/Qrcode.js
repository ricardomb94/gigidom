import React, { useState } from 'react'
import {Button, CssBaseline, Grid, TextField, Typography} from '@mui/material'
import QRCode from 'qrcode'

const Qrcode = () => {
    const[url, setUrl] = useState('') 
    const [qrcode,setQrcode] = useState('')

    const GenerateQRCode = () => {
        QRCode.toDataURL(url, {
            width: 300,
            margin: 2
        },(err, url) => {
            if(err)  return console.error(err)

            console.log(url)
            setQrcode(url)
        })
    }

  return (
    <>
      <CssBaseline />
      <Grid container
        display='flex'
        justifyContent='center'
        flexDirection='column'
        alignItems='center'
        marginBottom={5}
        spacing={5}
      >
      <Typography textAlign='center'> QRCode Generator</Typography>
    <TextField 
        type='text'
        variant="outlined"
        placeholder='www.example.com'
        onChange={(e) => setUrl(e.target.value)}
        />
            <Button  
                onClick={GenerateQRCode} 
                variant="contained" 
                color="primary"
                sx={{marginTop:'1rem'}}
                >
                    Generate
            </Button>
            {
                qrcode && <>
                    <img src={qrcode} alt='qrcode' style={{border:"2px solid black", marginTop:'1rem'}}/>
                    <a href={qrcode} download = "qrcode.png">Download</a>
                </>
            }
      </Grid>
    </>
  )
}

export default Qrcode