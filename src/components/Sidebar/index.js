import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SideBtnWrap,
    SidebarRoute,
    SidebarLink    
} from './SidebarElements';

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon  onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
                about
            </SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>
                discover
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
                services
            </SidebarLink>
            <SidebarLink to="signup" onClick={toggle}>
                signup
            </SidebarLink>
            </SidebarMenu> 
            <SideBtnWrap>
                <SidebarRoute to="signin" onClick={toggle}>Sign In</SidebarRoute>     
            </SideBtnWrap>       
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar