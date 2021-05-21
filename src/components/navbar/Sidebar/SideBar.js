import React from 'react';
import { SidebarContainer,Icon,CloseIcon,SidebarLink,SidebarWrapper,SideBarMenu } from './SidebarElements';

const SideBar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SideBarMenu>
                    <SidebarLink to="whatisYung" onClick={toggle} smooth={true}>
                    What is YUUNG?
                    </SidebarLink>
                    <SidebarLink to="mission&vision" onClick={toggle} smooth={true}>
                    MI$$ION and VI$ION
                    </SidebarLink>
                    <SidebarLink to="yungworks" onClick={toggle} smooth={true}>
                    How YUUNG works?
                    </SidebarLink>
                    <SidebarLink to="empoweredwithyung" onClick={toggle} smooth={true}>
                    Be empowered with YUUNG
                    </SidebarLink>
                    <SidebarLink to="downloadYung" onClick={toggle} smooth={true}>
                    Download YUUNG
                    </SidebarLink>
                </SideBarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default SideBar;
