import React from 'react';
import {FaBars} from 'react-icons/fa'
import {MdNightlightRound} from 'react-icons/md'
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import {FaGripLinesVertical} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NightModeIcon} from './NavbarElements';

import logo from '../../images/logo.png';




const Navbar = ({toggle}) => {
    const icon = <HiMoon/>
    function myButton() {
        var click = document.body
        click.classList.toggle("dark-theme")
    }


    return (
        <>
            <Nav>
            <NavLogo to ='/ResearchU'>
            <img src={logo} width={200} alt='logo' />
            </NavLogo>
                <NavbarContainer>
                    <MobileIcon onClick = {toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to ='/' >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ="/About">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ="/Contact">Contact</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NightModeIcon onClick={myButton}>
                             {icon}
                        </NightModeIcon>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
                <NavBtn>
                    <NavBtnLink to = "/CreatePost"> Create Post</NavBtnLink>
                    <NavLinks to ="/SignIn">Sign In</NavLinks>
                    {/* <FaGripLinesVertical/> */}
                    <NavBtnLink to = "/SignUp"> Sign Up </NavBtnLink>
                    <NavBtnLink to = "/StudentProfile"> Student Profile </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
