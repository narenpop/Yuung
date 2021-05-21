import React from 'react';
import {MissionWrapper,MissionContainer,MissionLeft,MissionRight} from './MissionElements';
import bow from './bow.png';
import eye from './eye.png';

const Mission = () => {
    return (
       <MissionWrapper id="mission&vision">
           <MissionContainer>
               <MissionLeft>
                   <div className="imgcontainer">
                   <img src={bow} alt="" />
                   </div>
                  <h1>MI$$ION</h1>
                  <h2>YUUNG is out to create a level playing field for the <span>young and the beginners</span> at the job market.</h2>
                  <p>The mission of yuung is to open up opportunities that will serve as a launch pad for careers of the youth peer group. Aimed at the young of India, aged between 17 to 25, Yuung helps them become financially independent and enhance their skill set in order to power up their career goals.</p>
               </MissionLeft>
               <MissionRight>
                   <div className="imgcontainer">
                   <img src={eye} alt="" />
                   </div>
                   <h1>VI$ION</h1>
                   <h2>YUUNG aims to drive the highly potential <span>GIG ECONOMY</span> in India.</h2>
                   <p>We envision to promote and normalize part-time jobs for young people to support themselves, their education and families while positively influencing their future. Yuung promotes a platform for Small to Medium Enterprises (SMEs) and Start-Ups to find their potential resource. Yuung furthur aims to open its channels for academic opportunities.</p>
               </MissionRight>
               <div className="border">
               </div>
           </MissionContainer>
       </MissionWrapper>
    );
}

export default Mission;
