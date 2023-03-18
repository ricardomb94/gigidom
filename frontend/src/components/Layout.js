import { Typography } from '@mui/material'
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
        <Typography>
            This is the navigation component
        </Typography>
        <div container>
            {children}
        </div>
    </>
  )
}

export default Layout