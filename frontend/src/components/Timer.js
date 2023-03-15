import { React, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Fade } from 'react-awesome-reveal';
import { Stack } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgb(255 19 123)',
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: '#fff',
    boxSizing: 'border-box',
    padding: '1.3em',
    whiteSpace: 'nowrap'
}));



const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "September 16 2023";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
    }, [])

    const timerTabs = [
        {time:days, label:"Jr"},
        {time:hours, label:"Hr"},
        {time:minutes, label:"Mn"},
        {time:seconds, label:"S"}
    ]

    return (
        <Grid container
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                direction="row"
                spacing={0.5}
            >
                <Fade cascade damping={0.5}>
                   {timerTabs.map((timerTab, index) => 
                         <Item key={index}>
                            {timerTab.time} {timerTab.label}
                         </Item>
                   )}
                </Fade>
            </Stack>

        </Grid>
    )
}

export default Timer