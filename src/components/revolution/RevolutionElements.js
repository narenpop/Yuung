import styled from 'styled-components';
export const RevolutionWrapper = styled.section`
   width:100%;
`
export const RevolutionContainer =  styled.div`
    max-width:1300px;
    margin:0 auto;
    width:100%;
    

`
export const RevDescription = styled.div`
   display:flex;
   justify-content:space-between;
   @media screen and (max-width:999px){
        flex-direction:column;
        img{
            margin-left:30px;
        }
    }
    @media screen and (max-width:699px){
        img{
            margin:auto;
        }
    }
`
export const RevLeft = styled.div`
  max-width:660px;
  img{
     max-width:100%;
  }

`
export const RevRight = styled.div`
     max-width:600px;
     position:relative;
     padding-left:40px;
     object-fit:contain;
     .Border{
       width:9px;
       position:absolute;
       top:15px;
       left:0;
       bottom:83.7%;
       background-color: #fc8416;   
     }
    h1{
        font-weight:700;
        font-style:normal;
        font-size:64px;
        line-height:70px;
        letter-spacing:2%;
        margin-bottom:60px;
        color:#5D4DA8;
    }
    p{
        font-weight:700;
        font-style:normal;
        font-size:24px;
        line-height:47px;
        letter-spacing:2%;
    }
    #revPara2{
        padding-top:47px;
    }
    @media screen and (max-width:999px){
        max-width:1300px;
        width:90%;
        margin-left:20px;
        h1{
            font-size:46px;
            padding-top:20px;
        }
    }
    @media (max-width:389px){
        h1{
            font-size: 30px;
            line-height:50px;
        }
        .Border{
            bottom:91%;
        }
    }
`
export const RevolutionaryIdea = styled.div`
    min-height:600px;
    position:relative;
    padding-left:40px;
    transform:translate(0,180px);
    max-width:1300px;
    margin:0 auto;
    width:95%;
    margin-bottom:70px;
    .Border{
       width:9px;
       position:absolute;
       top:-20px;
       left:0;
       bottom:87%;
       background-color: #fc8416;   
     }
    h1{
      font-weight:700;
      font-style:normal;
      font-size:64px;
      line-height:47px;
      letter-spacing:2%;
      color:#5D4DA8;
      margin-bottom:80px;
    }
    p{
        font-weight:700;
        font-style:normal;
        font-size:24px;
        line-height:47px;
        letter-spacing:2%;
    }
    @media screen and (max-width:999px){
        h1{
            line-height:70px;
            font-size:46px;
        }
    }
    @media (max-width:389px){
        h1{
            font-size: 30px;
            line-height:50px;
        }
        .Border{
            bottom:91%;
            top:10px;
        }
    }
`
export const BarChart = styled.section`
   width:95%;
   margin:0 auto;
   max-width:1300px;
   img{
       max-width:100%;
   }
   .barDescription{
       display:flex;
       justify-content:space-between;
       padding-top:70px;
   }
   p{
       max-width:550px;
       font-weight:400;
       font-style:normal;
       font-size:24px;
       line-height:47px;
       letter-spacing:2%;
   }
   @media screen and (max-width:800px){
       margin-top: 30%;
      .barDescription{
        flex-direction:column;
        align-items: center;
      }
      #p2{
          padding-top: 20px;
      }
   }
   @media screen and (max-width:389px){
       margin-top:250px;
   }
`