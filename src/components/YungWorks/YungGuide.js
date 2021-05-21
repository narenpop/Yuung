import React from 'react';
import { YungWorks,YungWorksContainer,StepsContainer,Steps,StepTwo,StepThree,StepFour,YungFooter} from './GuideElements';
import { Button } from '../hero/heroElements';
import one from './imgs/1.png';
import stepone  from './imgs/step1.png';
import apple from '../hero/apple.png';
import gplay from '../hero/gplay.png';
import steptwo from './imgs/step2.png';
import './Yungworks.css';
import rectright from './imgs/rectright.png';
import rectangleLeft from '../Yung/rectanglebg.png';

const YungGuide = () => {
    return (
        <> 
            <YungWorks id="yungworks">
                <YungWorksContainer>
                    <h1>How YUUNG works?</h1>
                    <p id="p1"><span>YUUNG</span> helps you find your <span>GIG!</span></p>
                    <p id="p2">The app enlists part-time jobs for users to choose from, based solely on their convenience and interests. By nullifying the 'experience' factor for applicants, we have optimized the job market and created a paradigm shift in the job search!  </p>
                    <div className="findGig">
                        <h3>Find your GIG.</h3>
                        <div className="btnContainer">
                           <Button>
                               <img src={apple} alt="" />
                               Download the App</Button>
                           <Button id="btn2">
                               <img src={gplay} alt="" />
                               Download the App</Button>
                        </div>
                    </div>
                </YungWorksContainer>
                <StepsContainer>
                   <Steps id="step1">
                     <img id="step1bg" src={rectangleLeft} alt="" />
                     <div className="stepsWrapper">
                     <div className="stepsLeft">
                         <div className="stepsLeftCont">
                           <img src={one} alt="" />
                           <div className="border"></div>
                         </div>
                         <div className="stepsDesc">
                          <h3>STEP</h3>
                          <p>Signing up in the YUUNG app just requires your<br/> phone number and an OTP verification.</p>
                         </div>
                     </div>
                     <div className="stepsRight">
                        <img src={stepone} alt="" />
                     </div>
                     </div>
                   </Steps>
                   <StepTwo>
                     <div className="step2left">
                         <img src={steptwo} alt="step2" />
                     </div>
                     <div className="step2right">
                         <div className="step2rightContainer">
                           <img src={one} alt="" />
                           <div className="border"></div>
                         </div>
                         <div className="step2Desc">
                          <h3>STEP</h3>
                          <p>Signing up in the YUUNG app just requires your<br/> phone number and an OTP verification.</p>
                         </div>
                     </div>
                   </StepTwo>
                   <StepThree>
                       <img id="step3bg" src={rectright} alt="" />
                       <div className="step3left">
                          <div className="step3leftContainer">
                             <img src={one} alt="" />
                             <div className="border"></div>
                          </div>
                          <div className="step3Desc">
                            <h3>STEP</h3>
                            <p>Signing up in the YUUNG app just requires your<br/> phone number and an OTP verification.</p>
                          </div>
                       </div>
                       <div className="step3right">
                         <img src={steptwo} alt="step2" />
                     </div>
                   </StepThree>
                   <StepFour>
                   <div className="step4left">
                         <img src={steptwo} alt="step2" />
                     </div>
                     <div className="step4right">
                         <div className="step4rightContainer">
                           <img src={one} alt="" />
                           <div className="border"></div>
                         </div>
                         <div className="step4Desc">
                          <h3>STEP</h3>
                          <p>Signing up in the YUUNG app just requires your<br/> phone number and an OTP verification.</p>
                         </div>
                     </div>
                   </StepFour>
                </StepsContainer>
                <YungFooter>
                <p id="p1">BREAK A LEG!</p>
                <p id="p2">You got yourself a <span>YUUNG GIG.</span></p>
                </YungFooter>
            </YungWorks>
        </>
    );
}

export default YungGuide;
