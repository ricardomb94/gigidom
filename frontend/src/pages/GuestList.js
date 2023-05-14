import {React, useState, useEffect} from 'react';
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function GuestList() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchGuestList = async () => {
      const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      }
      try {
        const response = await fetch('/api/guestList', requestOptions);
        const data = await response.json();
        if (response.ok) {
          setData(data);
        }
        // console.log('***GUESTLIST****', data);
      } catch (error) {
        console.error('Error:', error);
      }
      // console.log('***GUESTLIST****',data)
    }

    console.log('***FECTH-LIST*****', fetchGuestList());
  }, [])

  return (
    <TableContainer component={Paper}>
      <Typography mb={5} component="h1" variant="h3" sx={{textAlign:"center"}}>"Guest list"</Typography>
      <Table sx={{height:"100vh", width: "85vw", margin:"0 auto", marginBottom:"2rem"}} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell>Dessert (100g serving)</StyledTableCell> */}
            <StyledTableCell align="right">Statut</StyledTableCell>
            <StyledTableCell align="right">Prénom</StyledTableCell>
            <StyledTableCell align="right">Nom</StyledTableCell>
            <StyledTableCell align="right">Enfant - 10 ans</StyledTableCell>
            <StyledTableCell align="right">Enfant + 10 ans</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((guest,i) => 
            <StyledTableRow key={i}>
              <StyledTableCell align="right">{guest.statut}</StyledTableCell>
              <StyledTableCell align="right">{guest.firstname}</StyledTableCell>
              <StyledTableCell align="right">{guest.lastname}</StyledTableCell>
              <StyledTableCell align="right">{guest.baby}</StyledTableCell>
              <StyledTableCell align="right">{guest.teenager}</StyledTableCell>
            </StyledTableRow>
          )}
          {console.log('GUEST LIST:', data)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}