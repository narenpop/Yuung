import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';

export const FooterC = styled.section`
     width: 100%;
     transform: translateY(200%);
     @media (max-width:999px){
        transform: translateY(300%);
     }
`
export const FooterContainer = styled.div`
`
export const FooterTop = styled.div`
    background-color: #5D4DA8;
    padding:85px 0px 60px 0px;
    .footerWrap{
        max-width: 1300px;
        width: 97%;
        display: flex;
       justify-content: space-between;
       margin:auto;   
    }
    .footerTopRight1{
        span{
            padding-left: 20px;
            color: #ffffff;
            font-weight: 700;
            font-size: 24px;
            font-style: normal;
            line-height: 35px;
            @media (max-width:489px){
                font-size: 12px;
                padding:4px;
            }
        }
    }
    .footerTopRight2{
        margin-top: 20px;
        span{
            padding-left: 20px;
            #footermail{
                color: #ffffff;
                margin-left: 30px;
                cursor: pointer;
            }
            @media (max-width:489px){
                font-size: 12px;
                padding:4px;
            }
        }
    }
    p{
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        line-height: 35px;
        color:#ffffff;
        padding-top: 30px;
    }
    #bold{
        font-weight: 700;
        font-family: 'Roboto',sans-serif;
        font-size: 24px;
        line-height: 35px;
        font-style: normal;
    }
    
`
export const Scrolltop = styled(LinkS)`
    margin:auto;
    text-align:center;
    display: flex;
    justify-content: center;
    cursor: pointer;
    padding:10px 0;
    p{
        font-weight: 700;
        font-style: normal;
        font-size: 16px;
    
        color: #5D4DA8;
    }
    img{
        margin-left: 20px;
    }
    
`
export const FooterBottom = styled.div`
   background-color: #5D4DA8;
   text-align:center;
   padding: 33px 0 40px 0;
   span{
       font-weight: 400;
       font-style:normal;
       font-size: 16px;
       line-height: 35px;
       color:#ffffff;
       opacity: 70%;
       padding-left: 20px;
   }
   .footer-btm{
       padding-top: 14px;
   }
`