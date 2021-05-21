import styled from "styled-components";

export const EmpowerContainer = styled.section`
     max-width: 1300px;
     width: 97%;
     margin: auto;
     transform:translateY(60%);
     text-align:center;
     h1{
         font-weight: 700;
         font-family:'roboto',sans-serif;
         font-style: normal;
         font-size: 64px;
         line-height: 75px;
         color:#5D4DA8;
     }
     #choose{
         color:#B84FA1;
         padding-bottom: 91px;
     }
     p{
         font-weight: 700;
         font-style: normal;
         font-size: 24px;
         line-height: 38px;
         text-align:center;
         max-width: 240px;
         color:#ffffff;
     }
     .btnContainer{
         display: flex;
         max-width: 550px;
         justify-content: space-between;
         align-items: center;
         margin:auto;
     }
`
export const BoxWrap = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   margin:auto;
   max-width: 900px;
   margin-top: 140px;
   margin-bottom: 150px;
   .box{
       background-color:#5D4DA8;
       text-align:center;
       padding:40px 16px;
       position: relative;
       transition: 0.8s ease-in-out;
    img{
       position: absolute;
       top:-20%;
       right:-20%;
       width: 190px;
      }
   }
   @media screen and (max-width:999px){
     flex-direction:column;
     .box{
         max-width: 300px;
         margin: auto;
         margin-top: 30px;
         
     }
  }

`