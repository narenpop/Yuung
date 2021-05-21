import React from 'react';
import footerLogo from './imgs/Yuung.png';
import twitter from './imgs/twit.png';
import linkedin from './imgs/linkedin.png';
import insta from './imgs/insta.png';
import arrow from './imgs/arrow.png';
import { FooterC,FooterContainer,Scrolltop,FooterBottom,FooterTop } from './FooterElements';

const Footer = () => {
    return (
        <FooterC id="footer">
            <FooterContainer>
                <FooterTop>
                    <div className="footerWrap">
                    <div>
                       <img src={footerLogo} alt="" />
                       <p>An initiative to empower you.<br/> Explore. Enhance. Earn.</p>
                   </div>
                   <div>
                       <div className="footerTopRight1">
                           <span id="bold">Follow us</span><span>|</span>
                           <span id="bold">Get in touch</span>
                       </div>
                       <div className="footerTopRight2">
                           <span>
                              <a href="#"><img width="20" src={insta} alt="" /></a> 
                           </span>
                           <span>
                              <a href=""><img width="20" src={linkedin} alt="" /></a> 
                           </span>
                           <span>
                               <a href=""><img width="20" src={twitter} alt="" /></a>
                           </span>
                           <span><a id="footermail" herf="mailto: info@yuung.in">info@yuung.in</a></span>
                       </div>
                   </div>
                    </div>
                   

                </FooterTop>
                <Scrolltop to="header" smooth={true} duration={2000}>
                     <p>Back to Top</p>
                     <img src={arrow} alt="" />
                </Scrolltop>
                <FooterBottom>
                    <div>
                       <span>What is YUUNG?</span><span>|</span>
                       <span>MI$$ION and VI$ION</span><span>|</span>
                       <span>How YUUNG works?</span><span>|</span>
                       <span>Be empowered with YUUNG</span>
                    </div>
                    <div className="footer-btm">
                        <span id="footerlast">YUUNG 2021. All rights reserved</span>
                    </div>

                </FooterBottom>
            </FooterContainer>
        </FooterC>
    );
}

export default Footer;
