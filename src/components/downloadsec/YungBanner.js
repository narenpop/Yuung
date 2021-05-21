import React from 'react';
import { Button } from '../hero/heroElements';
import apple from '../hero/apple.png';
import gplay from '../hero/gplay.png';
import deco2 from './deco2.png';
import {YungBanner,BannerContainer} from './BannerElements';
const Banner = () => {
    return (
       <YungBanner >
           <img id="deco2" src={deco2} alt="" />
           <BannerContainer id="downloadYung">
               <h1>We are moving above the <span>menial chains</span> of the society.</h1>
               <p>We are moving forward <span>socially</span><br/> and <span>Economically.</span></p>
               <p id="para">Join us. Move with us.</p>
               <div className="btnContainer">
               <Button id="btn">
                   <img src={gplay} alt="apple" />
                   Download the App</Button>
               <Button id="btn">
                   <img src={apple} alt="gplay" />
                   Download the App</Button>
               </div>
           </BannerContainer>
       </YungBanner>
    );
}

export default Banner;
