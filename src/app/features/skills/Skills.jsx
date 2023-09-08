import {Grid,Card,Typography} from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';

const Skills = () => {
    const skills =['React','Redux','JavaScripts','Node/Express Js','MongoDB','Android','Wordpress','Cordova']
    const SkillCard = ({title}) =>{
        return (
            <Card className="skill-card" sx={{backgroundColor:'rgb(40,44,52)',color:'#fff'}} >
            
                <Grid container justifyContent={'flex-start'} padding={1} paddingLeft={2} spacing={1}>
                <Grid item sx={2}>
                  <VerifiedIcon color='primary'/>
                 </Grid>
                 <Grid item sx={9}>
                 <Typography variant="h6" >{title}</Typography>
                 </Grid>
                </Grid>
              
              
          </Card>
        )
    }
  return (
    <Grid container justifyContent={'space-between'} spacing={2} padding={1} width={'96%'}>
        {
            skills.map((skill,index)=>{
                
              return <Grid item key={`skill-${index}`}  xs={12}  lg={6}>
              { <SkillCard title={skill} key={index}/>}</Grid>

            })
        }
    </Grid>
  )
}

export default Skills
