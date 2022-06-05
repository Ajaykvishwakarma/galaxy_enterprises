import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../Redux/action';
import { Navbar } from '../../Navbar/Navbar';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import style from './Login.module.css';

const axios = require("axios");



const theme = createTheme();

export const  Login = () => {

  const baseUrl = `https://galaxyenterprises.herokuapp.com` 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('token')

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = ({
      email: data.get('email'),
      password: data.get('password'),
    });
    // console.log(user)

   signIn(user) 

    
  }
  async function signIn(user) {
    setLoading(true)

    await axios.post(`${baseUrl}/signin`, user)
    .then((res) => {
      
      alert("Login successful!")
      setLoading(false)
      localStorage.setItem('token', JSON.stringify(res.data.token))
      dispatch(setAuth(true))
      navigate('/')
   })
    .catch(err => {
      alert(err.response.data.status + ", Please provide right credentials")
      setLoading(false)
  })
    
  }



     function logout(){
        localStorage.removeItem('token')
    
        dispatch(setAuth(false))
        alert("Signing out Successfully!")
        navigate('/')
    }
  

  return loading ? (
    <>
    <Navbar />
    
    <div className={style.spinner_div}>
    <Box>
        <CircularProgress />
    </Box>
    </div>
    </>
    ) : (
    <>
    <Navbar />
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={{marginBottom:"20px"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <AccountCircleIcon  />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          
            <Button
            className={style.btn}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
           {token ?  <Button
           className={style.btn}
              type=""
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={logout}
            >
              Sign out
            </Button> : ""}
            
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
      
      </Container>
      
    </ThemeProvider>
    </>
  );
}