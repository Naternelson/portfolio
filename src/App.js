import { Box, Card, Paper, Typography } from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css';
import PerspectiveLayer from './utilities/perspective-layer';


function App() {
  const speed = .25
  return <Parallax pages={2} config={{clamp: true, mass: 1, tension: 170, friction: 25}} style={{backgroundColor: 'grey'}}>
    <ParallaxLayer offset={0} speed={0} style={{ backgroundColor: 'blue' }} />
    <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: '#ff6d6d' }} />
    <PerspectiveLayer speed={1} offset={.5} style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
        <Typography elevation={3} p={5} variant={"h1"}>Hi There</Typography>
    </PerspectiveLayer>
    <PerspectiveLayer transparency={"true"} speed={3} offset={.75} style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
      <h1>Hi Mom</h1>
    </PerspectiveLayer>
  </Parallax>
}

export default App;
