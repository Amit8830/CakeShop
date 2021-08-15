import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';


export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 773px) {
    position: absolute;
    top: 10px;
    left: 15px;
    display: flex;
    font-size: x-large;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: Red;
  p {
    transform: translate(-135%, 100%);
    font-weight: bold;
    display:flex;
    
  @media screen and (max-width: 820px) {
    position: absolute;
    left:-37px;
    font:200px
    @media screen and (min-width: 527px)
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-70%, -15%);
  @media screen and (max-width: 820px) {
    position: absolute;
    display: flex;
    left: -73px;
    top: 4px;
  }
`;