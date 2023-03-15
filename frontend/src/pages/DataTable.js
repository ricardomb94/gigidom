import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid, Typography } from '@mui/material';
// import guests from '../data/guests.js'

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
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
    { id: 1, firstName:"Ricardo", lastName:"MBK", mobile: "0646461252", baby:"2", teenager:"1", acceptedInvitation:"yes", refusedInvitation:"" },
    { id: 2, firstName:"Sheldon", lastName:"TPG", mobile: "0676481254", baby:"0", teenager:"2", acceptedInvitation:"yes", refusedInvitation:"" },
    { id: 3, firstName:"Sheldon", lastName:"TPG", mobile: "0676481254", baby:"0", teenager:"2", acceptedInvitation:"", refusedInvitation:"yes" },
    { id: 4, firstName:"Sheldon", lastName:"TPG", mobile: "0676481254", baby:"0", teenager:"2", acceptedInvitation:"", refusedInvitation:"yes" },
];

export default function DataTable() {
  return (
    <Grid style={{ margin:'5rem auto', height: 400, width:"75vw", textAlign:"center" }}>
      <Typography variant="h5"  >
        LISTE DES INVITES
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