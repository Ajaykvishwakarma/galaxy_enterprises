import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
const axios = require("axios")
export const ContactForm = () => {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [address, setAddress ] = useState("")
  const [ city, setCity ] = useState("")
  const [ state, setState ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ mobile, setMobile ] = useState("")
  const [ subject, setSubject ] = useState("")
  const [ message, setMessage ] = useState("")


  const BaseUrl = 'https://galaxyenterprises.herokuapp.com/contact'

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  

  const handleSubmit = () =>  {
    if(firstname.length !== 0 && lastname.length !== 0 && address.length !== 0 && city.length !== 0 && mobile.length >9 && email.length !== 0 && subject.length !== 0) {
      axios.post(`${BaseUrl}`,{
        firstName : firstname,
        lastName : lastname,
        address: address,
        city: city,
        state : state,
        email : email ,
        mobile : mobile,
        subject: subject,
        message : message,
        date : date,
      }).then((res) => {  
        alert("Thanks for connecting me!")
      }).catch(err => {
      alert(err.message)
      })
    }
    else{
      alert("Please fill all Field!")
    }
    
  }

  return (
    <div>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            onChange={(e) => {
              setFirstname(e.target.value)
            }}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            onChange={(e) => {
              
              setLastname(e.target.value)
            }}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            onChange={(e) => {
              
              setAddress(e.target.value)
            }}
            fullWidth
            autoComplete="contact address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            onChange={(e) => {
              
              setCity(e.target.value)
            }}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            onChange={(e) => {
              
              setState(e.target.value)
            }}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Email"
            name="Email"
            label="Email"
            onChange={(e) => {
              
              setEmail(e.target.value)
            }}
            fullWidth
            autoComplete="Contact Email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Mobile"
            name="Mobile"
            label="Mobile"
            onChange={(e) => {
              
              setMobile(e.target.value)
            }}
            fullWidth
            autoComplete="Contact Mobile "
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Subject"
            name="Subject"
            label="Subject *"
            onChange={(e) => {
              
              setSubject(e.target.value)
            }}
            fullWidth
            autoComplete="Contact Subject"
            variant="standard"
          />
        </Grid>
        <Grid item xs={42}>
          <TextField
            id="outlined-basic"
            name="message"
            label="Leave your message here "
            onChange={(e) => {
              
              setMessage(e.target.value)
            }}
            fullWidth
            autoComplete="Contact Subject"
            variant="outlined"
            multiline
          />
        </Grid>
       
      </Grid>
    </React.Fragment>
    <div style={{marginTop:"50px"}}>

    <Button variant="contained" style={{width:"50%", background: "#5f5f5f"}} onClick={handleSubmit}>Submit</Button>
    </div>
    </div>
  );
}