import {Grid} from '@mui/material'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './index.css'; 
import { makeStyles } from '@mui/styles';
import React from 'react';
const Work = () => {
    
function BlankLink({ url, linkText }) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'whitesmoke'}}>
        {linkText}
      </a>
    );
  }
    const [works]=React.useState([
        {title:'Fashion Design Web shop',
         description:'A webshop app build with react js to allows fashion designers show case their design and also accepts orders from clients ',
         technology:'MERN STACK',
         image:'https://res.cloudinary.com/abdulrazakneate/image/upload/v1693926923/details_g6rs3j.png',
         link:'https://imtizafriq.herokuapp.com'
        },
        {title:'Pi Network convertrer app',
         description:'A real time currency convert app with Pi coins as base rate ',
         technology:'MERN STACK',
         image:'https://res.cloudinary.com/abdulrazakneate/image/upload/v1693996110/Capture_u4babu.png',
         link:'https://pi-fiat-currency-converter.herokuapp.com/'
        },{title:'Ghana Charity Ognaization Website',
       description:'A  Charity Organization website',
       technology:'WORDPRESS',
       image:'https://res.cloudinary.com/abdulrazakneate/image/upload/v1693996995/Gcad1_qklbkv.png',
       link:'https://gcharity.org/'
      
      }
       ,{
        title:'Cifse Website',
        description:'A non porfit Charity Organization website',
        technology:'WORDPRESS',
        image:'https://res.cloudinary.com/abdulrazakneate/image/upload/v1693998650/cifse_bb7shu.png',
        link:'https://cifse.org/'
       }
       ,{
        title:'Pi converter Android App',
        description:'Pi Network converter mobile App',
        technology:'Cordova Android',
        image:'https://res.cloudinary.com/abdulrazakneate/image/upload/v1694001942/f394e97f-a7a2-40b8-8123-f82114f43390_n4lx4u.jpg',
        link:' https://play.google.com/store/apps/details?id=com.naeatestudio.pifiatconverter&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
       }
       
    ])
    
    function WorkCard({title,description,technology
        ,image,link}) {
      return (
        <Card className="mui-card" onClick={()=>{}} >
          <CardMedia
            className="mui-card-background"
            component="img"
            alt="Background"
            height='auto'
            sx={{objectFit:'contain',height:200}}
            image={`${image}`}
          />
        {/*  <img src={image} alt='work img' width='100%' height='200px' /> */}
         <div className='card-content'>
         <Grid container direction='column' >
         <Grid item marginTop={1}>
         <Typography variant="h5" color='primary' align='center'  >
              {technology}
            </Typography>
         </Grid>
         <Grid item>
         <Typography variant="h5" fontSize={'1.4rem'} /* color='primary' */ align='center'  >
              {title}
            </Typography>

        </Grid>
           <Grid item height={70} >
           <Typography variant="body2" color="#fff" align='center'  >
             {description}
            </Typography>
              </Grid>
         <Grid item>
           <Grid container padding={1} justifyContent={'flex-end'}>
           <Grid item >
           {
            link!=='' ?  <div >
            <BlankLink url={link} linkText={'Visit'}  />
            </div>:''
           }
           </Grid>
           </Grid>
         </Grid>
        </Grid>
         </div>
        
        </Card>
      );
    }
    
    

  return (
    <Grid container justifyContent={'space-between'} spacing={3}>
     {
        works.map((work,index)=>{
            return  <Grid item sx={12} sm={12} lg={6}><WorkCard key={index} title={work.title} description={work.description} technology={work.technology} image={work.image} link={work.link}/></Grid>
        })
     }
    </Grid>
  )
}

export default Work
