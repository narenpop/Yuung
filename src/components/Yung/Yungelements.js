import styled from 'styled-components';
import rectangleBg from './rectanglebg.png';

export const YungContainer = styled.section`
   width:100%;
   text-align:center;
   height:100vh;
   position:relative;
   background-image:url(${rectangleBg});
   background-repeat:no-repeat;
   background-size:cover;
   h1{
     color:#5D4DA8;
     font-size:64px;
     line-height:76px;
     letter-spacing:1%;
     font-weight:700;
   }
   p{
       font-weight:400;
       font-style:normal;
       font-size:36px;
       line-height:60px;
       letter-spacing:1%;
   }
   @media screen and (max-width:389px){
      background: none;
      p{
         font-size: 20px;
         line-height: 40px;
      }
      h1{
         font-size: 35px;
         line-height: 50px;
      }
   }
`
export const YungDesc = styled.div`
   position:absolute;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
   max-width:1200px;
   margin:0 auto;
   
`