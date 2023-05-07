import {React, useState, useEffect} from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
// import { DataGrid } from '@mui/x-data-grid';
// import { Grid, Typography } from '@mui/material';
// import axios from 'axios';



// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'lastName', headerName: 'Nom', width: 130 },
//   { field: 'firstName', headerName: 'Prénom', width: 130 },
//   {
//     field: 'mobile',
//     headerName: 'Téléphone',
//     type: 'number',
//     width: 100,
//   },
//   { field: 'baby', headerName: ' -10ans', width: 130 },
//   { field: 'teenager', headerName: 'adolescent', width: 130 },
//   { field: 'présent', headerName: 'confirmé', width: 130 },
//   { field: 'absent', headerName: 'refusé', width: 130 },
// ];

// const rows = [
//     { id: 1, firstName:"Ricardo", lastName:"MBK", mobile: "0646461252", baby:"2", teenager:"1", acceptedInvitation:"yes", refusedInvitation:"" },
//     { id: 2, firstName:"Sheldon", lastName:"TPG", mobile: "0676481254", baby:"0", teenager:"2", acceptedInvitation:"yes", refusedInvitation:"" },
//     { id: 3, firstName:"Sheldon", lastName:"TPG", mobile: "0676481254", baby:"0", teenager:"2", acceptedInvitation:"", refusedInvitation:"yes" },
//     { id: 4, firstName:"Sheldon", lastName:"TPG", mobile: "0676481254", baby:"0", teenager:"2", acceptedInvitation:"", refusedInvitation:"yes" },
// ];

export default function DataTable() {

  const [guests, setGuests] = useState([]);

  useEffect(() => {
     fetch('/api/guestList')
      .then(response => response.json())
      .then(guests => setGuests(guests))
  }, [])

  return (
    <Grid style={{ margin:'3rem auto', height: "100%", width:"75vw", textAlign:"center" }}>
      <Typography variant="h4">"Gurest list"</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Statut</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Prénom</TableCell>
              <TableCell>Enfant - de 10 ans</TableCell>
              <TableCell>Enfant + de 10 ans</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {guests.map((item, index) => (
              <TableRow key={item.index}>
                <TableCell>{item.statut}</TableCell>
                <TableCell>{item.firstname}</TableCell>
                <TableCell>{item.lastname}</TableCell>
                <TableCell>{item.baby}</TableCell>
                <TableCell>{item.teenager}</TableCell>
              </TableRow>
            ))}
           {
             console.log(guests)
           }
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}