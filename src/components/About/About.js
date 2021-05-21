import React from 'react';
import {AboutPage,AboutWrapper,AboutContainer,Aboutleft,Aboutright} from './AboutElements';
import AboutBanner from './AboutImg.png';

const About = () => {
    return (
       <AboutPage>
           <AboutWrapper>
             <AboutContainer>
                <Aboutleft>
                    <img src={AboutBanner} alt="aboutimage" />
                </Aboutleft>
                <Aboutright>
                    <div className="border"></div>
                    <h1>About YUUNG.</h1>
                    <p id="para1">YUUNG is an attempt to encourage the young working age population to realise their potential. It is a platform that allows this population to explore new ways of earning money, fulfill their dreams and develop substantial life skills.</p>
                    <p id="para2">The low rate of employment is a wake up call for us to break free from the irrational societal norms.</p>
                </Aboutright>
             </AboutContainer>
           </AboutWrapper>
       </AboutPage>
    );
}

export default About;
