import React from 'react';
import { Button } from '../hero/heroElements';
import { EmpowerContainer,BoxWrap } from './EmpowerElements';
import gplay from '../hero/gplay.png';
import apple from '../hero/apple.png';
import dec from './dec.png';

const Empower = () => {
    return (
      <EmpowerContainer>
          <h1>Be empowered with YUUNG!</h1>
          <BoxWrap>
              <div className="box">
                  <img src={dec} alt="" />
                   <p>1</p>
                   <p>Learn new skills, gain hands-on industrial experience and build strong credentials with part-time jobs.</p>
              </div>
              <div className="box">
              <img src={dec} alt="" />
                  <p>2</p>
                   <p>Pursue your hobbies and master your art by working closely with professionals.</p>
              </div>
              <div className="box">
              <img src={dec} alt="" />
                  <p>3</p>
                  <p>Pursue your hobbies and master your art by working closely with professionals.</p>
              </div>
          </BoxWrap>
          <h1 id="choose">CHOOSE TO TAKE THE FIRST STEP.</h1>
          <div className="btnContainer">
              <Button>
                  <img src={gplay} alt="" />
                Download the App
              </Button>
              <Button>
                  <img src={apple} alt="" />
                Download the App
              </Button>
          </div>
      </EmpowerContainer>
    );
}

export default Empower;
