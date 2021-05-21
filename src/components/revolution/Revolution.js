import React from 'react';
import {RevolutionWrapper,RevolutionContainer,RevDescription,RevRight,RevLeft,RevolutionaryIdea,BarChart} from './RevolutionElements';
import RevImg from './yungImg2.png';

import Chart from './Graph.png';

const Revolution = () => {
    return (
       <RevolutionWrapper id="empoweredwithyung">
           <RevolutionContainer>
              <RevDescription>
                  <RevLeft>
                     <img src={RevImg} alt="" />
                  </RevLeft>
                  <RevRight>
                      <div className="Border"></div>
                     <h1>What are we trying to revolutionize?</h1>
                     <p id="revPara1">The societal norms that entitle part-time jobs to be unappreciated, such as:
                      the wrong age, not having a relevant designation, inconsistent with family reputation, failure to cope with academics, and many such irrational assumptions. </p>
                      <p id="revPara2">While Indian parents are keen on providing  best education, lifestyle and values for their children, they refuse to provide them with the freedom to adapt and evolve on their own terms.
                      This has made getting a part-time job while studying,  pursuing a passionate hobby as a career choice and the ability to make independent choices a taboo.  </p>
                  </RevRight>
              </RevDescription>
           </RevolutionContainer>
           <RevolutionaryIdea>
        
                <div className="Border"></div>
                <h1>The basis of our revolutionary idea.</h1>
                <p>The Organization of Economic Co-operation and Development (OECD) has been founded to facilitate economic progress and world trade. According to OECD the working age population is composed of those aged from 15 to 64. Based on this definition, if one analysed the employment rate of various countries, India has a 46.3% rates of employment, way below the OECD average of 68.8%.</p>
           </RevolutionaryIdea>
           <BarChart>
               <div>
               <img src={Chart} alt="graph" />
               </div>
               <div className="barDescription">
                   <div>
                    <p>Developed countries such as Iceland, U.K, U.S.A are well above the OECD average. Here, students are encouraged to find their own niche rather than be dependent on their parents. Summer jobs and part-time jobs are encouraged, to teach them to be self-reliant. Most students even pay their own tuition fee. </p>
                   </div>
                   <div>
                    <p id="p2">Asian countries such as Japan, China and Indonesia  having similar traditional values as those in India, also have better employment rates. This is because they are open to change and encourage socio-economic independence of their younger population.</p>
                   </div>
               </div>
           </BarChart>
       </RevolutionWrapper>
    );
}

export default Revolution;
