import React from "react";
import { FaBars } from "react-icons/fa";
import { MdNightlightRound } from "react-icons/md";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { FaGripLinesVertical } from "react-icons/fa";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NightModeIcon,
} from "./NavbarElements";
import { useUser } from "../../auth/useUser";
import { useHistory } from "react-router-dom";
import logo from "../../images/logo.png";


const Navbar = ({ toggle }) => {
    const icon = <HiMoon />;

    function myButton() {
        if (localStorage.getItem('darkMode') === 'true')
            localStorage.setItem('darkMode', false);
        else
            localStorage.setItem('darkMode', true);

        var click = document.body;
        click.classList.toggle("dark-theme");
    }
    const user = useUser();
    const history = useHistory();
    const logOut = () => {
        localStorage.removeItem('token');
        history.push('/SignIn');
    }

    if (user != null) {
        if (user.appliedPosts != null) {
            return (
                <>
                    <Nav>
                        <NavLogo to="/">
                            <img src={logo} width={200} alt="logo"/>
                        </NavLogo>
                        <NavbarContainer>
                            <MobileIcon onClick={toggle}>
                                <FaBars />
                            </MobileIcon>
                            <NavMenu>
                                <NavItem>
                                    <NavLinks to="/">Home</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="/About">About</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="/Contact">Contact</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NightModeIcon onClick={myButton}>
                                        {icon}
                                    </NightModeIcon>
                                </NavItem>
                            </NavMenu>
                        </NavbarContainer>
                        <NavBtn>
                        <NavLinks onClick={logOut} > Log Out </NavLinks>
                            <NavBtnLink to="/StudentInfoPage">Profile</NavBtnLink>
                            {/* <FaGripLinesVertical/> */}
                            {/* <NavBtnLink to = "/StudentProfile"> Student Profile </NavBtnLink> */}
                        </NavBtn>

                    </Nav>
                </>
            );
        } else if (user.createdPosts != null) {
            return (
                <>
                    <Nav>
                        <NavLogo to="/">
                            <img src={logo} width={200} alt="logo" />
                        </NavLogo>
                        <NavbarContainer>
                            <MobileIcon onClick={toggle}>
                                <FaBars />
                            </MobileIcon>
                            <NavMenu>
                                <NavItem>
                                    <NavLinks to="/">Home</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="/About">About</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="/Contact">Contact</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NightModeIcon onClick={myButton}>
                                        {icon}
                                    </NightModeIcon>
                                </NavItem>
                            </NavMenu>
                        </NavbarContainer>
                        <NavBtn>
                            <NavLinks to="/CreatePost">
                                {" "}
                                Create Post
                            </NavLinks>
                            <NavLinks onClick={logOut} > Log Out </NavLinks>
                            <NavBtnLink to="/ProfessorInfoPage">Profile</NavBtnLink>


                            {/* <NavBtnLink to = "/StudentProfile"> Student Profile </NavBtnLink> */}
                        </NavBtn>



                          <button  className = "field-margin button-style logOut" onClick={logOut}>Log Out</button>
                    </Nav>
                </>
            );
        } else {
            return (
                <>
                    <Nav>
                        <NavLogo to="/">
                            <img src={logo} width={200} alt="logo" />
                        </NavLogo>
                        <NavbarContainer>
                            <MobileIcon onClick={toggle}>
                                <FaBars />
                            </MobileIcon>
                            <NavMenu>
                                <NavItem>
                                    <NavLinks to="/">Home</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="/About">About</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="/Contact">Contact</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NightModeIcon onClick={myButton}>
                                        {icon}
                                    </NightModeIcon>
                                </NavItem>
                            </NavMenu>
                        </NavbarContainer>
                        <NavBtn>
                            <NavLinks to="/SignIn">Sign In</NavLinks>
                            {/* <FaGripLinesVertical/> */}
                            <NavBtnLink to="/SignUp"> Sign Up </NavBtnLink>
                            {/* <NavBtnLink to = "/StudentProfile"> Student Profile </NavBtnLink> */}
                        </NavBtn>
                    </Nav>
                </>
            );
        }
    } else {
        return (
            <>
                <Nav>
                    <NavLogo to="/">
                        <img src={logo} width={200} alt="logo" />
                    </NavLogo>
                    <NavbarContainer>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/About">About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/Contact">Contact</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NightModeIcon onClick={myButton}>
                                    {icon}
                                </NightModeIcon>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                    <NavBtn>
                        <NavLinks to="/SignIn">Sign In</NavLinks>
                        {/* <FaGripLinesVertical/> */}
                        <NavBtnLink to="/SignUp"> Sign Up </NavBtnLink>
                        {/* <NavBtnLink to = "/StudentProfile"> Student Profile </NavBtnLink> */}
                    </NavBtn>
                </Nav>
            </>
        );
    }
};

export default Navbar;
