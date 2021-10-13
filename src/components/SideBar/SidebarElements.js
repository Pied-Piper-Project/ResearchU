import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 95%;
  height: 65%;
  background: #F5F6FA;
  box-shadow: 0 2px 10px rgba(35, 10, 58, 0.5);
  border-radius: 5rem;
  display: grid;
  align-items: center;
  margin: 0 auto;
  transform: translateY(5rem);
  left: 0;
  right: 0;
  // box-shadow: 0 0 4px rgba(0,0,0,.1);
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

  @media  screen and (min-width: 768px) {
    // top:0;
    // opacity:0;
    display: none;
  }
`

export const CloseIcon = styled(FaTimes)`
  color: #000;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`
export const SidebarWrapper = styled.div`
  color: #fff;
`
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 60px);
  text-align: center;
  @media  screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`
export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  &:hover {
    color: #6654C4;
    transition: 0.1s ease-in-out;
  }
`

export const NightModeIconRespo =  styled.div`
  color: #000;
  margin-top: 1.4rem;
  font-size: 1.5rem;
  // transform: translateX(1.2rem);
  cursor: pointer;
`


export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;

  
`
export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #fc6;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 2rem;
  outline:  none;
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