import React from 'react';
import heroImg from './heroImg.png';
import deco from './deco.png';
import gplay from './gplay.png';
import apple from './apple.png';
import arrow from './arrowdown.png';
import {HeroContainer,HeroLeft, HeroRight,Button,ScrollDown,WhatisYung} from './heroElements'
import './hero.css';
const Hero = () => {
    return (
        <>
        <HeroContainer>       
          <HeroLeft>
              <h1>Embracing the<br></br> <span id="oppo">opportunist</span><br></br> in you!</h1>
              <div className="heroIntro">
                 <div>
                     <p>Explore</p>
                 </div>
                 .
                 <div>
                     <p>Expand</p>
                 </div>
                 .
                 <div>
                     <p>Earn</p>
                 </div>
              </div>
              <div className="heroBtnContainer">
              <Button>
                  <img id="gplay" src={gplay} alt="" />
                  Download the App</Button>
              <Button>
                 <img id="gplay" src={apple} alt="" />
                  Download the App</Button>
              </div>
          </HeroLeft>
          <HeroRight>
                <img className="deco1" src={deco} alt="deco" />
                <img className="heroImg1" src={heroImg} alt="" />
          </HeroRight>

        </HeroContainer>
        <div className="scroll">
           <p>SCROLL DOWN</p>
          <ScrollDown to="footer"
            smooth={true}
            duration={2000}
            >
            <img src={arrow} alt="" />
          </ScrollDown>
        </div>
        </>
    );
}

export default Hero;
