import * as React from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './DropDown.css'

export const Dropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        // onMouseOut={handlesClose}
      >
        Products <ArrowDropDownIcon/> 
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}

        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <Link to="/upvc-window-door" className="hyperLink" >UPVC doors and windows</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
             <Link to="/aluminium-window-door" className="hyperLink" >Aluminium doors and windows</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to="/galaxy-internal-door" className="hyperLink" >Galaxy internal doors</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
