import './App.css';
import Navbar from './components/navbar/Navbar';
import Yung from './components/Yung/Yung';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Hero from './components/hero/hero';
import About from './components/About/About';
import Banner from './components/downloadsec/YungBanner';
import Revolution from './components/revolution/Revolution';
import YungGuide from './components/YungWorks/YungGuide';
import bgLeftOrange from "./imgs/bg1.png";
import bgleftYellow from './imgs/bg2.png';
import Mission from './components/Mission&vision/Mission';
import bgPink from './imgs/bg3.png';
import bg4 from './imgs/bg4.png';
import bg5 from './imgs/bg5.png';
import bg6 from './imgs/bg6.png';
import bg7 from './imgs/bg7.png';
import Empower from './components/Empower/empower';
import SideBar from './components/navbar/Sidebar/SideBar';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {
  const [isOpen,setIsOpen] = useState(false);
  const toggle = ()=>{
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <img className="page-bg1 web-bg" src={bgLeftOrange} alt="" />
      <img className="web-bg  page-bg2" src={bgleftYellow} alt="" />
      <img className="web-bg  page-bg3" src={bgPink} alt="" /> 
     <img className="web-bg  page-bg4" src={bg4} alt="" /> 
     <img className="web-bg page-bg5" src={bg5} alt="" />
     <img className="web-bg page-bg6" src={bg6} alt="" />
     <img className="web-bg page-bg7" src={bg7} alt="" />
      <Router>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <div className="home">
          <Navbar toggle={toggle}/>
          <div className="hero">
          <Hero />
          </div>
        </div>
        <Yung/>
        <Revolution/>
        <About/>
        <Banner/>
        <Mission/>
        <YungGuide/>
        <Empower/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
