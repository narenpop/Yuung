import styled from "styled-components";



export const YungWorks = styled.section`
    transform:translateY(10%)
`
export const YungWorksContainer = styled.div`
    max-width:1300px;
    text-align:center;
    width: 96%;
    align-content:center;
    margin:0 auto;
    h1{
        font-weight:700;
        font-style:normal;
        font-size:64px;
        line-height:47px;
        letter-spacing:1%;
        color:#B84FA1;
    }
    p{
       font-weight:400; 
       font-style:normal;
       font-size:36px;
       padding-top:61px;
       span{
           color:#5D4DA8;
       }
    }
    #p1{
        line-height:47px;
        letter-spacing:1%;

    }
    #p2{
        line-height:60px;
        letter-spacing:2%;
    }
    .findGig{
        padding-top:101px;
        max-width:550px;
        margin:auto;
        h3{
            font-weight:800;
            font-style:normal;
            font-size:64px;
            line-height:47px;
            letter-spacing:2%;
            color:#5D4DA8;
            padding-bottom:60px;
        }
        .btnContainer{
            display:flex;
            justify-content:space-between;
        }
    }
    @media screen and (max-width:699px){
        h1{
            font-size:52px;
        }
        .findGig h3{
            font-size: 52px;
        }
        p{
            font-size: 30px;
        }
    }

`
export const StepsContainer =  styled.div`
   width:96%;
   max-width:1300px;
   margin:0 auto;
   h3{
       font-weight:700;
       font-style:normal;
       font-size:36px;
       line-height:43px;
       color:#5D4DA8;
   }
   p{
       font-weight:400;
       font-style:normal;
       font-size:24px;
       line-height:38px;
       letter-spacing:2%;
       padding-top:46px;
   }
   @media screen and (max-width:1200px){
       .border{
           display: none;
       }
     
   }
  
`
export const Steps = styled.div`
   position: relative;
   
   #step1bg{
       position:absolute;
       z-index:-9;
       @media (max-width:1200px){
            display: none;
        }
   }
   .stepsDesc{
       padding:20px 0 0 30px;
   }
   .stepsWrapper{
    padding-top:17%;
    display:flex;
    justify-content:space-evenly;
    @media screen and (max-width:699px){
        flex-wrap: wrap;
    }
   }
   .stepsLeft{
      max-width:700px;
      display:flex;
      justify-content:space-between;
      margin-top:100px;
      .stepsLeftCont{
        position:relative;
      }
      .border{
          position:absolute;
          border-left:2px dashed #fc8416;
          width:2px;
          left:50%;
          min-height:245px;
          z-index:0;
          overflow:hidden;
      }
   }
`

export const StepTwo = styled.div`
    display:flex;
    justify-content:space-around;
    .step2right{
        display:flex;
        max-width:700px;
        transform:translateY(30%);
    }
    .step2Desc{
        padding:20px 0 0 30px;
    }
    .step2rightContainer{
        position:relative;
        .border{
            position:absolute;
          border-left:2px dashed #fc8416;
          width:2px;
          left:50%;
          min-height:310px;
          z-index:0;
          overflow:hidden;
        }
    }
    @media screen and (max-width:699px){
        margin-top: 20%;
        flex-wrap: wrap-reverse;
        .step2right{
            transform: translateY(0);
        }
    }
`
export const StepThree = styled.div`
    display:flex;
    margin-top:70px;
    justify-content:space-around;
    position: relative;
    #step3bg{
        position:absolute;
        top:-34%;
        z-index:-9;
        @media (max-width:1200px){
            display: none;
        }
    }
     .step3left{
        display:flex;
        max-width:700px;
        margin-top:200px;
        
    }
    .step3leftContainer{
        position:relative;
        .border{
            position:absolute;
          border-left:2px dashed #fc8416;
          width:2px;
          left:50%;
          min-height:340px;
          z-index:0;
          overflow:hidden;
        }
    }
    
    .step3Desc{
        padding:20px 0 0 30px;
    }
    .step3right{
        transform:translateY(-16%)
    }
    @media screen and (max-width:768px){
        margin-top: 0;
        .step3right{
           transform:translateY(0%)
         }
    }
    @media screen and (max-width:699px){
        flex-wrap: wrap;
    }
`
export const StepFour = styled.div`
   display:flex;
   justify-content:space-around;
   transform:translateY(20%);
   .step4right{
       display:flex;
       max-width:700px;
        margin-top:200px;
   }
   .step4Desc{
        padding:20px 0 0 30px;
    }
    .step4rightContainer{
        position:relative;
        .border{
            position:absolute;
          border-left:2px dashed #fc8416;
          width:2px;
          left:50%;
          min-height:240px;
          z-index:0;
          overflow:hidden;
        }
    }
    @media screen and (max-width:768px){
        transform: translateY(0);
    }
    @media screen and (max-width:699px){
        flex-wrap: wrap-reverse;
    }
`
export const YungFooter = styled.div`
   text-align:center;
   margin:auto;
   padding-top:10%;
   p{
       font-family:'Roboto',sans-serif;
       font-weight:700;
       font-style:normal;
       font-size:36px;
       line-height:42px;
       span{
           color:#5D4DA8;
       }
   }
   #p2{
       padding-top:24px;
   }
`