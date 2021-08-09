import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Contact Detail</SidebarLink>
        <h3> Mahima Madke - 07219813475</h3>
        <h3>BAKEOLOGY 
        <hr />
        🎈Only in Bhiwandi 🎈
        <hr />
• CAKES, CUPCAKE, BROWINES, CHOCOLATE MESSAGE BOX , DRY MOISTCAKE , CHOCOLATE HAMPER.. <hr />
• FOR ORDERS DO INFORM A DAY PRIOR 😊</h3>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
