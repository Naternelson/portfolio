import './App.css';
import AboutMe from './app/components/about-me/about-me';
import Footer from './app/components/footer/footer';
import NavBar from './app/components/nav/nav-bar';
import Projects from './app/components/projects/projects';

function App() {
  
  return <>
    <NavBar/>
    <AboutMe/>
    <Projects/>
    <Footer/>
  </>
}

export default App;
