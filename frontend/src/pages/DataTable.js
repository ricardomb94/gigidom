import {React, useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid, Typography } from '@mui/material';
import axios from 'axios';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'lastName', headerName: 'Nom', width: 130 },
  { field: 'firstName', headerName: 'Prénom', width: 130 },
  {
    field: 'mobile',
    headerName: 'Téléphone',
    type: 'number',
    width: 100,
  },
  { field: 'baby', headerName: ' -10ans', width: 130 },
  { field: 'teenager', headerName: 'adolescent', width: 130 },
  { field: 'acceptedInvitation', headerName: 'confirmé', width: 130 },
  { field: 'refusedInvitation', headerName: 'refusé', width: 130 },
];

const rows = [
    { id: 1, firstName:"Ricardo", lastName:"MBK", mobile: "0646461252", baby:"2", teenager:"1", acceptedInvitation:"yes", refusedInvitation:"" },
    { id: 2, firstName:"Sheldon", lastName:"TPG", mobile: "0676481254", baby:"0", teenager:"2", acceptedInvitation:"yes", refusedInvitation:"" },
    { id: 3, firstName:"Sheldon", lastName:"TPG", mobile: "0676481254", baby:"0", teenager:"2", acceptedInvitation:"", refusedInvitation:"yes" },
    { id: 4, firstName:"Sheldon", lastName:"TPG", mobile: "0676481254", baby:"0", teenager:"2", acceptedInvitation:"", refusedInvitation:"yes" },
];

export default function DataTable() {

  const [guests, setGuest] = useState([]);

  useEffect(() => {
    const fetchGuests = async ()=> {
      const {data} = await axios.get('/api/guests')

      setGuest(data)
    }
    console.log(fetchGuests())
  }, [])

  return (
    <Grid style={{ margin:'3rem auto', height: 400, width:"75vw", textAlign:"center" }}>
      <Typography variant="h5"  >
        Liste des invités
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Grid>
  );
}