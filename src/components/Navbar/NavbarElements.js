import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const Nav = styled.nav`
  background-color: var(--container-color);
  height: 80px;
  display:flex;
  box-shadow: 0 1px 6px rgba(35, 10, 58, 0.3);

  align-items: center;
  font-size: 1rem;

  top:0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  width: 52%;

  justify-content: center;
`
export const NavLogo = styled(LinkR) `
  color:#000;
  width: 24%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  padding-left:1%;

`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  }
`
export const NavMenu = styled.ul`
  display:flex;
  justify-content: center;
  list-style: none;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
`
export const NavLinks = styled(LinkR)`
  color: #091b33;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71
  }

  transition: 0.2s ease-in-out;
  &:hover {
    color: #6654C4;
    transition: 0.1s ease-in-out;
  }

`

export const NightModeIcon =  styled.div`
  color: #000;
  margin-top: 1.9rem;
  margin-left: 1.3rem;
  margin-right: 1.3rem;
  cursor: pointer;
  display: flex;
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24%;
`
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #fc6;
  white-space: nowrap;
  padding: 10px 22px;
  color: #091b33;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #6654C4;
    color: #010606;
  }
`
