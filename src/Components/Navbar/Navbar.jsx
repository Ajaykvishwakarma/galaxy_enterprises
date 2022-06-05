import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import style from "./Navbar.module.css";
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Dropdown } from './DropDown/Dropdown';
import { Link }from 'react-router-dom'


export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const tokenStr = localStorage.getItem('token')



  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <>
    <AppBar className={style.appbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <ApartmentIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}  />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GALAXY ENTERPRISES
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
           <div className={style.smallMenu}>
                <MenuItem>
                  <Typography textAlign="center">
                  <Link to="/" className={style.navLink}>Home</Link>
                  </Typography>
                </MenuItem>          
                <MenuItem>
                  <Typography textAlign="center"><Dropdown /></Typography>
                </MenuItem>          
                <MenuItem>
                  <Typography textAlign="center">
                  <Link to="/contact" className={style.navLink}>Contact</Link> 
                  </Typography>
                </MenuItem>                
                <MenuItem>
                  <Typography textAlign="center">
                  <Link to="/blog" className={style.navLink}>Blog</Link> 
                  </Typography>
                </MenuItem>
                { tokenStr ? <MenuItem>
                  <Typography textAlign="center">
                  <Link to="/admin" className={style.navLink}>Admin</Link> 
                  </Typography> 
                </MenuItem>
                : ""}
              </div>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <ApartmentIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GALAXY ENTERPRISES
          </Typography>
          <Box sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex' }, marginLeft: 25 }}>
            
              <Button  sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to="/" className={style.navLink1}>Home</Link>
              </Button>
              <Button  sx={{ my: 2, color: 'white', display: 'block' }}>
               <Dropdown  />
              </Button>
              <Button  sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to="/contact" className={style.navLink1}>Contact</Link> 
              </Button>              
              <Button  sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to="/blog" className={style.navLink1}>Blog</Link> 
              </Button>
              { tokenStr ? <Button  sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to="/admin" className={style.navLink1}>Admin</Link> 
              </Button>
              : ""}
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Typography textAlign="center" style={{fontSize:"15px"}}>
                  Call Us : 8369635178
          </Typography>
          <a href="mailto: ankitv7715@gmail.com" >
          <Typography textAlign="center" style={{fontSize:"15px", color:"white"}}>
                 ankitv7715@gmail.com
          </Typography>
          </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};


