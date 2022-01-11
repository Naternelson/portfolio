import { Box, Card, Paper, Typography } from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css';
import Perspective from './utilities/perspective';
import PerspectiveLayer from './utilities/perspective-layer';


function App() {

  return <Perspective pages={2}>
    <ParallaxLayer offset={0} speed={0} style={{ backgroundColor: 'blue' }} />
    <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: '#ff6d6d' }} />
    <PerspectiveLayer speed={1} offset={.5} style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
        <Typography elevation={3} p={5} variant={"p"}>Hi There</Typography>
    </PerspectiveLayer>
    <PerspectiveLayer transparency={"true"} speed={10} offset={.75} style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
      <Typography elevation={3} p={5} variant={"h1"}>Hi Mom</Typography>
    </PerspectiveLayer>
  </Perspective>
}

export default App;
