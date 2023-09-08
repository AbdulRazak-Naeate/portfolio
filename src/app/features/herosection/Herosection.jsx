import React from 'react'
import {Grid,Typography,Button} from '@mui/material'
import {useDispatch} from "react-redux"
import {moveToSection} from "../navbar/navbarSlice"
//import myImage from '../../../assets/myimage.jpg'
import './index.css'
const Herosection = () => {

  const dispatch =useDispatch()
  return (
   <div className='herosection'>
     <Grid container justifyContent={'space-between'} marginTop={12}>
       <Grid item xs={12} sm={12} md={6} lg={6}>
       <Grid container direction={'column'} padding={2}>
       <Grid item padding={1} margin={3} style={{color:'white',paddingBottom:2,padding:2}}>
        <Typography variant='h4' align='center'>Hello, I am Abdul Razak.</Typography>
        <Typography variant='h5'>I take great pleasure in creating exceptional applications.</Typography><br/>
        <Typography variant='h5'>Lets work together to achieve greatness</Typography>

        </Grid>
      <Grid item>
      <Grid container justifyContent={'space-between'}>
      <Grid item>
      <Button variant='contained'  sx={{textTransform:'initial'}} onClick={()=>{dispatch(moveToSection('section3'))}} >Work With Me</Button>
      </Grid>
      <Grid item>
      <Button variant='contained'  sx={{textTransform:'initial'}}onClick={()=>{dispatch(moveToSection('section2'))}} >See What I build</Button>

       
      </Grid>
      </Grid>
      </Grid>
      <Grid item>
              

      </Grid>
    </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} >
        {/* <div className='myimage-wrapper'>

        </div> */}
       <img src={'https://res.cloudinary.com/abdulrazakneate/image/upload/v1694194514/myimage_myptci.jpg'}  className='myimage' alt='author'/>
      </Grid>
      
    </Grid>
   </div>
  )
}

export default Herosection
