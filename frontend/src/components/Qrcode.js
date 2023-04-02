import React, { useState } from 'react'
import {Button, CssBaseline, Grid, TextField, Typography} from '@mui/material'
import QRCode from 'qrcode'

const Qrcode = () => {
    const[url, setUrl] = useState('') 
    const [qrcode,setQrcode] = useState('')

    const GenerateQRCode = () => {
        QRCode.toDataURL(url, (err, url) => {
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
        spacing={2}
      >
      <Typography textAlign='center'> QRCode Generator</Typography>
    <TextField 
        type='text'
        variant="outlined"
        placeholder='www.example.com'
        onChange={(e) => setUrl(e.target.value)}
        />
        <Grid item>
            <Button  onClick={GenerateQRCode} variant="contained" color="primary">Generate</Button>
        </Grid>
        <Grid item>
            {qrcode && <>
                <img src={qrcode} alt='qrcode'/>

            </>}
        </Grid>
      </Grid>
    </>
  )
}

export default Qrcode