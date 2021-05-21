import styled from "styled-components";
import bannerImage from './bannerbg.png';
import { Button } from '../hero/heroElements';

export const YungBanner = styled.section`
   background-image:url(${bannerImage});
   background-color:#eef268;
   background-size:cover;
   background-repeat:no-repeat;
   height:110vh;
   text-align:center;
   margin:0 auto;
   width:100%;
   margin-top:281px;
   position:relative;
   #deco2{
       max-width:300px;
       position:absolute;
       top:-8%;
       right:6%;
       @media screen and (max-width:1024px){
           max-width:190px;
           top:-5%;
       }
       @media screen and (max-width:999px){
           top:-7%;
       }
       @media (max-width:389px){
           top:-7.5%;
           right:0;
           max-width:120px;

           
       }
   }
`
export const BannerContainer = styled.div`
   align-items:center;
   position:absolute;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
   max-width:1300px;
   text-align:center;
   margin:auto;
   
   h1{
       font-weight:800;
       font-style:normal;
       font-size:75px;
       line-height:86px;
       span{
           color:#B84FA1;
       }
   }
   p{
       font-weight:700;
       font-style:normal;
       font-size:48px;
       line-height:70px;
       padding-top:40px;
       span{
           color:#B84FA1;
       }
   }
   #para{
       color:#B84FA1;
       font-size:38px;
       line-height:45px;
       font-style:normal;
   }
   .btnContainer{
       max-width:600px;
       display:flex;
       justify-content:space-around;
       margin-top:40px;
       margin-left:auto;
       margin-right:auto;
       img{
           margin-right:6px;
       }
       #btn{
          background-color:transparent;           
       }
   }
   @media screen and (max-width:999px){
       width: 100%;
      .btnContainer{
        flex-wrap: wrap;
        #btn{
            margin-bottom: 20px;
        }
      }
   }
   @media screen and (max-width:699px){
       width: 95%;
   }
   @media (max-width:389px){
       h1{
           font-size:40px;
           line-height:50px;
       }
       p{
           font-size:30px;
           padding-top: 20px;
           line-height: 50px;
       }
       #para{
           font-size: 30px;
           padding-bottom: 0;
       }
   }
`