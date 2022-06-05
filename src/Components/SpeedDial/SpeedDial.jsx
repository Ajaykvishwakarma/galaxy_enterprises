import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Link } from 'react-router-dom';
import style from './SpeedDial.module.css';
import LoginIcon from '@mui/icons-material/Login';
const actions = [
  { icon: <Link to="/signin"> <LoginIcon /> </Link> , name: 'Login' },
  { icon: <Link to="/contact"><ContactPageIcon /> </Link>, name: 'Contact' },

];

export const SpeedDiales = () =>{

  return (
     <>
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }} className={style.mainBox} >
      <SpeedDial 
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
    </>
  );
}