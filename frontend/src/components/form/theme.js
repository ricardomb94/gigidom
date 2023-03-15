import { blue, deepPurple, grey } from "@mui/material/colors"
import { createTheme } from "@mui/material"

const themme = createTheme({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        width: '25ch',
      },
      submit:{
        marginTop: '20px'
      },
      link: {
        marginTop: '10px, 15px',
      },
      cardTitle: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '35px',
        lineHeight: '48px',
        // display: 'flex',
        alignItems: 'center',
        textAlign:' center',
        color: '#081244',
        margin: '0 0 16px 0',
        marginTop: '50px'
      }
})