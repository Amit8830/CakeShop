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
        πOnly in Bhiwandi π
        <hr />
β’ CAKES, CUPCAKE, BROWINES, CHOCOLATE MESSAGE BOX , DRY MOISTCAKE , CHOCOLATE HAMPER.. <hr />
β’ FOR ORDERS DO INFORM A DAY PRIOR π</h3>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
