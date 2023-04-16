import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


import { Link } from 'react-router-dom';


const navItems = [{path:"/", label:"Accueil"}, {path:"/guest", label:"Invitation"}, {path:"/ceremony", label:"Cérémonie"}, {path:"/contact", label:"Contact"}, {path:"/datatable", label:"Tableau"}]

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
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
    </Box>
  );

  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}