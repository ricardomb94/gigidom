// import React, { useState } from 'react'
import { Container, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';


const DashboardTab = () => {
    // const [data, setData] = useState([
    //     "name", 
    //     "tel", 
    //     "message"
    // ]);

  return (
    <Container>
  <Typography variant="h4" component="h1" align="center" gutterBottom>
    Dashboard
  </Typography>
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Message</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* {data.map((item) => (
          <TableRow key={item._id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>{item.message}</TableCell>
          </TableRow>
        ))} */}
      </TableBody>
    </Table>
  </TableContainer>
</Container>
  )
}

export default DashboardTab