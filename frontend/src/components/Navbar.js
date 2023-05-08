import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { React, useState } from 'react';
import { Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
// import MyDrawer from './MyDrawer';

const drawerWidth = 240;

const navItems = [
    {path:"/", label:"Accueil"}, 
    {path:"/guest", label:"Invitation"}, 
    {path:"/faire-part", label:"Faire-part"},  
    {path:"/localisation", label:"Localisation"}, 
    {path:"/contact", label:"Contact"}, 
    {path:"/guestList", label:"Liste"}
]

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

const Navbar = ({ links }) => {

    const theme = useTheme();
    const [open,setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
      };
    return (
        <Box>
            <AppBar style={{ background: '#fff' }} open={open}>
                <Slide cascade>
                    <Toolbar >
                        <IconButton 
                            edge="start" 
                            color="inherit"
                            aria-label="open drawer" 
                            onClick={handleDrawerOpen}
                            sx={{mr:2}}
                        >
                            <MenuIcon sx={{backgroundColor: '#f50057', display:{sm:'none'}}}/>
                        </IconButton>
                        <Typography
                            fontFamily="'Montserrat'"
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#000000' }}
                        >
                        <IconButton edge="start" color="inherit" aria-label="menu" >
                        Gigi<FavoriteIcon sx={{color: '#f50057'}}/>Dom
                        </IconButton>
                        </Typography >
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((navItem) => (
                        <Button key={navItem.path} >
                            <Link to={navItem.path}
                                underline="none"
                                // fontFamily="'Montserrat'"
                                style={{ 
                                    marginLeft:20,
                                    color: '#f50057',
                                    textDecoration:"none",
                                    textTransform: "uppercase",
                                    fontFamily:"'Montserrat'",
                                    fontSize:"0.8em"
                                }}
                            >
                                {navItem.label}
                            </Link>
                        </Button>
                        ))
                        }
                        </Box>
                    </Toolbar>
                </Slide>
            </AppBar>
            <Drawer
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                   width: drawerWidth,
                   boxSizing: 'border-box',
                  }, 
                }}
                variant="persistent"
                anchor='left'  
                open={open} 
            >
             <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
             </DrawerHeader>
             <Divider /> 
             <List>
        {navItems.map((navItem) => (
          <ListItem key={navItem.path} >
            <ListItemButton >
                <Link to={navItem.path}
                    underline="none"
                    // fontFamily="'Montserrat'"
                    style={{ 
                      marginLeft:20,
                      color: '#f50057',
                      textDecoration:"none",
                      textTransform: "uppercase",
                      fontFamily:"'Montserrat'",
                      fontSize:"0.8em"
                    }}
                  >
                    <ListItemText>
                      {navItem.label}
                    </ListItemText>
                </Link>
            </ListItemButton>
            </ListItem>
          ))
        }
      </List>
        </Drawer>
    </Box>
    )
}

export default Navbar