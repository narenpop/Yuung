import styled from "styled-components";

export const MissionWrapper = styled.section`
   width:100%;
   margin-top:200px;
   position:relative;
`
export const MissionContainer = styled.div`
   max-width:1300px;
   width: 95%;
   margin:0 auto;
   display:flex;
   justify-content:center;
   
   h1{
       font-weight:700;
       font-style:normal;
       font-size:48px;
       line-height:57px;
       letter-spacing:1%;
       color:#5D4DA8;
       border-left:9px solid #FC8416;
       padding-left:30px;
       margin-top:78px;
   }
   h2{
       font-weight:700;
       font-style:normal;
       font-size:36px;
       line-height:50px;
       letter-spacing:1%;
       padding-top:40px;
       span{
           color:#5D4DA8;
       }
   }
   p{
       font-weight:400;
       font-style:normal;
       font-size:24px;
       line-height:47px;
       letter-spacing:2%;
       color:#000000;
       padding-top:74px;
   }
  .imgcontainer{
      padding-left:30px;
  }
  .border{
      position:absolute;
      border-bottom:4px solid #5D4DA8;
      bottom:-20%;
      width:100px;
  }
  @media screen and (max-width:768px){
      flex-wrap: wrap;
      .border{
          bottom:-5%;
      }
  }
`
export const MissionLeft = styled.div`
   max-width:480px;
   transform:translateY(-5%);
   h1{
       
   }
`
export const MissionRight = styled.div`
   max-width:480px;
   margin-left:100px;
   p{
       padding-top:136px;
   }
   @media screen and (max-width:768px){
      margin-left: 0;
  }
`