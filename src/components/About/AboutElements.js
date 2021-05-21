import styled from 'styled-components';

export const AboutPage = styled.section`
     width:100%;
`
export const AboutWrapper = styled.div`
     padding-top:111px;
`
export const AboutContainer = styled.div`
    max-width:1300px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
     @media screen and (max-width:999px){
         flex-direction:column;
         img{
             margin-left:5%;
         }
     }
     @media screen and (max-width:699px){
        img{
            margin:auto;
        }
    }
`
export const Aboutleft = styled.div`
   max-width:660px;
   img{
       max-width:100%;
       height:auto;
   }
`
export const Aboutright = styled.div`
   max-width:580px;
   position:relative;
   padding-left:40px;
   padding-top:30px;
   .border{
       width:9px;
       position:absolute;
       top:-10px;
       left:0;
       bottom:83%;
       background-color: #fc8416;  
   }
   h1{
       font-weight:700;
       font-style:normal;
       font-size:64px;
       line-height:47px;
       letter-spacing:1%;
       padding-bottom:97px;
       color:#5D4DA8;
   }
   p{
       font-weight:400;
       font-size:24px;
       line-height:47px;
       letter-spacing:2%;
       font-style:normal;
   }
   #para2{
       padding-top:66px;
   }
   @media screen and (max-width:999px){
        margin-top: 15%;
        margin-left: 2.5%;
        h1{
            font-size: 47px;
        }
   }
   @media (max-width:389px){
       h1{
          font-size:30px;
       }
       .border{
           top:30px;
           bottom: 89%;
           width: 7px;
       }
   }
   
`