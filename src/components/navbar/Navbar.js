import React from 'react';
import './Navbar.css';
import logo from './nav-logo.png';
import {FaBars} from 'react-icons/fa';
import { NavbarContainer,Nav,NavLogo,NavLinks,MobileIcon,NavItem,NavDownload} from './NavbarElements';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';

const Navbar = ({toggle})=>{
    return(
       <NavbarContainer id="header">
           <Nav>
           <NavLogo>
              <img src={logo} alt="logo" />
           </NavLogo>
           <MobileIcon onClick={toggle}>
               <FaBars/>
           </MobileIcon>
           <NavLinks>
             <NavItem to="whatisYung"
             smooth={true}
             offset={-70}
             duration={500}
             >What is YUUNG?</NavItem>
           </NavLinks>
           <NavLinks>
             <NavItem to="mission&vision"
                 smooth={true}
                 offset={-70}
                 duration={500}
             >MI$$ION and VI$ION</NavItem>
           </NavLinks>
           <NavLinks>
            <NavItem to="yungworks" 
             smooth={true}
             offset={-70}
             duration={500}
             >How YUUNG works? </NavItem>
           </NavLinks>
           <NavLinks>
             <NavItem to="empoweredwithyung"
               smooth={true}
               offset={-70}
               duration={500}
             >Be empowered with YUUNG </NavItem>
           </NavLinks>
           <NavLinks>
             <NavDownload to="downloadYung"
               smooth={true}
               offset={-70}
               duration={500}
             >Download YUUNG</NavDownload>
           </NavLinks>
           </Nav>
        </NavbarContainer>
    )
}

export default Navbar