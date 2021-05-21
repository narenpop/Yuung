import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const NavbarContainer = styled.nav`
         width:100%;
         height:80px;
         display:flex;
         justify-content:space-evenly;
         align-items:center;
         font-size:1rem;
          top:0;
         z-index:10;
         @media screen and (max-width:999px){
           transition:0.8s all ease-in;
           padding-left:10px;
         }
`;

export const Nav = styled.div`
   display:flex;
`;

export const NavLogo = styled.div`
    justify-self:flex-start;
    cursor: pointer;
    font-size:1.8rem;
    display:flex;
    margin-right:30px;
    align-items:center;
    font-weight:bold;
    text-decoration:none;
    @media screen and (max-width:768px){
        position:absolute;
        left:0;
        top:0;
        transform:translate(30%,80%);
    }
`;

export const MobileIcon = styled.div`
   display:none;
   @media screen and (max-width:768px){
       display:block;
       position:absolute;
       top:0;
       right:0;
       cursor: pointer;
       transform:translate(-100%,60%);
       font-size:1.8em;
   }
  

`
export const NavLinks = styled.ul`
    margin-right:30px;
    font-size:1em;
    margin-left:30px;
    display:flex;
    align-items:center;

    @media screen and (max-width:768px){
        display:none;
    }
`
export const NavItem = styled(LinkS)`
    font-size:16px;
    font-weight:700;
    line-height:19px;
    font-style:normal;
    cursor: pointer;
    color:#000000;
    @media screen and (max-width:999px){
        font-size:13px;
    }
`
export const NavDownload = styled(LinkS)`
    font-size:16px;
    font-weight:700;
    line-height:19px;
    font-style:normal;
    cursor: pointer;
    color:#000000;
    background-color:#ffffff;
    padding:17px 37px;
    border-radius:60px;
`