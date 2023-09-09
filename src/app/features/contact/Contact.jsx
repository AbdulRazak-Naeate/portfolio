import React from 'react'
import { useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import {WhatsApp,Telegram,EmailOutlined} from '@mui/icons-material';
import {  init,sendForm} from '@emailjs/browser';
import {NotificationManager} from 'react-notifications';

const Contact = () =>  {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
   const form = React.useRef();
    

   

 const sendEmail = (e) => {
   e.preventDefault();  // prevents the page from reloading when you hit “Send”
    init(process.env.REACT_APP_EMAILJS_PUBLICID)
    
   sendForm(process.env.REACT_APP_EMAILJS_SERVICEID, process.env.REACT_APP_EMAILJS_TEMPLETEID, form.current )
     .then((result) => {
      NotificationManager.success('Success message', `${result.text}`);
      setName('')
      setEmail('')
      setMessage('')
         // show the user a success message
     }, (error) => {
         // show the user an error
     });
    }

    const ContactCard =({text,type,Icon}) =>{
      return(
        <Grid container justifyContent={'flex-start'} spacing={1}>
              <Grid item >
             {Icon}
              </Grid>
  
              <Grid item >
               
              <a  href={`${type}${text}`} style={{textDecoration:'none',color:'white'}}>{text}</a>
             
              </Grid>
        </Grid>
      )
    }
    
    return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
          }}
        >
          <Box sx={{ maxWidth: '90%', mx: "auto", p: 2 }}>
           
           <Grid container justifyContent={'space-between'} spacing={4}> 
           
            <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Grid container direction='column'>
                        <Grid item >
                       <ContactCard type={'tel:'} text={'+233207055540'} Icon={<WhatsApp color='primary'/>} />
                     

                        </Grid>
                        <Grid item > 
                         <ContactCard type={'tel:'} text={'+233548496121'} Icon={<Telegram color='darkgrey'/>} />
                        
                         
                        </Grid>

                        <Grid item>
                        <ContactCard type={'mailto:'} text={'abdulrazakneate@gmail.com'} Icon={<EmailOutlined color='primary'/>} />
                        </Grid>
                 </Grid>
                        
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} marginTop={2}>
 <form  ref={form} onSubmit={sendEmail}>
              <TextField
              sx={{
                fieldset: { borderColor: "white" },
                  input: {
                     color: 'red',
                     "&::placeholder": {    // <----- Add this.
                        opacity: 1,
                     },
                  },
                  label: { color: 'white' }
            
              }}
               inputProps={{ style: { fontFamily: 'Arial', color: 'white',}}}
               style={{ flex: 1, margin: '0 20px 0 0', color: 'white',}}
                fullWidth
                label="Name"
                name='user_name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
              />
              <TextField
              sx={{
                fieldset: { borderColor: "white" },
                  input: {
                     color: 'red',
                     "&::placeholder": {    // <----- Add this.
                        opacity: 1,
                     },
                  },
                  label: { color: 'white' }
            
              }}
                inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                style={{ flex: 1, color: 'white'}}
                fullWidth
                label="Email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                type="email"
              />
              <TextField
              sx={{
                fieldset: { borderColor: "white" },
                  input: {
                     color: 'red',
                     "&::placeholder": {    // <----- Add this.
                        opacity: 1,
                     },
                  },
                  label: { color: 'white' }
            
              }}
                fullWidth
                inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                style={{ flex: 1, color: 'white'}}
                label="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                Submit
              </Button>
            </form>
            </Grid>
           </Grid>
           
          </Box>
        </Box>
      );
}

export default Contact

