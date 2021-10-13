import React from 'react'
import {MdNightlightRound} from 'react-icons/md'
import { HiMoon } from "react-icons/hi";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu, NightModeIconRespo} from './SidebarElements';

const Sidebar = ({ isOpen , toggle}) => {
    const icon = <HiMoon/>
    function myButton() {
        var click = document.body
        click.classList.toggle("dark-theme")
    }
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ="/ResearchU" onClick= {toggle}>Home</SidebarLink>
                    <SidebarLink to ="/About" onClick= {toggle}>About</SidebarLink>
                    <SidebarLink to ="/Contact" onClick= {toggle}>Contact</SidebarLink>
                    <SidebarLink to ="/SignIn" onClick= {toggle}>Sign In</SidebarLink>                    
                    {/* <SidebarLink to ="/darkmode" onClick= {toggle}><MdNightlightRound/></SidebarLink> */}
                    <NightModeIconRespo onClick={myButton}>
                             {icon}
                    </NightModeIconRespo>
                    
                </SidebarMenu>
                <SideBtnWrap>
                    
                    <SidebarRoute to = "/SignUp">
                        Sign Up
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
