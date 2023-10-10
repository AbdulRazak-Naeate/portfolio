import React from 'react';
import './App.css';
import {Grid,Typography} from '@mui/material'
import Navbar from './app/features/navbar/Navbar';
import Herosection from './app/features/herosection/Herosection';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green,} from '@mui/material/colors';
import Skills from './app/features/skills/Skills';
import Work from './app/features/work/Work';
import Contact from './app/features/contact/Contact';
import {useSelector} from "react-redux"
function App() {
const sectionId =  useSelector((state) =>state.navbar.section)

const[pageSection]=React.useState(sectionId)


React.useEffect(()=>{
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth',inline:'start' });
    }
  };
   scrollToSection(sectionId)
},[pageSection, sectionId])
const rootTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: '#fff',
    },
    secondary:{
      main:'#fff'
    },
    darkgrey:{
      main:'darkgrey'
    }
      /* , overrides: {
      MuiButton: {
        raisedPrimary: {
          color: '#fff',
        },
      },
    } */,
    textField: {
      color: "#f1d045",
    },
   
  },
});


  return (
    <div className="App">
      <ThemeProvider theme={rootTheme}>

      <Navbar />
     <Grid container>
       <Grid item sx={0} sm={0} md={2} lg={2}>

       </Grid>
       <Grid item  sx={{
    marginTop: { xs: "10", lg: "20" },
  }} sm={12} md={10} lg={8} >
        <Grid container direction={'column'} spacing={3}>
        <section id="section0"><Grid item >
          <Herosection/>
         </Grid></section> 
         <Grid item >
          <Grid container direction={'column'}>
         

              <Grid item >
              <Grid container>
              <section id="section1">
              <Grid item marginTop={20}>
                  <Typography variant='h4' align='center' color={'white'}>Skills & Technology</Typography>
                 <Typography variant='body1' align='center' color={'white'}>The following are my skills used in developing for my clients </Typography> 
                  <Skills/>
      
              </Grid></section>
     
              </Grid>
                
              </Grid>
             
             
              <Grid item >
                
                     <section id="section2"> <Grid container justifyContent={'center'}>
                <Grid item  marginTop={20}>
                
                <Typography variant='h4' align='center' color={'white'}>Apps I have build{`</>`} </Typography> 
                 
                  <Work/> 
              </Grid>
                </Grid></section> 
                
                </Grid>
              
              <Grid item marginTop={20}>
                  

                 <Grid container justifyContent={'center'}>
                      
                        <Grid item padding={1}>
                           <section id="section3">
                  <Typography variant="h4" align="left" mb={2} color='white' >
                  Give Me a Message
                  </Typography>
                   <Typography sx={{marginBottom:10}} variant="h5" align="center" mb={2} color='white' >
                  Lets Start Building Togetther
                  </Typography>
                   <Contact/> 
                   </section>
                        </Grid>
                 </Grid>
     
              </Grid>
          </Grid>
                     
         </Grid>

        </Grid>
       </Grid >

       <Grid item sx={0} sm={0} md={2} lg={2}>

       </Grid>
     </Grid> 
     </ThemeProvider>
    </div>
  );
}

export default App;
