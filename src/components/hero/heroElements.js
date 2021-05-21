import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const HeroContainer = styled.section`
    max-width:1400px;
    width:100%;
    padding-top:100px;
    display:flex;
    justify-content:space-around;
    margin:0 auto;
`
export const HeroLeft = styled.div`
   max-width:600px;
   width:96%;
   position:relative;
   span#oppo{
       color:#e36bc5;

   }
   #gplay{
       padding-right:5px;
   }
   .heroIntro{
       display:flex;
       justify-content:space-between;
       font-size:40px;
       max-width:540px;
       line-height:48px;
       font-weight:400;
       padding:40px 0;
   }
   
   .heroBtnContainer{
        display:flex;
        justify-content:space-between;
        max-width:540px;
    }
   @media screen and (max-width:999px){
       h1{
           font-size:5em;
           padding-left:10px;
           line-height:80px;
       }
   }
   @media screen and (max-width:699px){
       h1{
           font-size:3.9em;
       }
       .heroIntro{
           max-width:300px;
           font-size:20px;
       }
       .heroBtnContainer{
           flex-wrap: wrap;
       }
   }
`
export const HeroRight = styled.div`
    position: relative;
    max-width:100%;
    max-width:660px;
    @media screen and (max-width:999px){
        max-width:500px;
    }
    @media screen and (max-width:699px){
        display: none;
    }
`
export const Button = styled.button`
    display:flex;
    align-items:center;
    padding:19px 28px;
    border: 4px solid #5D4DA8;
    border-radius: 60px;
    font-size:20px;
    line-height:24px;
    font-style:normal;
    font-weight:700;
    color:#000000;
    cursor: pointer;
    background-color:#ffffff;
    &:hover{
      transition:0.3s all ease;
      background-color:#f4f5f6;
    }

    @media screen and (max-width:999px){
        font-size:17px;
    }
    @media screen and (max-width:389px){
        margin-top: 10px !important;
        padding:10px 10px;
        margin: auto;
    }
    
`
export const ScrollDown = styled(LinkS)`
   align-self:center;
   
`
