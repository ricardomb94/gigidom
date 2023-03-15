import { createTheme, responsiveFontSizes } from "@mui/material";
import { blue, deepPurple, grey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: '#f50057',
        },
        secondary: {
            main: grey[50],
        },
        success: {
            main: deepPurple[900],
        },
        info: {
            main: grey[50]
        }
    },
    components: {
        // MuiCard:{
        //     styleOverrides:{
        //         root: {
        //             maxWidth: 345,
        //             [theme.breakpoints.down('sm')]: {
        //               maxWidth: '100%',
        //             },
        //           },
        //           media: {
        //             height: 140,
        //             [theme.breakpoints.down('sm')]: {
        //               height: 200,
        //             },
        //           },
        //     }
        // }
        // MuiTypography: {
        //     styleOverrides: {
        // root: {
        //     borderRadius: 5,
        //     width: '40%',
        //     height: '18rem',
        //     lineHeight: '1',
        //     color: 'white',
        //     position: 'absolute',
        //     top: '50%', left: '50%',
        //     transform: 'translate(-50%, -50%)',
        //     transition: 'margin 0.5s ',
        //     border: '0.1em solid white',
        //     padding: '0.5em',
        //     backgroundColor: '#000000',
        //     opacity: '0.7',
        //     textAlign: 'center',
        //     fontSize: '2em',
        //     textTransform: 'uppercase',
        //     fontFamily: 'sans',
        //     fontStyle: 'italic',
        // }
        //     }
        // },
    },
});

export default responsiveFontSizes(theme);
