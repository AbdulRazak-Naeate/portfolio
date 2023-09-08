import React from 'react';
import './Navbar.css'; // Import your CSS styles
import {Grid,Typography} from '@mui/material'
import {useDispatch} from "react-redux"
import {moveToSection} from "./navbarSlice"
function Navbar() {

  const dispatch = useDispatch()
  return (
   
         <Grid container justifyContent={'space-between'} className='navbar'>
         <Grid item sx={2} lg={3} padding={2}>
            <Grid container alignItems={'center'} alignContent={'center'}>
               <Grid item  border={0}>
                <Typography variant='h6'>Abubakari Abdul Razak</Typography>
               </Grid>
            </Grid>
         </Grid>

         <Grid sx={8} lg={8}>
          <Grid item>
            <Grid contianer justifyContent={'flex-start'}>
                  <Grid item >
                  <ul className="nav-links"> 
          <li><Typography onClick={()=>{dispatch(moveToSection('section0'))}} className='navbar-menu-item'>About</Typography></li>
          <li> <Typography onClick={()=>{dispatch(moveToSection('section1'))}}className='navbar-menu-item'>Skills</Typography></li>
          <li><Typography onClick={()=>{dispatch(moveToSection('section2'))}}  className='navbar-menu-item'>Past Work</Typography></li>
          <li><Typography onClick={()=>{dispatch(moveToSection('section3'))}} className='navbar-menu-item'>Contact</Typography></li>
        </ul>
                  </Grid>
            </Grid>
          </Grid>
         </Grid>
         <Grid item sx={1}>
           <Grid container justifyContent={'space-between'}>
                  
           </Grid>
         </Grid>

         </Grid>
    
      
  );
}

export default Navbar;
