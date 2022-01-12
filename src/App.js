import { Box, Card, Grid, Input, Link, Paper, TextField, Typography } from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import SocialLink from './components/social-links';
import Form from './utilities/form';
import Perspective from './utilities/perspective';


function App() {

  return <Perspective pages={3} style={{overflowY: 'auto'}}>
    <ParallaxLayer speed={0}>
      <Box display="flex" bgcolor="primary.main" py={2} px={5} component="nav" alignItems={"center"} justifyContent={"space-between"}>
        <Typography fontSize={"2rem"} color="#fff" variant='h1'>
          <Link href="" rel={"tag"} underline={"none"} color={"inherit"} variant={"inherit"}>Nate Nelson</Link>
        </Typography>
        <Box display="flex" justifyContent={"space-between"}>
          <Typography color={"white"} variant='body1'>
            <SocialLink name={"LinkedIn Link"}href={"https://www.linkedin.com/in/naternelson/"}>LinkedIn</SocialLink>
          </Typography>
          
         
        </Box>
      </Box>
    </ParallaxLayer>
  </Perspective>
}

export default App;
